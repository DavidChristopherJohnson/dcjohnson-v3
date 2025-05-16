import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import RotatingTagline from '@/components/home/RotatingTagline';

// Mock timers for testing animations
jest.useFakeTimers();

describe('RotatingTagline', () => {
  it('renders the first tagline initially', () => {
    const taglines = ['First Tagline', 'Second Tagline', 'Third Tagline'];
    render(<RotatingTagline taglines={taglines} />);
    
    expect(screen.getByText('First Tagline')).toBeInTheDocument();
  });
  
  it('returns null if no taglines are provided', () => {
    const { container } = render(<RotatingTagline taglines={[]} />);
    expect(container.firstChild).toBeNull();
  });
  
  it('does not rotate if only one tagline is provided', () => {
    const taglines = ['Single Tagline'];
    render(<RotatingTagline taglines={taglines} />);
    
    expect(screen.getByText('Single Tagline')).toBeInTheDocument();
    
    // Fast-forward time to check if rotation happens
    act(() => {
      jest.advanceTimersByTime(5000); // Longer than default duration
    });
    
    // Tagline should still be the same
    expect(screen.getByText('Single Tagline')).toBeInTheDocument();
  });
  
  it('rotates to the next tagline after duration', () => {
    const taglines = ['First Tagline', 'Second Tagline', 'Third Tagline'];
    const duration = 3000;
    const fadeDuration = 500;
    
    render(
      <RotatingTagline 
        taglines={taglines} 
        duration={duration}
        fadeDuration={fadeDuration}
      />
    );
    
    // Initial state
    expect(screen.getByText('First Tagline')).toBeInTheDocument();
    
    // Fast-forward to trigger fade-out
    act(() => {
      jest.advanceTimersByTime(duration);
    });
    
    // Fast-forward to complete fade transition
    act(() => {
      jest.advanceTimersByTime(fadeDuration);
    });
    
    // Should now show the second tagline
    expect(screen.getByText('Second Tagline')).toBeInTheDocument();
  });
  
  it('cycles back to the first tagline after reaching the end', () => {
    const taglines = ['First Tagline', 'Second Tagline'];
    const duration = 3000;
    const fadeDuration = 500;
    
    render(
      <RotatingTagline 
        taglines={taglines} 
        duration={duration}
        fadeDuration={fadeDuration}
      />
    );
    
    // Advance through both taglines
    act(() => {
      // First rotation
      jest.advanceTimersByTime(duration);
      jest.advanceTimersByTime(fadeDuration);
      
      // Second rotation
      jest.advanceTimersByTime(duration);
      jest.advanceTimersByTime(fadeDuration);
    });
    
    // Should cycle back to the first tagline
    expect(screen.getByText('First Tagline')).toBeInTheDocument();
  });

  it('applies the correct styling classes', () => {
    const taglines = ['Test Tagline'];
    const { container } = render(<RotatingTagline taglines={taglines} />);
    
    // Find the div that contains the tagline background 
    // (the first div is the container, the second div is the one with bg classes)
    const outerDiv = container.firstChild;
    const taglineWrapper = outerDiv.firstChild;
    
    // Check for the key styling classes
    const taglineWrapperClasses = taglineWrapper.className;
    expect(taglineWrapperClasses).toContain('bg-black');
    expect(taglineWrapperClasses).toContain('bg-opacity-5');
    expect(taglineWrapperClasses).toContain('rounded-full');
    expect(taglineWrapperClasses).toContain('backdrop-blur-sm');
    
    // Check that the text has the correct styling
    const taglineText = screen.getByText('Test Tagline');
    expect(taglineText.className).toContain('text-gray-200');
  });
}); 