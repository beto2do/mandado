export default interface ErrorDetail {
    error: Error & { digest?: string }
    reset: () => void
}