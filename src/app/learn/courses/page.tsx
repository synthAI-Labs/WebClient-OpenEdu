"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

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

const Page = () => {
  const [userData, setUserData] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = new URL("http://localhost:4000/learn/courses");

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await fetch(apiUrl.href, {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Course[] = await response.json();
        console.log("User data:", data);

        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <>
          {userData?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </div>
  );
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