import Loader from '@/components/Loader';
import Quiz from '@/components/Quiz';
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
import { getAllTopicsInCourse } from '@/scripts/api-calls';
// import { getAllTopicsInCourse } from '@/scripts/api-calls';
import { ChevronsUpDown, FileQuestion, TextIcon, Video } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface GetTopicsProps {
  params: {
    course: string;
  };
}

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  madeByUserGit: string[];
  madeByUser: string[];
  userId: null;
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

interface SubtopicCardProps {
  subtopic: Subtopic;
}

const SubtopicCard: React.FC<SubtopicCardProps> = ({ subtopic }) => {
  return (
    <Card className="bg-white p-4 rounded-lg shadow-md m-3">
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
        <Collapsible>
          <div className="flex items-center justify-between space-x-4 px-4 border border-spacing-3">
            <h4 className="text-sm font-semibold">View All Modules</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="">
              {subtopic.modules && subtopic.modules.length > 0 ? (
                subtopic.modules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))
              ) : (
                <p>No modules available for this subtopic</p>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  );
};

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/learn/modules/${module.id}`}
    >
      <Card className=" my-2 rounded-lg shadow-md">
        <CardHeader className="flex flex-row gap-2">
          <div className="mt-3">
            {module.type === 'text' ? <TextIcon /> : ''}
            {module.type === 'quiz' ? <FileQuestion /> : ''}
            {module.type === 'video' ? <Video /> : ''}
          </div>
          <div>
            <CardTitle>{module.name}</CardTitle>
            <p>Description of the module</p>
          </div>
        </CardHeader>
        <CardContent></CardContent>
        {/* Add more content based on your requirements */}
      </Card>
    </Link>
  );
};

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
