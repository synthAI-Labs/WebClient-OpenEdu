// UserProfile Component
interface UserProfileProps {
    user: {
        id: string;
        name: string;
        username: string;
        bio: string;
        email: string;
        profilePicture: string;
        // Add more user-related fields as needed
    };
    onEditProfileClick: () => void; // Add the onEditProfileClick property to the UserProfileProps interface
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEditProfileClick }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md text-center">
            {/* Display user profile information */}
            <img className="rounded-full mx-auto mb-4" src={user.profilePicture} alt={`${user.name}'s Profile`} width="100" height="100" />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>

            {/* Additional user information */}
            {user.bio && <p className="text-sm text-gray-500 mt-2">{user.bio}</p>}
            {user.email && <p className="text-sm text-gray-500 mt-2">{user.email}</p>}

            {/* Edit Profile button */}
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
            >
                Edit Profile
            </button>
        </div>
    );
};

export default UserProfile;
