import NothingFound from '@/components/NothingFound';
import RenderContent from '@/components/RenderContent';
import { Button, buttonVariants } from '@/components/ui/button';
import { getModuleDetails } from '@/scripts/api-calls';
import Link from 'next/link';
import NextModule from './NextModule';

interface ModuleProps {
  params: {
    moduleid: string;
  };
}

export default async function page({ params }: ModuleProps) {
  const modules: Module = await getModuleDetails(parseInt(params.moduleid));

  if (modules === null) {
    return <NothingFound />;
  }

  return (
    <div key={modules.id} className="p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{modules.name}</h3>
      {/* Render different module types */}
      {modules.type === 'text' && <div>
        <RenderContent contentURL={modules.content} />
      </div>}
      {modules.type === 'video' && (
        <div>
          <video controls className="w-full">
            <source src={modules.video || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <NextModule />
    </div>
  );
}