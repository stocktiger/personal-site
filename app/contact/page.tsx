import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import TelegramLink from '@/components/Contact/TelegramLink';

import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Michael Suarez via Telegram @drmichaelsuarez',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Meet me for coffee, chat with me about opportunities or brainstorm
            ideas:
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <TelegramLink />
            <p className="contact-hint">Message me on Telegram</p>
          </div>

          <div className="contact-divider">
            <span>or find me on</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
