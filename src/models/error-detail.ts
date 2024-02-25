export interface ErrorDetail {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface FormControlError {
  error: boolean;
  msg: string;
}
