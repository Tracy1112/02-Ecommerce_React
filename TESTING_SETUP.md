# 🧪 Testing Setup Guide

This guide explains how to set up and run tests for the Furno E-commerce platform.

## 📦 **Installation**

Due to npm permissions, you may need to fix cache permissions first:

```bash
# Fix npm permissions (if needed)
sudo chown -R $(whoami) ~/.npm

# Install test dependencies
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/ui
```

## 🏗️ **Test Framework**

- **Vitest** - Fast unit test runner (Vite-native)
- **React Testing Library** - Component testing
- **jsdom** - DOM environment for tests

## 📁 **Test Structure**

```
src/
├── test/
│   └── setup.js              # Test configuration
├── utils/
│   ├── formatPrice.test.js   # Utility function tests
│   └── handleApiError.test.js
├── features/
│   └── cart/
│       └── cartSlice.test.js # Redux slice tests
└── components/
    └── [Component].test.jsx  # Component tests (to be added)
```

## 🚀 **Running Tests**

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test formatPrice.test.js
```

## ✅ **Current Test Coverage**

### Utility Functions
- ✅ `formatPrice` - Currency formatting (AUD)
- ✅ `handleApiError` - Error message handling

### Redux Slices
- ✅ `cartSlice` - Cart state management
  - Add item
  - Remove item
  - Edit item quantity
  - Clear cart
  - Calculate totals

### Components
- ⚠️ Component tests (to be added)

## 📝 **Writing Tests**

### Example: Utility Function Test

```javascript
import { describe, it, expect } from 'vitest'
import { formatPrice } from './index'

describe('formatPrice', () => {
  it('should format price in cents to AUD currency string', () => {
    expect(formatPrice(9999)).toMatch(/A\$99\.99|99\.99/)
  })
})
```

### Example: Redux Slice Test

```javascript
import { describe, it, expect, beforeEach } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { addItem } from './cartSlice'

describe('cartSlice', () => {
  let store

  beforeEach(() => {
    store = configureStore({
      reducer: { cartState: cartReducer },
    })
  })

  it('should add item to cart', () => {
    const product = {
      cartID: '1',
      price: 10000,
      amount: 1,
    }

    store.dispatch(addItem({ product }))
    const state = store.getState().cartState

    expect(state.cartItems).toHaveLength(1)
  })
})
```

### Example: Component Test

```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FormInput from './FormInput'

describe('FormInput', () => {
  it('should render with label', () => {
    render(<FormInput label="Email" name="email" />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('should have proper ARIA attributes', () => {
    render(<FormInput label="Email" name="email" required />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveAttribute('aria-required', 'true')
  })
})
```

## 🎯 **Test Coverage Goals**

- **Current:** ~30% (utility functions + cart slice)
- **Target:** 60%+ (core business logic)
- **Stretch Goal:** 80%+ (all critical paths)

## 📚 **Resources**

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

**Last Updated:** 2024-12-11

