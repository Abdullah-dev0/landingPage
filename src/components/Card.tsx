import Image from "next/image";
import React from "react";

type CardProps = {
	title: string;
	description: string;
	image: string;
};

export const Card = ({ title, description, image }: CardProps) => {
	return (
		<div className="relative bg-white shadow-lg rounded-2xl p-8 hover:bg-orange-100 hover:text-white ">
			<div className="flex flex-col items-center text-center space-y-5">
				<Image src={image} width={150} height={150} alt={title} />
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#394063] hover:text-orange-800">{title}</h3>
				<p className="text-gray-600 mt-2 hover:text-orange-700">{description}</p>
			</div>
		</div>
	);
};
