import type { Course as CourseType } from '@/data/resume/courses';

import Course from './Courses/Course';

interface CoursesProps {
  data: CourseType[];
}

const MONTH_ORDER: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

function getRows(courses: CourseType[]) {
  return courses
    .sort((a, b) => {
      // Sort by year first (descending)
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      // If years are equal, sort by month (descending)
      return MONTH_ORDER[b.month] - MONTH_ORDER[a.month];
    })
    .map((course) => <Course data={course} key={course.title} />);
}

export default function Courses({ data }: CoursesProps) {
  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Selected Courses</h3>
      </div>
      <ul className="course-list">{getRows(data)}</ul>
    </div>
  );
}
