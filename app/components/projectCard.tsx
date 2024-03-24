import React from "react";

export default function ProjectCard({ title, description }: any) {
	return (
		<div className="relative overflow-hidden bg-blue-950 rounded-2xl shadow-lg p-6 w-96 h-64 border-[2px] border-gray-800">
			<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 opacity-20 rounded-xl"></div>
			<h2 className="text-xl font-bold mb-2 relative z-10">{title}</h2>
			<p className="text-gray-100 relative z-10">{description}</p>
		</div>
	);
}
