import type { Metadata } from 'next';

import LibraryContent from '@/components/Library/LibraryContent';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Library',
  description:
    'Lectures, Articles, Repositories Michael Suarez finds valuable.',
};

export default function LibraryPage() {
  return (
    <PageWrapper>
      <section className="library-page">
        <header className="library-header">
          <h1 className="library-title">Library</h1>
          <p className="library-subtitle">
            Lectures, Articles & Repositories I have found valuable in my
            learning journey.{' '}
          </p>
        </header>
        <LibraryContent />
      </section>
    </PageWrapper>
  );
}
