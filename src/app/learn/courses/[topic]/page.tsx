"use client"
import React, { useEffect, useState } from 'react';

interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
    userId: number;
}


const TopicPage = ({ params }: { params: any }) => {
    const [userData, setUserData] = useState<Course[] | null>(null);
    const [loading, setLoading] = useState(true);
    const topic = params.topic;
    console.log('Topic:', topic);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3001/learn/courses/${topic}/topics`;
                console.log('URL:', url);
                const apiUrl = new URL(url);
                console.log('API URL:', apiUrl.href);
                const headers = {
                    'Content-Type': 'application/json',
                };

                const response = await fetch(apiUrl.href, {
                    method: 'GET',
                    headers,
                });
                console.log('Response:', response);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data: Course[] = await response.json();
                console.log('User data:', data);

                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [topic]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loading ? (
                <p>Loading course data...</p>
            ) : (
                <>
                    {userData === null ? (
                        <div>No Content</div>
                    ) : (
                        Array.isArray(userData) ? (
                            userData.map((course) => (
                                <div key={course.id} className="bg-white p-4 rounded shadow-md">
                                    <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                                    <img className="w-full h-auto mb-2" src={course.image} alt={course.name} />
                                    <p><strong>Description:</strong> {course.description}</p>
                                    {/* Render other properties as needed */}
                                </div>
                            ))
                        ) : (
                            <>
                                <div>Data is not in the expected format</div>
                                <pre>{JSON.stringify(userData, null, 2)}</pre>
                            </>
                        )
                    )}
                </>
            )}
        </div>
    );

};

export default TopicPage;
