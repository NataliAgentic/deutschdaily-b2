# DeutschDaily B2

A focused German learning web app for upper-intermediate (B2) learners.
Five new words every day plus an instant English-to-German lookup, with
favorites saved in your browser.

Built with **Node.js + Express** and vanilla HTML/CSS/JS — no build step,
no frameworks, no external translation API. The dictionary is a curated
JSON file you can extend at any time.

## Run locally

You need Node.js 18 or newer.

```bash
npm install
npm start
```

Then open <http://localhost:3000>.

## Project structure

```
deutschdaily-b2/
├── package.json          # Dependencies + start script
├── server.js             # Express server (static files + /api/words)
├── data/
│   └── words.json        # Curated B2 vocabulary (~120 entries)
├── public/
│   ├── index.html        # The single page UI
│   ├── style.css         # Bold dark theme
│   └── script.js         # Daily 5, search, favorites
└── README.md
```

## Add or edit vocabulary

All words live in `data/words.json`. Each entry looks like:

```json
{
  "german": "Auseinandersetzung",
  "article": "die",
  "english": "dispute, in-depth examination",
  "partOfSpeech": "noun",
  "example": "Die Auseinandersetzung mit dem Thema war lehrreich.",
  "exampleTranslation": "Engaging with the topic was instructive."
}
```

`article` is `null` for verbs, adjectives, and phrases.
After editing, restart the server (`npm start`) — that's it.

## Deploy on GitHub + Render (free)

1. Push this folder to a new GitHub repository.
2. Create a free account at <https://render.com> and connect GitHub.
3. New → **Web Service** → pick your repo.
4. Settings:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
5. Click **Create Web Service**. Render gives you a public URL like
   `https://deutschdaily-b2.onrender.com`.
6. Future `git push`es to your main branch redeploy automatically.

The free tier sleeps after 15 minutes of inactivity (cold start ~30 s
on first visit). Fine for a personal project.

## How "Today's 5" works

The five words shown today are picked deterministically from a date-seeded
shuffle, so everyone learning today sees the same set, and tomorrow's set
is different. The **Shuffle 5 more** button generates an additional random
set of five words from the full dictionary for extra practice.
