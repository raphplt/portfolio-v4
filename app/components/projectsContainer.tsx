"use client";
import React, { useState, useEffect } from "react";

export default function ProjectContainer() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			console.log("scrolling");
			const spans = document.querySelectorAll(".project-span");
			const windowHeight = window.innerHeight;
			const scrollTop = window.scrollY;
			const middleOffset = windowHeight / 2 + scrollTop;

			console.log(scrollTop, windowHeight, middleOffset);

			let middleIndex = 0;
			spans.forEach((span, index) => {
				const rect = span.getBoundingClientRect();
				if (rect.top < middleOffset && rect.bottom > middleOffset) {
					middleIndex = index;
				}
			});

			setActiveIndex(middleIndex);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const getContent = () => {
		switch (activeIndex) {
			case 0:
				return <div>Contenu du projet 1</div>;
			case 1:
				return <div>Contenu du projet 2</div>;
			case 2:
				return <div>Contenu du projet 3</div>;
			case 3:
				return <div>Contenu du projet 4</div>;
			case 4:
				return <div>Contenu du projet 5</div>;
			default:
				return null;
		}
	};

	return (
		<section>
			<h1 className="w-10/12 mx-auto text-3xl italic">
				Projets index : {activeIndex}
			</h1>
			<div className="min-h-[70vh] grid grid-cols-2">
				<div className="bg-red-300 flex flex-col justify-center">
					<div className="ml-8">{getContent()}</div>
				</div>
				<div className="bg-blue-300 flex flex-col gap-20 items-center justify-center">
					<span
						className={activeIndex === 0 ? "project-span active" : "project-span"}
					>
						Project1
					</span>
					<span
						className={activeIndex === 1 ? "project-span active" : "project-span"}
					>
						Project2
					</span>
					<span
						className={activeIndex === 2 ? "project-span active" : "project-span"}
					>
						Project3
					</span>
					<span
						className={activeIndex === 3 ? "project-span active" : "project-span"}
					>
						Project4
					</span>
					<span
						className={activeIndex === 4 ? "project-span active" : "project-span"}
					>
						Project5
					</span>
				</div>
			</div>
		</section>
	);
}
