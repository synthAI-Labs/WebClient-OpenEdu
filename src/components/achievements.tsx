const AchievementsBadges: React.FC = () => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            {/* Display user achievements and badges */}
            <h2 className="text-xl font-semibold mb-4">Achievements and Badges</h2>
            <ul className="list-disc ml-6">
                <li>Completed Course 1 - Achievement Unlocked!</li>
                <li>Top Performer Badge - Earned</li>
                {/* Add more achievements and badges */}
            </ul>
        </div>
    );
};

export default AchievementsBadges;