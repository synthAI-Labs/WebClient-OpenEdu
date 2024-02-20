import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TextIcon, Video } from 'lucide-react';
import { Module } from '@/interfaces/learn';

interface ModuleCardProps {
  module: Module;
  nextModuleId: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, nextModuleId }) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/learn/modules/${module.id}?nextmodule=${nextModuleId}`}
    >
      <Card className=" my-2 rounded-lg shadow-md">
        <CardHeader className="flex flex-row gap-2">
          <div className="mt-3">
            {module.type === 'text' ? <TextIcon /> : ''}
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

export default ModuleCard;
