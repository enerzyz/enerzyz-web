"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";

type FieldKey = "name" | "email" | "phone";

type FormState = Record<FieldKey, string>;

type SubmissionState = "idle" | "loading" | "success" | "error";

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultFields: Array<{
  key: FieldKey;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
}> = [
  {
    key: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Nikola Lovelace",
  },
  {
    key: "email",
    label: "Business Email",
    type: "email",
    required: true,
    placeholder: "you@company.com",
  },
  {
    key: "phone",
    label: "Contact Number",
    type: "tel",
    required: false,
    placeholder: "+1 222 555 0199",
  },
];

export type BookDemoFormProps = {
  onSuccess?: () => void;
  successDelayMs?: number;
  heading?: string;
  eyebrow?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
  headingId?: string;
};

export function BookDemoForm({
  onSuccess,
  successDelayMs = 0,
  heading = "Tell us where you need us",
  eyebrow = "Book a demo",
  description = "Drop a few details and our engineers will craft a tailored walkthrough.",
  submitLabel = "Summon",
  className = "",
  headingId = "book-demo-heading",
}: BookDemoFormProps) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setFormState({ name: "", email: "", phone: "" });
    setErrors({});
    setServerError(null);
    setSubmissionState("idle");
  }, []);

  useEffect(() => {
    if (submissionState !== "success" || !onSuccess) {
      return;
    }

    const timer = window.setTimeout(() => {
      onSuccess();
      resetForm();
    }, successDelayMs);

    return () => window.clearTimeout(timer);
  }, [submissionState, onSuccess, successDelayMs, resetForm]);

  const validate = useCallback(() => {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    if (!formState.name.trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!formState.email.trim()) {
      nextErrors.email = "Business email is required.";
    } else if (!emailRegExp.test(formState.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [formState.email, formState.name]);

  const handleChange = useCallback((key: FieldKey, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setServerError(null);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!validate()) {
        return;
      }

      setSubmissionState("loading");
      setServerError(null);

      try {
        const response = await fetch("/api/demo-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            businessEmail: formState.email,
            contactNumber: formState.phone,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          setServerError(
            data?.error ?? "Could not submit your details. Please try again.",
          );
          setSubmissionState("error");
          return;
        }

  setSubmissionState("success");
  setFormState({ name: "", email: "", phone: "" });
      } catch (error) {
        console.error("Submission failed", error);
        setServerError("Network error. Please try again shortly.");
        setSubmissionState("error");
      }
    },
    [formState.email, formState.name, formState.phone, validate],
  );

  const isLoading = submissionState === "loading";

  return (
    <div className={className}>
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
          {eyebrow}
        </span>
        <h1 id={headingId} className="text-3xl font-semibold lg:text-4xl">
          {heading}
        </h1>
        <p className="text-sm text-white/70 lg:text-base">{description}</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
  {defaultFields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label
              htmlFor={`book-demo-${field.key}`}
              className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60"
            >
              {field.label}
              {field.required ? " *" : null}
            </label>
            <input
              id={`book-demo-${field.key}`}
              name={field.key}
              type={field.type}
              required={field.required}
              value={formState[field.key]}
              onChange={(event) => handleChange(field.key, event.target.value)}
              aria-invalid={errors[field.key] ? "true" : "false"}
              aria-describedby={
                errors[field.key] ? `error-${field.key}` : undefined
              }
              placeholder={field.placeholder}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            {errors[field.key] ? (
              <p id={`error-${field.key}`} className="text-xs font-medium text-rose-300">
                {errors[field.key]}
              </p>
            ) : null}
          </div>
        ))}

        <motion.button
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-sky-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/40 hover:bg-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {submitLabel}
        </motion.button>

        <div className="min-h-[1.5rem] text-center text-sm" aria-live="polite">
          {submissionState === "loading" ? (
            <p className="font-medium text-white/80">Sending your request...</p>
          ) : null}
          {submissionState === "error" ? (
            <p className="font-medium text-rose-300">
              {serverError ?? "We couldn't submit your request. Please try again."}
            </p>
          ) : null}
          {submissionState === "success" ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-sky-200">
              Thank you! Our team will reach out shortly.
            </motion.p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
