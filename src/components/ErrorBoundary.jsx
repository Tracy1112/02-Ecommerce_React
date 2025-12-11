import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the entire app
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
    // In production, you could log to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold text-error mb-4">⚠️</h1>
            <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
            <p className="text-lg mb-6 text-base-content/70">
              We're sorry, but something unexpected happened. Please try again
              or contact support if the problem persists.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null })
                  window.location.href = '/'
                }}
                className="btn btn-primary"
              >
                Go Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-outline"
              >
                Reload Page
              </button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-error">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-4 bg-base-300 rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

