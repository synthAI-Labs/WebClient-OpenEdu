// Page.js
"use client"
import React, { useEffect, useState } from "react";

interface UserProfileProps {
    coursesCompleted: string[];
    coursesInProgress: string[];
    achievements: Achievement[];
    username: string;
    photo: string;
    name: string;
    bio: string;
    email: string;
}

interface CoursesCompletedProps {
    coursesCompleted: string[];
}

interface CoursesInProgressProps {
    coursesInProgress: string[];
}

interface Achievement {
    id: number;
    name: string;
    icon: string;
    description: string;
    courseId: number;
    userId: number;
}

interface AchievementsProps {
    achievements: Achievement[];
}

const UserProfile = ({ username, photo, name, bio, email }: UserProfileProps) => (
    <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">{username}</h2>
        <img className="w-full h-auto mb-2" src={photo} alt="User" />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Bio:</strong> {bio}</p>
        <p><strong>Email:</strong> {email}</p>
    </div>
);

const CoursesCompleted = ({ coursesCompleted }: CoursesCompletedProps) => (
    <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Courses Completed</h2>
        <ul>
            {coursesCompleted.map((course: string, index: number) => (
                <li key={index} className="mb-1">{course}</li>
            ))}
        </ul>
    </div>
);

const CoursesInProgress = ({ coursesInProgress }: CoursesInProgressProps) => (
    <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Courses In Progress</h2>
        <ul>
            {coursesInProgress.map((course: string, index: number) => (
                <li key={index} className="mb-1">{course}</li>
            ))}
        </ul>
    </div>
);

const Achievements = ({ achievements }: AchievementsProps) => (
    <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Achievements</h2>
        <ul>
            {achievements.map((achievement: Achievement) => (
                <li key={achievement.id} className="mb-1">
                    <p>Name: {achievement.name}</p>
                    <p>Description: {achievement.description}</p>
                    {/* Render other properties as needed */}
                </li>
            ))}
        </ul>
    </div>
);

const Page = () => {
    const [userData, setUserData] = useState<UserProfileProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = new URL("http://localhost:3001/dashboard/profile");

                const headers = {
                    "Content-Type": "application/json",
                    //authorization: `${token}`,
                    //user_id: `${user_id}`,
                };

                const response = await fetch(apiUrl.href, {
                    method: "POST",
                    headers,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data: UserProfileProps = await response.json();
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
                    <UserProfile {...userData!} />
                    <CoursesCompleted coursesCompleted={userData!.coursesCompleted} />
                    <CoursesInProgress coursesInProgress={userData!.coursesInProgress} />
                    {/* <CoursesEnrolled /> */}
                    <Achievements achievements={userData!.achievements} />
                </>
            )}
        </div>
    );
};

export default Page;
