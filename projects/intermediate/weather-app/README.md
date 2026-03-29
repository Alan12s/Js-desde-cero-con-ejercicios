# Weather App Project

A weather application that fetches real-time weather data from an API.

## Overview

Build a weather app that allows users to search for cities and view current weather conditions.

## Features

- Search for cities
- Display temperature (Celsius/Fahrenheit toggle)
- Show weather conditions (sunny, cloudy, rainy, etc.)
- Display humidity, wind speed, pressure
- 5-day forecast preview
- Loading states and error handling
- Recent searches history

## API

Use OpenWeatherMap API (free tier):
- Sign up at https://openweathermap.org/api
- Get a free API key

## Project Structure

```
weather-app/
├── README.md
├── index.html
├── styles.css
├── script.js
└── api.js (optional - separate API calls)
```

## Instructions

### Step 1: API Setup
1. Sign up for OpenWeatherMap API
2. Get your free API key
3. Test the API with fetch

### Step 2: HTML Structure
Create:
- Search input and button
- Weather display card
- Loading spinner
- Error message container
- Unit toggle (C/F)

### Step 3: CSS Styling
Style with:
- Weather-appropriate theming
- Responsive design
- Loading animations
- Error states

### Step 4: JavaScript Logic
Implement:
- City search
- Fetch weather data
- Parse and display data
- Unit conversion
- Error handling
- Loading states

## Starter Code

```javascript
const API_KEY = "your_api_key_here";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

async function fetchWeather(city) {
  // Use fetch to get weather data
}

async function fetchForecast(city) {
  // Use fetch to get forecast data
}

function displayWeather(data) {
  // Update DOM with weather info
}

function handleSearch(event) {
  // Get city and trigger fetch
}
```

## Bonus Challenges

1. Add geolocation support (detect user location)
2. Add automatic background images based on weather
3. Add forecast charts
4. Add save favorite cities feature
5. Add offline support with service worker

## Learning Outcomes

- Fetch API
- Async/await
- API integration
- Error handling
- Loading states
- DOM manipulation

---

**Difficulty**: Intermediate  
**Time Estimate**: 4-5 hours
