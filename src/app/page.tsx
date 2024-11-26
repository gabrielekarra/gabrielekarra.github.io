'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowUpRightIcon from '@/assets/arrow-up-right.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import GithubIcon from '@/assets/githubIcon.svg';
import EmailIcon from '@/assets/email.svg';
import Yellow from '@/assets/yellow-box.png';
import Genogra from '@/assets/genogra.png';
import { CustomCursor } from '@/components/customCursor';

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24">
      <CustomCursor />
      <ul className="list-none space-y-16">
        {/* Introduction Section */}
        <motion.li
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white pb-6 tracking-tight">hola 👋🏻, Gabriele here!</h2>
            <p className="text-white/70 tracking-tight leading-relaxed text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, voluptas? Suscipit iure impedit possimus
              obcaecati, reiciendis quaerat id perspiciatis excepturi, neque voluptate facilis, ratione nihil. Id dicta
              praesentium consequuntur ducimus.
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
          <DuckHuntGame />
        </motion.li>

        {/* Links Section */}
        <motion.li
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-sm font-light text-white/60 md:w-1/5">Connect</h2>
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
        >
          <h2 className="text-sm font-light text-white/60 md:w-1/5 mb-6">News</h2>
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <ul>
              {[...Array(3)].map((_, idx) => (
                <li key={idx} className="mb-6 flex justify-between">
                  <div className="text-white/80 w-4/5 text-base tracking-tighter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe at minima quasi
                    consectetur, ex sunt. Dolores quidem alias cum, deserunt iusto obcaecati voluptate perspiciatis
                    mollitia. Perferendis cumque possimus aut.
                  </div>
                  <div className="text-white/60 text-sm">Nov 25, 2024</div>
                </li>
              ))}
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
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <h2 className="text-sm font-light text-white/60 md:w-1/5">What I'm working on</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[Genogra, Yellow].map((image, idx) => (
              <HoverLightCard key={idx} image={image.src} idx={idx} />
            ))}
          </div>
        </motion.li>
      </ul>
    </div>
  );
}

function HoverLightCard({ image, idx }: { image: string; idx: number }) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

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
          <Image src={image} alt={`Card Image ${idx}`} className="object-cover w-full h-full" layout="fill" />
        </div>
        <div className="p-4 bg-[#0d0d0d]">
          <h3 className="text-lg font-semibold text-white">Project {idx + 1}</h3>
          <p className="text-sm text-white/60 mt-2">
            Open source analytics dashboard built with Django with over 200k visitors.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
