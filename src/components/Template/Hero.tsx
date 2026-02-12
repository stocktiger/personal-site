import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Michael Suarez</span>
        </h1>

        <p className="hero-tagline">
          Quant & Educator at{' '}
          <a href="https://promptfoo.dev" className="hero-highlight">
            Promptfoo
          </a>
          , the most widely adopted open-source LLM security platform.
          <br />
          Solving financial markets and building AI tools since 2018.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Prop Trading Firm Quant</span>
          <span className="hero-chip">
            PhD in Applied Machine Learning for Drug Discovery
          </span>
          <span className="hero-chip">
            Adjunct Professor at Skema Business School
          </span>
          <span className="hero-chip">Co-founded Datanimo</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
