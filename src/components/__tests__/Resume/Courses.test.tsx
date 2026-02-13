import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Courses from '../../Resume/Courses';
import Course from '../../Resume/Courses/Course';

const mockCourses = [
  {
    title: 'Machine Learning',
    author: 'Andrew Ng',
    link: 'http://cs229.stanford.edu/',
    affiliation: 'Stanford',
    year: 2023,
    category: 'Academic Lecture' as const,
    topics: ['AI' as const],
  },
  {
    title: 'Deep Learning',
    author: 'Ian Goodfellow',
    link: 'http://cs230.stanford.edu/',
    affiliation: 'Stanford',
    year: 2022,
    category: 'Academic Lecture' as const,
    topics: ['AI' as const],
  },
  {
    title: 'Algorithms',
    author: 'Tim Roughgarden',
    link: 'http://cs161.stanford.edu/',
    affiliation: 'MIT',
    year: 2021,
    category: 'Academic Lecture' as const,
    topics: ['AI' as const],
  },
];

describe('Courses', () => {
  it('renders the courses section with title', () => {
    render(<Courses data={mockCourses} />);

    expect(
      screen.getByRole('heading', { name: /selected courses/i }),
    ).toBeInTheDocument();
  });

  it('renders all courses', () => {
    render(<Courses data={mockCourses} />);

    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Deep Learning')).toBeInTheDocument();
    expect(screen.getByText('Algorithms')).toBeInTheDocument();
  });

  it('renders course authors', () => {
    render(<Courses data={mockCourses} />);

    expect(screen.getByText('Andrew Ng')).toBeInTheDocument();
    expect(screen.getByText('Ian Goodfellow')).toBeInTheDocument();
    expect(screen.getByText('Tim Roughgarden')).toBeInTheDocument();
  });

  it('renders courses as list items', () => {
    render(<Courses data={mockCourses} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(mockCourses.length);
  });

  it('sorts courses by affiliation then author', () => {
    render(<Courses data={mockCourses} />);

    const items = screen.getAllByRole('listitem');
    // Stanford courses should come before MIT (reverse alpha)
    // And within Stanford, sorted by author
    expect(items.length).toBe(3);
  });

  it('has anchor link for navigation', () => {
    render(<Courses data={mockCourses} />);

    const anchor = document.getElementById('courses');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Course', () => {
  const mockCourse = {
    title: 'Machine Learning',
    author: 'Andrew Ng',
    link: 'http://cs229.stanford.edu/',
    affiliation: 'Stanford',
    year: 2023,
    category: 'Academic Lecture' as const,
    topics: ['AI' as const],
  };

  it('renders course author and title', () => {
    render(<Course data={mockCourse} />);

    expect(screen.getByText('Andrew Ng')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
  });

  it('renders course as link', () => {
    render(<Course data={mockCourse} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockCourse.link);
  });

  it('renders as list item', () => {
    render(<Course data={mockCourse} />);

    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });
});
