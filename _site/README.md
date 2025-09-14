# Agentic Design Patterns — Vercel Starter

A minimal **Next.js (App Router) + Tailwind** site to host your book, chapters, and a downloadable PDF. Perfect for **Vercel**.

## ✨ Features
- Home page linking to your **Introduction.pdf** and **Chapters**
- Chapter stubs for common patterns under `/app/patterns/[slug]/page.tsx`
- Auto-deploys on Vercel from GitHub
- Easy theming via `styles/globals.css`

## 🚀 Quick Start
```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
# open http://localhost:3000

# 3) Edit content
# - Replace public/Introduction.pdf with your latest export
# - Add/modify chapter pages under /app/patterns/[slug]/page.tsx
# - Or create new routes under /app/

# 4) Push to GitHub and import the repo into Vercel
```

## 📦 Project Structure
```
app/
  page.tsx                # Home
  layout.tsx              # Global layout
  chapters/page.tsx       # List of chapters
  patterns/[slug]/page.tsx# Chapter template pages
public/
  Introduction.pdf        # Your intro PDF (replace anytime)
styles/
  globals.css             # Tailwind + theme
```

## 🌐 Deploying to Vercel
1. Create a new GitHub repo and push this folder.
2. Visit https://vercel.com → **New Project** → Import your GitHub repo.
3. Accept defaults; Vercel will detect Next.js automatically.
4. On success, your site is live at `https://<project>.vercel.app`.
5. (Optional) Add a custom domain in Vercel's dashboard.

## 🧩 Adding Interactive Demos
- Link to Colab/Kaggle notebooks from chapters.
- Or add `/app/demos/*` with embedded components.
- You can also deploy Gradio/Streamlit on Hugging Face Spaces and link from here.

## 📝 Notes
- If you keep everything public, it’s a great open resource.
- If you want a paywall, consider pairing this site with Leanpub/Gumroad for sales.
```

