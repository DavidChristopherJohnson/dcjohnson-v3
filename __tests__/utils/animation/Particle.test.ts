import { Particle } from '@/utils/animation/Particle';

describe('Particle', () => {
  // Mock for Math.random to make tests deterministic
  const originalRandom = Math.random;
  
  beforeEach(() => {
    // Mock random to return 0.5 for predictable results
    Math.random = jest.fn().mockReturnValue(0.5);
  });
  
  afterEach(() => {
    // Restore original random function
    Math.random = originalRandom;
  });

  describe('constructor', () => {
    it('initializes properties correctly', () => {
      const particle = new Particle(1000, 800);
      
      // With Math.random mocked to return 0.5
      expect(particle.x).toBe(500); // 0.5 * 1000
      expect(particle.y).toBe(400); // 0.5 * 800
      expect(particle.size).toBeCloseTo(3); // 2 + (0.5 * 2)
      expect(particle.speedX).toBeCloseTo(0); // (0.5 - 0.5) * 1.5
      expect(particle.speedY).toBeCloseTo(0); // (0.5 - 0.5) * 1.5
      expect(particle.connections).toEqual([]);
      expect(particle.connectionTimers).toBeInstanceOf(Map);
      expect(particle.connectionTimers.size).toBe(0);
    });
  });

  describe('update', () => {
    let particle: Particle;
    
    beforeEach(() => {
      particle = new Particle(1000, 800);
      // Override speed for testing
      particle.speedX = 5;
      particle.speedY = -3;
      particle.x = 500;
      particle.y = 400;
    });
    
    it('updates position based on speed', () => {
      particle.update(1000, 800);
      
      expect(particle.x).toBe(505); // 500 + 5
      expect(particle.y).toBe(397); // 400 - 3
    });
    
    it('bounces off right wall', () => {
      particle.x = 998;
      particle.speedX = 5;
      
      particle.update(1000, 800);
      
      expect(particle.speedX).toBe(-5); // Reversed direction
      expect(particle.x).toBeLessThanOrEqual(1000); // Clamped to canvas width
    });
    
    it('bounces off left wall', () => {
      particle.x = 2;
      particle.speedX = -5;
      
      particle.update(1000, 800);
      
      expect(particle.speedX).toBe(5); // Reversed direction
      expect(particle.x).toBeGreaterThanOrEqual(0); // Clamped to minimum
    });
    
    it('bounces off bottom wall', () => {
      particle.y = 798;
      particle.speedY = 5;
      
      particle.update(1000, 800);
      
      expect(particle.speedY).toBe(-5); // Reversed direction
      expect(particle.y).toBeLessThanOrEqual(800); // Clamped to canvas height
    });
    
    it('bounces off top wall', () => {
      particle.y = 2;
      particle.speedY = -5;
      
      particle.update(1000, 800);
      
      expect(particle.speedY).toBe(5); // Reversed direction
      expect(particle.y).toBeGreaterThanOrEqual(0); // Clamped to minimum
    });
  });

  describe('draw', () => {
    it('draws the particle and connections', () => {
      const particle = new Particle(1000, 800);
      particle.x = 100;
      particle.y = 200;
      particle.size = 3;
      
      // Create a mock context
      const mockCtx = {
        fillStyle: '',
        beginPath: jest.fn(),
        arc: jest.fn(),
        fill: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
        strokeStyle: '',
        lineWidth: 0,
        globalAlpha: 1
      } as unknown as CanvasRenderingContext2D;
      
      // Test drawing without connections
      particle.draw(mockCtx);
      
      expect(mockCtx.fillStyle).toBe('rgba(255, 255, 255, 0.8)');
      expect(mockCtx.beginPath).toHaveBeenCalled();
      expect(mockCtx.arc).toHaveBeenCalledWith(100, 200, 3, 0, Math.PI * 2);
      expect(mockCtx.fill).toHaveBeenCalled();
      
      // Add a connection and test drawing with it
      const otherParticle = new Particle(1000, 800);
      otherParticle.x = 150;
      otherParticle.y = 250;
      
      particle.connections.push(otherParticle);
      particle.connectionTimers.set(otherParticle, { timer: 0.5, alpha: 0.4 });
      
      // Reset mocks
      jest.clearAllMocks();
      
      // Test drawing with a connection
      particle.draw(mockCtx);
      
      // Should call basic particle drawing
      expect(mockCtx.arc).toHaveBeenCalledWith(100, 200, 3, 0, Math.PI * 2);
      
      // Should draw connection line
      expect(mockCtx.beginPath).toHaveBeenCalledTimes(3); // Once for particle, twice for connection (normal + glow)
      expect(mockCtx.moveTo).toHaveBeenCalledWith(100, 200);
      expect(mockCtx.lineTo).toHaveBeenCalledWith(150, 250);
      expect(mockCtx.stroke).toHaveBeenCalledTimes(2); // Once for normal line, once for glow
    });
    
    it('removes connections that are too far apart', () => {
      const particle = new Particle(1000, 800);
      particle.x = 100;
      particle.y = 100;
      
      const farParticle = new Particle(1000, 800);
      farParticle.x = 400;
      farParticle.y = 400;
      
      // Add the connection
      particle.connections.push(farParticle);
      particle.connectionTimers.set(farParticle, { timer: 0.5, alpha: 0.4 });
      
      // Create a mock context
      const mockCtx = {
        fillStyle: '',
        beginPath: jest.fn(),
        arc: jest.fn(),
        fill: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
        strokeStyle: '',
        lineWidth: 0,
        globalAlpha: 1
      } as unknown as CanvasRenderingContext2D;
      
      // Draw - this should remove the connection since distance > 250
      particle.draw(mockCtx);
      
      // Connection should be removed
      expect(particle.connections.length).toBe(0);
      expect(particle.connectionTimers.has(farParticle)).toBe(false);
    });
  });
}); 