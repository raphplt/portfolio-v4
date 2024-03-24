import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Text } from "@react-three/drei";

const TextRing = ({ count, radius, texts, ...props }: any) => {
	const group = useRef<Mesh>(null!);

	const calculatePosition = (index: any) => {
		const angle = ((Math.PI * 2) / count) * index;
		const x = Math.cos(angle) * radius;
		const z = Math.sin(angle) * radius;
		return [x, 0, z];
	};

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		group.current.rotation.y = elapsedTime / 2;
	});

	return (
		<group ref={group as any}>
			{texts.map((text: any, index: any) => (
				<Text
					key={index}
					position={calculatePosition(index)} // Remove 'new' keyword
					rotation={[0, Math.PI, 0]} // Rotate 180 degrees to face outward
					{...props}
				>
					{text}
				</Text>
			))}
		</group>
	);
};

export default TextRing;
