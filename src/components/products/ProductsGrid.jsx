import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../../utils'

const ProductsGrid = () => {
  const { products } = useLoaderData()
  // Get base URL for Strapi images
  // Use remote API by default (most developers don't run Strapi locally)
  const apiUrl = import.meta.env.VITE_API_URL || 'https://strapi-store-server.onrender.com/api'
  const strapiBaseURL = apiUrl.replace('/api', '')
  
  // Handle empty products array
  if (!products || products.length === 0) {
    return (
      <div className="pt-12 text-center">
        <p className="text-lg text-base-content/70">
          No featured products available at the moment. Please check back later.
        </p>
      </div>
    )
  }
  
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
            <figure className="px-4 pt-4">
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="rounded-xl h-64 md:h-48 w-full object-cover"
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
