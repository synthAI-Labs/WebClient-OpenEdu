const Recommendations: React.FC = () => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            {/* Display personalized course recommendations */}
            <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
            <ul className="list-disc ml-6">
                <li>Recommended Course 1</li>
                <li>Recommended Course 2</li>
                {/* Add more recommendations */}
            </ul>
        </div>
    );
};
export default Recommendations;