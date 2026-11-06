# Siddarth Mohan — Cinematic Filmmaker & Video Editor Portfolio

A production-ready, minimalist, and cinematic video portfolio website built for **Siddarth Mohan**, inspired by the design language, typography, and browsing experience of [brianyebtrsi.com](https://brianyebtrsi.com/).

---

## ✨ Features

- **Cinematic & Minimalist Visual Identity**:
  - Deep dark charcoal & true black palette (`#070707`)
  - Subtle analog film-grain texture overlay
  - Editorial typography pairing Grotesque sans-serif with high-precision monospaced metadata
  - Hairline dividers and structured 2-column project information
  - Live Indian Standard Time (IST) studio clock ticker

- **Direct In-Page Video Playback (Google Drive Integration)**:
  - 100% in-page video playback — visitors never leave the portfolio
  - Google Drive videos load directly via responsive 16:9 preview iframes
  - **Lazy Loading**: Iframes are never mounted until the visitor clicks a thumbnail, ensuring instant initial page loads
  - **Single Active Video Policy**: Playing any video automatically halts and unmounts any previously playing video
  - **Clean Close Experience**: Prominent `[CLOSE ESC]` button and keyboard `Escape` shortcut instantly unmount the iframe, stopping all audio/video playback and restoring the thumbnail
  - Fullscreen playback enabled directly inside the embedded player

- **Centralized Configuration**:
  - All project titles, thumbnails, Google Drive IDs, roles, categories, descriptions, education, software stack, and contact links are managed in a single file: `src/data/portfolioData.js`

- **Education & Credentials**:
  - `Chitkara Design School (2025–2029)`
  - `Swami Vivekanand Public School (Graduated 2024)`

---

## 🎬 Project Showcase & Drive URLs

| # | Project Title | Year | Category | Thumbnail | Embed Link |
|---|---------------|------|----------|-----------|------------|
| 1 | **PSP Spec Ad** | 2025 | Spec Commercial | `/thumbnails/psp-spec-ad.jpg` | [Preview](https://drive.google.com/file/d/1RvQrl3NK1TKEs98y9mal5JV5t-PORTJ2/preview) |
| 2 | **Showreel 2025–26** | 2025–2026 | Showreel | `/thumbnails/showreel-2025-26.png` | [Preview](https://drive.google.com/file/d/1piSHy_AxPPvFcskPrgz0IUZmGgbTGptZ/preview) |
| 3 | **Spider Noir** | 2025 | Narrative Short | `/thumbnails/spider-noir.png` | [Preview](https://drive.google.com/file/d/1PwlJukxgLqN-vkPkrNi5eoHXEMfGP66U/preview) |
| 4 | **Nothing Spec Ad** | 2025 | Brand Commercial | `/thumbnails/nothing-spec-ad.png` | [Preview](https://drive.google.com/file/d/177hu5h1ZoYqXAD_vDFq1NOBU9LOuy3pG/preview) |

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk, Space Mono, Inter (Google Fonts)

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist` folder.

---

## 📝 Updating Projects or Info

Open `src/data/portfolioData.js`:

```javascript
// Example: Add or edit a project
{
  id: "your-project-id",
  title: "Your Project Title",
  year: "2026",
  category: "Spec Commercial",
  client: "Client / Spec Brand",
  role: "Direction · Editing · Sound Design",
  duration: "1:00",
  aspectRatio: "16/9",
  description: "Project narrative description here...",
  tags: ["Commercial", "3D", "Sound Design"],
  thumbnail: "/thumbnails/your-image.jpg",
  driveUrl: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
  embedUrl: "https://drive.google.com/file/d/FILE_ID/preview",
}
```

---

## ☁️ Deploy to Vercel (Free Tier)

This project has zero backend dependencies and deploys directly to Vercel:

1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**.
