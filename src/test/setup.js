import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Mock URL and URLSearchParams to avoid webidl-conversions errors
global.URL = class URL {
  constructor(url, base) {
    if (typeof url === 'string') {
      this.href = url
    }
  }
  toString() {
    return this.href
  }
}

global.URLSearchParams = class URLSearchParams {
  constructor(init) {
    this.params = new Map()
    if (init) {
      if (typeof init === 'string') {
        init.split('&').forEach((pair) => {
          const [key, value] = pair.split('=')
          this.params.set(key, value)
        })
      }
    }
  }
  get(name) {
    return this.params.get(name) || null
  }
  set(name, value) {
    this.params.set(name, value)
  }
  has(name) {
    return this.params.has(name)
  }
  delete(name) {
    this.params.delete(name)
  }
}

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
if (typeof globalThis !== 'undefined') {
  Object.defineProperty(globalThis, 'localStorage', {
    value: localStorageMock,
    writable: true,
  })
}

// Cleanup after each test
afterEach(() => {
  cleanup()
  localStorageMock.clear()
})

