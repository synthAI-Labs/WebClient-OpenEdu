// TODO: Let user Enroll in a course
// TODO: Make it modular
'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import NotFound from '../not-found';
import Loader from '@/components/Loader';

interface ApiCallProps {
  status: number;
  message: string;
  data: ProjectInterface[];
}
interface ProjectInterface {
  id: number;
  image: string;
  name: string;
  description: string;
  createdDate: Date;
  Githublink: string;
  tags: string[];
}

const Page = () => {
  const [loading, setLoading] = React.useState(true);
  const [project, setProjects] = React.useState<ProjectInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/project`,
        );

        const response: ApiCallProps = await res.json();

        if (response.status != 200) {
          toast({
            title: 'Error',
            description: response.message,
            duration: 3000,
            variant: 'destructive',
          });
        } else {
          setProjects(response.data);
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
  }, [project]);

  if (loading) {
    return <Loader />;
  }

  if (project.length === 0 || project === undefined) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen min-w-full flex flex-col justify-start items-center px-8 mt-32 ">
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
        {project.map((project) => (
          <ProjectCard project={project} key={project.id} />
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
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <img src={project.image} alt={project.name} className="w-full" />
        <div className="flex flex-wrap mt-2">
          {project.tags ? (
            project.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mt-1 mb-3"
              >
                {tag}
              </span>
            ))
          ) : (
            <></>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default Page;
