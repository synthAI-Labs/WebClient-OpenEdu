import { getPublicProfileOfUser } from '@/scripts/api-calls';
import { UserProfile, UserSettings } from '@/scripts/types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

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
  if (response.status === 404) {
    toast({
      title: 'Error',
      description: 'Profile not found',
    });

    return <div className="container mx-auto mt-8">Profile not found</div>;
  }

  const user: UserProfile = response;

  const userSettings: UserSettings = user.settings || {};
  console.log(userSettings);

  const {
    publicProfile,
    publicName,
    publicPhoto,
    publicBio,
    publicEmail,
    publicInterests,
  } = userSettings;

  return (
    <div className="container mx-auto mt-8">
      {publicProfile && (
        <div>
          <div className="flex flex-col gap-4 justify-between sm:flex-row">
            <div className="flex flex-col sm:flex-row gap-8">
              {publicPhoto && (
                <img
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}/i/${user.photo}`}
                  alt="User Photo"
                  className="rounded-full w-40 h-40 object-cover border-2 border-black"
                />
              )}
              <div>
                {publicName && (
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                )}
                {publicBio && <p className="mt-2">{user.bio}</p>}
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-900 hover:text-white"
                  >
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Edit profile settings</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <div>
                      <Label htmlFor="Username">Username</Label>
                      <Input id="Username" defaultValue={user.username} />
                    </div>
                    <div>
                      <Label htmlFor="ProfilePic">Profile photo</Label>
                      <Input type="file" id="ProfilePic" />
                    </div>
                    <div>
                      <Label htmlFor="Bio">Bio</Label>
                      <Input id="Bio" defaultValue={user.bio} />
                    </div>
                    <div>
                      <Label htmlFor="Email">Email</Label>
                      <Input
                        id="Email"
                        defaultValue={user.email ? user.email : ''}
                      />
                    </div>
                    <div>
                      <Label htmlFor="Interests">Interests</Label>
                      <Input id="Interests" defaultValue={user.interests} />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {publicEmail && (
            <div>
              <p className="mt-4 font-medium">{user.email}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Card className="flex-[2]">
              <CardHeader>
                <CardTitle className="text-lg font-bold">About Me</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            {publicInterests && (
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.interests.length > 0 ? (
                    <ul className="list-disc pl-4">
                      {user.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>None</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Course Enrollments:</h2>
            <ul className="flex flex-col gap-4 sm:flex-row">
              {user.CourseEnrollment.map((enrollment) => (
                <Card key={enrollment.id} className="max-w-sm">
                  <CardHeader>
                    <CardTitle>Course Name</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Course ID: {enrollment.courseId}</p>
                    <p>Status: {enrollment.status}</p>
                  </CardContent>
                </Card>
              ))}
            </ul>
          </div>

          <div className="mb-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">Achievements:</h2>
            <ul className="flex flex-col gap-4 max-w-2xl">
              {user.achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="pt-6 bg-white rounded shadow"
                >
                  <CardContent>
                    <span className="font-bold">{achievement.name}:</span>{' '}
                    {achievement.description}
                  </CardContent>
                </Card>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
