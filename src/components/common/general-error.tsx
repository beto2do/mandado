import { ErrorDetail } from '@/models'

export function GeneralError({error, reset}: ErrorDetail) {

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