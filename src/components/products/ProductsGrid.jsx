import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../../utils'

const ProductsGrid = () => {
  const { products } = useLoaderData()
  // Get base URL for Strapi images
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:1337'
  const strapiBaseURL = baseURL.replace('/api', '')
  
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const dollarsAmount = formatPrice(price)
        // Handle both absolute and relative image URLs
        const imageUrl = image?.startsWith('http') ? image : `${strapiBaseURL}${image}`
        
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300 "
          >
            <figure className="px-4 pt-4 bg-base-200 rounded-xl flex items-center justify-center min-h-[256px] md:min-h-[192px]">
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="rounded-xl max-h-64 md:max-h-48 w-full object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none'
                }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsGrid
