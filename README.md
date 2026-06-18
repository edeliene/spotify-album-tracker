# 🎧 Spotify Album Tracker

A React web application that allows users to search for artists using the Spotify Web API, browse their albums, and track what they are currently listening to. Users can save albums locally and view them later on a profile page.

---

## Overview

This project is a React-based web application that integrates with the Spotify Web API to allow users to search for artists and browse their albums. Users can click on albums to mark what they are currently listening to, and their selections are stored locally using browser storage.

The application is structured as a simple multi-page interface with a home page for searching and a profile page for viewing recently selected albums. It demonstrates core frontend concepts such as state management, API integration, routing, and persistent local storage.

The goal of this project is to explore how real-world applications interact with external APIs and manage user-driven state in a clean, component-based architecture.

---

## Features

- Search artists using Spotify API
- View albums by artist
- Mark albums as "currently listening to"
- Save data using localStorage
- Profile page to view saved albums
- Built with React Bootstrap

---

## Tech Stack

- React.js
- React Router
- React Bootstrap
- Spotify Web API
- JavaScript (ES6+)
- localStorage

---

## Environment Variables

This project uses the Spotify Web API. You will need to create a `.env` file in the project root:

REACT_APP_CLIENT_ID=your_spotify_client_id  
REACT_APP_CLIENT_SECRET=your_spotify_client_secret  

---

## Installation & Setup

git clone https://github.com/your-username/spotify-album-tracker.git  
cd spotify-album-tracker  
npm install  
npm start  

---

## How It Works

1. User searches for an artist
2. App fetches data from Spotify API
3. Albums are displayed
4. Clicking an album saves it as "currently listening"
5. Profile page shows saved albums

---

## Future Improvements

- Remove albums from list
- Better Spotify-style UI
- Authentication system
- Backend storage instead of localStorage

---

## Contributing

Contributions are welcome. Feel free to:

- Fork the repository
- Experiment with new features
- Improve existing functionality
- Submit pull requests
- Report bugs or suggest enhancements through GitHub Issues

---

## ⚠️ Disclaimer

This project uses the Spotify Web API for educational purposes only and is not affiliated with Spotify.

---
