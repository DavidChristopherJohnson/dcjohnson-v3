import setDate from '@/utils/set-date';

describe('setDate', () => {
  it('should correctly parse month-year strings into Date objects', () => {
    const january2023 = setDate('January 2023');
    expect(january2023.getFullYear()).toBe(2023);
    expect(january2023.getMonth()).toBe(0); // January is 0 in JS
    
    const december2022 = setDate('December 2022');
    expect(december2022.getFullYear()).toBe(2022);
    expect(december2022.getMonth()).toBe(11); // December is 11 in JS
  });
  
  it('should handle abbreviated month names', () => {
    const jan2023 = setDate('Jan 2023');
    expect(jan2023.getFullYear()).toBe(2023);
    expect(jan2023.getMonth()).toBe(0);
    
    const sep2024 = setDate('Sep 2024');
    expect(sep2024.getFullYear()).toBe(2024);
    expect(sep2024.getMonth()).toBe(8); // September is 8 in JS
  });
  
  it('should handle different formats with month first', () => {
    const march2022 = setDate('March 2022');
    expect(march2022.getFullYear()).toBe(2022);
    expect(march2022.getMonth()).toBe(2); // March is 2 in JS
    
    // Using a different separator
    const july2025 = setDate('July-2025');
    expect(july2025.getFullYear()).toBe(2025);
    expect(july2025.getMonth()).toBe(6); // July is 6 in JS
  });
  
  it('should handle case-insensitive month names', () => {
    const upperCase = setDate('AUGUST 2023');
    expect(upperCase.getFullYear()).toBe(2023);
    expect(upperCase.getMonth()).toBe(7); // August is 7 in JS
    
    const lowerCase = setDate('august 2023');
    expect(lowerCase.getFullYear()).toBe(2023);
    expect(lowerCase.getMonth()).toBe(7);
    
    const mixedCase = setDate('AuGuSt 2023');
    expect(mixedCase.getFullYear()).toBe(2023);
    expect(mixedCase.getMonth()).toBe(7);
  });
  
  it('should set day to the start of the month', () => {
    const date = setDate('April 2024');
    expect(date.getDate()).toBe(1);
  });
}); 