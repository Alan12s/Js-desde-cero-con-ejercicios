// =============================================================================
// SOLUTIONS - Fetch API
// =============================================================================

// Exercise 1: Basic Fetch
async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

// Exercise 2: POST Request
async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// Exercise 3: Error Handling
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error occurred');
    }
    throw error;
  }
}

// Exercise 4: Loading State
async function fetchWithLoading(url, loadingElement) {
  loadingElement.style.display = 'block';
  try {
    const data = await fetchData(url);
    loadingElement.style.display = 'none';
    return data;
  } catch (error) {
    loadingElement.style.display = 'none';
    throw error;
  }
}

// Exercise 5: Timeout
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    fetch(url, { ...options, signal: controller.signal })
      .then(resolve)
      .catch(reject)
      .finally(() => clearTimeout(timeoutId));
  });
}

// Exercise 6: Retry on Failure
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url).then(r => r.json());
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

// Exercise 7: Pagination
async function fetchAllPages(baseUrl) {
  let page = 1;
  let allData = [];
  let hasMore = true;
  
  while (hasMore) {
    const response = await fetch(`${baseUrl}?page=${page}`);
    const data = await response.json();
    
    if (data.length === 0) {
      hasMore = false;
    } else {
      allData = [...allData, ...data];
      page++;
    }
  }
  
  return allData;
}

// Exercise 8: User Card
class UserCard {
  constructor(container) {
    this.container = container;
    this.init();
  }
  
  async init() {
    this.container.innerHTML = '<p>Loading...</p>';
    await this.loadUser();
  }
  
  async loadUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const { results } = await response.json();
      const user = results[0];
      
      this.container.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <button>New User</button>
      `;
      
      this.container.querySelector('button').addEventListener('click', () => this.loadUser());
    } catch (error) {
      this.container.innerHTML = '<p>Error loading user</p>';
    }
  }
}
