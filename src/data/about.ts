export interface TimelineEvent {
  year: number;
  description: string;
}

export const timelineData: TimelineEvent[] = [
  { year: 1996, description: 'I was born in Vienna.' },
  { year: 2002, description: 'I spent some months in Köflach.' },
  { year: 2004, description: 'I moved to Mexico City.' },
  { year: 2006, description: 'I moved to Vienna.' },
  {
    year: 2011,
    description: 'I spent some months in New York City.',
  },
  { year: 2014, description: 'I moved to London.' },
  { year: 2015, description: 'I spent some months in Copenhagen.' },
  { year: 2018, description: 'I moved to Hong Kong.' },
  { year: 2023, description: 'I spent some months in Antibes.' },
  { year: 2025, description: 'I moved to Amsterdam.' },
];

export const aboutMarkdown = `# Intro

I’m passionate about building services that bridge cutting-edge AI research and real-world applications across Europe.

I spent the last five years as a quant at a proprietary trading firm in Hong Kong, helping grow the company from 5 to 100+ people in a fast-moving environment. My product style is simple: act quickly, learn from reality, iterate aggressively, and compound progress.

Before trading, I worked on deep-learning for drug discovery during my PhD, which gave me a strong grounding in machine learning, data science, and applied AI.

When I’m not working, I’m usually walking in nature, reading, exploring new tech, or trying a new restaurant.

# I Like

- Traditional Cooking.
- Quiet Nature.
- Endurance Cycling.
- Sociocritical Theatre.
- Historical Museums.
- Unique people.

# I Dream Of

- Inspiring and feeling inspired.
- Enabling a brighter future for everyone, regardless of political or socioeconomic status.
- Treating every individual with genuine kindness and respect.
- Staying curious.
- Continually improving.

# Questions that make me think

- How do we balance social media regulation with democracy?
- What is the endgame of capitalism?
- What is the role of censorship in a free society?
- How do we prevent the spread of misinformation without stifling freedom of speech?
- How do you educate people in the age of AI?
- When does time become more valuable than money?

`;
