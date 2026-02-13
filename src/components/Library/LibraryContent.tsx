'use client';

import { useMemo, useState } from 'react';

import Courses from '@/components/Resume/Courses';
import courses, { type Category, type Topic } from '@/data/resume/courses';

export default function LibraryContent() {
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(
    new Set(),
  );
  const [selectedTopics, setSelectedTopics] = useState<Set<Topic>>(new Set());

  // Extract unique categories and topics
  const { categories, topics } = useMemo(() => {
    const categoriesSet = new Set<Category>();
    const topicsSet = new Set<Topic>();

    courses.forEach((course) => {
      categoriesSet.add(course.category);
      course.topics.forEach((topic) => topicsSet.add(topic));
    });

    return {
      categories: Array.from(categoriesSet).sort(),
      topics: Array.from(topicsSet).sort(),
    };
  }, []);

  // Filter courses based on selected categories and topics
  const filteredCourses = useMemo(() => {
    if (selectedCategories.size === 0 && selectedTopics.size === 0) {
      return courses;
    }

    return courses.filter((course) => {
      const matchesCategory =
        selectedCategories.size === 0 ||
        selectedCategories.has(course.category);
      const matchesTopic =
        selectedTopics.size === 0 ||
        course.topics.some((topic) => selectedTopics.has(topic));

      return matchesCategory && matchesTopic;
    });
  }, [selectedCategories, selectedTopics]);

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const toggleTopic = (topic: Topic) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedCategories(new Set());
    setSelectedTopics(new Set());
  };

  const hasActiveFilters =
    selectedCategories.size > 0 || selectedTopics.size > 0;

  return (
    <>
      <div className="library-filters">
        <div className="library-filters-section">
          <h3 className="library-filters-label">Categories</h3>
          <div className="library-filters-group">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={`library-filter-button library-filter-category ${
                  selectedCategories.has(category)
                    ? 'library-filter-active'
                    : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="library-filters-section">
          <h3 className="library-filters-label">Topics</h3>
          <div className="library-filters-group">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                className={`library-filter-button library-filter-topic ${
                  selectedTopics.has(topic) ? 'library-filter-active' : ''
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="library-filter-clear"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="library-content">
        <Courses data={filteredCourses} />
      </div>
    </>
  );
}
