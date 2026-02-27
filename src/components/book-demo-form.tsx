"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";

type FieldKey = "name" | "email" | "phone" | "company" | "jobTitle" | "challenge";

type FormState = Record<FieldKey, string>;

type SubmissionState = "idle" | "loading" | "success" | "error";

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultFields: Array<{
  key: FieldKey;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  isSelect?: boolean;
  options?: string[];
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
    key: "company",
    label: "Company Name",
    type: "text",
    required: false,
    placeholder: "Acme Facilities Group",
  },
  {
    key: "jobTitle",
    label: "Job Title",
    type: "text",
    required: false,
    placeholder: "VP of Engineering",
  },
  {
    key: "phone",
    label: "Contact Number",
    type: "tel",
    required: false,
    placeholder: "+1 222 555 0199",
  },
  {
    key: "challenge",
    label: "Primary Challenge",
    type: "text",
    required: false,
    placeholder: "Select your primary challenge",
    isSelect: true,
    options: [
      "Reducing energy costs",
      "Extending asset life / predictive maintenance",
      "Unifying BMS / SCADA systems",
      "ESG reporting & compliance",
      "Multi-site portfolio management",
      "Embedding AI into our equipment (OEMs)",
      "Other",
    ],
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
    company: "",
    jobTitle: "",
    challenge: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setFormState({ name: "", email: "", phone: "", company: "", jobTitle: "", challenge: "" });
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
            company: formState.company,
            jobTitle: formState.jobTitle,
            challenge: formState.challenge,
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
  setFormState({ name: "", email: "", phone: "", company: "", jobTitle: "", challenge: "" });
      } catch (error) {
        console.error("Submission failed", error);
        setServerError("Network error. Please try again shortly.");
        setSubmissionState("error");
      }
    },
    [formState, validate],
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
            {field.isSelect ? (
              <select
                id={`book-demo-${field.key}`}
                name={field.key}
                required={field.required}
                value={formState[field.key]}
                onChange={(event) => handleChange(field.key, event.target.value)}
                aria-invalid={errors[field.key] ? "true" : "false"}
                className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/40 bg-[right_1rem_center] bg-no-repeat bg-[length:1rem_1rem] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22rgba(255%2C255%2C255%2C0.5)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] [&>option]:bg-slate-900 [&>option]:text-white"
              >
                <option value="" disabled className="text-white/30">{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
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
            )}
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
