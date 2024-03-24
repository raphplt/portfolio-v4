export default function DescriptionContainer() {
	return (
		<section className="min-h-[90vh] flex flex-col justify-between mb-24">
			<div className="grid grid-cols-2 mt-36">
				<div className=" flex flex-col gap-5 ml-36">
					<h1 className="text-4xl">👋 Bienvenue, je suis</h1>
					<h1 className="text-8xl">Raphaël</h1>
					<h1 className="text-3xl">Développeur Full-stack</h1>
				</div>
			</div>
			<div className="flex justify-end items-center flex-col w-1/2 mx-auto gap-5">
				<p className="text-3xl">Lorem ipsum</p>
				<span className="text-lg">
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
				</span>
			</div>
		</section>
	);
}
