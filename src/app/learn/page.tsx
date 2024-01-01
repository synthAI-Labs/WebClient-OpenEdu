import CourseCard from '@/components/CourseCard';
import { getAllCoursesData } from '@/scripts/api-calls';
import React from 'react';

const Page = async () => {
  const response = await getAllCoursesData();
  const courseData: Course[] | undefined = response;

  if (courseData === undefined) {
    return <p>Failed to load course data</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {courseData ? (
        <>
          {courseData?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Page;

// JSON RESPONSE EXAMPLE:
// [
//   {
//     "id": 1,
//     "name": "Course 1",
//     "description": "Description for Course 1",
//     "image": "image.jpg",
//     "userId": null,
//     "tags": [
//       "tag1",
//       "tag2"
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Course 2",
//     "description": "Description for Course 2",
//     "image": "image.jpg",
//     "userId": null,
//     "tags": [
//       "tag3",
//       "tag4"
//     ]
//   }
// ]
