import { describe, it, expect } from 'vitest'
import { handleApiError } from './index'

describe('handleApiError', () => {
  it('should return server error message when response exists', () => {
    const error = {
      response: {
        data: {
          error: {
            message: 'Server error occurred',
          },
        },
      },
    }

    expect(handleApiError(error)).toBe('Server error occurred')
  })

  it('should return default message when response has no error message', () => {
    const error = {
      response: {},
    }

    expect(handleApiError(error)).toBe('An error occurred')
  })

  it('should return network error message when request fails', () => {
    const error = {
      request: {},
    }

    expect(handleApiError(error)).toBe('Network error. Please check your connection.')
  })

  it('should return error message when available', () => {
    const error = {
      message: 'Custom error message',
    }

    expect(handleApiError(error)).toBe('Custom error message')
  })

  it('should return default message for unexpected errors', () => {
    const error = {}

    expect(handleApiError(error)).toBe('An unexpected error occurred')
  })
})

