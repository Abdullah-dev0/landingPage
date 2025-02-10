"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import Image from "next/image";

// Sample team data
const teamMembers = [
	{
		role: "KJ - Lead Generation Expert",
		image: "/images/carosel1.jpg",
	},
	{
		role: "Potipher - Appointment Setter",
		image: "/images/carosel2.png",
	},
	{
		role: "Felipe - Chief Operations Officer",
		image: "/images/carosel3.png",
	},

	{
		role: "Natchia - Campaign Manager",
		image: "/images/carosel4.png",
	},

	{
		role: "Vinayak - Lead Generation Manager",
		image: "/images/carosel5.jpg",
	},
];

export function TeamCarousel() {
	const [api, setApi] = React.useState<any>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className="max-w-5xl mx-auto px-6 space-y-4">
			<h2 className="text-3xl font-bold text-center text-[#424867]">Our team</h2>
			<div className="relative">
				<Carousel
					setApi={setApi}
					className="w-full"
					opts={{
						align: "start",
						loop: true,
					}}>
					<CarouselContent className="-ml-2 md:-ml-4">
						{teamMembers.map((member, index) => (
							<CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
								<Card className="border-none shadow-none bg-transparent">
									<CardContent className="p-0">
										<div className="relative aspect-square overflow-hidden rounded-lg">
											<Image src={member.image} fill className="object-cover" alt={member.role} />
										</div>
										<div className="mt-4 text-center flex justify-center gap-3 items-center">
											<span className="text-base text-gray-600">{member.role}</span>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex -left-12" />
					<CarouselNext className="hidden md:flex -right-12" />
				</Carousel>

				<div className="flex justify-center gap-2 mt-8">
					{Array.from({ length: count }).map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-black" : "bg-gray-300"}`}
							onClick={() => api?.scrollTo(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
