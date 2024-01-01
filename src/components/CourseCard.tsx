import Link from 'next/link';

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
    <img className="w-full h-auto mb-2" src={course.image} alt={course.name} />
    <p>
      <strong>Description:</strong> {course.description}
    </p>
    <Link
      href={`/learn/${course.id}`}
      className="text-blue-500 inline-flex items-center mt-2"
    >
      Learn More
    </Link>
    {/* Render other properties as needed */}
  </div>
);

export default CourseCard;
