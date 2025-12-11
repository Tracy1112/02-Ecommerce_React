import axios from 'axios'

/**
 * API Base URL from environment variables
 * Falls back to localhost for development if not set
 */
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'

/**
 * Axios instance configured for the application
 * Includes default timeout and headers
 */
export const customFetch = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Request Interceptor
 * Automatically adds JWT token to all API requests from localStorage
 * Handles token parsing errors gracefully
 */
customFetch.interceptors.request.use(
  (config) => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || 'null')
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`
      }
    } catch (error) {
      console.error('Error parsing user from localStorage:', error)
    }
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Response Interceptor
 * Handles authentication errors globally (401, 403)
 * Automatically redirects to login page on auth failure
 * Prevents redirect loops by checking current pathname
 */
customFetch.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('user')
      // Only redirect if we're not already on login page
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

/**
 * Formats price from cents to currency string
 * @param {number} price - Price in cents
 * @returns {string} Formatted price string (e.g., "$99.99")
 */
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

/**
 * Generates an array of option elements for quantity selection
 * @param {number} number - Maximum quantity to generate
 * @returns {Array} Array of React option elements
 */
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}

/**
 * Centralized API error handler
 * Provides user-friendly error messages based on error type
 * @param {Error} error - Axios error object
 * @returns {string} User-friendly error message
 */
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    return error.response.data?.error?.message || 'An error occurred'
  }
  if (error.request) {
    // Request made but no response received
    return 'Network error. Please check your connection.'
  }
  // Something else happened
  return error.message || 'An unexpected error occurred'
}
