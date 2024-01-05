// import Link from 'next/link';

// const renderModules = (subtopics: Subtopic[], courseId: string) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {subtopics.map((subtopic) => (
//         <div key={subtopic.id} className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             src={subtopic.image}
//             alt={subtopic.name}
//             className="w-full h-40 object-cover mb-4 rounded-md"
//           />
//           <h2 className="text-xl font-bold mb-2">{subtopic.name}</h2>
//           <p className="text-gray-600 mb-4">{subtopic.description}</p>
//           {/* Render modules for each subtopic */}
//           <div className="grid grid-cols-1 gap-4">
//             {subtopic.modules.map((module) => (
//               <div key={module.id} className=" p-4 rounded-md shadow-md">
//                 <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
//                 {/* Render different module types */}
//                 {module.type === 'text' && (
//                   <div>
//                     {module.content.map((text, index) => (
//                       <p key={index} className="mb-2">
//                         {text}
//                       </p>
//                     ))}
//                   </div>
//                 )}
//                 {module.type === 'quiz' && (
//                   <div>
//                     <h4 className="text-md font-semibold mb-2">
//                       Quiz Questions:
//                     </h4>
//                     <ul className="list-disc pl-4">
//                       {module.quiz &&
//                         module.quiz.map((question, index) => (
//                           <li key={index}>{<>{question}</>}</li>
//                         ))}
//                     </ul>
//                   </div>
//                 )}
//                 {module.type === 'video' && (
//                   <div>
//                     <video controls className="w-full">
//                       <source src={module.video || ''} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}
//                 <Link
//                   href={`/learn/${courseId}/${subtopic.id}/${module.id}`}
//                   className="text-blue-500 inline-flex items-center mt-2"
//                 >
//                   Visit Modules
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default renderModules;
