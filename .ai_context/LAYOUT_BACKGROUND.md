# Page Layout & Background Implementation Guide

## Overview

This document outlines how the site-wide background gradient has been implemented and how to maintain consistency when creating new pages.

The background gradient provides a consistent dark theme with subtle blue tones across all non-home pages of the site. It uses a percentage-based, multi-stop gradient that transitions from black to deep blue.

## Current Implementation

### Background Gradient Specification

The background gradient is defined with these specifications:
```css
bg-[linear-gradient(to_bottom,_black_0%,_black_5%,_#02020A_15%,_#030318_25%,_#030320_35%,_#040935_45%,_#040935_100%)] bg-fixed
```

Key characteristics:
- Starts with pure black (0-5%)
- Gradually transitions through increasingly blue-tinted dark colors
- Reaches final deep blue (#040935) at 45% of the viewport
- Remains fixed during scrolling (`bg-fixed`)
- Text is white (`text-white`) for maximum contrast

### Implementation Architecture

The background is implemented using a client-side component wrapper:

1. **LayoutWrapper Component** (`components/layout-wrapper.tsx`)
   - Client component that detects the current route 
   - Applies the background to all non-home pages
   - Preserves special styling for the home page

2. **Root Layout** (`app/layout.tsx`)
   - Includes the LayoutWrapper around all page content
   - Ensures consistent application across the site

## Guidelines for New Pages

### Do's
- ✅ Create new page components WITHOUT background styles
- ✅ Let the global LayoutWrapper handle backgrounds
- ✅ Use `text-white` and appropriate contrast for text elements
- ✅ Test new pages in both light and dark mode for accessibility

### Don'ts
- ❌ Add page-specific background gradients (use the global one)
- ❌ Override the background in page components unless absolutely necessary
- ❌ Use text colors that don't contrast well with the dark background

### Special Cases

If you need a page to have a different background:

1. In your page component, wrap your content in a div with a different background
2. Use `relative z-10` to ensure your background appears above the global one
3. Document why this exception was necessary

## Extending or Modifying the Background

If changes to the global background are needed:

1. Modify `components/layout-wrapper.tsx` only
2. Update this documentation with the new gradient specifications
3. Test on multiple viewport sizes to ensure proper appearance

## Technical Implementation Details

The conditional background is implemented using Next.js's `usePathname` hook which detects the current route. The component then applies the appropriate styling based on the pathname.

```tsx
// Simplified example of implementation
function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  if (isHomePage) {
    return <>{children}</>;
  }
  
  return (
    <div className="w-full min-h-screen text-white bg-[linear-gradient(...)] bg-fixed">
      {children}
    </div>
  );
}
```

## Related Files

- `components/layout-wrapper.tsx` - Contains the gradient definition
- `app/layout.tsx` - Implements the wrapper at root level 