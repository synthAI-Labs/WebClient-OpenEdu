"use client"
import React, { useState } from 'react';

interface FormData {
    id: number;
    name: string;
    description: string;
    image: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    subtopics: Subtopic[];
}

interface Subtopic {
    id: number;
    name: string;
    description: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    courseId: number;
    image: string;
    modules: Module[];
}

interface Module {
    id: number;
    name: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    type: 'text' | 'quiz' | 'video';
    content: string[];
    quiz: Quiz[];
    video?: string | null;
    image: string;
    subtopicId: number;
}

interface Quiz {
    id: number;
    Question: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    Options: string[];
    Answer: string[];
    image?: string | null;
    moduleId: number;
}

const CreateCoursePage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        id: 0,
        name: '',
        description: '',
        image: '',
        madeByUserGit: [''],
        madeByUser: [''],
        tags: [''],
        subtopics: [
            {
                id: 0,
                name: '',
                description: '',
                madeByUserGit: [''],
                madeByUser: [''],
                tags: [''],
                courseId: 0,
                image: '',
                modules: [
                    {
                        id: 0,
                        name: '',
                        madeByUserGit: [''],
                        madeByUser: [''],
                        tags: [''],
                        type: 'text',
                        content: [''],
                        quiz: [],
                        video: '',
                        image: '',
                        subtopicId: 0,
                    },
                ],
            },
        ],
    });

    const addSubtopic = () => {
        setFormData((prevData) => ({
            ...prevData,
            subtopics: [
                ...prevData.subtopics,
                {
                    id: 0,
                    name: '',
                    description: '',
                    madeByUserGit: [''],
                    madeByUser: [''],
                    tags: [''],
                    courseId: 0,
                    image: '',
                    modules: [],
                },
            ],
        }));
    };

    const removeSubtopic = (subtopicIndex: number) => {
        setFormData((prevData) => ({
            ...prevData,
            subtopics: prevData.subtopics.filter((_, index) => index !== subtopicIndex),
        }));
    };

    const addModule = (subtopicIndex: number) => {
        setFormData((prevData) => {
            const newSubtopics = [...prevData.subtopics];
            newSubtopics[subtopicIndex].modules.push({
                id: 0,
                name: '',
                madeByUserGit: [''],
                madeByUser: [''],
                tags: [''],
                type: 'text',
                content: [''],
                quiz: [],
                video: '',
                image: '',
                subtopicId: 0,
            });
            return { ...prevData, subtopics: newSubtopics };
        });
    };

    const removeModule = (subtopicIndex: number, moduleIndex: number) => {
        setFormData((prevData) => {
            const newSubtopics = [...prevData.subtopics];
            newSubtopics[subtopicIndex].modules.splice(moduleIndex, 1);
            return { ...prevData, subtopics: newSubtopics };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // Handle the form data submission logic here
        // Reset the form or navigate to another page as needed
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                {/* Basic Course Info */}
                <div className="mb-4">
                    <label htmlFor="courseName" className="block text-sm font-semibold text-gray-600 mb-2">
                        Course Name
                    </label>
                    <input
                        id="courseName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter course name"
                    />
                </div>

                {/* Course Description */}
                <div className="mb-4">
                    <label htmlFor="courseDescription" className="block text-sm font-semibold text-gray-600 mb-2">
                        Course Description
                    </label>
                    <input
                        id="courseDescription"
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter course description"
                    />
                </div>

                {/* Tags */}
                <div className="mb-4">
                    <label htmlFor="courseTags" className="block text-sm font-semibold text-gray-600 mb-2">
                        Tags
                    </label>
                    <input
                        id="courseTags"
                        type="text"
                        value={formData.tags.join(', ')}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, tags: e.target.value.split(', ') }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter course tags (comma-separated)"
                    />
                </div>

                {/* Made by User */}
                <div className="mb-4">
                    <label htmlFor="courseMadeByUser" className="block text-sm font-semibold text-gray-600 mb-2">
                        Made by User
                    </label>
                    <input
                        id="courseMadeByUser"
                        type="text"
                        value={formData.madeByUser.join(', ')}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, madeByUser: e.target.value.split(', ') }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter names of users (comma-separated)"
                    />
                </div>

                {/* Made by User Git */}
                <div className="mb-4">
                    <label htmlFor="courseMadeByUserGit" className="block text-sm font-semibold text-gray-600 mb-2">
                        Made by User Git
                    </label>
                    <input
                        id="courseMadeByUserGit"
                        type="text"
                        value={formData.madeByUserGit.join(', ')}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, madeByUserGit: e.target.value.split(', ') }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter Git usernames (comma-separated)"
                    />
                </div>

                {/* Course Image */}
                <div className="mb-4">
                    <label htmlFor="courseImage" className="block text-sm font-semibold text-gray-600 mb-2">
                        Course Image
                    </label>
                    <input
                        id="courseImage"
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, image: e.target.value }))}
                        className="w-full p-2 border rounded"
                        placeholder="Enter course image URL"
                    />
                </div>

                {/* Subtopics */}
                {formData.subtopics.map((subtopic, subtopicIndex) => (
                    <div key={subtopicIndex} className="border p-4 mb-4 rounded">
                        {/* Subtopic Name */}
                        <label htmlFor={`subtopicName-${subtopicIndex}`} className="block text-sm font-semibold text-gray-600 mb-2">
                            {`Subtopic ${subtopicIndex + 1} Name`}
                        </label>
                        <input
                            id={`subtopicName-${subtopicIndex}`}
                            type="text"
                            value={subtopic.name}
                            onChange={(e) =>
                                setFormData((prevData) => {
                                    const newSubtopics = [...prevData.subtopics];
                                    newSubtopics[subtopicIndex].name = e.target.value;
                                    return { ...prevData, subtopics: newSubtopics };
                                })
                            }
                            className="w-full p-2 border rounded"
                            placeholder={`Enter subtopic ${subtopicIndex + 1} name`}
                        />

                        {/* Subtopic Description */}
                        <label htmlFor={`subtopicDescription-${subtopicIndex}`} className="block text-sm font-semibold text-gray-600 mb-2">
                            {`Subtopic ${subtopicIndex + 1} Description`}
                        </label>
                        <input
                            id={`subtopicDescription-${subtopicIndex}`}
                            type="text"
                            value={subtopic.description}
                            onChange={(e) =>
                                setFormData((prevData) => {
                                    const newSubtopics = [...prevData.subtopics];
                                    newSubtopics[subtopicIndex].description = e.target.value;
                                    return { ...prevData, subtopics: newSubtopics };
                                })
                            }
                            className="w-full p-2 border rounded"
                            placeholder={`Enter subtopic ${subtopicIndex + 1} description`}
                        />

                        {/* Subtopic Image */}
                        <label htmlFor={`subtopicImage-${subtopicIndex}`} className="block text-sm font-semibold text-gray-600 mb-2">
                            {`Subtopic ${subtopicIndex + 1} Image`}
                        </label>
                        <input
                            id={`subtopicImage-${subtopicIndex}`}
                            type="text"
                            value={subtopic.image}
                            onChange={(e) =>
                                setFormData((prevData) => {
                                    const newSubtopics = [...prevData.subtopics];
                                    newSubtopics[subtopicIndex].image = e.target.value;
                                    return { ...prevData, subtopics: newSubtopics };
                                })
                            }
                            className="w-full p-2 border rounded"
                            placeholder={`Enter subtopic ${subtopicIndex + 1} image URL`}
                        />

                        {/* Modules */}
                        {subtopic.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="border p-4 mb-4 rounded">
                                {/* Module Name */}
                                <label
                                    htmlFor={`moduleName-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Name`}
                                </label>
                                <input
                                    id={`moduleName-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.name}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].name = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} name`}
                                />

                                {/* Module Type */}
                                <label
                                    htmlFor={`moduleType-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Type`}
                                </label>
                                <input
                                    id={`moduleType-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.type}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].type = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} type`}
                                />

                                {/* Module Description
                                <label
                                    htmlFor={`moduleDescription-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Description`}
                                </label>
                                <input
                                    id={`moduleDescription-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.description}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].description = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} description`}
                                /> */}

                                {/* Module Content */}
                                <label
                                    htmlFor={`moduleContent-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Content`}
                                </label>
                                <input
                                    id={`moduleContent-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.content}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].content = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} content`}
                                />

                                {/* Module Video */}
                                <label
                                    htmlFor={`moduleVideo-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Video`}
                                </label>
                                <input
                                    id={`moduleVideo-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.video || ''}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].video = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} video URL`}
                                />

                                {/* Module Image */}
                                <label
                                    htmlFor={`moduleImage-${subtopicIndex}-${moduleIndex}`}
                                    className="block text-sm font-semibold text-gray-600 mb-2"
                                >
                                    {`Module ${moduleIndex + 1} Image`}
                                </label>
                                <input
                                    id={`moduleImage-${subtopicIndex}-${moduleIndex}`}
                                    type="text"
                                    value={module.image}
                                    onChange={(e) =>
                                        setFormData((prevData) => {
                                            const newSubtopics = [...prevData.subtopics];
                                            newSubtopics[subtopicIndex].modules[moduleIndex].image = e.target.value;
                                            return { ...prevData, subtopics: newSubtopics };
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    placeholder={`Enter module ${moduleIndex + 1} image URL`}
                                />

                                {/* Remove Module Button */}
                                <button
                                    type="button"
                                    onClick={() => removeModule(subtopicIndex, moduleIndex)}
                                    className="bg-red-500 text-white p-2 rounded mt-2"
                                >
                                    Remove Module
                                </button>
                            </div>
                        ))}

                        {/* Add Module Button */}
                        <button
                            type="button"
                            onClick={() => addModule(subtopicIndex)}
                            className="bg-green-500 text-white p-2 rounded mt-2"
                        >
                            Add Module
                        </button>

                        {/* Remove Subtopic Button */}
                        <button
                            type="button"
                            onClick={() => removeSubtopic(subtopicIndex)}
                            className="bg-red-500 text-white p-2 rounded mt-2"
                        >
                            Remove Subtopic
                        </button>
                    </div>
                ))}

                {/* Add Subtopic Button */}
                <button type="button" onClick={addSubtopic} className="bg-green-500 text-white p-2 rounded mt-4">
                    Add Subtopic
                </button>
                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreateCoursePage;