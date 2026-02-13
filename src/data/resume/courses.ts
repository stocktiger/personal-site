export type Category =
  | 'Academic Lecture'
  | 'Company Keynote'
  | 'Discussion Panel'
  | 'Interview'
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
  month: string;
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
    month: 'November',
    year: 2025,
    category: 'Academic Lecture',
    topics: ['AI'],
  },
  {
    title: 'Highly accurate protein structure prediction with AlphaFold',
    author: 'Demis Hassabis, et al.',
    link: 'https://www.nature.com/articles/s41586-021-03819-2',
    affiliation: 'DeepMind',
    month: 'July',
    year: 2021,
    category: 'Scientific Article',
    topics: ['AI', 'Drug Discovery'],
  },
  {
    title: 'OpenClaw — Personal AI Assistant',
    author: 'Peter Steinberger, et al.',
    link: 'https://github.com/openclaw/openclaw',
    affiliation: 'Open Source',
    month: 'January',
    year: 2026,
    category: 'Code Repository',
    topics: ['AI', 'Society'],
  },
  {
    title: 'Messari - Crypto Thesis 2026',
    author: 'Messari Research Team',
    link: 'https://messari.io/report-pdf/9225a0d0358e412d8aa9bd0d109c4f1bc3019939.pdf',
    affiliation: 'Messari',
    month: 'December',
    year: 2025,
    category: 'Opinion Piece',
    topics: ['FinTech', 'Policy'],
  },
  {
    title: 'Moving from the age of scaling to the age of research',
    author: 'Ilya Sutskever',
    link: 'https://www.youtube.com/watch?v=aR20FWCCjAs',
    affiliation: 'Safe Superintelligence',
    month: 'November',
    year: 2025,
    category: 'Interview',
    topics: ['AI', 'Philosophy'],
  },
  {
    title: 'The state of AI in 2025',
    author: 'Quantum Black',
    link: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf',
    affiliation: 'McKinsey',
    month: 'November',
    year: 2025,
    category: 'Corporate Article',
    topics: ['AI', 'Society'],
  },
];

export default courses;
