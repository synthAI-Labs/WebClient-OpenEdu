import CourseCard from "./courseCard";

const CoursesProgress: React.FC = () => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            {/* Display enrolled courses and progress */}
            <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
            <ul className="list-disc ml-6">
                <CourseCard />
                <li>Course 2 - 50% completed</li>
                {/* Add more courses */}
            </ul>
        </div>
    );
};

export default CoursesProgress;