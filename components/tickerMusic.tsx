"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Jungle from "../assets/jungle.png";
import Islanda from "../assets/islanda.png";
import Rovere from "../assets/rovere.png";
export const Ticker = () => {
	const [currentTrack, setCurrentTrack] = useState("1sVv8VsR6cNERctCp9OOLH");
	const albums = [
		{ src: Jungle.src, trackId: "4X4R6qsIicxIQIFbnDcJLO" },
		{ src: Rovere.src, trackId: "1sVv8VsR6cNERctCp9OOLH" },
		{ src: Islanda.src, trackId: "25mDnFOFyPmebNAok8mavk" },
	];

	const handleTrackChange = (trackId: string) => {
		setCurrentTrack(trackId);
	};

	return (
		<div>
			<div className="flex justify-center items-center -gap-6">
				{albums.map((album, index) => (
					<motion.div
						key={index}
						className="relative max-w-xs w-full overflow-hidden cursor-grab"
						drag
						dragConstraints={{
							left: -400 - index * 16,
							right: 400 - index * 16,
							top: -300,
							bottom: 300,
						}}
						whileHover={{
							scale: 1.05,
							rotate: 5 * index,
							transition: { type: "keyframes", stiffness: 400 },
						}}
						initial={{ scale: 1.2, rotate: 5 * (index - 1) }}
						whileTap={{ scale: 0.95, cursor: "grabbing" }}
						onDragEnd={(event, info) => {
							const playerElement = document.getElementById("spotify-player");
							if (!playerElement) return;
							const playerBounds = playerElement.getBoundingClientRect();
							if (
								info.point.x < playerBounds.x &&
								info.point.y > playerBounds.y
							) {
								handleTrackChange(album.trackId);
							}
						}}
					>
						<div className="p-4">
							<img
								src={album.src}
								alt="Album cover"
								className="w-full h-fit object-cover"
							/>
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-none opacity-30"></div>
						</div>
					</motion.div>
				))}
			</div>
			<iframe
				id="spotify-player"
				style={{ borderRadius: "12px" }}
				src={`https://open.spotify.com/embed/track/${currentTrack}`}
				width="100%"
				height="152"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title="Spotify music player"
			></iframe>
		</div>
	);
};
