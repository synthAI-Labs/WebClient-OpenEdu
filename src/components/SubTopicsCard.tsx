import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SubtopicCardProps {
  module: Module[];
  completedModules: CompletedCourse[];
}

interface CompletedCourse {
  completedModulesId: number[];
}

const ModulesCardDemo: React.FC<SubtopicCardProps> = ({
  module,
  completedModules,
}) => {
  function getNextModuleId(currentModuleId: number): number | string {
    const moduleIndex = module.findIndex(
      (module) => module.id === currentModuleId,
    );
    const nextModule = module[moduleIndex + 1];
    return nextModule ? nextModule.id : '';
  }

  const isTopicCompleted = (topicId: number) => {
    console.log(topicId);
    return completedModules.some((completedModule) =>
      completedModule.completedModulesId.includes(topicId),
    );
  };

  return (
    <>
      {module.map((module) => (
        <motion.div
          key={module.id}
          whileHover={{ scale: 1.1, rotate: [5, 0] }}
          whileTap={{ scale: 0.9, rotate: [-5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Link
            key={module.id}
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/learn/modules/${
              module.id
            }?nextmodule=${Number(getNextModuleId(module.id))}`}
          >
            <Card
              className={cn(
                'bg-white p-4 rounded-lg shadow-md m-3',
                isTopicCompleted(module.id) ? 'bg-green-300' : 'bg-white',
              )}
            >
              <CardHeader>
                <CardTitle>{module.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <img
                src={module.image}
                alt={module.name}
                className="w-40 h-40 object-cover mb-4 rounded-md"
              /> */}
                <p className="text-gray-600 mb-4">{module.description}</p>
              </CardContent>
              {/* <CardFooter className="flex flex-col"></CardFooter> */}
            </Card>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default ModulesCardDemo;
