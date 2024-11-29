"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header(){
	const [activeLink, setActiveLink] = useState("/");
	const [highlightStyles, setHighlightStyles] = useState({});
	const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

	useEffect(() => {
		setActiveLink(window.location.pathname);
	}, []);

	useEffect(() => {
		const updateHighlight = () => {
			const activeIndex = linksRef.current.findIndex(
				(el) => el && el.getAttribute("href") === activeLink,
			);
			if (activeIndex !== -1) {
				const linkElement = linksRef.current[activeIndex];
				if (!linkElement) return;

				const { offsetLeft, offsetWidth } = linkElement;

				setHighlightStyles({
					width: `${offsetWidth}px`,
					transform: `translateX(${offsetLeft}px)`,
					transition: "transform 0.3s ease, width 0.3s ease",
				});
			}
		};

		// Initial highlight update and on resize
		updateHighlight();
		window.addEventListener("resize", updateHighlight);

		return () => window.removeEventListener("resize", updateHighlight);
	}, [activeLink]);

	const handleLinkClick = (path: string) => {
		setActiveLink(path);
	};

	return (
		<header>
			<div className="py-5">
				<div className="container flex justify-center w-full">
					<div className="flex items-center justify-center content-center w-full gap-32">
						<div className="relative flex gap-1">
							{/* Highlight Background */}
							<div
								className="absolute bg-[#222222] rounded-lg h-8 w-auto -mt-1.5"
								style={{
									...highlightStyles,
								}}
							></div>

							{/* Links */}
							{["/", "/about", "/blog"].map((path, index) => (
								<Link
									key={path}
									href={path}
									className={`relative rounded-lg px-3 text-sm transition-colors ${
										activeLink === path
											? "text-white"
											: "text-white/60 hover:text-white"
									}`}
									onClick={() => handleLinkClick(path)}
									ref={(el) => {
										linksRef.current[index] = el;
									}}
								>
									{path === "/"
										? "Home"
										: path.substring(1).charAt(0).toUpperCase() +
											path.substring(2)}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
