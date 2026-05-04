// DeutschDaily B2 — minimal Express server.
// Serves the static frontend in /public and the curated B2 dictionary at /api/words.

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load the curated B2 dictionary once at startup (the file is small).
const wordsPath = path.join(__dirname, 'data', 'words.json');
const words = JSON.parse(fs.readFileSync(wordsPath, 'utf8'));

// API endpoint: return the full dictionary as JSON.
app.get('/api/words', (req, res) => {
  res.json(words);
});

// Serve everything in /public as static files (index.html, style.css, script.js).
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`DeutschDaily B2 running on http://localhost:${PORT}`);
});
