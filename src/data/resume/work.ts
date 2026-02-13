/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Neovium Bridge',
    position: 'Founder',
    url: 'https://neoviumbridge.com',
    startDate: '2025-10-01',
    summary: `AI company in Amsterdam.`,
    highlights: ['Consulting', 'Educating', 'Bootstrapping', 'Innovating'],
  },
  {
    name: 'Bastion Trading',
    position: 'Quantitative Researcher & Trader',
    url: 'https://bastiontrading.com',
    startDate: '2021-05-01',
    endDate: '2025-10-01',
    summary: `Multi Strategy Multi Asset Derivatives Proprietary Trading Firm in Hong Kong.`,
    highlights: [
      'Researching',
      'Modeling',
      'Testing',
      'Trading',
      'Risking',
      'Winning',
    ],
  },
  {
    name: 'SKEMA Business School',
    position: 'Adjunct Professor',
    url: 'https://www.skema.edu',
    startDate: '2023-02-01',
    summary: `Digital Transformation in Finance - Core Course for MSc in Business Consulting & Digital Transformation`,
    highlights: [
      'Learning',
      'Teaching',
      'Communicating',
      'Mentoring',
      'Inspiring',
    ],
  },
  {
    name: 'Datanimo',
    position: 'Co-founder',
    url: '',
    startDate: '2021-05-01',
    endDate: '2022-05-01',
    summary: `AI Data Cleaning Solution of Healthcare Data.`,
    highlights: [
      'Fundraising',
      'Pitching',
      'Building',
      'Disrupting',
      'Selling',
    ],
  },
  {
    name: 'Xuhui Huang Research Group',
    position: 'Deep Learning Lead',
    url: 'https://huang.chem.wisc.edu/xuhui-huang/',
    startDate: '2018-07-01',
    endDate: '2021-05-01',
    summary: `Building a multi-disciplinary team of computational chemists and machine learning engineers to solve problems in drug discovery.`,
    highlights: [
      'Researching',
      'Innovating',
      'Building',
      'Leading',
      'Presenting',
    ],
  },
];

export default work;
