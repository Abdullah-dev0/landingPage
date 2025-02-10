"use client";
import { Button } from "@/components/ui/button";
import { faqs, testimonials } from "@/constants";
import { guides } from "@/constants/";
import {
	ArrowRightCircle,
	Check,
	ChevronRight,
	ChevronUp,
	Instagram,
	Linkedin,
	MessageCircle,
	Twitter
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./Card";
import { TeamCarousel } from "./carosel";
import Footer from "./Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { CardContent, Card as UiCard } from "./ui/card";

export function HeroSection() {
	const [openItem, setOpenItem] = useState<string | undefined>("");

	return (
		<div className="relative bg-gradient-to-br from-white to-[#4BB7D3]/10  mx-auto">
			<div className="max-w-6xl mx-auto px-4 p5-8 md:py-16 lg:pt-24">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pt-28 max-md:pt-48">
					<div className="space-y-4 md:space-y-6 text-left lg:text-left">
						<h5 className="font-nunito text-[32px]  max-sm:text-lg font-bold leading-[40px] tracking-[1px] text-[#394063]">
							We Help B2B Businesses Set up & Manage Cold Email Systems That
							<span className="text-[#FF9776]"> Predictably</span> Fill Their Pipelines With Qualified Prospects
						</h5>
						<p className="text-gray-700 font-normal max-w-2xl mx-auto lg:mx-0 font-nunito">
							Done For You Meetings sets up cold email systems & infrastructure within your business, so you own an
							asset that consistently gets you sales calls and clients.
						</p>
						<p className="text-[#424141] font-nunito text-lg font-bold underline">
							Skip the hassle of figuring things out yourself. Use our 7 years of experience booking 5,000+ sales calls
							to cut the line and get better results without wasting time.
						</p>
						<Button className="bg-[#FF905A] rounded-full border-2 hover:bg-transparent hover:text-[#FF905A]  hover:underline hover:border-[#FF905A]  text-white px-6 py-6 text-base ">
							Speak to our team today
							<span>
								<ArrowRightCircle />
							</span>
						</Button>
					</div>
					<div className=" mt-8 lg:mt-0">
						<Image src="/images/hero-image.png" width={600} height={600} alt="Hero Image" />
					</div>
				</div>
			</div>
			<section className="max-w-5xl relative mx-auto text-center">
				<div className=" w-full h-36 bg-[url('/images/bg.png')] bg-bottom bg-no-repeat bg-[length:35%_auto] opacity-10 mix-blend-multiply transition-all duration-300 bg-[#85B1CF00]"></div>
				<div className=" bg-white p-8 shadow-lg  rounded-3xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">15+ years of combined Cold Email experience</h2>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
						<div>
							<p className="text-2xl font-bold text-[#FF905B]">200,000+</p>
							<p className="text-gray-600">Cold Emails Sent</p>
						</div>
						<div>
							<p className="text-2xl font-bold text-[#FF905B]">10,000+</p>
							<p className="text-gray-600">Replies Received</p>
						</div>
						<div>
							<p className="text-2xl font-bold text-[#FF905B]">5,000+</p>
							<p className="text-gray-600">Meetings Booked</p>
						</div>
						<div>
							<p className="text-2xl font-bold text-[#FF905B]">240+</p>
							<p className="text-gray-600">Business Served</p>
						</div>
						<div>
							<p className="text-2xl font-bold text-[#FF905B]">7+</p>
							<p className="text-gray-600">Figures in Revenue Generated</p>
						</div>
					</div>
					<hr className="my-6 border-gray-300" />
					<div className="flex justify-center flex-wrap items-center gap-4 mt-4">
						<p className="text-gray-900 w-32 font-medium">Read our reviews on</p>
						<Image
							src="/images/image2.jpg"
							width={150}
							height={150}
							alt="image2"
							className="animate-in cursor-pointer duration-300"
						/>
						<div className="flex flex-col gap-2 justify-center items-center">
							<Image
								src="/images/image3.jpg"
								width={60}
								height={60}
								alt="image3"
								className="animate-in cursor-pointer duration-300"
							/>
							<p className="text-[#86A6BA]">Clutch.co</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-24 space-y-12 text-center max-w-6xl mx-auto">
				<p className="text-2xl md:text-4xl font-bold text-[#394063]">What We Offer</p>
				<p className="w-16 h-1 mx-auto bg-[#FF905A] mt-2"></p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
					<Card
						title="Email Deliverability Consulting + Management"
						description="Having issues staying out of spam? Our team can diagnose why and help fix any issues."
						image="/images/mascot-1.png"
					/>
					<Card
						title="Cold Email Infrastructure Setup + Management"
						description="We'll set up a system within your business that covers the A-Z of cold email, including tech, list building, scripts, & appointment setting."
						image="/images/lis-gardian3-A243-01-1.png"
					/>
					<Card
						title="Lead List Generation Systems Setup"
						description="We'll set up the systems and processes necessary to build high-quality lists in-house."
						image="/images/lis-gardian3-A243-01-2.png"
					/>
				</div>
				<Button className="bg-[#FF905A] rounded-full border-2 hover:bg-transparent hover:text-[#FF905A]  hover:underline hover:border-[#FF905A]  text-white px-6 py-6 text-base ">
					Speak to our team today
					<span>
						<ArrowRightCircle />
					</span>
				</Button>
			</section>
			{/* happy clients */}
			<section className="max-w-6xl mx-auto mt-5">
				<div className="bg-[url('/images/image-1.png')] -mb-3  bg-bottom bg-no-repeat bg-[length:28%_auto] opacity-10 mix-blend-multiply transition-all duration-300 bg-[#85B1CF00] w-full h-[200px]"></div>
				<div className="w-full overflow-hidden bg-white flex  items-center shadow-lg rounded-xl p-4">
					<div className="relative flex items-center w-full">
						<p className="whitespace-nowrap text-lg pl-8 flex-shrink-0 min-w-[250px] my-auto">
							Some of our <span className="font-semibold">happy clients</span> ⚡️
						</p>
						<div className="flex-1 overflow-hidden">
							<div className="flex animate-scroll">
								<div className="flex min-w-full justify-center items-center gap-8">
									<Image
										src="/images/slideimage1.png"
										alt="Client 1"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>
									<Image
										src="/images/slideimage2.png"
										alt="Client 2"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage3.png"
										alt="Client 3"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage4.png"
										alt="Client 4"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage5.png"
										alt="Client 5"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage6.png"
										alt="Client 6"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>
								</div>
								<div className="flex min-w-full justify-center items-center gap-8">
									<Image
										src="/images/slideimage1.png"
										alt="Client 1"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage2.png"
										alt="Client 2"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage3.png"
										alt="Client 3"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage4.png"
										alt="Client 4"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage5.png"
										alt="Client 5"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>

									<Image
										src="/images/slideimage6.png"
										alt="Client 6"
										width={60}
										height={40}
										className="object-contain my-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* testimonials */}
			<section className=" text-center max-w-6xl mx-auto mt-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{testimonials.map((testimonial, index) => (
						<UiCard key={index} className="bg-transparent shadow-none border-0">
							<CardContent className="p-6">
								<div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
									<iframe
										src={testimonial.videoLink}
										width="100%"
										height="100%"
										allow="autoplay; fullscreen"
										allowFullScreen
										className="absolute inset-0 w-full h-full object-cover"
										style={{
											backgroundImage: `url(${testimonial.imageLink})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
										}}></iframe>
								</div>
								<div className="space-y-2">
									<h3 className="font-medium text-gray-900 space-x-1 text-center">
										{testimonial.name} , <span>{testimonial.role}</span>
										<span className="text-[#FF9776] underline">{testimonial.company}</span>
									</h3>
									<p className="text-gray-600 text-[16px] text-center">{testimonial.service}</p>
								</div>
							</CardContent>
						</UiCard>
					))}
				</div>
				<Button className="bg-[#FF905A] rounded-full border-2 hover:bg-transparent hover:text-[#FF905A] hover:underline self-center hover:border-[#FF905A] text-white px-6 py-6 text-base">
					see more testimonials
				</Button>
			</section>
			{/* faqs */}
			<div className="mx-auto px-4 py-16">
				<h2 className="text-4xl font-semibold text-center mb-12 text-[#424867]">Frequently Asked Questions</h2>
				<div className="max-w-5xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4" value={openItem} onValueChange={setOpenItem}>
						{faqs.map((faq, index) => {
							const itemValue = `item-${index + 1}`;
							const isOpen = openItem === itemValue;
							return (
								<AccordionItem key={index} value={itemValue} className="border rounded-lg shadow-lg bg-white px-6">
									<AccordionTrigger className="text-lg hover:no-underline group">
										<span
											className={`flex items-center hover:text-[#65C9D1] hover:underline ${
												isOpen ? "text-[#FF7759] underline" : "text-[#424867]"
											}`}>
											{isOpen ? <ChevronUp className="w-5 h-5 mr-2" /> : <ChevronRight className="w-5 h-5 mr-2" />}
											{faq.question}
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-[#0F4C75] pt-4 pb-2 text-[16px] p-6">{faq.answer}</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
			<section className="text-center py-12 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-20">
						<div className="w-full md:w-auto">
							<Image
								src="/images/square-1.png"
								width={380}
								height={380}
								className="rounded-3xl w-full"
								alt="Hero Image"
							/>
						</div>
						<div className="text-left space-y-6 w-full md:w-auto">
							<h2 className="text-2xl md:text-3xl font-bold mt-2 text-[#394063] md:text-left">
								Michael Gardiner - Founder and CEO
							</h2>
							<p className="text-gray-600 mt-2  md:text-left">
								Michael Gardiner has been a serial entrepreneur for over 7 years, having built multiple successful
								online agencies, including one which was acquired.
							</p>
							<div className="flex space-x-4 mt-4 justify-center md:justify-start">
								<button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
									<Twitter size={20} />
								</button>
								<button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
									<Instagram size={20} />
								</button>
								<button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
									<Linkedin size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TeamCarousel />
			<section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-4 pt-5 items-center grid-cols-1">
				<div></div>
				<UiCard className="w-[400px] bg-transparent border-none shadow-none">
					<CardContent className="p-6">
						<h2 className="mb-4 text-2xl font-semibold text-gray-800">Let&apos;s Get Introduced 👋</h2>
						<p className="mb-6 text-gray-600">
							This is a conversation to get to know you, your business, and see if there is potential to help. Not
							everyone is a good fit, and if we decide that we can&apos;t help you, you will still learn actionable
							tactics to implement on your own.
						</p>

						<div className="space-y-4">
							<h3 className="font-medium text-gray-700">This call is for:</h3>
							<div className="space-y-3">
								{[
									"Businesses who understand they can't do everything on their own and want an expert to help them",
									"Businesses with a proven offer, ICP, and sales process who are ready to take on consistent sales calls",
									"Businesses who want their reps focusing on taking calls, not thinking about where the next one is coming from.",
								].map((text, i) => (
									<div key={i} className="flex items-start gap-2">
										<div className="mt-1 rounded-full bg-primary/10 p-1">
											<Check className="h-3 w-3 text-primary" />
										</div>
										<p className="text-sm text-gray-600">{text}</p>
									</div>
								))}
							</div>
						</div>
					</CardContent>
				</UiCard>
			</section>
			<div className="py-8 px-4 sm:px-6 lg:px-8 ">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-bold text-center text-[#2f3d6d] mb-12">Cold Email Tips Tricks & More</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{guides.map((guide, index) => (
							<UiCard key={index} className="overflow-hidden h-fit">
								<CardContent className="p-0">
									<Image
										src={guide.image || "/placeholder.svg"}
										alt={guide.title}
										width={200}
										height={100}
										className="object-cover w-full"
									/>
									<div className="px-2">
										<h2 className="text-[15px] font-semibold text-[#2f3d6d] hover:underline hover:text-blue-500 cursor-pointer text-center">
											{guide.title}
										</h2>
									</div>
								</CardContent>
							</UiCard>
						))}
					</div>
				</div>
			</div>
			<section className="py-12 px-4 max-w-5xl mx-auto">
				<h2 className="text-center text-[#2b3a67] text-3xl md:text-4xl font-bold mb-8">Follow Us on YouTube</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-5">
					{/* Video 1 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/3Q_Z8ThXr3M"
							title="How To Write a Cold Email - Best Template"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"></iframe>
					</div>

					{/* Video 2 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/4CB1RNrFEB4"
							title="How to Write Cold Email Subject Lines That Get Opened"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>

					{/* Video 3 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/919LdVTJZ9U"
							title="How Many Cold Emails Should You Send"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>

					{/* Video 4 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/gDUEf3t839I"
							title="How to Write Killer Case Studies for Cold Email"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>

					{/* Video 5 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/D3tVa6Tahfc"
							title="List Building for Cold Email | Where to Hire &amp; How Much to Pay"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>

					{/* Video 6 */}
					<div className="aspect-video rounded-lg mx-auto overflow-hidden">
						<iframe
							width="343"
							height="193"
							src="https://www.youtube.com/embed/rryTo4KnAog"
							title="How To Double Your Agency Revenue In 90 Days"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>
				</div>
			</section>

			<div className="max-w-6xl mx-auto p-8 space-y-12">
				{/* Twitter Section */}
				<section className="space-y-8">
					<h2 className="text-4xl font-bold text-center text-[#55638D]">Follow Us on Twitter</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
						{/* First Tweet */}
						<div className="space-y-4">
							<p className="">
								From running my B2B lead gen agency I get to work with many agencies that are significantly larger than
								mine.
							</p>
							<p className="">There&apos;s one thing that 80% of my best clients have in common.</p>
							<p className="">
								If you can understand and implement this you&apos;re significantly more likely to succeed.
							</p>
							<p className="">(Continued) 👇</p>
							<div className="">
								— Michael Gardiner (@mgentrepreneur)
								<div className="text-[#FF6B4B]">November 20, 2022</div>
							</div>
						</div>

						{/* Second Tweet */}
						<div className="space-y-4">
							<p className="">
								I&apos;ve booked 1000+ agency meetings worth millions for myself and others in the last two years using
								cold email.
							</p>
							<p className="">
								Here&apos;s how to set up an email campaign that will land you clients while you sleep.
							</p>
							<p className="">~ Thread ~</p>
							<div className="">
								— Michael Gardiner (@mgentrepreneur)
								<div className="text-[#FF6B4B]">June 15, 2022</div>
							</div>
						</div>

						{/* Third Tweet */}
						<div className="space-y-4">
							<p className="">Not sure how to judge your cold emails?</p>
							<p className="">
								Here&apos;s the KPI&apos;s we use internally based on data gathered from working with 100+ businesses:
							</p>
							<div className="">
								— Michael Gardiner (@mgentrepreneur)
								<div className="text-[#FF6B4B]">September 23, 2022</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className="py-16 text-center max-w-6xl mx-auto">
				<div className="flex flex-col gap-5 justify-center">
					<h2 className="text-4xl font-bold text-center text-[#55638D]">Have a general inquiry?</h2>
					<p>Contact one of our experts at: sales@dfymeetings.com</p>
					<Button className="bg-[#FF905A] w-fit mx-auto rounded-full border-2 hover:bg-transparent hover:text-[#FF905A]  hover:underline hover:border-[#FF905A]  text-white px-6 py-6 text-base ">
						Speak to our team today
						<span>
							<ArrowRightCircle />
						</span>
					</Button>
				</div>
			</section>
			<Footer />
			<div className="fixed bottom-4 right-4">
				<button className="bg-[#66BB6A] p-3 rounded-full hover:bg-[#4CAF50] transition-colors">
					<MessageCircle className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
