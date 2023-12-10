'use client'
import ErrorDetail from '@/models/error-detail'
import GeneralError from '@/components/common/general-error'
 
export default function Error({
  error,
  reset,
}: ErrorDetail) {

  return <GeneralError error={error} reset={reset}></GeneralError>
}