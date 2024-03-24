"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import TextRing from "./textRing";

function MeshComponent() {
	const fileUrl = "/purple_planet/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	useFrame(() => {
		mesh.current.rotation.y += 0.001;
	});

	return (
		<mesh ref={mesh}>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

export function Planet() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas className="h-2xl w-2xl">
				<OrbitControls />
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<MeshComponent />
				<TextRing
					count={7}
					radius={5}
					texts={[
						"NextJS",
						"React",
						"Three.js",
						"TailwindCSS",
						"TypeScript",
						"GraphQL",
						"Node.js",
					]}
				/>
			</Canvas>
		</div>
	);
}
