'use client';
import ModulesCardDemo from '@/components/SubTopicsCard';
import { getAllTopicsInCourse } from '@/scripts/api-calls';
import { unstable_noStore } from 'next/cache';
import Link from 'next/link';
import ChatPrompt from '@/components/ChatPrompt';
import CourseCard from '@/components/CourseCard';
import Loader from '@/components/Loader';
import NothingFound from '@/components/NothingFound';
import { Course } from '@/interfaces/learn';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { BotIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Interfaces definition
interface GetTopicsProps {
  params: {
    course: string;
  };
}

interface LearnTypeOfApi {
  status: number;
  message: string;
  data: Course;
  coursesCompleted?: CompletedCourse[];
}

interface CompletedCourse {
  completedModulesId: number[];
}

// Main Component definition
const Page: React.FC<GetTopicsProps> = ({ params }) => {
  // Destructuring parameters
  const courseId = params.course;
  // State initialization
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [courseData, setCourseData] = useState<Course>();
  const [allModules, setAllModules] = useState<number[]>();
  const [completedModules, setCompletedModules] = useState<CompletedCourse[]>(
    [],
  );

  // Function to toggle chat window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Fetching data effect
  useEffect(() => {
    const fetchData = async () => {
      let userId: String | null = null;
      if (process.browser) {
        userId = localStorage.getItem('user-Id');
        console.log('userId: ' + userId);
      }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/${courseId}`,
          {
            method: 'GET',
            headers: {
              userId: (userId as string) || '', // Ensure userId is of type string
            },
          },
        );

        const response: LearnTypeOfApi = await res.json();

        if (response.status !== 200) {
          toast({
            title: response.status.toString(),
            description: response.message,
            variant: 'destructive',
          });
        } else {
          setCourseData(response.data);
          setCompletedModules(response.coursesCompleted || []);
        }
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error fetching data',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return <Loader />;
  }

  // Displaying message if no course data found
  if (courseData === undefined) {
    return <NothingFound />;
  }

  return <GetTopics topic={courseData} completedModules={completedModules} />;
};

// Component for displaying course topics
const GetTopics = ({
  topic,
  completedModules,
}: {
  topic: Course;
  completedModules: CompletedCourse[];
}) => {
  // JSX rendering
  return (
    <div className="container mx-auto p-8 flex flex-col justify-center items-center">
      {topic ? (
        <>
          <h1 className="text-3xl font-bold mb-8">{topic.name} Topics</h1>
          <p className="text-gray-600 mb-4">{topic.description}</p>
          <div className="gap-8">
            <ModulesCardDemo
              module={topic.modules}
              completedModules={completedModules}
            />
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

export default Page;
