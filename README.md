<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/afd52f31-1c35-442c-8b5b-8099679ad9e9

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Docker (production)

This repo includes a multi-stage Docker build that:
- builds the Vite app to `dist/`
- serves it with an **unprivileged Nginx** container
- supports SPA routing (fallback to `index.html`)

Build & run locally:

```bash
docker build -t autoreg-pro:local .
docker run --rm -p 8080:8080 -e PORT=8080 autoreg-pro:local
```

Then open: http://localhost:8080

## Deploy to Render (Docker)

Create a **Web Service** on Render with runtime **Docker** and point it at this repo.
Render will set `PORT` automatically; Nginx is configured to listen on `${PORT}`.
