import React from 'react'
import { Hero, FeaturedProducts } from '../components'

import { customFetch } from '../utils'

const url = '/products?featured=true'
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  console.log(response)
  const products = response.data.data
  return { products }
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
