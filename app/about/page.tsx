"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ElcaLogo from "../../assets/elca.png";
import Polimi from "../../assets/polimi.png";
import Unipa from "../../assets/unipa.png";
import Genogra from "../../assets/genogra.png";
import Map3d from "../../components/map";
import Ticker from "../../components/tickerMusic";

export default function About() {
	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	};

	const useAnimateSection = () =>
		useInView({ triggerOnce: true, threshold: 0.2 });

	const { ref: aboutRef, inView: aboutInView } = useAnimateSection();
	const { ref: workRef, inView: workInView } = useAnimateSection();
	const { ref: mapRef, inView: mapInView } = useAnimateSection();
	const { ref: educationRef, inView: educationInView } = useAnimateSection();
	const { ref: musicRef, inView: musicInView } = useAnimateSection();

	return (
		<div className="container mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24">
			<motion.ul className="list-none space-y-16">
				{/* About Section */}
				<motion.li
					ref={aboutRef}
					variants={fadeIn}
					initial="hidden"
					animate={aboutInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col items-start text-center md:text-left">
						<h2 className="text-3xl md:text-4xl font-bold text-white pb-6 tracking-tight">
							About
						</h2>
						<p className="text-white/70 tracking-tight leading-relaxed text-justify">
							I'm a software engineer based in Italy. Currently working also on
							my thesis at Politecnico di Milano. I'm passionate about
							technology and innovation. I love to learn new things and I'm
							always looking for new challenges. I'm a team player and I love to
							work in a team. I'm always looking for new opportunities to grow
							and improve my skills
						</p>
					</div>
				</motion.li>

				{/* Map Section */}
				<motion.li
					ref={mapRef}
					variants={fadeIn}
					initial="hidden"
					animate={mapInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col items-center justify-center">
						<div className="w-full h-[300px] sm:h-[400px]">
							<Map3d lat={41.8901999} lng={12.4917042} />
						</div>
					</div>
				</motion.li>

				{/* Work Section */}
				<motion.li
					ref={workRef}
					variants={fadeIn}
					initial="hidden"
					animate={workInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col md:flex-row items-start gap-6">
						<h2 className="text-sm font-light text-white/60 md:w-1/5">Work</h2>
						<motion.div className="w-full md:w-4/5" variants={staggerContainer}>
							<motion.p
								className="text-justify text-white/70 leading-relaxed"
								variants={fadeIn}
							>
								I'm specialized in web development and I have experience in
								Angular and Spring Boot.I'm currently working as a Junior
								Software Engineer at ELCA Information Technology.
							</motion.p>
							<ul className="list-none mt-8 space-y-6">
								<motion.li
									className="flex flex-col md:flex-row md:items-center justify-between"
									variants={fadeIn}
								>
									<div className="flex items-center gap-3">
										<Image
											src={ElcaLogo}
											alt="Elca Information Technology"
											className="rounded-full object-cover"
											width={40}
											height={40}
										/>
										<div>
											<h1 className="font-semibold text-white">
												ELCA Information Technology
											</h1>
											<p className="font-light text-sm text-gray-400">
												Junior Software Engineer
											</p>
										</div>
									</div>
									<div className="text-gray-500 font-medium text-sm mt-2 md:mt-0">
										Jan 24 -{" "}
									</div>
								</motion.li>
							</ul>
						</motion.div>
					</div>
				</motion.li>

				{/* Education Section */}
				<motion.li
					ref={educationRef}
					variants={fadeIn}
					initial="hidden"
					animate={educationInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col md:flex-row items-start gap-6">
						<h2 className="text-sm font-light text-white/60 md:w-1/5">
							Education
						</h2>
						<motion.div className="w-full md:w-4/5" variants={staggerContainer}>
							<motion.p
								className="text-justify text-white/70 leading-relaxed"
								variants={fadeIn}
							>
								I have a Bachelor's degree in Computer Engineering from the
								University of Palermo and I'm currently studying for a Master's
								degree in Computer Science and Engineering at Politecnico di
								Milano. Currently working on my thesis.
							</motion.p>
							<ul className="list-none mt-8 space-y-6">
								<motion.li
									className="flex flex-col md:flex-row md:items-center justify-between"
									variants={fadeIn}
								>
									<div className="flex items-center gap-3">
										<Image
											src={Genogra}
											alt="Genogra"
											className="rounded-full"
											width={40}
											height={40}
										/>
										<div>
											<h1 className="font-semibold text-white">Genogra</h1>
											<p className="font-light text-sm text-gray-400">
												Politecnico di Milano Thesis: Lorem
											</p>
										</div>
									</div>
									<div className="text-gray-500 font-medium text-sm mt-2 md:mt-0">
										Oct 21 - Jul 25
									</div>
								</motion.li>
								<motion.li
									className="flex flex-col md:flex-row md:items-center justify-between"
									variants={fadeIn}
								>
									<div className="flex items-center gap-3">
										<Image
											src={Polimi}
											alt="Politecnico di Milano"
											className="rounded-full"
											width={40}
											height={40}
										/>
										<div>
											<h1 className="font-semibold text-white">
												Politecnico di Milano
											</h1>
											<p className="font-light text-sm text-gray-400">
												Computer Science and Engineering
											</p>
										</div>
									</div>
									<div className="text-gray-500 font-medium text-sm mt-2 md:mt-0">
										Oct 21 - Jul 25
									</div>
								</motion.li>
								<motion.li
									className="flex flex-col md:flex-row md:items-center justify-between"
									variants={fadeIn}
								>
									<div className="flex items-center gap-3">
										<Image
											src={Unipa}
											alt="Università degli studi di Palermo"
											className="rounded-full"
											width={40}
											height={40}
										/>
										<div>
											<h1 className="font-semibold text-white">
												Università degli studi di Palermo
											</h1>
											<p className="font-light text-sm text-gray-400">
												Ingegneria Informatica
											</p>
											<p className="font-mono text-gray-400">105/110</p>
										</div>
									</div>
									<div className="text-gray-500 font-medium text-sm mt-2 md:mt-0">
										Sep 18 - Oct 21
									</div>
								</motion.li>
							</ul>
						</motion.div>
					</div>
				</motion.li>
				<motion.li
					ref={musicRef}
					variants={fadeIn}
					initial="hidden"
					animate={musicInView ? "visible" : "hidden"}
				>
					<div className="flex flex-col md:flex-row items-center justify-center mb-6 mt-6">
						<div className="p-10 flex items-center justify-center relative w-full">
							<div className="w-full relative h-full">
								<div className="max-w-5xl mx-auto text-center">
									<span className="text-5xl font-bold mt-1 leading-none">
										What I'm listening to
									</span>
									<Ticker />
									<h1 className="text-xs tracking-tighter">
										(Drag and drop into album cover to change music)
									</h1>
								</div>
							</div>
						</div>
					</div>
				</motion.li>
			</motion.ul>
		</div>
	);
}
