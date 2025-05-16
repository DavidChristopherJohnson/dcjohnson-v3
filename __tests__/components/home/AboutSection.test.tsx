import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '@/components/home/AboutSection';

// Mock the Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // Spread props but exclude priority (since it's a boolean that needs special handling)
    const { priority, ...otherProps } = props;
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img data-priority={priority ? "true" : "false"} {...otherProps} data-testid="avatar-image" />;
  },
}));

describe('AboutSection', () => {
  it('renders the section title correctly', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('Who I Am')).toBeInTheDocument();
  });

  it('renders the main heading correctly', () => {
    render(<AboutSection />);
    
    const heading = screen.getByRole('heading', { 
      level: 3,
      name: /I'm a software engineer and product builder/i
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('renders the main content paragraphs', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/I've led teams, built scalable platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/If you've got the vision but need someone/i)).toBeInTheDocument();
  });

  it('renders the avatar image', () => {
    render(<AboutSection />);
    
    const image = screen.getByTestId('avatar-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'David Johnson');
    expect(image).toHaveAttribute('data-priority', 'true');
  });
}); 