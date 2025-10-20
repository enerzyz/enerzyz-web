"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { SVGProps } from "react";

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
	href?: string;
	className?: string;
	label?: string;
};

export function EarlyAccessButton({
	href = "https://os.enerzyz.com",
	className = "",
	label = "Experience It",
}: EarlyAccessButtonProps) {
	return (
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
			<Link
				href={href}
				target="_blank"
				rel="noreferrer"
				className="relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-500 animate-button-sweep"
			>
				<span>{label}</span>
				<motion.span
					className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10"
					variants={iconMotion}
					transition={{ type: "spring", stiffness: 320, damping: 14 }}
				>
					<ArrowUpRightIcon className="h-4 w-4" />
				</motion.span>
			</Link>
		</motion.div>
	);
}
