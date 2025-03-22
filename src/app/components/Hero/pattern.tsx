"use client";
import { useEffect, useRef } from "react";
import { Particle } from "./Particle";

const Pattern = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particleRef = useRef<Particle[]>([]);
	const animationRef = useRef<number | null>(null);

	// Let's have an array for the particles
	const particleColours = ["rgb(50, 205, 50)", "rgb(30, 144, 255)"];

	const calculateParticleSettings = () => {
		const windowSize = window.innerWidth;
		if (windowSize > 1600) return { n: 600, distance: 70, d_radius: 300 };
		if (windowSize > 1300) return { n: 575, distance: 60, d_radius: 280 };
		if (windowSize > 1100) return { n: 500, distance: 55, d_radius: 250 };
		return { n: 200, distance: 70, d_radius: 150 };
	};

	useEffect(() => {
		const { current: canvas } = canvasRef;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx.lineWidth = 0.7;
		ctx.strokeStyle = particleColours[4];

		const windowSize = window.innerWidth;
		let mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };

		const { n, d_radius, distance } = calculateParticleSettings();

		// Create the particles
		particleRef.current = Array.from(
			{ length: n },
			() => new Particle(canvas.width, canvas.height, particleColours)
		);

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particleRef.current.forEach((dot) => dot.create(ctx, mousePosition, windowSize));
			particleRef.current.forEach((dot) => dot.animate(canvas.width, canvas.height));

			// Draw connecting lines
			for (let i = 0; i < n; i++) {
				for (let j = i + 1; j < n; j++) {
					const dotA = particleRef.current[i];
					const dotB = particleRef.current[j];

					if (
						Math.abs(dotA.x - dotB.x) < distance &&
						Math.abs(dotA.y - dotB.y) < distance &&
						Math.abs(dotA.x - mousePosition.x) < d_radius &&
						Math.abs(dotA.y - mousePosition.y) < d_radius
					) {
						ctx.beginPath();
						ctx.moveTo(dotA.x, dotA.y);
						ctx.lineTo(dotB.x, dotB.y);

						const dotDistance = Math.hypot(
							dotA.x - mousePosition.x,
							dotA.y - mousePosition.y
						);
						let distanceRatio = dotDistance / d_radius;
						distanceRatio = Math.max(distanceRatio - 0.3, 0);

						ctx.strokeStyle = `rgb(0, 128, 0, ${1 - distanceRatio})`;
						ctx.stroke();
					}
				}
			}

			animationRef.current = requestAnimationFrame(draw);
		};

		const updateMousePosition = (event: MouseEvent) => {
			mousePosition = { x: event.pageX, y: event.pageY };
			particleRef.current[0].x = event.pageX;
			particleRef.current[0].y = event.pageY;
		};

		const handleResize = () => {
			cancelAnimationFrame(animationRef.current!);
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			particleRef.current = Array.from(
				{ length: n },
				() => new Particle(canvas.width, canvas.height, particleColours)
			);
			particleRef.current[0].radius = 1.5;
			particleRef.current[0].colour = "#51a2e9";
			draw();
		};

		window.addEventListener("mousemove", updateMousePosition);
		window.addEventListener("resize", handleResize);

		draw();

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationRef.current!);
		};
	}, []);

	return <canvas ref={canvasRef} className="h-full w-full block bg-white" />;
};

export default Pattern;
