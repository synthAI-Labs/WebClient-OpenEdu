import Link from "next/link";
import React from "react";

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  userId: number;
}

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
    <img className="w-full h-auto mb-2" src={course.image} alt={course.name} />
    <p><strong>Description:</strong> {course.description}</p>
    <Link href={`/learn/courses/${course.id}`} className="text-blue-500 inline-flex items-center mt-2">
      Learn More
    </Link >
    {/* Render other properties as needed */}
  </div>
);

const Page = async () => {
  // const [userData, setUserData] = useState<Course[] | null>(null);
  // const [loading, setLoading] = useState(true);

  const response = getCourseData();
  const courseData: Course[] | undefined = await getCourseData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* {loading ? (
        <p>Loading user data...</p>
      ) : ( */}
      <>
        {courseData?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </>
      {/* )} */}
    </div>
  );
}

async function getCourseData(): Promise<Course[] | undefined> {

  try {
    const response = await fetch(`${process.env.SERVER_URL}/learn/courses`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

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