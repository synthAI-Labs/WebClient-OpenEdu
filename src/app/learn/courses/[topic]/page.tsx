"use client"
import Link from 'next/link';
import React from 'react';

interface Subtopic {
    id: number;
    name: string;
    description: string;
    courseId: number;
    image: string;
}

interface Topic {
    id: number;
    name: string;
    description: string;
    image: string;
    userId: null;
    tags: string[];
    subtopics: Subtopic[];
}

interface GetTopicsProps {
    params: {
        topic: any;
    };
}

const GetTopics: React.FC<GetTopicsProps> = ({ params }) => {
    const [topic, setTopic] = React.useState<Topic | null>(null);
    console.log(params.topic);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllTopics(params.topic);
                const data = res instanceof Response && res.ok ? await res.json() : null;
                setTopic(data);
            } catch (error) {
                console.error('Fetch failed:', error);
            }
        };

        fetchData();
    }, [params.topic]);

    return (
        <div className="container mx-auto p-8">
            {topic ? (
                <>
                    <h1 className="text-3xl font-bold mb-8">{topic.name} Topics</h1>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topic.subtopics.map((subtopic) => (

                            <div key={subtopic.id} className="bg-white p-4 rounded-lg shadow-md">
                                <img src={subtopic.image} alt={subtopic.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-bold mb-2">{subtopic.name}</h2>
                                <p className="text-gray-600 mb-4">{subtopic.description}</p>
                                <Link href={`/learn/courses/${params.topic}/${subtopic.id}/`} className="text-blue-500 inline-flex items-center mt-2">
                                    Modules
                                </Link >
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

async function getAllTopics(courseId: string) {
    const res = await fetch(`http://localhost:4000/learn/courses/${courseId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    return res;
}

export default GetTopics;


// JSON EXAMPLE RESPONSE 
// {
//     "id": 1,
//     "name": "Course 1",
//     "description": "Description for Course 1",
//     "image": "image.jpg",
//     "userId": null,
//     "tags": [
//       "tag1",
//       "tag2"
//     ],
//     "subtopics": [
//       {
//         "id": 1,
//         "name": "Subtopic 1.1",
//         "description": "Description for Subtopic 1.1",
//         "courseId": 1,
//         "image": "image1.jpg"
//       },
//       {
//         "id": 2,
//         "name": "Subtopic 1.2",
//         "description": "Description for Subtopic 1.2",
//         "courseId": 1,
//         "image": "image1.jpg"
//       }
//     ]
//   }