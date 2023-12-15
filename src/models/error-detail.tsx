export interface ErrorDetail {
    error: Error & { digest?: string }
    reset: () => void
}