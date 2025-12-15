import { describe, it, expect, beforeEach } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { addItem, removeItem, editItem, clearCart } from './cartSlice'

describe('cartSlice', () => {
  let store

  beforeEach(() => {
    // Clear localStorage before each test
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.clear()
    }
    store = configureStore({
      reducer: {
        cartState: cartReducer,
      },
    })
  })

  describe('addItem', () => {
    it('should add a new item to empty cart', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000, // $100.00 in cents
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      const state = store.getState().cartState

      expect(state.cartItems).toHaveLength(1)
      expect(state.cartItems[0]).toMatchObject(product)
      expect(state.numItemsInCart).toBe(1)
      expect(state.cartTotal).toBe(10000)
    })

    it('should update quantity when adding existing item', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000,
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      store.dispatch(addItem({ product }))
      const state = store.getState().cartState

      expect(state.cartItems).toHaveLength(1)
      expect(state.cartItems[0].amount).toBe(2)
      expect(state.numItemsInCart).toBe(2)
      expect(state.cartTotal).toBe(20000)
    })

    it('should calculate totals including tax and shipping', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000,
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      const state = store.getState().cartState

      expect(state.tax).toBeGreaterThan(0)
      expect(state.shipping).toBeGreaterThanOrEqual(0)
      expect(state.orderTotal).toBe(state.cartTotal + state.shipping + state.tax)
    })
  })

  describe('removeItem', () => {
    it('should remove item from cart', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000,
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      store.dispatch(removeItem({ cartID: '1' }))
      const state = store.getState().cartState

      expect(state.cartItems).toHaveLength(0)
      expect(state.numItemsInCart).toBe(0)
      expect(state.cartTotal).toBe(0)
    })
  })

  describe('editItem', () => {
    it('should update item quantity', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000,
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      store.dispatch(editItem({ cartID: '1', amount: 3 }))
      const state = store.getState().cartState

      expect(state.cartItems[0].amount).toBe(3)
      expect(state.numItemsInCart).toBe(3)
      expect(state.cartTotal).toBe(30000)
    })
  })

  describe('clearCart', () => {
    it('should clear all items and reset to default state', () => {
      const product = {
        cartID: '1',
        title: 'Test Product',
        price: 10000,
        amount: 1,
      }

      store.dispatch(addItem({ product }))
      store.dispatch(clearCart())
      const state = store.getState().cartState

      expect(state.cartItems).toHaveLength(0)
      expect(state.numItemsInCart).toBe(0)
      expect(state.cartTotal).toBe(0)
      expect(state.tax).toBe(0)
      expect(state.shipping).toBe(0)
      expect(state.orderTotal).toBe(0)
    })
  })
})

