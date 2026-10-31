# VOID — Ideas with gravity

> Independent digital product team building websites, apps, systems and AI-powered tools.

**Live Website:** [https://ykiiiimm.github.io/voidd/](https://ykiiiimm.github.io/voidd/)

---

## Overview

VOID is an editorial digital product studio website built with modern web technologies:
- **Hash-based client-side routing**: Home, About, Capabilities, Selected Builds, Team, Journal, Careers, Contact, and Team Console.
- **Dynamic case studies**: Tailored product logic, design challenges, and execution details for each build.
- **Editorial field notes**: Thoughtful studio process, AI engineering perspective, and build logs.
- **Secure team console**: Administrator workspace protected with SHA-256 cryptographic verification.
- **GitHub Pages ready**: Zero-configuration static hosting deployment via GitHub Actions.

## Run Locally

```bash
# Start local development server
npm run dev
# or
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The website is configured for automated deployment to **GitHub Pages** via the included workflow in `.github/workflows/pages.yml`.

Every push to the `main` branch automatically builds and updates the live site at:
**[https://ykiiiimm.github.io/voidd/](https://ykiiiimm.github.io/voidd/)**
