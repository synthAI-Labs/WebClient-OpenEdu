// SubtopicCard.jsx

import React from 'react';
import { buttonVariants } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import Link from 'next/link';

interface SubtopicCardProps {
    subtopic: Subtopic;
    courseParams: {
        course: string
    };
}
const SubtopicCard: React.FC<SubtopicCardProps> = ({ subtopic, courseParams }) => {
    return (
        <Card className="bg-white p-4 rounded-lg shadow-md">
            <CardHeader>
                <CardTitle>{subtopic.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                    src={subtopic.image}
                    alt={subtopic.name}
                    className="w-40 h-40 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-600 mb-4">{subtopic.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Link
                    href={`/learn/${courseParams.course}/${subtopic.id}`}
                    className={buttonVariants({ variant: 'default' })}
                >
                    Modules
                </Link>
            </CardFooter>
        </Card>
    );
};

export default SubtopicCard;
