import NothingFound from '@/components/NothingFound';
import RenderContent from '@/components/RenderContent';
import { Button, buttonVariants } from '@/components/ui/button';
import { getModuleDetails } from '@/scripts/api-calls';
import Link from 'next/link';
import NextModule from '../../../../components/NextModule';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ChatPrompt from '@/components/ChatPrompt';
import { BotIcon } from 'lucide-react';

interface ModuleProps {
  params: {
    moduleid: string;
  };
}

export default async function page({ params }: ModuleProps) {
  const modulesPromise: Promise<Module> = getModuleDetails(
    parseInt(params.moduleid),
  );
  const modules: Module | null = await modulesPromise;

  if (modules === null) {
    return <NothingFound />;
  }

  return (
    <div key={modules.id} className="p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{modules!.name}</h3>
      {/* Render different module types */}
      {modules.type === 'text' && (
        <div>
          <RenderContent contentURL={modules!.content} />
        </div>
      )}
      {modules.type === 'video' && (
        <div>
          <video controls className="w-full">
            <source src={modules!.video || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <NextModule />
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
            <ChatPrompt moduleId={modules.id} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
