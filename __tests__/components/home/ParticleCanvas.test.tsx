import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ParticleCanvas from '@/components/home/ParticleCanvas';
import { createParticles, animateParticles } from '@/utils/animation/particleUtils';

// Mock the animation utilities
jest.mock('@/utils/animation/particleUtils', () => ({
  createParticles: jest.fn(() => []),
  animateParticles: jest.fn()
}));

// Mock canvas methods
const mockGetContext = jest.fn();
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

// Mock requestAnimationFrame and cancelAnimationFrame
const mockRequestAnimationFrame = jest.fn(callback => 123); // Return a dummy animation frame ID
const mockCancelAnimationFrame = jest.fn();

describe('ParticleCanvas', () => {
  beforeEach(() => {
    // Setup canvas mock
    HTMLCanvasElement.prototype.getContext = mockGetContext;
    mockGetContext.mockReturnValue({
      clearRect: jest.fn(),
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      stroke: jest.fn()
    });

    // Mock window methods
    global.requestAnimationFrame = mockRequestAnimationFrame;
    global.cancelAnimationFrame = mockCancelAnimationFrame;
    global.innerWidth = 1024;
    global.innerHeight = 768;

    // Mock addEventListener and removeEventListener
    window.addEventListener = mockAddEventListener;
    window.removeEventListener = mockRemoveEventListener;

    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders a canvas element', () => {
    render(<ParticleCanvas />);
    const canvas = screen.getByTestId('particle-canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName).toBe('CANVAS');
    expect(canvas).toHaveAttribute('aria-hidden', 'true');
  });

  it('initializes the canvas and animation on mount', () => {
    render(<ParticleCanvas />);
    
    // Should get 2D context for the canvas
    expect(mockGetContext).toHaveBeenCalledWith('2d');
    
    // Should add resize event listener
    expect(mockAddEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    
    // Should create particles
    expect(createParticles).toHaveBeenCalledWith(1024, 768);
    
    // Should start animation
    expect(mockRequestAnimationFrame).toHaveBeenCalled();
  });

  it('cleans up resources on unmount', () => {
    const { unmount } = render(<ParticleCanvas />);
    
    // Mock requestAnimationFrame to return our animation ID
    mockRequestAnimationFrame.mockReturnValue(123);
    
    // Force the animationRef to be set in the component
    // This is needed since the animation setup happens in useEffect
    const animate = mockRequestAnimationFrame.mock.calls[0][0];
    animate(); // Call the animation function
    
    // Simulate unmounting the component
    unmount();
    
    // Should remove event listeners
    expect(mockRemoveEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
}); 