import AchievementsBadges from "@/components/achievements";
import CoursesProgress from "@/components/coursesProgress";
import Recommendations from "@/components/recommendationCourses";
import UserProfile from "@/components/userProfile";

// Main Page Component
interface Props {
    // Define your component props here
}

const Page: React.FC<Props> = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <UserProfile user={{
                id: "fa",
                name: "Hello",
                username: "hima",
                bio: "bio jf;lkadnf",
                profilePicture: "https://avatars.githubusercontent.com/u/29915021?v=4",
                email: "wmail@email.com"
            }} onEditProfileClick={function (): void {
            }} />
            <CoursesProgress />
            <Recommendations />
            <AchievementsBadges />
        </div>
    );
};

export default Page;
