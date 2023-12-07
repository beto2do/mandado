import { useEffect } from 'react'
import ErrorDetail from '../../models/error-detail'

export default function GeneralError({error, reset}: ErrorDetail) {

    useEffect(() => {
        console.error(error)
      }, [error])

    return (
        <div>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    );
}