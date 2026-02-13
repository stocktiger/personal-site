import { describe, expect, it } from 'vitest';

import courses from '../resume/courses';

describe('courses data', () => {
  it('exports an array of courses', () => {
    expect(Array.isArray(courses)).toBe(true);
    expect(courses.length).toBeGreaterThan(0);
  });

  it('each course has required properties', () => {
    for (const course of courses) {
      expect(course).toHaveProperty('title');
      expect(course).toHaveProperty('author');
      expect(course).toHaveProperty('link');
      expect(course).toHaveProperty('affiliation');
      expect(course).toHaveProperty('month');
      expect(course).toHaveProperty('year');
      expect(course).toHaveProperty('category');
      expect(course).toHaveProperty('topics');

      expect(typeof course.title).toBe('string');
      expect(typeof course.author).toBe('string');
      expect(typeof course.link).toBe('string');
      expect(typeof course.affiliation).toBe('string');
      expect(typeof course.month).toBe('string');
      expect(typeof course.year).toBe('number');
      expect(typeof course.category).toBe('string');
      expect(Array.isArray(course.topics)).toBe(true);
    }
  });

  it('course authors are non-empty', () => {
    for (const course of courses) {
      expect(course.author.trim().length).toBeGreaterThan(0);
    }
  });

  it('course titles are non-empty', () => {
    for (const course of courses) {
      expect(course.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('links are valid URLs', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const course of courses) {
      expect(course.link).toMatch(urlRegex);
    }
  });

  it('has unique course titles', () => {
    const titles = courses.map((c) => c.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('all courses have valid affiliation names', () => {
    for (const course of courses) {
      expect(course.affiliation.trim().length).toBeGreaterThan(0);
    }
  });
});
