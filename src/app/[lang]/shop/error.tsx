"use client";
import { ErrorDetail } from "@/models";
import { GeneralError } from "@/components/common";

export default function Error({ error, reset }: ErrorDetail) {
  return <GeneralError error={error} reset={reset}></GeneralError>;
}
