# Smart-Scanner-Recycling

Cross-platform recycling helper app using AI image recognition.

This repository now has a minimal React Native (Expo) scaffold with a placeholder camera screen, a stubbed image-recognition flow, and a Random Joke Generator screen that fetches jokes from the Official Joke API.

Getting started

1. Install Expo CLI if you don't have it: `npm install -g expo-cli` or follow https://expo.dev
2. Install dependencies: `npm install`
3. Run the app: `npm start` (then open on simulator or Expo Go on your phone)

What I added

- App.js — app entry with simple tab-like buttons to switch between Camera and Jokes.
- src/screens/CameraScreen.js — camera UI and placeholder recognition (existing).
- src/screens/JokeScreen.js — random joke generator using Official Joke API.

Joke feature

- Opens a "Jokes" screen that fetches a random joke from https://official-joke-api.appspot.com/random_joke and shows the setup and punchline.
- Press "New Joke" to fetch another.

Next steps I can do

- Integrate a real image-recognition provider (Google Vision / Azure / custom TF Lite)
- Add UI polish and result help text
- Add persistent history and suggestions for recycling

If you want me to change the joke API provider or add caching/history, tell me and I will implement it.
