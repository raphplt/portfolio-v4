"use client";
import React, { useState, useEffect } from "react";

export default function ProjectContainer() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [scroll, setScroll] = useState(0);
	const [numProjects, setNumProjects] = useState(5); // Modifier selon le nombre de projets

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById("projectContainerSection");
			if (!section) return;

			setScroll(window.scrollY - section.offsetTop);
			const windowHeight = window.innerHeight;
			const scrollTop = window.scrollY;
			const sectionHeight = section.getBoundingClientRect().height;
			const middleOffset = windowHeight * 0.4 + scrollTop - section.offsetTop;

			let middleIndex = 0;
			const spanElements = document.querySelectorAll(".project-span");

			spanElements.forEach((span, index) => {
				const rect = span.getBoundingClientRect();
				if (rect.top < middleOffset && rect.bottom > middleOffset) {
					middleIndex = index;
				}
			});

			// if (scrollTop + windowHeight >= section.offsetTop + sectionHeight) {
			// 	middleIndex = numProjects - 1;
			// }

			setActiveIndex(middleIndex);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [numProjects]);

	useEffect(() => {
		const spanHeight = `${100 / numProjects}%`;
		const spans = document.querySelectorAll(".project-span");

		spans.forEach((span: any) => {
			span.style.height = spanHeight;
		});
	}, [numProjects]);

	return (
		<>
			<h1 className="w-10/12 mx-auto text-3xl italic">
				Projets
				{/* : {activeIndex} scroll : {scroll} */}
			</h1>
			<div id="projectContainerSection" className="min-h-screen flex">
				<div className="w-1/2 bg-red-300 flex flex-col justify-center items-center">
					{activeIndex === 0 && <div>Contenu du projet 1</div>}
					{activeIndex === 1 && <div>Contenu du projet 2</div>}
					{activeIndex === 2 && <div>Contenu du projet 3</div>}
					{activeIndex === 3 && <div>Contenu du projet 4</div>}
					{activeIndex === 4 && <div>Contenu du projet 5</div>}
				</div>
				<div className="w-1/2 bg-blue-300 flex flex-col items-center">
					{Array.from({ length: numProjects }).map((_, index) => (
						<span
							key={index}
							className={
								activeIndex === index ? "project-span active" : "project-span"
							}
						>
							Project{index + 1}
						</span>
					))}
				</div>
			</div>
		</>
	);
}
