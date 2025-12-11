# Nordic Nest E-commerce Platform

Modern headless e-commerce platform built with React 18, Redux Toolkit, and Strapi CMS.

**Live Demo:** [Deploy and add link here]

## Features

- Product catalog with filtering, sorting, and pagination
- Shopping cart with persistent storage
- User authentication and order management
- Responsive design, mobile-first approach
- Performance optimized (Lighthouse 95+)

## Tech Stack

- React 18.3
- Redux Toolkit (state management)
- React Query (server state)
- React Router v6 (routing)
- Strapi CMS (headless backend)
- Tailwind CSS + DaisyUI (styling)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/nordic-nest.git
cd nordic-nest

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.development

# Update .env.development with your API URL
VITE_API_URL=http://localhost:1337/api

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices (cart, user)
├── pages/          # Page components
├── utils/          # Utilities and API client
└── assets/         # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

Deployed on Vercel. See `DEPLOYMENT.md` for details.

## License

MIT

