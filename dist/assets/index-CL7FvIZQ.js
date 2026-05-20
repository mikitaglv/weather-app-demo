(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const o={BASE_URL:"https://api.weatherapi.com/v1",ENDPOINT:"/current.json",KEY:"9be882adaf6843798b4120516262005"},d=async e=>{try{const t=await fetch(`${o.BASE_URL}${o.ENDPOINT}?key=${o.KEY}&q=${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return{success:!0,data:await t.json()}}catch(t){return{success:!1,error:t.message,status:t.status||"network_error"}}},l=e=>{const t=document.getElementById("weather-container"),r=e.current,i=e.location;t.innerHTML=`
    <div class="weather-card">
      <div class="location">
        <h2>${i.name}, ${i.country}</h2>
      </div>
      
      <div class="weather-info">
        <div class="temp">
          <span class="temp-value">${r.temp_c}°C</span>
        </div>
        
        <div class="condition">
          <img src="${r.condition.icon}" alt="${r.condition.text}" class="weather-icon" />
          <span class="condition-text">${r.condition.text}</span>
        </div>
        
        <div class="details">
          <div class="detail-item">
            <span class="detail-label">Humidity</span>
            <span class="detail-value">${r.humidity}%</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Wind Speed</span>
            <span class="detail-value">${r.wind_kph} km/h</span>
          </div>
        </div>
      </div>
    </div>
  `},a=e=>{const t=document.getElementById("weather-container"),r=e.includes("network")?"Failed to connect to weather service. Please check your internet connection.":e.includes("400")||e.includes("No matching location")?"City not found. Please check the spelling and try again.":"An error occurred while fetching weather data.";t.innerHTML=`
    <div class="error">
      <p>${r}</p>
    </div>
  `},u=()=>{const e=document.getElementById("weather-container");e.innerHTML='<div class="loading">Loading...</div>'},p=async e=>{e.preventDefault();const r=document.getElementById("city-input").value.trim();if(!r){a("Please enter a city name");return}u();const i=await d(r);i.success?l(i.data):a(i.error)},f=()=>{const e=document.querySelector("form");e&&e.addEventListener("submit",p),document.getElementById("city-input").focus()};document.addEventListener("DOMContentLoaded",f);
