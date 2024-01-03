import CourseCard from '@/components/CourseCard';
import Loader from '@/components/Loader';
import NothingFound from '@/components/NothingFound';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAllCoursesData } from '@/scripts/api-calls';
import { title } from 'process';
import React from 'react';

const Page = async () => {
  const response = await getAllCoursesData();
  const courseData: Course[] | undefined = response;

  if (courseData === undefined || courseData.length === 0) {
    return <NothingFound />;
  }

  return (
    <div>
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl font-bold">All Courses</h1>
      </div>

      {/* Search bar */}

      {/* Sort files according to tags */}
      {/* <div className="flex justify-center">
        <Select>
          <SelectTrigger>
            <SelectValue>Filter using tag</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {courseData.map((course) => (
                course.tags.map((tag) => (<SelectItem value={tag}>{tag}</SelectItem>))
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue>Filter using Difficulty</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div> */}

      {/* Show shorted, searched file. if none, show no files found, and show all course card under section all */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courseData ? (
          <>
            {courseData?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Page;

// JSON RESPONSE EXAMPLE:
// [
//   {
//     "id": 2,
//     "name": "Course 2",
//     "description": "Description for Course 2",
//     "image": "image.png",
//     "madeByUserGit": [
//       "https://github.com/Himasnhu-AT/"
//     ],
//     "madeByUser": [
//       "https://avatars.githubusercontent.com/u/117301124?v=4"
//     ],
//     "GithubLink": null,
//     "userId": null,
//     "tags": [
//       "tag3",
//       "tag4"
//     ]
//   },
//   {
//     "id": 1,
//     "name": "Course 1",
//     "description": "Description for Course 1",
//     "image": "image.png",
//     "madeByUserGit": [
//       "https://github.com/Himasnhu-AT/",
//       "https://github.com/Himasnhu-AT/"
//     ],
//     "madeByUser": [
//       "https://avatars.githubusercontent.com/u/117301124?v=4",
//       "https://avatars.githubusercontent.com/u/117301124?v=4"
//     ],
//     "GithubLink": null,
//     "userId": null,
//     "tags": [
//       "tag1",
//       "tag2"
//     ]
//   }
// ]