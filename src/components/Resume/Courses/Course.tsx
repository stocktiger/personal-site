import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <h4 className="course-number">{data.author}</h4>
        <p className="course-meta">
          {data.month}, {data.year} · {data.affiliation}
        </p>
        <p className="course-name">{data.title}</p>
        <div className="course-tags">
          <span className="course-tag course-tag-category">
            {data.category}
          </span>
          {data.topics.map((topic) => (
            <span key={topic} className="course-tag course-tag-topic">
              {topic}
            </span>
          ))}
        </div>
      </a>
    </li>
  );
}
