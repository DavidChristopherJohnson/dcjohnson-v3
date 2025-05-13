import { createParticles, calculateDistance, checkNewConnections } from '@/utils/animation/particleUtils';
import Particle from '@/utils/animation/Particle';

// Mock Particle class
jest.mock('@/utils/animation/Particle', () => {
  return jest.fn().mockImplementation((width, height) => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      connections: [],
      connectionTimers: new Map(),
      update: jest.fn(),
      draw: jest.fn()
    };
  });
});

describe('Particle Utilities', () => {
  beforeEach(() => {
    // Clear all mocks between tests
    jest.clearAllMocks();
  });

  describe('createParticles', () => {
    it('should create particles based on canvas dimensions', () => {
      // Test with small canvas
      const smallCanvas = createParticles(400, 300);
      expect(smallCanvas.length).toBe(50); // Minimum particles

      // Test with large canvas
      const largeCanvas = createParticles(2000, 1500);
      expect(largeCanvas.length).toBeLessThanOrEqual(150); // Maximum particles
      expect(largeCanvas.length).toBeGreaterThan(50);

      // Check Particle constructor was called
      expect(Particle).toHaveBeenCalled();
    });
  });

  describe('calculateDistance', () => {
    it('should calculate the correct distance between two particles', () => {
      const p1 = { x: 0, y: 0 } as Particle;
      const p2 = { x: 3, y: 4 } as Particle;
      
      const distance = calculateDistance(p1, p2);
      expect(distance).toBe(5); // 3-4-5 Pythagorean triple
    });
  });

  describe('checkNewConnections', () => {
    it('should not connect particles that are too far apart', () => {
      // Setup particles that are far apart
      const p1 = { 
        x: 0, 
        y: 0, 
        connections: [],
        connectionTimers: new Map()
      } as unknown as Particle;
      
      const p2 = { 
        x: 1000, 
        y: 1000, 
        connections: [],
        connectionTimers: new Map()
      } as unknown as Particle;
      
      // Override random to always return 0.001 (less than 0.01) to ensure connection would happen if distance check passed
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0.001);
      
      checkNewConnections([p1, p2]);
      
      // No connections should be made due to distance
      expect(p1.connections.length).toBe(0);
      expect(p2.connections.length).toBe(0);
      
      mockRandom.mockRestore();
    });

    it('should connect particles that are close with a probability', () => {
      // Setup particles that are close
      const p1 = { 
        x: 10, 
        y: 10, 
        connections: [],
        connectionTimers: new Map()
      } as unknown as Particle;
      
      const p2 = { 
        x: 20, 
        y: 20, 
        connections: [],
        connectionTimers: new Map()
      } as unknown as Particle;
      
      // Force connection by making random return 0.001 (less than 0.01 threshold)
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0.001);
      
      checkNewConnections([p1, p2]);
      
      // Connections should be made
      expect(p1.connections).toContain(p2);
      expect(p1.connectionTimers.has(p2)).toBe(true);
      expect(p1.connectionTimers.get(p2)).toEqual({ timer: 0, alpha: 0.4 });
      
      mockRandom.mockRestore();
    });
  });
}); 