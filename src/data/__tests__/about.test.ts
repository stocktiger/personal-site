import { describe, expect, it } from 'vitest';

import { aboutMarkdown, timelineData } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('AI research');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
    expect(aboutMarkdown).toContain('Traditional Cooking');
  });

  it('contains the dreams section', () => {
    expect(aboutMarkdown).toContain('# I Dream Of');
    expect(aboutMarkdown).toContain('Staying curious');
  });

  it('contains the questions section', () => {
    expect(aboutMarkdown).toContain('# Questions that make me think');
  });

  it('does not contain timeline in markdown', () => {
    expect(aboutMarkdown).not.toContain('# Timeline');
    expect(aboutMarkdown).not.toContain('Vienna in 1996');
  });

  it('exports timeline data array', () => {
    expect(Array.isArray(timelineData)).toBe(true);
    expect(timelineData.length).toBeGreaterThan(0);
  });

  it('timeline data has proper structure', () => {
    timelineData.forEach((event) => {
      expect(event).toHaveProperty('year');
      expect(event).toHaveProperty('description');
      expect(typeof event.year).toBe('number');
      expect(typeof event.description).toBe('string');
    });
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(2);
  });
});
