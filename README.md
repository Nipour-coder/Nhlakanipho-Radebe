# Nhlakanipho Radebe — Portfolio

A modern, responsive portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 🎯 **Lucide React** for icons
- 📱 Fully responsive (mobile, tablet, desktop)
- 🤖 AI ChatBot widget
- 💬 Direct WhatsApp CTA (`https://wa.me/27733310401`)
- 🔒 Strict TypeScript with full type coverage

## Sections

- **Hero** — Animated intro with availability badge
- **Skills** — Categorized skills with animated progress bars
- **Projects** — Featured work with tech stacks
- **Experience** — Timeline-style professional history
- **AIChatBot** — Floating conversational widget
- **Contact** — Direct WhatsApp contact button

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AIChatBot.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── lib/
│   ├── data.ts
│   └── types.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

- **Personal info**: Edit `lib/data.ts` and `app/layout.tsx` (metadata)
- **WhatsApp number**: Change `WHATSAPP_URL` in `components/Contact.tsx`
- **AI responses**: Replace the simulated `generateResponse()` in `components/AIChatBot.tsx` with a real API call to `/api/chat`

## License

MIT
