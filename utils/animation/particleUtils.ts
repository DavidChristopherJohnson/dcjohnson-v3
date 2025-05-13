import Particle from './Particle';

/**
 * Creates an array of particles
 * @param canvasWidth - Width of the canvas
 * @param canvasHeight - Height of the canvas
 * @returns Array of Particle instances
 */
export function createParticles(canvasWidth: number, canvasHeight: number): Particle[] {
  const particles: Particle[] = [];
  const particleCount = Math.min(
    Math.max(Math.floor((canvasWidth * canvasHeight) / 15000), 50), 
    150
  );
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvasWidth, canvasHeight));
  }
  
  return particles;
}

/**
 * Calculate the distance between two particles
 * @param p1 - First particle
 * @param p2 - Second particle
 * @returns Distance between the particles
 */
export function calculateDistance(p1: Particle, p2: Particle): number {
  return Math.sqrt(
    Math.pow(p1.x - p2.x, 2) + 
    Math.pow(p1.y - p2.y, 2)
  );
}

/**
 * Check and establish new connections between particles
 * @param particles - Array of particles to check
 */
export function checkNewConnections(particles: Particle[]): void {
  particles.forEach(particle => {
    particles.forEach(otherParticle => {
      if (particle === otherParticle) return;
      
      const distance = calculateDistance(particle, otherParticle);
      
      // If close enough and not already connected
      if (distance < 200 && !particle.connections.includes(otherParticle)) {
        // 1% chance to connect when close
        if (Math.random() < 0.01) {
          particle.connections.push(otherParticle);
          particle.connectionTimers.set(otherParticle, { timer: 0, alpha: 0.4 });
        }
      }
    });
  });
}

/**
 * Animation frame handler for particles
 * @param ctx - Canvas rendering context
 * @param canvas - Canvas element
 * @param particles - Array of particles
 */
export function animateParticles(
  ctx: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  particles: Particle[]
): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update and draw particles
  particles.forEach(particle => {
    particle.update(canvas.width, canvas.height);
    particle.draw(ctx);
  });
  
  // Check for new connections
  checkNewConnections(particles);
} 