import { createSlice } from '@reduxjs/toolkit'

/**
 * Cart Configuration from Environment Variables
 * These values can be configured per environment (dev/staging/prod)
 */
const TAX_RATE = parseFloat(import.meta.env.VITE_TAX_RATE || '0.1')
const SHIPPING_THRESHOLD = parseFloat(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD || '50000')
const SHIPPING_COST = parseFloat(import.meta.env.VITE_SHIPPING_COST || '1000')

/**
 * Default cart state structure
 * All monetary values are stored in cents to avoid floating point issues
 */
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
}

/**
 * Retrieves cart state from localStorage
 * Falls back to default state if no cart exists
 * @returns {Object} Cart state object
 */
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

/**
 * Cart Redux Slice
 * Manages shopping cart state with localStorage persistence
 * Handles add, remove, edit items and calculates totals
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    /**
     * Adds item to cart or updates quantity if item already exists
     * @param {Object} state - Current cart state
     * @param {Object} action - Action payload containing product
     */
    addItem: (state, action) => {
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount
      cartSlice.caseReducers.calculateTotals(state)
    },
    /**
     * Clears entire cart and resets to default state
     * @param {Object} _state - Current cart state (unused)
     * @returns {Object} Default cart state
     */
    clearCart: (_state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },
    /**
     * Removes item from cart by cartID
     * @param {Object} state - Current cart state
     * @param {Object} action - Action payload containing cartID
     */
    removeItem: (state, action) => {
      const { cartID } = action.payload
      const product = state.cartItems.find((i) => i.cartID === cartID)
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)
      state.numItemsInCart -= product.amount
      state.cartTotal -= product.price * product.amount
      cartSlice.caseReducers.calculateTotals(state)
    },
    /**
     * Updates quantity of existing cart item
     * @param {Object} state - Current cart state
     * @param {Object} action - Action payload containing cartID and new amount
     */
    editItem: (state, action) => {
      const { cartID, amount } = action.payload
      const item = state.cartItems.find((i) => i.cartID == cartID)
      state.numItemsInCart += amount - item.amount
      state.cartTotal += item.price * (amount - item.amount)
      item.amount = amount
      cartSlice.caseReducers.calculateTotals(state)
    },
    /**
     * Calculates tax, shipping, and order total
     * Implements free shipping threshold logic
     * Persists updated state to localStorage
     * @param {Object} state - Current cart state
     */
    calculateTotals: (state) => {
      state.tax = Math.round(state.cartTotal * TAX_RATE)
      state.shipping = state.cartTotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
