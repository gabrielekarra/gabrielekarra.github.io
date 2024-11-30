"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Jungle from "../assets/jungle.png";
import Islanda from "../assets/islanda.png";
import Rovere from "../assets/rovere.png";

export default function Ticker() {
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
		<div className="p-4 w-full">
			<div className="flex justify-center items-center gap-4 w-full">
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
						initial={{ rotate: 5 * (index - 1) }}
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
						<div className="p-4 flex justify-center">
							<img
								src={album.src}
								alt="Album cover"
								className="object-cover"
								height={300}
								width={300}
							/>
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-none opacity-30"></div>
						</div>
					</motion.div>
				))}
			</div>
			<iframe
				id="spotify-player"
				className="w-full mt-4"
				style={{ borderRadius: "12px" }}
				src={`https://open.spotify.com/embed/track/${currentTrack}`}
				height="152"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title="Spotify music player"
			></iframe>
		</div>
	);
}
