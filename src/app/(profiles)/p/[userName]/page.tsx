// Public profile page, JSON RECIEVED similar to the dashboard page.
// change to userName instead of id

import { getPublicProfileOfUser } from "@/scripts/api-calls";
import { UserProfile } from "@/scripts/types/dashboard";

interface PageProps {
  params: {
    userName: string;
  };
}

async function Page({ params }: PageProps): Promise<JSX.Element> {
  // username is userId
  const userName = params.userName;
  const response = await getPublicProfileOfUser(userName);

  if (response === null) {
    return <div className="container mx-auto mt-8">Profile is private</div>;
  }

  const user: UserProfile = response;

  const {
    publicProfile,
    publicName,
    publicPhoto,
    publicBio,
    publicEmail,
    publicInterests,
  } = user.settings;

  return (
    <div className="container mx-auto mt-8">
      {publicProfile && (
        <div>
          {publicName && <h1 className="text-2xl font-bold">{user.name}</h1>}
          {publicPhoto && (
            <img
              src={user.photo}
              alt="User Photo"
              className="mt-4 rounded-full"
            />
          )}
          {publicBio && <p className="mt-4">{user.bio}</p>}
          {publicEmail && <p className="mt-4">{user.email}</p>}
          {publicInterests && (
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2">Interests</h2>
              {user.interests.length > 0 ? (
                <ul className="list-disc pl-4">
                  {user.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              ) : (
                <p>None</p>
              )}
            </div>
          )}

          <div className="p-4 bg-white rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-4">Course Enrollments:</h2>
            <ul>
              {user.CourseEnrollment.map((enrollment) => (
                <li key={enrollment.id} className="mb-2">
                  Course ID: {enrollment.courseId}, Status: {enrollment.status}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Achievements:</h2>
            <ul>
              {user.achievements.map((achievement) => (
                <li key={achievement.id} className="mb-2">
                  <span className="font-bold">{achievement.name}:</span>{' '}
                  {achievement.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
