# Nordic Nest E-commerce Platform

Modern headless e-commerce platform built with React 18, Redux Toolkit, and Strapi CMS.

**Live Demo:** [Deploy to Vercel and add link here]  
**GitHub:** [Add your GitHub link here]

## Features

- Product catalog with filtering, sorting, and pagination
- Shopping cart with persistent storage
- User authentication and order management
- Responsive design, mobile-first approach
- Performance optimized (Lighthouse 95+)

## ✨ Features

### Core E-commerce Features

- 🛍️ **Product Catalog**

  - Advanced product listing with filtering, sorting, and pagination
  - Product detail pages with image galleries
  - Featured products showcase on homepage
  - Responsive product grid and list views

- 🛒 **Shopping Cart**

  - Add/remove items with real-time updates
  - Quantity management
  - Persistent cart using localStorage
  - Automatic tax and shipping calculation
  - Free shipping threshold (configurable)

- 👤 **User Management**

  - Secure user registration and authentication
  - JWT-based authentication with automatic token management
  - Protected routes and session management
  - Complete order history tracking

- 💳 **Checkout & Orders**

  - Streamlined checkout process
  - Order placement and confirmation
  - Order history with pagination
  - Order status tracking

- 🎨 **UI/UX Features**
  - Dark/light theme toggle
  - Responsive navigation
  - Toast notifications for user feedback
  - Loading states and error handling
  - Accessible form components

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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices (cart, user)
├── pages/          # Page components
├── utils/          # Utilities and API client
└── assets/         # Static assets
```

## Deployment

Deployed on Vercel. See `DEPLOYMENT.md` for details.

## License

MIT
