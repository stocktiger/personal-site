export interface Degree {
  school: string;
  degree: string;
  thesis?: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Hong Kong University of Science and Technology',
    degree: 'PhD in Chemistry and Applied Machine Learning',
    thesis:
      'Thesis: Deep Learning Methods to Find Potential Inhibitor Fragments for Proteins',
    link: 'https://hkust.edu.hk',
    year: 2021,
  },
  {
    school: 'Imperial College London',
    degree: 'MSci Chemistry with Molecular Physics',
    thesis:
      'Thesis: Uncovering Protein Dynamics across scales by using a novel Graph Partitioning approach',
    link: 'https://www.imperial.ac.uk',
    year: 2018,
  },
  {
    school: 'Danube International School',
    degree: 'International Baccalaureate Bilingual Diploma',
    thesis: 'Award: International Chemistry Olympiad Bronze Medal 2014',
    link: 'https://www.danubeschool.com',
    year: 2014,
  },
];

export default degrees;
