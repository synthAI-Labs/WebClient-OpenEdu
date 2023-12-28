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

import React from 'react';

interface Achievement {
    id: number;
    name: string;
    description: string;
    courseId: number;
    userId: number;
}

interface CourseEnrollment {
    id: number;
    userId: number;
    courseId: number;
    status: string;
    enrolledAt: string;
    completedAt: string | null;
}

interface UserSettings {
    id: number;
    userId: number;
    publicProfile: boolean;
    publicEmail: boolean;
    publicBio: boolean;
    publicPhoto: boolean;
    publicName: boolean;
    publicInterests: boolean;
}

interface UserProfile {
    id: number;
    username: string;
    photo: string;
    name: string;
    bio: string;
    email: string;
    password: string;
    emailVerified: boolean;
    role: string;
    token: string;
    interests: string[];
    userSettingsId: number;
    achievements: Achievement[];
    CourseEnrollment: CourseEnrollment[];
    settings: UserSettings;
}

const Page: React.FC = async () => {
    const user: UserProfile = await GetProfile();

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
                                <span className="font-bold">{achievement.name}:</span> {achievement.description}
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

async function GetProfile() {
    const res = await fetch(`${process.env.SERVER_URL}/dashboard/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'demo',
            'user_id': '1'
        }
    });
    const json = await res.json();
    return json;
}

export default Page