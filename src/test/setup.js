import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Mock localStorage for tests
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

// Set up localStorage mock globally
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// Also set up for global scope (for Node.js environment)
if (typeof global !== 'undefined') {
  Object.defineProperty(global, 'localStorage', {
    value: localStorageMock,
    writable: true,
  })
}

// Cleanup after each test
afterEach(() => {
  cleanup()
  localStorageMock.clear()
})

