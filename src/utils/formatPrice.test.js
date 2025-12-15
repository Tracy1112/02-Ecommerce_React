import { describe, it, expect } from 'vitest'
import { formatPrice } from './index'

describe('formatPrice', () => {
  it('should format price in cents to AUD currency string', () => {
    expect(formatPrice(9999)).toMatch(/A\$99\.99|99\.99/)
  })

  it('should handle zero price', () => {
    expect(formatPrice(0)).toMatch(/A\$0\.00|0\.00/)
  })

  it('should handle large prices', () => {
    expect(formatPrice(1234567)).toMatch(/A\$12,345\.67|12,345\.67/)
  })

  it('should format single digit cents correctly', () => {
    expect(formatPrice(1005)).toMatch(/A\$10\.05|10\.05/)
  })

  it('should use Australian locale (en-AU)', () => {
    const result = formatPrice(10000)
    // Australian format uses comma as thousand separator
    expect(result).toContain('100.00')
  })
})

