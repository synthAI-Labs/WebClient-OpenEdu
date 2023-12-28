"use client"
import { checkValues, searchLocalStorage } from '@/scripts/check-user-auth';
import { UserProfile } from '@/scripts/types/dashboard';
import React, { useEffect, useState } from 'react';

const Page: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const userPresent: boolean = await checkValues();
      if (!userPresent) {
        window.location.href = '/signin';
      }

      const { authorization, userId } = searchLocalStorage();
      try {
        const res = await fetch(`https://ai-res-server-development.onrender.com/dashboard/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization,
            user_id: userId,
          },
        });

        const userData: UserProfile = await res.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>

        {/* User Details Card */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">User Details:</h2>
          <ul>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Bio: {user.bio}</li>
            <li>Photo: {user.photo}</li>
          </ul>
        </div>

        {/* Achievements Card */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Achievements:</h2>
          <ul>
            {user.achievements.map((achievement) => (
              <li key={achievement.id} className="mb-2">
                <span className="font-bold">{achievement.name}:</span>{' '}
                {achievement.description}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Course Enrollments Card */}
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Course Enrollments:</h2>
        <ul>
          {user.CourseEnrollment.map((enrollment) => (
            <li key={enrollment.id} className="mb-2">
              Course ID: {enrollment.courseId}, Status: {enrollment.status}
            </li>
          ))}
        </ul>
      </div>

      {/* User Settings Card */}
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">User Settings:</h2>
        <ul>
          <li>Public Profile: {user.settings.publicProfile.toString()}</li>
          <li>Public Email: {user.settings.publicEmail.toString()}</li>
          <li>Public Bio: {user.settings.publicBio.toString()}</li>
          <li>Public Photo: {user.settings.publicPhoto.toString()}</li>
          <li>Public Name: {user.settings.publicName.toString()}</li>
          <li>Public Interests: {user.settings.publicInterests.toString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;

// JOSN EXAMPLE:
// {
//     "id": 1,
//     "username": "user1",
//     "photo": "url_to_user1_photo.jpg",
//     "name": "User One",
//     "bio": "Bio for User One",
//     "email": "user1@example.com",
//     "password": "password1",
//     "emailVerified": true,
//     "role": "USER",
//     "token": "demo",
//     "interests": [],
//     "userSettingsId": 1,
//     "achievements": [
//       {
//         "id": 1,
//         "name": "Achievement 1",
//         "icon": "icon1.jpg",
//         "description": "Description for Achievement 1",
//         "courseId": 1,
//         "userId": 1
//       }
//     ],
//     "CourseEnrollment": [
//       {
//         "id": 1,
//         "userId": 1,
//         "courseId": 1,
//         "status": "COMPLETED",
//         "enrolledAt": "2023-12-21T15:32:45.558Z",
//         "completedAt": null
//       },
//       {
//         "id": 2,
//         "userId": 1,
//         "courseId": 2,
//         "status": "IN_PROGRESS",
//         "enrolledAt": "2023-12-21T15:32:45.561Z",
//         "completedAt": null
//       }
//     ],
//     "settings": {
//       "id": 1,
//       "userId": 1,
//       "publicProfile": true,
//       "publicEmail": false,
//       "publicBio": true,
//       "publicPhoto": true,
//       "publicName": true,
//       "publicInterests": true
//     }
//   }
