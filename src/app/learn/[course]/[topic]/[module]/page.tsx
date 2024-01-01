import Quiz from '@/components/Quiz';
import { getModuleDetails } from '@/scripts/api-calls';

interface ModuleProps {
  params: {
    course: string;
    topic: string;
    module: string;
  };
}

export default async function page({
  params: { course, topic, module },
}: ModuleProps) {
  const modules: Module = await getModuleDetails(
    parseInt(course),
    parseInt(topic),
    parseInt(module),
  );
  console.log(modules.quiz);
  return (
    <div key={modules.id} className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{modules.name}</h3>
      {/* Render different module types */}
      {modules.type === 'text' && (
        <div>
          {modules.content.map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
        </div>
      )}
      {modules.type === 'quiz' && (
        <div>
          <h4 className="text-md font-semibold mb-2">Quiz Questions:</h4>
          {modules.quiz.map((quiz) => (
            <Quiz key={quiz.id} quizzes={[quiz]} />
          ))}
        </div>
      )}
      {modules.type === 'video' && (
        <div>
          <video controls className="w-full">
            <source src={modules.video || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
