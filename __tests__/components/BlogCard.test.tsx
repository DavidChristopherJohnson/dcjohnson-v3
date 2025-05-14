import { render, screen } from '@testing-library/react';
import BlogCard from '@/components/blog-card';
import '@testing-library/jest-dom';
import IBlog from '@/interfaces/blog.interface';

// Mock OptimizedImage component
jest.mock('@/components/optimized-image', () => {
  return {
    __esModule: true,
    default: ({ src, alt, ...props }: any) => {
      return <div data-testid="optimized-image">{alt}</div>;
    },
  };
});

// Mock next/link
jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ href, children }: any) => {
      return <a href={href} data-testid="next-link">{children}</a>;
    },
  };
});

describe('BlogCard', () => {
  const mockBlog: IBlog = {
    uniqueId: 'test-blog',
    title: 'Test Blog Post',
    description: 'This is a test blog post description',
    content: 'Test content',
    url: '/blog/test-blog',
    image: {
      src: '/test-image.jpg',
      alt: 'Test image'
    },
    date: new Date('2024-04-15')
  };

  it('renders the blog card with correct information', () => {
    render(<BlogCard {...mockBlog} />);
    
    // Check title
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    
    // Check description
    expect(screen.getByText('This is a test blog post description')).toBeInTheDocument();
    
    // Check date
    expect(screen.getByText('April 15, 2024')).toBeInTheDocument();
    
    // Check image
    expect(screen.getByTestId('optimized-image')).toBeInTheDocument();
    
    // Check "Read More" button
    const readMoreButton = screen.getByRole('button', { name: /read more/i });
    expect(readMoreButton).toBeInTheDocument();
    
    // Check URL
    const link = screen.getByTestId('next-link');
    expect(link).toHaveAttribute('href', '/blog/test-blog');
  });
}); 