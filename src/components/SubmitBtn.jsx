import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
      aria-label={isSubmitting ? 'Submitting form' : text || 'Submit form'}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner" aria-hidden="true"></span>
          <span aria-live="polite">sending...</span>
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}
export default SubmitBtn
