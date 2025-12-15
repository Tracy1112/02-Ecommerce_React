# Furno E-commerce Platform

Modern headless e-commerce platform built with React 18, Redux Toolkit, and Strapi CMS.

**Live Demo:** [https://furno-studio.vercel.app/](https://furno-studio.vercel.app/)  
**Repository:** [https://github.com/Tracy1112/02-Ecommerce_React](https://github.com/Tracy1112/02-Ecommerce_React)

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
  - Accessible form components with ARIA labels
  - Keyboard navigation support

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
git clone https://github.com/Tracy1112/02-Ecommerce_React.git
cd 02-Ecommerce_React

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
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Redux slices (cart, user)
├── pages/          # Page components
├── utils/          # Utilities and API client
└── assets/         # Static assets
```

## Testing

The project uses Vitest for unit testing and React Testing Library for component testing.

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

Test coverage includes:
- Utility functions (formatPrice, handleApiError)
- Redux slices (cartSlice)
- Component accessibility

## Performance

Performance optimizations implemented:
- React Query caching (5-minute stale time)
- Image lazy loading
- Code splitting via Vite
- DNS prefetching for external resources

See `PERFORMANCE_AUDIT.md` for detailed Lighthouse scores and optimization recommendations.

## Accessibility

The project follows WCAG 2.1 guidelines:
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## CI/CD

Automated testing via GitHub Actions. Tests run on every push and pull request.

## Deployment

Deployed on Vercel. See `DEPLOYMENT.md` for details.

## License

MIT
