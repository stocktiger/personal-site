import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';

export const metadata: Metadata = {
  title: 'Library',
  description:
    'Course library: Selected courses taken by Michael Suarez at Stanford University and the University at Buffalo.',
};

export default function LibraryPage() {
  return (
    <PageWrapper>
      <section className="library-page">
        <header className="library-header">
          <h1 className="library-title">Library</h1>
          <p className="library-subtitle">
            Selected coursework from Stanford and Buffalo
          </p>
        </header>
        <div className="library-content">
          <Courses data={courses} />
        </div>
      </section>
    </PageWrapper>
  );
}
