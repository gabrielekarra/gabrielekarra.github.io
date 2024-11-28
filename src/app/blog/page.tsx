"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const posts = [
	{
		id: 1,
		title: "🚀 How to Craft a CV That'll Make Big Tech Beg for You",
		href: "#cvRef",
		description:
			"A little guide for creating a clean, concise, and compelling CV that'll make Big Tech recruiters drool.",
		date: "Nov 27, 2024",
		datetime: "2020-03-16",
		category: { title: "Recruiting", href: "#cvRef" },
		author: {
			name: "Salvatore Gabriele Karra",
			role: "It's me",
			href: "#cvRef",
			imageUrl:
				"https://stickerly.pstatic.net/sticker_pack/zM7hDiYkbHJ9y6aMAvVljA/V2U91I/2/67cf89a9-4b54-4de9-a53d-aa7021e90508.png",
		},
	},
];
const handlePostClick = (href: string) => {
	const element = document.querySelector(href);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default function Blog() {
	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const useAnimateSection = () =>
		useInView({ triggerOnce: true, threshold: 0.2 });

	const { ref: aboutRef, inView: aboutInView } = useAnimateSection();
	const { ref: blogRef, inView: blogInView } = useAnimateSection();
	const { ref: cvRef, inView: cvInView } = useAnimateSection();

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
							Blog
						</h2>
						<p className="text-white/70 tracking-tight leading-relaxed text-justify">
							Only 1 post so far. I'll add more soon. I promise. 🤞
						</p>
					</div>
				</motion.li>
				<motion.li
					ref={blogRef}
					variants={fadeIn}
					initial="hidden"
					animate={blogInView ? "visible" : "hidden"}
				>
					<div className="bg-white py-6 rounded-lg w-full">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 w-full  flex justify-center">
							<div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8">
								{posts.map((post) => (
									<article
										key={post.id}
										className="flex max-w-xl flex-col items-start justify-between border-b border-gray-200 pb-8 last:border-none"
									>
										<div
											className="flex items-center gap-x-4 text-xs"
											onClick={() => handlePostClick(post.href)}
										>
											<time dateTime={post.datetime} className="text-gray-500">
												{post.date}
											</time>
											<a
												href={post.category.href}
												className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
											>
												{post.category.title}
											</a>
										</div>
										<div className="group relative">
											<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
												<a href={post.href}>
													<span className="absolute inset-0" />
													{post.title}
												</a>
											</h3>
											<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
												{post.description}
											</p>
										</div>
										<div className="relative mt-8 flex items-center gap-x-4">
											<img
												alt=""
												src={post.author.imageUrl}
												className="size-10 rounded-full bg-gray-50"
											/>
											<div className="text-sm/6">
												<p className="font-semibold text-gray-900">
													<a href={post.author.href}>
														<span className="absolute inset-0" />
														{post.author.name}
													</a>
												</p>
												<p className="text-gray-600">{post.author.role}</p>
											</div>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</motion.li>
				<motion.ol
					id="cvRef"
					ref={cvRef}
					variants={fadeIn}
					initial="hidden"
					animate={cvInView ? "visible" : "hidden"}
					className="p-8 rounded-lg shadow-lg space-y-6"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-white pb-6 tracking-tight">
						<span>🚀</span> How to Craft a CV That'll Make Big Tech Beg for You
					</h2>
					<div className="text-white/70 tracking-tight leading-relaxed text-justify space-y-6">
						<p>
							So, you’ve decided it’s time to join the big leagues—Google,
							Amazon, Meta, or whatever tech giant dominates your LinkedIn feed
							these days. You’re ready to flex your coding skills, revolutionize
							the digital landscape, and bask in the glory of stock options. But
							wait—there’s a tiny, paper-thin gatekeeper standing between you
							and your dreams:{" "}
							<motion.span
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.5 }}
								transition={{ duration: 0.5 }}
								className="font-bold text-white"
							>
								your CV.
							</motion.span>{" "}
							Yes, that humble document will determine if you’re the Chosen One
							or just another resume in the recruiter’s recycle bin. 🗑️
						</p>
						Fear not! Here’s your ultimate guide to crafting a CV so good it
						whispers,{" "}
						<motion.span
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.3 }}
							transition={{ duration: 0.3 }}
							className="font-bold text-white"
						>
							“Hire me yesterday,”
						</motion.span>{" "}
						while subtly hinting,{" "}
						<motion.span
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.3 }}
							transition={{ duration: 0.3 }}
							className="italic font-semibold text-white"
						>
							“I could run this company better than you.”
						</motion.span>{" "}
						💼✨
						<p>
							Think of your CV as a blockbuster trailer, not the entire movie.
							Big Tech recruiters skim through CVs faster than a Netflix intro
							skip. 🎥
						</p>
						<li>
							<h3 className="text-xl md:text-2xl font-semibold text-white py-6">
								Keep It Short: Nobody Has Time for the ‘Director’s Cut’ ⏳
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Keep it{" "}
									<motion.span
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.2 }}
										transition={{ duration: 0.3 }}
										className="font-bold text-white"
									>
										one page
									</motion.span>
									—no exceptions. Yes, even if you have 30 years of experience.
								</li>
								<li>
									Use{" "}
									<motion.span
										initial={{ rotate: 0 }}
										whileHover={{ rotate: 360 }}
										transition={{ duration: 1 }}
										className="font-bold text-white"
									>
										LaTeX
									</motion.span>{" "}
									for clean formatting that screams “serious candidate.” 🧑‍💻📐
								</li>
							</ul>
						</li>
						<li>
							<h3 className="text-xl md:text-2xl font-semibold text-white py-6">
								Experience: The Main Event 🌟
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Start with your professional experience—skip the high school
									coding club days. 🎤
								</li>
								<li>
									Focus on{" "}
									<motion.span
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.2 }}
										transition={{ duration: 0.3 }}
										className="font-bold text-white"
									>
										impact
									</motion.span>
									, not just activity. Replace vague achievements with
									measurable results:
									<span className="font-bold text-white">
										“saved the company $1.2 million annually by reducing
										processing time by 40%.”
									</span>{" "}
									💵
								</li>

								<li>New to the workforce? Highlight your projects instead!</li>
							</ul>
						</li>
						<li>
							<h3 className="text-xl md:text-2xl font-semibold text-white py-6">
								Education: Only as Impressive as You Make It 🎓
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									If you went to MIT or Stanford, congratulations—you win this
									section. 🏆
								</li>
								<li>
									Didn’t attend a big-name school? Highlight{" "}
									<span className="text-white font-bold">certifications</span>,
									boot camps, or online courses instead. 📜
								</li>
								<li>
									Showcase the work ethic and skills that got you where you are.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="text-xl md:text-2xl font-semibold text-white py-6">
								Projects: Flex Your Creative Muscles 🛠️
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Your side projects are your secret weapon. More star on your
									Github profile, the better. 🌟
								</li>
								<li>
									Highlight contributions to{" "}
									<motion.span
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.2 }}
										transition={{ duration: 0.3 }}
										className="font-bold text-white"
									>
										open-source projects
									</motion.span>{" "}
									or personal experiments.
								</li>
								<li>
									Include quantifiable success metrics to stand out, becuase
									"Built an app for social meetings" is not as impressive as{" "}
									<span className="font-bold text-white">
										“Built an app with 10,000 daily users”
									</span>{" "}
									🚀
								</li>
							</ul>
						</li>
						<li>
							<h3 className="text-xl md:text-2xl font-semibold text-white py-6">
								Skills: Honesty Over Buzzwords 🛡️
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Only list skills you can confidently explain without Googling.
									🔍
								</li>
								<li>
									Keep it relevant to the job—e.g.,{" "}
									<span className="text-white font-bold">
										Python, TensorFlow
									</span>
									, and <span className="text-white font-bold">AWS</span>. 🛠️
								</li>
								<li>
									And no,{" "}
									<motion.span
										initial={{ rotate: 0 }}
										whileHover={{ rotate: 10 }}
										transition={{ duration: 0.3 }}
										className="font-bold text-white"
									>
										“Microsoft Word”
									</motion.span>{" "}
									is not a skill unless you’re applying for a 1990s clerical
									job. 🕰️
								</li>
							</ul>
						</li>
					</div>
				</motion.ol>
			</motion.ul>
		</div>
	);
}
