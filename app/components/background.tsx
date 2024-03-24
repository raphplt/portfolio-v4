import { Suspense } from "react";

export const Background = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<video
				autoPlay
				loop
				muted
				style={{
					position: "fixed",
					width: "100%",
					left: "50%",
					top: "50%",
					height: "100%",
					objectFit: "cover",
					transform: "translate(-50%, -50%)",
					zIndex: "-1",
					background: "black",
				}}
			>
				<source src="/assets/space_video.mp4" type="video/mp4" />{" "}
			</video>
		</Suspense>
	);
};
