import { render, screen, fireEvent } from '@testing-library/react';
import OptimizedImage from '@/components/optimized-image';
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, onLoad, onError, ...props }: any) => {
    // Simulate the image loading
    if (onLoad) {
      setTimeout(() => onLoad(), 0);
    }
    return <img 
      src={src} 
      alt={alt} 
      {...props} 
      data-testid="next-image" 
      onError={() => onError && onError(new Error('Image failed to load'))}
    />;
  },
}));

describe('OptimizedImage', () => {
  it('renders the image with correct props', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const image = screen.getByTestId('next-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('shows a loading state initially', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const loadingElement = screen.getByTestId('next-image');
    expect(loadingElement.className).toContain('opacity-0');
  });

  it('displays a fallback UI when image fails to load', () => {
    render(
      <OptimizedImage
        src="/nonexistent-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const image = screen.getByTestId('next-image');
    
    // Simulate image load error
    fireEvent.error(image);
    
    // Check if fallback UI is displayed
    expect(screen.getByTestId('image-error')).toBeInTheDocument();
    expect(screen.getByText('Image unavailable')).toBeInTheDocument();
  });
}); 