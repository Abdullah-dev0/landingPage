import Image from "next/image";
import Link from "next/link";
import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className=" py-6 bg-[#EFF4F9]  border-t border-gray-900 sm:py-8 md:py-12">
			<div className="max-w-5xl mx-auto px-4">
				{/* Logo and Contact Button Section */}
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-12 border-b border-gray-950 py-8">
					<Image src="/images/logo.png" alt="DoneForYou Meetings Logo" width={150} height={150} />
					<Link
						href="/contact"
						className="sm:px-6 py-1 rounded-full border-2 border-[#ff7a59] text-[#ff7a59] hover:underline  transition-colors text-sm sm:text-base">
						Contact us
					</Link>
				</div>


				{/* Main Footer Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
					{/* Our Links */}
					<div>
						<h3 className="text-[#0a2540] text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/blog" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Blog Posts
								</Link>
							</li>
							<li>
								<Link href="/script-writing" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Cold Email Script Writing
								</Link>
							</li>
							<li>
								<Link href="/consulting" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Consulting
								</Link>
							</li>
							<li>
								<Link href="/training" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Free Training
								</Link>
							</li>
							<li>
								<Link href="/clients" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Happy Clients
								</Link>
							</li>
							<li>
								<Link href="/careers" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Careers
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-[#0a2540] text-lg sm:text-xl font-bold mb-3 sm:mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/infrastructure" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Cold Email Infrastructure Setup
								</Link>
							</li>
							<li>
								<Link href="/consulting" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Email Deliverability Consulting
								</Link>
							</li>
							<li>
								<Link href="/lead-generation" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Lead Generation Systems Setup
								</Link>
							</li>
							<li>
								<Link href="/script-writing" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Cold Email Script Writing
								</Link>
							</li>
							<li>
								<Link href="/list-generation" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Lead List Generation
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-[#0a2540] text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact</h3>
						<p className="text-gray-600 mb-4 text-sm sm:text-base">sales@dfymeetings.com</p>
						<div className="flex gap-2">
							<Link href="#" className="p-1.5 sm:p-2 bg-[#5bbfba] text-white rounded hover:bg-[#4aa6a1]">
								<Youtube size={18} className="sm:w-5 sm:h-5" />
							</Link>
							<Link href="#" className="p-1.5 sm:p-2 bg-[#5bbfba] text-white rounded hover:bg-[#4aa6a1]">
								<Twitter size={18} className="sm:w-5 sm:h-5" />
							</Link>
							<Link href="#" className="p-1.5 sm:p-2 bg-[#5bbfba] text-white rounded hover:bg-[#4aa6a1]">
								<Instagram size={18} className="sm:w-5 sm:h-5" />
							</Link>
							<Link href="#" className="p-1.5 sm:p-2 bg-[#5bbfba] text-white rounded hover:bg-[#4aa6a1]">
								<Linkedin size={18} className="sm:w-5 sm:h-5" />
							</Link>
						</div>
					</div>

					{/* Our Products */}
					<div>
						<h3 className="text-[#0a2540] text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Products</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/grow-b2b" className="text-gray-600 hover:text-[#2196f3] text-sm sm:text-base">
									Grow B2B
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="text-center border-t pt-6 sm:pt-8">
					<p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
						© Copyright DFY Meetings. 2023. All rights reserved.
					</p>
					<div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
						<Link href="/terms" className="text-[#ff7a59] hover:underline">
							Terms of Use
						</Link>
						<span className="text-gray-400 hidden sm:inline">–</span>
						<Link href="/cookie-policy" className="text-[#ff7a59] hover:underline">
							Cookie Policy
						</Link>
						<span className="text-gray-400 hidden sm:inline">–</span>
						<Link href="/privacy" className="text-[#ff7a59] hover:underline">
							Privacy Policy
						</Link>
						<span className="text-gray-400 hidden sm:inline">–</span>
						<Link href="/support" className="text-[#ff7a59] hover:underline">
							Customer Support
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
