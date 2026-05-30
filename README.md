# 🎓 Astra Prime

> **Astra Prime** is a high-end, modern digital platform designed for a premium hybrid coaching institute. It offers concept-driven course catalogs, real-time results dashboards, faculty bios, interactive video showcase players, and direct mail-integrated registration systems.

---

## 🚀 Badges & Technologies

![Next.js](https://img.shields.io/badge/next.js-v15.0.4-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-v19.0.0-%23202327.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3.4.17-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-v5.7.2-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-v3.13.0-green.svg?style=for-the-badge&logo=greensock&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.23.24-%23FF007F.svg?style=for-the-badge&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Smooth_Scroll-Lenis-orange?style=for-the-badge)

---

## ✨ Features

- **📽️ Energetic Video Hero:** Loops an energetic classroom stock video background coupled with title animation reveals and quick badges.
- **📈 GSAP-driven Stats Counters:** Real-time counters showing enrolled learners, master mentors, successful qualifiers, and training hours as they scroll into view.
- **📚 Curated Course Catalogs:** Displays interactive course cards for schools, competitive exams, language blocks, and programming bootcamps.
- **👨‍🏫 Mentors & Faculty Showcases:** Grid layouts detailing coaches' experiences, qualifications, and specialties with smooth slide animations.
- **🎥 Video Demo Showcase:** Integrates YouTube video players via `react-player` to display demo classes and motivational previews directly.
- **📝 Admission Request Builder:** Full form capturing student names, grades, preferred batches, and timings, packaging details into a direct email request.
- **📖 Material Preview Modals:** Lists premium revision notes, formula decks, and mock test packages with quick-preview options.
- **🌗 Theme Toggle & Smooth Scroll:** Integrated next-themes toggle for switching between dark/light layout states, backed by Lenis inertial scrolling.

---

## 🛠️ Tech Stack & Key Libraries

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 15 (App Router)](https://nextjs.org/) | Layout orchestration, SEO optimization, and fast loading. |
| **Library** | [React 19](https://react.dev/) | State-driven modular components. |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) & `tailwindcss-animate` | Deep navy styling configuration and responsive utility grids. |
| **Animations** | [GSAP (GreenSock)](https://greensock.com/) & `ScrollTrigger` | Frame-by-frame stats counters and viewport entry animations. |
| **Transitions** | [Framer Motion](https://www.framer.com/motion/) | Responsive navigation menus, dropdowns, and card movement. |
| **Scroller** | [Lenis](https://lenis.darkroom.engineering/) | Inertial smooth scrolling for desktop layouts. |
| **UI Components** | [Radix UI primitives](https://www.radix-ui.com/) | Accessible accordions, selects, dialog templates, and toggle switches. |
| **Sliders** | [Swiper](https://swiperjs.com/) | Testimonial review cards slide show. |
| **Media** | [React Player](https://cookpete.com/react-player/) | YouTube streaming video integration. |

---

## 📂 Project Structure

```text
coching/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Core color maps, custom school layout textures
│   ├── layout.tsx        # Layout template configuring metadata
│   └── page.tsx          # Page entry point rendering <HomePage />
├── components/           # Custom React Components
│   ├── ui/               # Radix UI primitives (Accordion, Dialog, Select, Switch)
│   ├── layout/           # Shared layout containers (Header, Footer)
│   ├── sections/         # Section layout chunks
│   └── home-page.tsx     # Orchestration layout composing all landing sections
├── data/                 # Datasets
│   └── site.ts           # Courses specs, teachers data, FAQ maps, stats
├── hooks/                # Custom React Hooks
│   ├── use-lenis.ts      # Lenis hook
│   └── use-mounted.ts    # Server/client mounting checks hook
├── lib/                  # Layout tools
│   └── utils.ts          # Conditional style toggle utilities
└── public/               # Static assets & public images
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version `18+` recommended).

### Installation

Clone the repository and install all dependencies:

```bash
# Install dependencies
npm install
```

### Running Locally

To spin up the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience Astra Prime.

### Build and Production

To build the application for production:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```
