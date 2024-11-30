"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowUpRightIcon from "../assets/arrow-up-right.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/githubIcon.svg";
import EmailIcon from "../assets/email.svg";
import Yellow from "../assets/yellow-box.png";
import Genogra from "../assets/genogra.png";
import "./styles/globals.css";
// import { CustomCursor } from '@/components/customCursor';

// Animation variants
const fadeInVariant = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/*
interface Duck {
  id: number;
  animationDuration: string;
  startPosition: { left: string; top: string };
  direction: { x: number; y: number };
}

function DuckHuntGame() {
  const [ducks, setDucks] = useState<Duck[]>([]);
  const [score, setScore] = useState(0);

  // Add a new duck every 2 seconds
  useEffect(() => {
    const addDuckInterval = setInterval(() => {
      const randomDirection = {
        x: Math.random() > 0.5 ? 1 : -1,
        y: Math.random() > 0.5 ? 1 : -1,
      };
      const duck = {
        id: Date.now(),
        animationDuration: Math.random() * 5 + 5 + 's',
        startPosition: {
          left: Math.random() * 90 + '%',
          top: Math.random() * 90 + '%',
        },
        direction: randomDirection,
      };
      setDucks(prevDucks => [...prevDucks, duck]);
    }, 2000);

    return () => clearInterval(addDuckInterval);
  }, []);

  // Handle Duck Click (shoot the duck)
  const shootDuck = (duckId: number) => {
    setDucks(prevDucks => prevDucks.filter(duck => duck.id !== duckId));
    setScore(prevScore => prevScore + 1);
  };

  return (
    <div>
      <h2 className="score text-white fixed top-2 left-2">Score: {score}</h2>
      <div className="duck-hunt-game relative">
        {ducks.map(duck => (
          <motion.div
            key={duck.id}
            className="z-10 absolute"
            style={{
              left: duck.startPosition.left,
              top: duck.startPosition.top,
              animation: `moveDuck-${duck.id} ${duck.animationDuration} linear forwards`,
              transform: `scaleX(${duck.direction.x < 0 ? -1 : 1})`,
            }}
            onClick={() => shootDuck(duck.id)} // Duck disappears only on click
            transition={{ duration: 0.2 }}
            onAnimationComplete={() => {
              setDucks(prevDucks => prevDucks.filter(d => d.id !== duck.id));
            }}
          >
            <img
              src="//humanmade.jp/cdn/shop/t/93/assets/fliyng_duck_01_200x.gif?v=47446821406736573201672885663"
              alt="Duck"
              width="200"
              height="200"
            />
            <style jsx>{`
              @keyframes moveDuck-${duck.id} {
                0% {
                  transform: translate(0, 0) scaleX(${duck.direction.x < 0 ? -1 : 1});
                }
                100% {
                  transform: translate(${duck.direction.x * 100}vw, ${duck.direction.y * 100}vh)
                    scaleX(${duck.direction.x < 0 ? -1 : 1});
                }
              }
            `}</style>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
*/

const useTypewriter = (speed = 80) => {
	const texts = [
		"hola",
		"hello",
		"ciao",
		"salut",
		"hallo",
		"hej",
		"oi",
		"ahoj",
		"cześć",
		"namaste",
		"konnichiwa",
		"ni hao",
		"salam",
		"merhaba",
		"shalom",
		"sawubona",
		"jambo",
		"sawasdee",
		"xin chào",
		"kamusta",
		"hyālō",
	];
	const [greetingIndex, setGreetingIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [deleting, setDeleting] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		let typingTimeout: NodeJS.Timeout;

		if (!deleting && currentIndex < texts[greetingIndex].length) {
			typingTimeout = setTimeout(() => {
				setDisplayText((prev) => prev + texts[greetingIndex][currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);
		} else if (!deleting && currentIndex === texts[greetingIndex].length) {
			typingTimeout = setTimeout(() => {
				setDeleting(true);
			}, 2000);
		} else if (deleting && displayText.length > 0) {
			typingTimeout = setTimeout(() => {
				setDisplayText((prev) => prev.slice(0, -1));
				setCurrentIndex((prev) => prev - 1);
			}, speed);
		} else if (deleting && displayText.length === 0) {
			setDeleting(false);
			setCurrentIndex(0);
			setGreetingIndex((prev) => (prev + 1) % texts.length);
		}

		return () => clearTimeout(typingTimeout);
	}, [currentIndex, deleting, displayText, greetingIndex, speed]);

	return displayText;
};

const Typewriter = () => {
	const displayText = useTypewriter();
	return (
		<h1 className="font-bold mb-4 text-2xl md:text-4xl">
			{displayText} 👋🏻, Gabriele here!
		</h1>
	);
};

export default function Home() {
	return (
		<div className="container mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24">
			{/* <CustomCursor /> */}
			<ul className="list-none space-y-16">
				{/* Introduction Section */}
				<motion.li
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="flex flex-col items-start text-center md:text-left">
						<Typewriter />
						<p className="text-white/70 tracking-tight leading-relaxed text-justify">
							💻 Junior Software Engineer at ELCA Information Technology in
							Italy 🇮🇹 🎓 <br />
							MSc in Computer Science and Engineering from Politecnico di Milano
							🏫
							<br /> On the side, I’m passionate about sharing insights on Tech
							and Software Development through my blog ✍️📖
						</p>
					</div>
				</motion.li>

				{/* Duck Hunt Game Section */}
				<motion.li
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{/* <DuckHuntGame /> */}
				</motion.li>

				{/* Links Section */}
				<motion.li
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="flex flex-col items-center md:items-start gap-6">
						<h2 className="text-sm font-light text-white/60 md:w-1/5">
							Connect
						</h2>
						<div className="w-full">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<a
									className="bg-[#191919] p-4 rounded-lg font-light text-sm flex justify-between items-center hover:bg-[#232323] transition"
									href="https://github.com/gabrielekarra"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="flex items-center gap-3">
										<GithubIcon className="w-5 h-5" />
										GitHub
									</div>
									<ArrowUpRightIcon className="h-5 w-5 text-white/70" />
								</a>
								<a
									className="bg-[#191919] p-4 rounded-lg font-light text-sm flex justify-between items-center hover:bg-[#232323] transition"
									href="https://www.linkedin.com/in/salvatoregabrielekarra/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="flex items-center gap-3">
										<LinkedinIcon className="w-4 h-4 fill-white" />
										LinkedIn
									</div>
									<ArrowUpRightIcon className="h-5 w-5 text-white/70" />
								</a>
								<a
									className="bg-[#191919] p-4 rounded-lg font-light text-sm flex justify-between items-center sm:col-span-2 hover:bg-[#232323] transition"
									href="mailto:gabrielekarra@hotmail.it"
								>
									<div className="flex items-center gap-3">
										<EmailIcon className="w-5 h-5" />
										E-mail
									</div>
									<ArrowUpRightIcon className="h-5 w-5 text-white/70" />
								</a>
							</div>
						</div>
					</div>
				</motion.li>

				{/* News Section */}
				<motion.li
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="flex flex-col items-center md:items-start"
				>
					<h2 className="text-sm font-light text-white/60 md:w-1/5 mb-6">
						News
					</h2>
					<div className="flex flex-col md:flex-row items-start gap-6 w-full">
						<ul className="w-full">
							<li className="flex flex-col items-center md:justify-between md:flex-row">
								<a
									href="/blog#cvRef"
									className="w-3/5 md:w-4/5 tracking-tighter flex gap-4 items-center bg-white p-6 rounded-lg text-black justify-center"
								>
									<div className="w-full tracking-tighter flex gap-4 items-center bg-white rounded-lg text-black justify-center">
										"How to Craft a CV That'll Make Big Tech Beg for You", a
										little guide on how to make your CV stand out.
										<ArrowUpRightIcon className="hidden md:block h-4 w-4 text-black" />
									</div>
								</a>
								<div className="text-sm">Nov 25, 2024</div>
							</li>
						</ul>
					</div>
				</motion.li>

				{/* Recent Projects Section */}
				<motion.li
					variants={fadeInVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="flex flex-col items-center md:items-start pb-6">
						<h2 className="text-sm font-light text-white/60 md:w-1/5">
							What I'm working on
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{[Genogra].map((image, idx) => (
							<HoverLightCard key={idx} image={image.src} idx={idx} />
						))}
					</div>
				</motion.li>
			</ul>
		</div>
	);
}

function HoverLightCard({ image, idx }: { image: string; idx: number }) {
	const [mousePosition, setMousePosition] = useState<{
		x: number;
		y: number;
	} | null>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setMousePosition({ x, y });
	};

	const handleMouseLeave = () => {
		setMousePosition(null); // Reset light position on mouse leave
	};

	return (
		<motion.div
			className="max-w-xs mx-auto relative group cursor-pointer"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{/* Light effect */}
			{mousePosition && (
				<motion.div
					className="absolute inset-0 pointer-events-none rounded-lg"
					style={{
						background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 60%)`,
					}}
				></motion.div>
			)}

			{/* Card Content */}
			<div className="rounded-lg bg-[#191919] overflow-hidden shadow-lg group-hover:shadow-2xl transition duration-300">
				<div className="relative w-full h-48">
					<Image
						src={image}
						alt={`Card Image ${idx}`}
						className="object-cover w-full h-full"
						layout="fill"
					/>
				</div>
				<div className="p-4 bg-[#0d0d0d]">
					<h3 className="text-lg font-semibold text-white">Master Thesis</h3>
					<p className="text-sm text-white/60 mt-2">
						Accelleration of POASTA, a new optimal algorithm for partial order
						alignment that exploits long stretches of matching sequence between
						the graph and a query.
					</p>
				</div>
			</div>
		</motion.div>
	);
}
