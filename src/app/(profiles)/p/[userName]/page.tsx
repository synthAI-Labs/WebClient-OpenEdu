// Public profile page, JSON RECIEVED similar to the dashboard page.
// change to userName instead of id

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

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

interface PageProps {
    params: {
        userName: string;
    };
}

async function Page({ params }: PageProps): Promise<JSX.Element> {
    const userName = params.userName;
    const response = await getUser(userName);

    if (response === null) {
        return <div className="container mx-auto mt-8">Profile is private</div>;
    }

    const user: UserProfile = response;

    const {
        publicProfile,
        publicName,
        publicPhoto,
        publicBio,
        publicEmail,
        publicInterests,
    } = user.settings;

    return (
        <div className="container mx-auto mt-8">
            {publicProfile && (
                <div>
                    {publicName && <h1 className="text-2xl font-bold">{user.name}</h1>}
                    {publicPhoto && (
                        <img src={user.photo} alt="User Photo" className="mt-4 rounded-full" />
                    )}
                    {publicBio && <p className="mt-4">{user.bio}</p>}
                    {publicEmail && <p className="mt-4">{user.email}</p>}
                    {publicInterests && (
                        <div className="mt-4">
                            <h2 className="text-lg font-bold mb-2">Interests</h2>
                            {user.interests.length > 0 ? (
                                <ul className="list-disc pl-4">
                                    {user.interests.map((interest, index) => (
                                        <li key={index}>{interest}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>None</p>
                            )}
                        </div>
                    )}

                    <div className="p-4 bg-white rounded shadow mt-8">
                        <h2 className="text-2xl font-bold mb-4">Course Enrollments:</h2>
                        <ul>
                            {user.CourseEnrollment.map((enrollment) => (
                                <li key={enrollment.id} className="mb-2">
                                    Course ID: {enrollment.courseId}, Status: {enrollment.status}
                                </li>
                            ))}
                        </ul>
                    </div>

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
            )}
        </div>
    )
}

async function getUser(userName: string) {
    const response = await fetch(`http://localhost:4000/p/${userName}`);

    if (!response.ok) {
        // Check if the response status is not OK
        return (`Failed to fetch user: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        // Only parse the JSON if the content type indicates JSON
        const user = await response.json();
        console.log(user);
        return user;
    } else {
        // Handle non-JSON response (e.g., 'Profile is private')
        const nonJsonResponse = await response.text();
        console.log(nonJsonResponse);
        return null;
    }
}

export default Page;
