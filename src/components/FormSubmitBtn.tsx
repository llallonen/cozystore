"use client";

import { ComponentProps } from "react";
import ReactDom from "react-dom";

const useFormStatus = (
  ReactDom as any as {
    experimental_useFormStatus: () => {
      pending: boolean;
      data: FormData | null;
      method: "get" | "post" | null;
      action: ((formData: FormData) => Promise<void>) | null;
    };
  }
).experimental_useFormStatus;

type FormSubmitBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitBtn = ({ children, className, ...props }: FormSubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-dots loading-xs" />}
      {children}
    </button>
  );
};

export default FormSubmitBtn;
