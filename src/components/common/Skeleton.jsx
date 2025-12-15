/**
 * Skeleton Loading Component
 * Provides skeleton screens for better loading UX
 */

/**
 * Product Card Skeleton
 * Used in product listings
 */
export const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      <figure className="bg-base-300 h-64 w-full"></figure>
      <div className="card-body">
        <div className="h-4 bg-base-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-base-300 rounded w-1/2"></div>
        <div className="card-actions justify-end mt-4">
          <div className="h-10 bg-base-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}

/**
 * Product Grid Skeleton
 * Shows multiple product skeletons
 */
export const ProductsGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}

/**
 * Product List Skeleton
 * Used in list view
 */
export const ProductListSkeleton = ({ count = 5 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="card card-side bg-base-100 shadow-xl animate-pulse"
        >
          <figure className="bg-base-300 w-48 h-48"></figure>
          <div className="card-body">
            <div className="h-6 bg-base-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-base-300 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-base-300 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Order Table Skeleton
 * Used in orders page
 */
export const OrderTableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="bg-base-300 h-12 w-32 animate-pulse"></th>
            <th className="bg-base-300 h-12 w-32 animate-pulse"></th>
            <th className="bg-base-300 h-12 w-32 animate-pulse"></th>
            <th className="bg-base-300 h-12 w-32 animate-pulse"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className="h-4 bg-base-300 rounded w-24 animate-pulse"></div>
              </td>
              <td>
                <div className="h-4 bg-base-300 rounded w-32 animate-pulse"></div>
              </td>
              <td>
                <div className="h-4 bg-base-300 rounded w-20 animate-pulse"></div>
              </td>
              <td>
                <div className="h-4 bg-base-300 rounded w-16 animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Cart Item Skeleton
 */
export const CartItemSkeleton = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl animate-pulse mb-4">
      <figure className="bg-base-300 w-32 h-32"></figure>
      <div className="card-body flex-1">
        <div className="h-5 bg-base-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-base-300 rounded w-1/2 mb-4"></div>
        <div className="flex gap-4">
          <div className="h-8 bg-base-300 rounded w-20"></div>
          <div className="h-8 bg-base-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}

