import { ErrorDetail } from '@/models'

export default function GeneralError({error, reset}: ErrorDetail) {

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