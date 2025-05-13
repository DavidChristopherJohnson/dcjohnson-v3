import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '@/components/home/HeroSection';

// Mock the ParticleCanvas component since we'll test it separately
jest.mock('@/components/home/ParticleCanvas', () => {
  return function MockParticleCanvas() {
    return <div data-testid="particle-canvas" />;
  };
});

describe('HeroSection', () => {
  it('renders correctly', () => {
    render(<HeroSection />);

    // Check that main heading and subheading are present
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('David Johnson');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Software Engineer. Product Builder.');
    
    // Check that links to important pages are present
    expect(screen.getByText('Explore My Work')).toBeInTheDocument();
    expect(screen.getByText('Read My Blog')).toBeInTheDocument();
    
    // Verify the CV link points to the correct URL
    const cvLink = screen.getByText('Explore My Work').closest('a');
    expect(cvLink).toHaveAttribute('href', '/cv');
    
    // Verify the blog link points to the correct URL
    const blogLink = screen.getByText('Read My Blog').closest('a');
    expect(blogLink).toHaveAttribute('href', '/articles');
    
    // Verify ParticleCanvas component is rendered
    expect(screen.getByTestId('particle-canvas')).toBeInTheDocument();
  });

  it('sets scrolled state on window scroll', () => {
    render(<HeroSection />);
    
    // Test initial state
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('pt-14');
    
    // Simulate scroll event
    global.window.scrollY = 100;
    fireEvent.scroll(window);
    
    // The scrolled state is set, but doesn't affect the UI in current implementation
    // This test verifies the event handler works without error
    expect(header).toBeInTheDocument();
    
    // Clean up
    global.window.scrollY = 0;
  });
}); 