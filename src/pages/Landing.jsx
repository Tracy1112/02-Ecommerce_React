import React from 'react'
import { Hero, FeaturedProducts } from '../components'

import { customFetch } from '../utils'

const url = '/products?featured=true'
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  try {
    const response = await queryClient.ensureQueryData(featuredProductsQuery)
    const products = response?.data?.data || []
    return { products }
  } catch (error) {
    // Log error but don't crash the page
    console.error('Error loading featured products:', error)
    // Return empty array so page can still render
    return { products: [] }
  }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
