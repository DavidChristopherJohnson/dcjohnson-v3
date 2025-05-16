export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  connections: Particle[];
  connectionTimers: Map<Particle, { timer: number, alpha: number }>;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = 2 + Math.random() * 2;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    this.connections = [];
    this.connectionTimers = new Map();
  }

  update(canvasWidth: number, canvasHeight: number) {
    // Update position
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off walls
    if (this.x > canvasWidth || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY *= -1;
    }
    
    // Keep particles in bounds
    this.x = Math.max(0, Math.min(this.x, canvasWidth));
    this.y = Math.max(0, Math.min(this.y, canvasHeight));
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw particle
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw connections
    this.connections.forEach(particle => {
      const connectionData = this.connectionTimers.get(particle);
      if (connectionData) {
        const distance = Math.sqrt(
          Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)
        );
        
        // Check if too far apart
        if (distance > 250) {
          // Simply remove connection
          this.connections = this.connections.filter(p => p !== particle);
          this.connectionTimers.delete(particle);
          return;
        }
        
        // Increment timer for connection line glow effect
        connectionData.timer += 0.05;
        if (connectionData.timer > 1) {
          connectionData.timer = 1;
        }
        
        // Draw line with glow effect
        const alpha = connectionData.alpha * (1 - (distance / 250));
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
        
        // Add glow
        ctx.strokeStyle = `rgba(100, 180, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.globalAlpha = connectionData.timer * 0.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    });
  }
}

export default Particle; 