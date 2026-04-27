# 🛕 Sri Venugopala Swamy Temple — Frontend

Next.js 14 (App Router) + TypeScript frontend

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── globals.css             # Global CSS variables & styles
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Temple page
│   ├── sevas/page.tsx          # Sevas & Booking page
│   ├── festivals/page.tsx      # Festivals calendar page
│   ├── gallery/page.tsx        # Photo Gallery page
│   └── contact/page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx              # Header + Navigation (with mobile menu)
│   ├── Footer.tsx              # Footer with links & info
│   └── BookingModal.tsx        # Seva booking popup modal
├── lib/
│   ├── api.ts                  # API service (fetch wrapper for backend)
│   └── constants.ts            # Temple constants, nav links, timings
└── types/
    └── index.ts                # TypeScript interfaces
```

---

## 🚀 Setup

### 1. Install
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start Backend First
Make sure the backend is running at `http://localhost:5000`

### 4. Start Development Server
```bash
npm run dev
```

Visit **http://localhost:3000**

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, daily timings, deities, quick links |
| About | `/about` | Temple history, tradition, significance |
| Sevas | `/sevas` | Browse & book sevas (connects to backend) |
| Festivals | `/festivals` | Upcoming & past festivals |
| Gallery | `/gallery` | Temple photo gallery |
| Contact | `/contact` | Contact form (connects to backend) |

---

## 🙏 Sri Venugopala Swamy Ki Jai!
