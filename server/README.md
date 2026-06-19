# Server proxy for Smart-Scannert-Recycling

This is a minimal Node/Express scaffold that will act as a proxy to a Vision API (Google Vision / Azure Computer Vision / AWS Rekognition).

What it includes
- POST /analyze: accepts an image upload (form field "image") and returns a mocked analysis response.
- GET /health: basic health check.

How to run locally
1. cd server
2. npm install
3. npm start

How to wire a real Vision API (notes)
- Do NOT commit API keys. Use environment variables (e.g., VISION_API_KEY) or a secrets manager.
- Replace the mockLabels logic in POST /analyze with a call to the chosen Vision API. Save the file path (req.file.path) or buffer and forward it.
- Parse the Vision API response and map labels to recycling categories before returning to the client.
