import { ChevronsUpDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import ModuleCard from './ModuleCard';

interface SubtopicCardProps {
  subtopic: Subtopic;
}

const SubtopicCard: React.FC<SubtopicCardProps> = ({ subtopic }) => {
  function getNextModuleId(currentModuleId: number) {
    const moduleIndex = subtopic.modules.findIndex(
      (module) => module.id === currentModuleId,
    );
    const nextModule = subtopic.modules[moduleIndex + 1];
    return nextModule ? nextModule.id : ''; // Return an empty string if there is no next module
  }

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
                  <ModuleCard
                    key={module.id}
                    module={module}
                    nextModuleId={Number(getNextModuleId(module.id))}
                  />
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

export default SubtopicCard;
