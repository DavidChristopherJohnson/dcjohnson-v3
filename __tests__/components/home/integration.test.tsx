import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '@/components/home/HeroSection';
import { createParticles, animateParticles } from '@/utils/animation/particleUtils';

// We're not mocking ParticleCanvas in this test to check integration

// Mock the animation utils but allow them to be called
jest.mock('@/utils/animation/particleUtils', () => ({
  createParticles: jest.fn(() => []),
  animateParticles: jest.fn()
}));

// Mock canvas methods
const mockGetContext = jest.fn();
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

// Mock requestAnimationFrame
const mockRequestAnimationFrame = jest.fn(callback => 123);
const mockCancelAnimationFrame = jest.fn();

// Mock the RotatingTagline component
jest.mock('@/components/home/RotatingTagline', () => {
  return function MockRotatingTagline({ taglines }: { taglines: string[] }) {
    return <div data-testid="rotating-tagline">{taglines[0]}</div>;
  };
});

describe('HeroSection Integration', () => {
  beforeEach(() => {
    // Setup HTML5 canvas mock
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

  it('renders with particle animation correctly', () => {
    render(<HeroSection />);
    
    // Verify the HeroSection content is rendered
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('David Johnson');
    expect(screen.getByTestId('rotating-tagline')).toBeInTheDocument();
    
    // Verify the canvas is rendered
    const canvas = screen.getByTestId('particle-canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName).toBe('CANVAS');
    
    // Verify animation utilities are called
    expect(createParticles).toHaveBeenCalled();
    expect(mockRequestAnimationFrame).toHaveBeenCalled();
  });

  it('handles window events for both scrolling and canvas resizing', () => {
    render(<HeroSection />);
    
    // Both components should add event listeners
    expect(mockAddEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    
    // Find all event listener registrations
    const calls = mockAddEventListener.mock.calls;
    
    // Extract the resize handler (from ParticleCanvas) and call it
    const resizeHandler = calls.find(call => call[0] === 'resize')[1];
    resizeHandler();
    
    // Extract the scroll handler (from HeroSection) and call it
    const scrollHandler = calls.find(call => call[0] === 'scroll')[1];
    scrollHandler();
    
    // This is just to verify the handlers run without errors
    expect(true).toBeTruthy();
  });
}); 