import { getBlogImageUrl, createBlogImage } from '@/utils/blog-image';

describe('Blog Image Utilities', () => {
  describe('getBlogImageUrl', () => {
    it('returns the correct URL with default filename', () => {
      const url = getBlogImageUrl('test-blog');
      expect(url).toBe('/images/blogs/test-blog/hero.jpg');
    });

    it('returns the correct URL with custom filename', () => {
      const url = getBlogImageUrl('test-blog', 'thumbnail.png');
      expect(url).toBe('/images/blogs/test-blog/thumbnail.png');
    });
  });

  describe('createBlogImage', () => {
    it('creates an image object with default filename', () => {
      const image = createBlogImage('test-blog', 'Test Alt Text');
      expect(image).toEqual({
        src: '/images/blogs/test-blog/hero.jpg',
        alt: 'Test Alt Text'
      });
    });

    it('creates an image object with custom filename', () => {
      const image = createBlogImage('test-blog', 'Test Alt Text', 'thumbnail.png');
      expect(image).toEqual({
        src: '/images/blogs/test-blog/thumbnail.png',
        alt: 'Test Alt Text'
      });
    });
  });
}); 