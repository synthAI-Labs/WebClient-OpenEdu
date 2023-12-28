"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Module {
    id: number;
    name: string;
    type: 'text' | 'quiz' | 'video';
    content: string[];
    quiz: string[];
    video?: string | null;
    image: string;
    subtopicId: number;
}

interface Subtopic {
    id: number;
    name: string;
    description: string;
    courseId: number;
    image: string;
    modules: Module[];
}

interface ModuleProps {
    params: {
        course: any;
        topic: any;
    };
}

const Modules: React.FC<ModuleProps> = ({ params }) => {
    console.log(params);
    console.log(params.course);
    console.log(params.topic);
    const [modules, setModules] = useState<Subtopic[] | null>(null);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const data = await getModules(params.course, params.topic);
                setModules(data);
            } catch (error) {
                console.error((error as any).message);
            }
        };

        fetchModules();
    }, [params.course, params.topic]);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Modules</h1>
            {modules ? (
                renderModules(modules, params.course)
            ) : (
                <p className="text-gray-600">Loading modules...</p>
            )}
        </div>
    );
};

const renderModules = (subtopics: Subtopic[], courseId: string) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subtopics.map((subtopic) => (
                <div key={subtopic.id} className="bg-white p-4 rounded-lg shadow-md">
                    <img
                        src={subtopic.image}
                        alt={subtopic.name}
                        className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                    <h2 className="text-xl font-bold mb-2">{subtopic.name}</h2>
                    <p className="text-gray-600 mb-4">{subtopic.description}</p>
                    {/* Render modules for each subtopic */}
                    <div className="grid grid-cols-1 gap-4">
                        {subtopic.modules.map((module) => (
                            <div key={module.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
                                {/* Render different module types */}
                                {module.type === 'text' && (
                                    <div>
                                        {module.content.map((text, index) => (
                                            <p key={index} className="mb-2">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                {module.type === 'quiz' && (
                                    <div>
                                        <h4 className="text-md font-semibold mb-2">Quiz Questions:</h4>
                                        <ul className="list-disc pl-4">
                                            {module.quiz && module.quiz.map((question, index) => (
                                                <li key={index}>{question}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {module.type === 'video' && (
                                    <div>
                                        <video controls className="w-full">
                                            <source src={module.video || ''} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                                <Link href={`/learn/courses/${courseId}/${subtopic.id}/${module.id}`} className="text-blue-500 inline-flex items-center mt-2">
                                    Visit Modules
                                </Link >
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


async function getModules(courseId: number, topicId: number) {
    const res = await fetch(`http://localhost:4000/learn/courses/${courseId}/${topicId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        console.log(Error(`HTTP error! Status: ${res.status}`))
    }

    const data = await res.json();
    console.log(data);
    return data;
}

export default Modules;

// DEMO JSON RESPONSE: 
// [
//     {
//       "id": 1,
//       "name": "Subtopic 1.1",
//       "description": "Description for Subtopic 1.1",
//       "courseId": 1,
//       "image": "image1.jpg",
//       "modules": [
//         {
//           "id": 1,
//           "name": "Module 1.1.1",
//           "type": "text",
//           "content": [
//             "Content for Module 1.1.1"
//           ],
//           "quiz": [],
//           "video": null,
//           "image": "image1.jpg",
//           "subtopicId": 1
//         },
//         {
//           "id": 2,
//           "name": "Module 1.1.2",
//           "type": "quiz",
//           "content": [],
//           "quiz": [
//             "Question 1",
//             "Question 2"
//           ],
//           "video": null,
//           "image": "image2.jpg",
//           "subtopicId": 1
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "Subtopic 1.2",
//       "description": "Description for Subtopic 1.2",
//       "courseId": 1,
//       "image": "image1.jpg",
//       "modules": [
//         {
//           "id": 3,
//           "name": "Module 1.2.1",
//           "type": "text",
//           "content": [
//             "Content for Module 1.2.1"
//           ],
//           "quiz": [],
//           "video": null,
//           "image": "image3.jpg",
//           "subtopicId": 2
//         },
//         {
//           "id": 4,
//           "name": "Module 1.2.2",
//           "type": "video",
//           "content": [],
//           "quiz": [],
//           "video": "video1.mp4",
//           "image": "image4.jpg",
//           "subtopicId": 2
//         }
//       ]
//     }
//   ]
