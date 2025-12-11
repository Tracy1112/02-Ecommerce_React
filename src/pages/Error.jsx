import { useRouteError, Link } from 'react-router-dom'

const ErrorMessage = ({ status, message, linkText, linkTo }) => (
  <main className="grid min-h-[100vh] place-items-center px-8 py-4 bg-gray-100">
    <div className="text-center">
      {status && (
        <p className="text-8xl font-semibold text-red-600">{status}</p>
      )}
      <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-800 tracking-tight">
        {message}
      </h1>
      {linkText && (
        <div className="mt-10">
          <Link to={linkTo} className="btn btn-primary">
            {linkText}
          </Link>
        </div>
      )}
    </div>
  </main>
)

const Error = () => {
  const error = useRouteError()

  if (error?.status === 404) {
    return (
      <ErrorMessage
        status="404"
        message="Page not found"
        linkText="Go back home"
        linkTo="/"
      />
    )
  }

  return (
    <ErrorMessage
      message="Something went wrong..."
      linkText="Go back home"
      linkTo="/"
    />
  )
}

export default Error
