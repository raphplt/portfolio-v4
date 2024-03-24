import { Background } from "./components/background";
import Header from "./components/header";
import ProjectContainer from "./components/projectsContainer";

export default function Home() {
	return (
		<>
			<Header />
			<Background />
			<main>
				<section className="grid grid-cols-2 mt-48">
					<div className=" flex flex-col gap-5 ml-24 h-[80vh]">
						<h1 className="text-4xl">👋 Bienvenue, je suis</h1>
						<h1 className="text-8xl">Raphaël</h1>
						<h1 className="text-3xl">Développeur Full-stack</h1>
					</div>
				</section>
				<ProjectContainer />
				<section className="w-10/12 mx-auto mt-24">
					<h2 className="text-3xl italic mb-8">Compétences</h2>
					<div className="grid grid-cols-3 gap-12">
						<div>
							<h3 className="text-2xl mb-4">Front-end</h3>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>React</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl mb-4">Back-end</h3>
							<ul>
								<li>Node.js</li>
								<li>Express</li>
								<li>PostgreSQL</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl mb-4">Outils</h3>
							<ul>
								<li>Git</li>
								<li>VSCode</li>
								<li>Postman</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
