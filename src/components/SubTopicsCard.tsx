import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';

interface SubtopicCardProps {
  module: Module[];
}

const ModulesCardDemo: React.FC<SubtopicCardProps> = ({ module }) => {
  function getNextModuleId(currentModuleId: number): number | string {
    const moduleIndex = module.findIndex(
      (module) => module.id === currentModuleId,
    );
    const nextModule = module[moduleIndex + 1];
    return nextModule ? nextModule.id : '';
  }

  return (
    <>
      {module.map((module) => (
        <Link
          key={module.id}
          href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/learn/modules/${
            module.id
          }?nextmodule=${Number(getNextModuleId(module.id))}`}
        >
          <Card className="bg-white p-4 rounded-lg shadow-md m-3">
            <CardHeader>
              <CardTitle>{module.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={module.image}
                alt={module.name}
                className="w-40 h-40 object-cover mb-4 rounded-md"
              />
              <p className="text-gray-600 mb-4">{module.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col"></CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ModulesCardDemo;
