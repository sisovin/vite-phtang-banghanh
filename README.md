# PhtangBanghanh — AI‑Powered Presentation Generator

Create professional presentations in minutes. PhtangBanghanh is an AI-driven platform that generates slide content from your inputs and offers a variety of customizable, modern templates.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-TBD-inactive.svg)](#license)

---

## Table of Contents

- Overview
- Features
- Screenshots
- Tech Stack
- Architecture
- Getting Started
  - Prerequisites
  - Installation
  - Environment variables
  - Run locally
  - Scripts
- Usage Guide
- Configuration & Customization
- Security & Authentication
- Accessibility
- Deployment
- Roadmap
- Contributing
- License

---

## Overview

PhtangBanghanh helps you go from a topic idea to a polished slide deck fast. Provide your topic, keywords, and preferred tone, then pick a template category—Business, Marketing, SWOT, Timeline, Process—and let the AI draft slide outlines and content. Customize, save, and present across devices with a responsive, modern UI built with shadcn/ui and Tailwind CSS.

---

## Features

- Template Gallery
  - Browse categories: Business, Marketing, SWOT, Timeline, Process
  - Visual previews and recommended use cases per template
- AI Content Generator
  - Input: topic, keywords, preferred tone
  - Output: AI-suggested content per slide (headings, bullets, notes)
  - Regenerate, refine, or expand sections inline
- User Dashboard
  - Manage saved presentations
  - Access recently used templates
  - Track creation history and last edited time
- Responsive Design
  - Clean, modern UI with shadcn/ui
  - Fully responsive Tailwind styling for desktop and mobile
- Authentication System
  - Email/password login
  - JWT session management for secure access to saved decks

---

## Screenshots

Add your screenshots or GIFs here.

- Template Gallery
- AI Generation Flow
- Editor View
- Dashboard

```
assets/
  screenshots/
    gallery.png
    generate.png
    editor.png
    dashboard.png
```

---

## Tech Stack

- Frontend: React + TypeScript, Vite
- UI: Tailwind CSS, shadcn/ui
- State/Utilities: React hooks and modern TypeScript patterns
- Auth: JWT session management (via backend API)
- AI: Backend-powered content generation endpoint (e.g., OpenAI or compatible provider through your server)

Note: This repository focuses on the frontend. For secure AI and auth flows, you should proxy via a backend (server or serverless). Avoid exposing provider API keys in the browser.

---

## Architecture

High-level flow:

1. User selects a template in the Template Gallery
2. User enters topic, keywords, tone → submits AI generation request
3. Frontend calls backend AI endpoint to generate slide content
4. User edits, reorders, and styles slides with template controls
5. Authenticated users save to their account; dashboard lists recent and saved decks

Recommended boundaries:

- Frontend (this repo)
  - UI, routing, client validation, optimistic updates
  - Consumes authenticated JSON APIs via `Authorization` cookies or headers
- Backend (external/your service)
  - Auth endpoints: login, register, refresh
  - AI generation endpoint: content creation, rate limiting
  - Storage: presentations, templates, user profiles

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Package manager: pnpm, npm, or yarn

### Installation

```bash
# clone the repo
git clone https://github.com/sisovin/vite-phtang-banghanh.git
cd vite-phtang-banghanh

# install deps (choose one)
pnpm install
# or
npm install
# or
yarn install
```

### Environment variables

Create a `.env.local` in the repo root for Vite:

```
# Public base URL for your backend API (proxied domain recommended)
VITE_API_BASE_URL=https://your-backend.example.com

# Feature flags (optional)
VITE_FEATURE_AI_GENERATION=true
VITE_FEATURE_TEMPLATE_GALLERY=true
```

Backend-only secrets (such as AI provider keys) must NOT be placed in Vite env files. Store them on your server (.env) and expose only the necessary endpoints to the frontend.

### Run locally

```bash
# start dev server with HMR
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open http://localhost:5173

### Scripts

```bash
# start dev server
pnpm dev

# production build
pnpm build

# preview production build locally
pnpm preview

# lint code
pnpm lint

# format code (if configured)
pnpm format
```

---

## Usage Guide

1. Sign in or create an account
2. Open the Template Gallery
3. Choose a category (Business, Marketing, SWOT, Timeline, Process)
4. Enter your topic, keywords, and choose a tone (e.g., Formal, Persuasive, Friendly)
5. Generate content; refine by regenerating sections or adding speaker notes
6. Save your presentation to your dashboard
7. Export, share, or present directly (depending on your deployment/integrations)

---

## Configuration & Customization

- Tailwind theme: update tokens in `tailwind.config.js` (colors, spacing, fonts)
- shadcn/ui components: generate or update components following shadcn/ui docs
- Templates:
  - Add or edit template JSON/configs and preview assets
  - Map template controls (colors, layout variants) to Tailwind utility classes
- API endpoints:
  - Set `VITE_API_BASE_URL`
  - Expected endpoints (example; adapt to your backend):
    - `POST /api/auth/login`
    - `POST /api/auth/register`
    - `POST /api/auth/refresh`
    - `GET  /api/templates`
    - `POST /api/ai/generate` (body: topic, keywords, tone)
    - `GET  /api/presentations`
    - `POST /api/presentations`
    - `PATCH /api/presentations/:id`
    - `DELETE /api/presentations/:id`

---

## Security & Authentication

- Use HTTP-only, secure cookies for JWTs to mitigate XSS token theft
- Implement refresh token rotation and short-lived access tokens
- Add CSRF protection for state-changing requests if you use cookies
- Rate-limit AI endpoints and add abuse detection
- Validate and sanitize user inputs on the server

The frontend expects a standard auth flow:
- Login/register → set session cookie or return JWT
- Include credentials/cookies for subsequent API calls
- Handle 401/403 by redirecting to login and/or refreshing session

---

## Accessibility

- Keyboard-friendly navigation and focus states
- Sufficient color contrast, prefers-reduced-motion support
- Semantic HTML and ARIA where appropriate
- Test with screen readers and responsive zoom levels

---

## Deployment

Common targets:
- Vercel, Netlify, Cloudflare Pages (static hosting)
- Backend hosted separately (Vercel/Netlify Functions, Fly.io, Render, AWS, etc.)

Steps:
1. Configure environment variables in your hosting provider (VITE_API_BASE_URL)
2. Build the app: `pnpm build`
3. Deploy the `dist/` output
4. Ensure backend CORS and cookies/security configs allow your frontend origin

---

## Roadmap

- Export to PDF/PPTX
- Collaborative editing and comments
- Presenter notes mode
- More template categories and themes
- Localization (i18n)
- Template marketplace and sharing

---

## Contributing

Contributions are welcome!

- Fork the repo and create a feature branch
- Ensure lint passes and write tests where appropriate
- Open a pull request with a clear description and screenshots if UI changes

---

## License

TBD — choose and add a license that fits your needs (e.g., MIT, Apache-2.0). Update this section once a LICENSE file is added.

---

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)