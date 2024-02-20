// TODO Use Cards
'use client';
import NothingFound from '@/components/NothingFound';
import NextModule from '../../../../components/NextModule';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ChatPrompt from '@/components/ChatPrompt';
import { BotIcon, Loader2Icon } from 'lucide-react';
import MarkAsCompleteButton from '@/components/MarkAsCompleteButton';
import { useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import Loader from '@/components/Loader';

interface ModuleProps {
  params: {
    moduleid: string;
  };
}

interface Module {
  description: string;
  id: number;
  name: string;
  madeByUserGit: string[];
  madeByUser: string[];
  tags: string[];
  GithubLink: string | null;
  numbering: number;
  type: 'text' | 'video';
  content: string;
  video?: string | null;
  image: string;
  subtopicId: number;
  youtubeEmbed: boolean;
}

interface GetModulesApiResponseProps {
  status: number;
  message: string;
  data: Module;
}

const page = ({ params }: ModuleProps) => {
  const moduleIdToGet = params.moduleid;
  const [isLoading, setIsLoading] = useState(true);
  const [moduleData, setModuleData] = useState<Module | null>(null);

  useEffect(() => {
    const fetchModule = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/m/${moduleIdToGet}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          },
        );

        const response: GetModulesApiResponseProps = await res.json();

        if (response.status != 200) {
          toast({
            title: 'Error',
            description: 'Error fetching module details',
            variant: 'destructive',
          });
          return;
        }

        const data = response.data;
        setModuleData(data);
      } catch {
        toast({
          title: 'Error',
          description: 'Error fetching module details',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchModule();
  }, [moduleIdToGet]);

  if (isLoading) {
    return <Loader />;
  }

  if (!moduleData) {
    return <NothingFound />;
  }

  return <ModuleContent modules={moduleData!} />;
};

const ModuleContent = ({ modules }: { modules: Module }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true); // Start loading by default

  useEffect(() => {
    // Simulate video loading delay (remove for actual integration)
    setTimeout(() => setIsVideoLoading(false), 2000);
  }, [modules]); // Re-load when modules change

  return (
    <div
      key={modules.id}
      className=" felx felx-col justify-center items-center p-4 rounded-md shadow-md mt-32 h-full"
    >
      {modules.youtubeEmbed ? (
        <div>
          {/* Display loading placeholder while video loads */}
          {isVideoLoading && (
            <div className=" flex flex-col justify-center items-center">
              <div className=" animate-spin">
                <Loader2Icon size={32} />
              </div>
              <p>Loading video...</p>
            </div>
          )}
          {/* Display video and handle errors gracefully */}
          {!isVideoLoading && (
            <div
              dangerouslySetInnerHTML={{ __html: modules.video! }}
              onError={() => {
                // Handle video loading error (e.g., display error message)
                console.error('Error loading video');
                setIsVideoLoading(false); // Allow fallback content or retry
              }}
            />
          )}
        </div>
      ) : (
        <p>No video available for this module.</p>
      )}

      <div className="flex justify-between mt-4">
        <MarkAsCompleteButton moduleId={modules.id} />
        <NextModule />
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
            <ChatPrompt moduleId={modules.id} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default page;
