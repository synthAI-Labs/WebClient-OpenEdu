'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { motion } from 'framer-motion';
const projects = [
  {
    id: 1,
    image: 'classroom.png',
    heading: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 2,
    image: 'classroom.png',
    heading: 'Project 2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['tag4', 'tag5', 'tag6'],
  },
  // Add more projects here...
];

interface ProjectInterface {
  id: number;
  image: string;
  heading: string;
  description: string;
  tags: string[];
}

const Page = () => {
  return (
    <div className="min-h-screen min-w-full flex flex-col justify-start items-center px-8">
      <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl lgtext-4xl text-sky-400/100 font-semibold	">
            ProjectX - Unleash Your Creativity
          </h1>
          <p className="text-2 font-medium m-2 text-slate-800 dark:text-slate-100">
            Embark on a journey with our Build Your Own series, offering
            hands-on experiences
            <br /> to create something extraordinary from the ground up.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  return (
    // <motion.div className="shadow-md shadow-gray-100 rounded-md hover:scale-[1.05] hover:transition-all duration-500"
    <motion.div
      className="shadow-md shadow-gray-100 rounded-md hover:scale-[1.05] hover:transition-all duration-500"
      whileHover={{
        boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(45deg, #ff0000, #00ff00)',
      }}
      whileTap={{
        scale: 0.6,
        transition: { duration: 0.2 },
      }}
    >
      <Card className=" flex flex-col justify-center items-center px-8">
        <CardHeader>
          <CardTitle>{project.heading}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <img src={project.image} alt={project.heading} className="w-full" />
        <div className="flex flex-wrap mt-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mt-1 mb-3"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default Page;
