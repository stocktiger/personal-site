export type Category =
  | 'Academic Lecture'
  | 'Company Keynote'
  | 'Discussion Panel'
  | 'Opinion Piece'
  | 'Scientific Article'
  | 'Code Repository'
  | 'Corporate Article';

export type Topic =
  | 'AI'
  | 'Finance'
  | 'Drug Discovery'
  | 'FinTech'
  | 'Policy'
  | 'Politics'
  | 'Society'
  | 'Philosophy';

export interface Course {
  title: string;
  author: string;
  link: string;
  affiliation: string;
  year: number;
  category: Category;
  topics: Topic[];
}

const courses: Course[] = [
  {
    title: 'Deep Learning',
    author: 'Andrew Ng',
    link: 'https://cs230.stanford.edu/syllabus/',
    affiliation: 'Stanford',
    year: 2025,
    category: 'Academic Lecture',
    topics: ['AI'],
  },
  {
    title: 'Highly accurate protein structure prediction with AlphaFold',
    author: 'Demis Hassabis, et al.',
    link: 'https://www.nature.com/articles/s41586-021-03819-2',
    affiliation: 'DeepMind',
    year: 2021,
    category: 'Scientific Article',
    topics: ['AI', 'Drug Discovery'],
  },
  {
    title: 'OpenClaw — Personal AI Assistant',
    author: 'Peter Steinberger, et al.',
    link: 'https://github.com/openclaw/openclaw',
    affiliation: 'Open Source',
    year: 2026,
    category: 'Code Repository',
    topics: ['AI', 'Society'],
  },
];

export default courses;
