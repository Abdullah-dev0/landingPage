"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ href: "/blog", label: "Blog Posts" },
		{ href: "/cold-email", label: "Cold Email Script Writing" },
		{ href: "/consulting", label: "Consulting" },
		{ href: "/pricing", label: "Pricing" },
		{ href: "/training", label: "Free Training" },
		{ href: "/clients", label: "Happy Clients" },
	];

	return (
		<nav className="fixed w-full bg-white shadow-md z-50 border-b border-black">
			<div className="px-4">
				{/* Desktop Navigation */}
				<div className="hidden lg:flex justify-between h-16 items-center">
					<div className="flex items-center gap-8">
						<Image src="/images/logo.png" width={150} height={40} alt="Logo" />
						<div className="flex space-x-8">
							{menuItems.map((item) => (
								<Link key={item.href} href={item.href} className="text-gray-600 hover:text-blue-600">
									{item.label}
								</Link>
							))}
						</div>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="outline" className="rounded-full border-2 border-black p-5">
							Contact us
						</Button>
						<Button className="bg-[#FF905A] rounded-full border-2 hover:bg-transparent hover:text-[#FF905A]  hover:underline hover:border-[#FF905A]  text-white p-5 text-base ">
							Book a call
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="lg:hidden flex flex-col justify-center items-center py-4 space-y-4">
					<Image src="/images/logo.png" width={120} height={32} alt="Logo" priority className="mx-auto" />
					<div className="relative">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-600 hover:text-blue-600 p-2 transition-all"
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
					{!isMenuOpen && (
						<Button className="bg-[#FF905A] rounded-full border-2 hover:bg-transparent hover:text-[#FF905A] text-white px-4 py-2 text-sm">
							Book a call
						</Button>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="lg:hidden absolute top-[144px] left-0 w-full bg-white border-b border-black">
					<div className="px-4 py-2 space-y-2">
						{menuItems.map((item) => (
							<Link key={item.href} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600">
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
