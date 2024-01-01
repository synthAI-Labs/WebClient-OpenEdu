import renderModules from '@/components/RenderModules';
import { getAllModulesInASubtopic } from '@/scripts/api-calls';
import Link from 'next/link';

interface ModuleProps {
  params: {
    course: any;
    topic: any;
  };
}

const Modules: React.FC<ModuleProps> = async ({ params }) => {
  const response = getAllModulesInASubtopic(params.course, params.topic);
  const modules: Subtopic[] | undefined = await response;

  if (modules === undefined) {
    return <p>Modules not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Modules</h1>
      {modules ? (
        renderModules(modules, params.course)
      ) : (
        <p className="text-gray-600">Loading modules...</p>
      )}
    </div>
  );
};

export default Modules;

// DEMO JSON RESPONSE:
// [
//     {
//       "id": 1,
//       "name": "Subtopic 1.1",
//       "description": "Description for Subtopic 1.1",
//       "courseId": 1,
//       "image": "image1.jpg",
//       "modules": [
//         {
//           "id": 1,
//           "name": "Module 1.1.1",
//           "type": "text",
//           "content": [
//             "Content for Module 1.1.1"
//           ],
//           "quiz": [],
//           "video": null,
//           "image": "image1.jpg",
//           "subtopicId": 1
//         },
//         {
//           "id": 2,
//           "name": "Module 1.1.2",
//           "type": "quiz",
//           "content": [],
//           "quiz": [
//             "Question 1",
//             "Question 2"
//           ],
//           "video": null,
//           "image": "image2.jpg",
//           "subtopicId": 1
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "Subtopic 1.2",
//       "description": "Description for Subtopic 1.2",
//       "courseId": 1,
//       "image": "image1.jpg",
//       "modules": [
//         {
//           "id": 3,
//           "name": "Module 1.2.1",
//           "type": "text",
//           "content": [
//             "Content for Module 1.2.1"
//           ],
//           "quiz": [],
//           "video": null,
//           "image": "image3.jpg",
//           "subtopicId": 2
//         },
//         {
//           "id": 4,
//           "name": "Module 1.2.2",
//           "type": "video",
//           "content": [],
//           "quiz": [],
//           "video": "video1.mp4",
//           "image": "image4.jpg",
//           "subtopicId": 2
//         }
//       ]
//     }
//   ]
