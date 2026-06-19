const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

// POST /analyze — accepts an image upload and returns a mock parsed response
app.post('/analyze', upload.single('image'), async (req, res) => {
  // In a real implementation we would forward the file to the Vision API here.
  // For now return a mock response mapping labels to recycling categories.

  const mockLabels = [
    { name: 'bottle', score: 0.92 },
    { name: 'plastic', score: 0.88 },
    { name: 'container', score: 0.74 }
  ];

  const categoryMap = {
    plastic: 'Plastic (PET)',
    bottle: 'Plastic (PET)',
    glass: 'Glass',
    paper: 'Paper',
    cardboard: 'Paper',
    metal: 'Metal',
    can: 'Metal',
  };

  // Find the highest scoring mapped category
  let category = 'Unknown';
  let bestScore = 0;
  for (const label of mockLabels) {
    const name = label.name.toLowerCase();
    if (categoryMap[name] && label.score > bestScore) {
      category = categoryMap[name];
      bestScore = label.score;
    }
  }

  res.json({
    labels: mockLabels,
    category,
    confidence: bestScore,
    info: 'This is a mocked response from the local /server prototype. Replace with real Vision API integration.'
  });
});

// Basic health route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
