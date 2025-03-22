export class Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
	colour: string;

	constructor(canvasWidth: number, canvasHeight: number, colours: string[]) {
		this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
		this.vx = (-0.5 + Math.random()) * 0.5;
		this.vy = (-0.5 + Math.random()) * 0.5;
		this.radius = Math.random() * 1.5;
		this.colour = colours[Math.floor(Math.random() * colours.length)];
	}

	create(
		ctx: CanvasRenderingContext2D,
		mousePosition: { x: number; y: number },
		windowSize: number
	) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

		// Fading effect based on distance from mouse
		const dotDistance = Math.hypot(this.x - mousePosition.x, this.y - mousePosition.y);
		const distanceRatio = dotDistance / (windowSize / 1.7);
		ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;

		ctx.fill();
	}

	animate(canvasWidth: number, canvasHeight: number) {
		if (this.y < 0 || this.y > canvasHeight) this.vy = -this.vy;
		if (this.x < 0 || this.x > canvasWidth) this.vx = -this.vx;
		this.x += this.vx;
		this.y += this.vy;
	}
}
