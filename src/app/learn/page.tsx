'use client';
import ChatPrompt from '@/components/ChatPrompt';
import CourseCard from '@/components/CourseCard';
import Loader from '@/components/Loader';
import NothingFound from '@/components/NothingFound';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { BotIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Course } from '@/interfaces/learn';

interface LearnTypeOfApi {
  status: number;
  message: string;
  data: Course[];
}

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [courseData, setCourseData] = useState<Course[]>([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses`,
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

  if (loading) {
    return <Loader />;
  }

  if (courseData === undefined || courseData.length === 0) {
    return <NothingFound />;
  }

  return <CoursesPage courseData={courseData} />;
};

const CoursesPage = ({ courseData }: { courseData: Course[] }) => {
  return (
    <div>
      <div className="flex justify-center mb-4 mt-32">
        <h1 className="text-4xl font-bold">All Courses</h1>
      </div>

      {/* Search bar */}

      {/* Sort files according to tags */}
      {/* <div className="flex justify-center">
        <Select>
          <SelectTrigger>
            <SelectValue>Filter using tag</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {courseData.map((course) => (
                course.tags.map((tag) => (<SelectItem value={tag}>{tag}</SelectItem>))
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue>Filter using Difficulty</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div> */}

      {/* Show shorted, searched file. if none, show no files found, and show all course card under section all */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
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
    </div>
  );
};

export default Page;
