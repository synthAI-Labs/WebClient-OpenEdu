"use client";
import React, { useState } from "react";

interface Quiz {
    id: number;
    Question: string;
    Options: string[];
    Answer: string[];
    image?: string | null;
    moduleId: number;
}

export default function QuizComponent({ quizzes }: { quizzes: Quiz[] }) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleOptionSelect = (event: React.MouseEvent<HTMLButtonElement>, selectedOption: string, answer: string[]) => {
        event.preventDefault();
        setSelectedOption(selectedOption);
        setIsCorrect(answer.includes(selectedOption));
    };

    const handleSubmit = () => {
        console.log('Submitted!');
    };

    return (
        <div>
            {quizzes.map((quiz) => (
                <div key={quiz.id}>
                    <h4 className="text-md font-semibold mb-2">Question: {quiz.Question}</h4>
                    {quiz.image && <img src={quiz.image} alt={`Quiz Image`} className="my-2" />}

                    <ul className="list-disc pl-4">
                        {quiz.Options.map((option, optionIndex) => (
                            <li key={optionIndex}>
                                <button
                                    className={`cursor-pointer ${selectedOption === option
                                        ? isCorrect
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                        : 'bg-gray-300 text-black'
                                        }`}
                                    onClick={(event) => handleOptionSelect(event, option, quiz.Answer)}
                                    disabled={selectedOption !== null}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                        onClick={handleSubmit}
                        disabled={selectedOption === null}
                    >
                        Submit
                    </button>
                </div>
            ))}
        </div>
    );
}
