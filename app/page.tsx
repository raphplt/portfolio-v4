import { Background } from "./components/background";
import DescriptionContainer from "./components/containers/descriptionContainer";
import Header from "./components/header";
import ProjectContainer from "./components/containers/projectsContainer";
import { SkillsContainer } from "./components/containers/skillsContainer";

export default function Home() {
	return (
		<>
			<Header />
			<Background />
			<main>
				<DescriptionContainer />
				<ProjectContainer />
				<SkillsContainer />
			</main>
		</>
	);
}
