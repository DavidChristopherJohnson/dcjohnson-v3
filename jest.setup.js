// Import Jest DOM extensions for testing
require('@testing-library/jest-dom');

// Mock the requestAnimationFrame and cancelAnimationFrame for tests
if (typeof window !== 'undefined') {
  window.requestAnimationFrame = jest.fn().mockImplementation(cb => {
    return setTimeout(cb, 0);
  });
  
  window.cancelAnimationFrame = jest.fn().mockImplementation(id => {
    clearTimeout(id);
  });

  // Mock the canvas context for all tests
  HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
    clearRect: jest.fn(),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    stroke: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
  }));
}

// Mock the IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
}; 