import ChatPrompt from '@/components/ChatPrompt';
import Loader from '@/components/Loader';
import SubtopicCard from '@/components/SubTopicsCard';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getAllTopicsInCourse } from '@/scripts/api-calls';
// import { getAllTopicsInCourse } from '@/scripts/api-calls';
import {
  BotIcon,
  ChevronsUpDown,
  FileQuestion,
  TextIcon,
  Video,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface GetTopicsProps {
  params: {
    course: string;
  };
}

const GetTopics: React.FC<GetTopicsProps> = async ({ params }) => {
  const response = getAllTopicsInCourse(params.course);
  const topic: Course | null = await response;
  console.log(topic);

  if (topic === null) {
    return <p>Topic not found</p>;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col justify-center items-center">
      {topic ? (
        <>
          <h1 className="text-3xl font-bold mb-8">{topic.name} Topics</h1>
          <p className="text-gray-600 mb-4">{topic.description}</p>
          <div className="gap-8">
            {topic.subtopics.map((subtopic) => (
              <div key={subtopic.id}>
                <SubtopicCard subtopic={subtopic} />
              </div>
            ))}
          </div>
          <div
            className="border shadow-lg rounded-full bg-white p-2"
            style={{
              position: 'fixed',
              right: 20,
              bottom: '10%',
              zIndex: 1000,
            }}
          >
            <Popover>
              <PopoverTrigger>
                <BotIcon size={40} />
              </PopoverTrigger>
              <PopoverContent className="mr-20 lg:min-w-[540px] min-w-[340px]">
                <ChatPrompt />
              </PopoverContent>
            </Popover>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GetTopics;
