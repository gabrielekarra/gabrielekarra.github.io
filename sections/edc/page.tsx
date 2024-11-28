import { Scroll } from "../../components/edcHeader";
import { Ticker } from "../../components/tickerMusic";

export default function Edc() {
	return (
		<div className="container mx-auto max-w-6xl px-4">
			<ul className="list-none">
				<li>
					<div className="flex flex-col md:flex-row items-center justify-center mb-6">
						<div className="p-10 flex items-center justify-center relative w-full">
							<div className="w-full relative h-full">
								<div className="max-w-5xl mx-auto text-center">
									<Scroll />
									<span className="text-5xl lg:text-6xl font-bold mt-1 leading-none">
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
				</li>
			</ul>
		</div>
	);
}
