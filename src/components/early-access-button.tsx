"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";
import { useCallback, useEffect, useState } from "react";

import { BookDemoForm } from "./book-demo-form";

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

export type EarlyAccessButtonProps = {
	className?: string;
	label?: string;
};

export function EarlyAccessButton({
	className = "",
	label = "Experience It",
}: EarlyAccessButtonProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [formKey, setFormKey] = useState(0);

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

	const closeModal = useCallback(() => {
		setIsOpen(false);
		setFormKey((value) => value + 1);
	}, []);

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
						<BookDemoForm
							key={formKey}
							onSuccess={closeModal}
							successDelayMs={2200}
							heading="Tell us where you need us"
							headingId="book-demo-heading"
							className="space-y-0"
						/>
					</motion.div>
				</div>
			)}
		</>
	);
}
