export default function Header() {
	return (
		<header className="grid grid-cols-3 justify-items-center mt-2 text-white">
			<div className="flex gap-20">
				<a href="/">A propos</a>
				<a href="/contact">Mes projets</a>
				<a href="/competences">Compétences</a>
				<a href="/contact">Contact</a>
			</div>
			<p>Raphaël</p>
			<a href="/">Github</a>
		</header>
	);
}
