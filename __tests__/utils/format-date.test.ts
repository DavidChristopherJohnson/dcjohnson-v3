import formatDate from '@/utils/format-date';

describe('formatDate', () => {
  it('should format date in "MMM yyyy" format with en-GB locale', () => {
    // Create test dates
    const january = new Date(2023, 0, 15); // January 15, 2023
    const march = new Date(2022, 2, 10);   // March 10, 2022
    const december = new Date(2024, 11, 25); // December 25, 2024
    
    // Test formatting
    expect(formatDate(january)).toBe('Jan 2023');
    expect(formatDate(march)).toBe('Mar 2022');
    expect(formatDate(december)).toBe('Dec 2024');
  });
  
  it('should handle leap years correctly', () => {
    const leapYearFeb = new Date(2024, 1, 29); // February 29, 2024 (leap year)
    expect(formatDate(leapYearFeb)).toBe('Feb 2024');
  });

  it('should handle different day values with the same result', () => {
    // Different days in the same month should format the same
    const earlyMonth = new Date(2023, 3, 1);  // April 1, 2023
    const lateMonth = new Date(2023, 3, 30);  // April 30, 2023
    
    expect(formatDate(earlyMonth)).toBe('Apr 2023');
    expect(formatDate(lateMonth)).toBe('Apr 2023');
    expect(formatDate(earlyMonth)).toEqual(formatDate(lateMonth));
  });
}); 