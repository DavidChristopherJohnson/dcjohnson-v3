# Design Reference

## Design Direction: Clean, Modern, and Professional

### Color Palette
- **Primary**: Deep Blue (#0A2540)
- **Accent**: Electric Blue/Cyan (#007BFF or #00C4FF)
- **Text & Base**: 
  - White (#FFFFFF)
  - Charcoal Black (#121212)
  - Soft Gray (#F5F5F5)

### Typography
- **Headers**: Sleek sans-serif fonts
  - Inter
  - Poppins
  - Space Grotesk
- **Body Text**: 
  - Modern serif like Lora
  - Clean sans-serif like Roboto

### Design Style
- Minimalist layout with clear hierarchy
- Focus on whitespace and scannable sections
- Smooth transitions or hover effects for interactivity
  - Especially on buttons, links, and cards
- Responsive, fast-loading, and uncluttered

### Tailwind CSS Implementation

```js
// Example Tailwind CSS configuration
{
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        accent: '#007BFF',
        accent2: '#00C4FF',
        dark: '#121212',
        light: '#F5F5F5',
      },
      fontFamily: {
        // Add these fonts to your project first
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        header: ['Poppins', 'Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
    }
  }
}
```

### Common Component Classes

```jsx
// Button examples
<button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all duration-300">
  Primary Button
</button>

<button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-all duration-300">
  Accent Button
</button>

// Card example
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
  <h3 className="text-primary font-header text-xl mb-3">Card Title</h3>
  <p className="text-dark font-sans">Card content goes here.</p>
</div>

// Section example
<section className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
  <h2 className="text-3xl font-header font-bold text-primary mb-8">Section Title</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Content cards or elements */}
  </div>
</section>
```

### Blog Page Styling Guidelines

The blog follows a cohesive card-based design pattern with these specific characteristics:

#### Whitespace Management
- **Section Vertical Spacing**: 
  - Hero to Featured Posts: Original `py-16` reduced by 50%
  - Featured Posts to All Posts: Original `py-16` reduced by 50%
  - Implementation: `py-16 pt-8 pb-8` to reduce vertical whitespace while maintaining proper spacing within sections

#### Card & Border Styling
- **Card Borders**: All content cards (featured and standard) use a consistent border style
  ```jsx
  // Standard content card border
  <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors duration-300 hover:border-blue-500/60 hover:shadow-md">
    {/* Card content */}
  </div>
  ```

- **Featured Post Cards**: 
  - Grid-based layout with larger display 
  - Same border styling as standard cards

- **Secondary CTA Styling**:
  - Text links and secondary actions use border styling to create button-like appearance
  ```jsx
  <Link 
    href="#all-posts" 
    className="border border-white/30 px-6 py-3 rounded-md text-white hover:text-blue-400 hover:border-blue-400 transition-colors duration-300 text-lg"
  >
    View All Posts
  </Link>
  ```

#### Blog Content Layout
- **Featured Posts**: 
  - Use a 1:3 grid layout on larger screens `grid-cols-1 md:grid-cols-4 gap-8`
  - Square thumbnail image on left (1 column)
  - Content on right (3 columns)

- **Blog Grid**: 
  - Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
  - Each card maintains consistent padding: `p-6 md:p-8`

- **Hover Effects**:
  - Cards: Border color change and subtle shadow: `hover:border-blue-500/60 hover:shadow-md`
  - CTAs: Text and border color change: `hover:text-blue-400 hover:border-blue-400`

### Animation Guidelines
- Use subtle transitions (300-500ms duration)
- Prefer opacity, transform, and box-shadow transitions
- For more complex animations, consider using Framer Motion library

### Responsive Design
- Mobile-first approach
- Key breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

### Accessibility Guidelines
- Maintain contrast ratio of at least 4.5:1 for normal text
- Use semantic HTML elements
- Ensure all interactive elements are keyboard accessible
- Include focus styles for all interactive elements 