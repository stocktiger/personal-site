'use client';

import type { TimelineEvent } from '@/data/about';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{event.year}</div>
          <div className="timeline-marker">
            <div className="timeline-dot" />
            {index < events.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
