"use client";

import { motion } from "framer-motion";
import type { FormEvent, SVGProps } from "react";
import { useCallback, useEffect, useState } from "react";

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.6}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
			{...props}
		>
			<path d="M7 17 17 7" />
			<path d="M7 7h10v10" />
		</svg>
	);
}

const iconMotion = {
	rest: { x: 0 },
	hover: { x: 4 },
};

type FieldKey = "name" | "email" | "phone";

type FormState = Record<FieldKey, string>;

export type EarlyAccessButtonProps = {
	className?: string;
	label?: string;
};

export function EarlyAccessButton({
	className = "",
	label = "Experience It",
}: EarlyAccessButtonProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState<FormState>({
		name: "",
		email: "",
		phone: "",
	});
	const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
	const [submissionState, setSubmissionState] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const resetForm = useCallback(() => {
		setFormState({ name: "", email: "", phone: "" });
		setErrors({});
		setServerError(null);
		setSubmissionState("idle");
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
		resetForm();
	}, [resetForm]);

	const handleChange = useCallback((key: FieldKey, value: string) => {
		setFormState((prev) => ({ ...prev, [key]: value }));
		setErrors((prev) => ({ ...prev, [key]: undefined }));
		setServerError(null);
	}, []);

	const validate = useCallback(() => {
		const nextErrors: Partial<Record<FieldKey, string>> = {};

		if (!formState.name.trim()) {
			nextErrors.name = "Name is required.";
		}

		if (!formState.email.trim()) {
			nextErrors.email = "Business email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
			nextErrors.email = "Enter a valid email address.";
		}

		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	}, [formState.email, formState.name]);

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
			} catch (error) {
				console.error("Submission failed", error);
				setServerError("Network error. Please try again shortly.");
				setSubmissionState("error");
			}
		},
		[formState.email, formState.name, formState.phone, validate],
	);

	useEffect(() => {
		if (submissionState === "success") {
			const timer = window.setTimeout(() => {
				closeModal();
			}, 2200);
			return () => window.clearTimeout(timer);
		}
	}, [submissionState, closeModal]);

			const formFields: Array<{
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

			const isLoading = submissionState === "loading";

	return (
		<>
			<motion.div
				className={`group relative inline-flex rounded-full bg-transparent ${className}`}
				whileHover="hover"
				initial="rest"
				animate="rest"
			>
				<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
					<div className="beam-line" />
				</div>
				<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/30 via-blue-500/20 to-indigo-500/30 blur-2xl opacity-70 transition duration-500 group-hover:opacity-95" />
				<motion.span
					className="pointer-events-none absolute inset-[1px] rounded-full border border-white/15 bg-white/5 backdrop-blur-xl"
					variants={{
						rest: { borderColor: "rgba(255,255,255,0.15)" },
						hover: { borderColor: "rgba(255,255,255,0.45)" },
					}}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>
				<button
					type="button"
					className="relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-500 animate-button-sweep"
					onClick={() => setIsOpen(true)}
				>
					<span>{label}</span>
					<motion.span
						className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10"
						variants={iconMotion}
						transition={{ type: "spring", stiffness: 320, damping: 14 }}
					>
						<ArrowUpRightIcon className="h-4 w-4" />
					</motion.span>
				</button>
			</motion.div>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center px-4"
					role="dialog"
					aria-modal="true"
					aria-labelledby="book-demo-heading"
				>
					<div
						className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
						onClick={closeModal}
						aria-hidden
					/>
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 12, scale: 0.98 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[rgba(4,6,20,0.92)] p-8 text-left text-white shadow-[0_32px_80px_rgba(2,6,23,0.65)]"
					>
						<button
							type="button"
							onClick={closeModal}
							className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 p-2 text-white/70 transition hover:text-white"
							aria-label="Close form"
						>
							×
						</button>
						<div className="space-y-2">
							<span className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
								Book a demo
							</span>
							<h3 id="book-demo-heading" className="text-3xl font-semibold">
								Tell us where you need us
							</h3>
							<p className="text-sm text-white/70">
								Drop a few details and our engineers will craft a tailored walkthrough.
							</p>
						</div>

						<form
							className="mt-6 space-y-4"
							onSubmit={handleSubmit}
							noValidate
						>
											{formFields.map((field) => (
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
														onChange={(event) =>
															handleChange(field.key, event.target.value)
														}
														aria-invalid={errors[field.key] ? "true" : "false"}
														aria-describedby={
															errors[field.key] ? `error-${field.key}` : undefined
														}
														placeholder={field.placeholder}
										className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
									/>
													{errors[field.key] ? (
										<p
															id={`error-${field.key}`}
											className="text-xs font-medium text-rose-300"
										>
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
								Summon
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
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="font-medium text-sky-200"
									>
										Thank you! Our team will reach out shortly.
									</motion.p>
								) : null}
							</div>
						</form>
					</motion.div>
				</div>
			)}
		</>
	);
}
