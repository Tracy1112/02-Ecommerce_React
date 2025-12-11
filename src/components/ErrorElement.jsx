import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

/**
 * Error Element Component
 * Displays user-friendly error messages for route-level errors
 * Used as errorElement in React Router configuration
 */
const ErrorElement = () => {
  const error = useRouteError()

  // Handle 404 errors
  if (error?.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-error mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-6 text-base-content/70">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  // Handle other errors
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-error mb-4">⚠️</h1>
        <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
        <p className="text-lg mb-6 text-base-content/70">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
          >
            Reload Page
          </button>
        </div>
        {import.meta.env.DEV && error && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-error">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 p-4 bg-base-300 rounded text-xs overflow-auto">
              {error.toString()}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

export default ErrorElement
