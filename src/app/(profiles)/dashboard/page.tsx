'use client';

// TODO: Convert it into more modular components

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserProfile } from '@/interfaces/dashboard';
import Loader from '@/components/Loader';
import NothingFound from '@/components/NothingFound';
import { toast } from '@/components/ui/use-toast';
import {
  checkValues,
  searchLocalStorage,
  deletedValues,
} from '@/scripts/check-user-auth';
import { Share } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface UserProfileApiReq {
  status: number;
  message: string;
  data: UserProfile;
}

const Page: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (process.browser) {
        const userPresent: boolean = checkValues();
        console.log('userPresent' + userPresent);
        if (!userPresent) {
          window.location.href = '/signin';
        }
        const { authorization, userId } = searchLocalStorage();
        console.log('authorization: ' + authorization);
        console.log('userId: ' + userId);
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/profile`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                authorization,
                user_id: userId,
              },
              // credentials: 'include',
            },
          );
          const response: UserProfileApiReq = await res.json();
          console.log(response);
          console.log(response.status);
          console.log(response.message);
          if (response.status != 200) {
            toast({
              title: response.status.toString(),
              description: response.message,
              variant: 'destructive',
            });
            // deletedValues();
            // window.location.href = '/signin';
            return;
          }
          const userData: UserProfile = await response.data;
          setUser(userData);
          console.log(user);
          setLoading(false);

          const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has('editProfile')) {
            window.location.href = '/dashboard/editProfile';
          }
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <NothingFound />;
  }

  return <UserProfilePage user={user} />;
};

const UserProfilePage = ({ user }: { user: UserProfile }) => {
  return (
    <div className="container mx-auto mt-8 justify-center items-center">
      <div>
        <div className="flex flex-col gap-4 justify-between sm:flex-row">
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/i/${user.photo}`}
                alt="User Photo"
                className="rounded-full w-40 h-40 object-cover border-2 border-black"
              />
              <p className=" text-muted-foreground">*auto AI generated</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="mt-2 font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div>
              <Button
                variant="ghost"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_CLIENT_URL}/p/${user.username}`,
                  );
                  toast({
                    title: 'Link copied to clipboard',
                    description:
                      'URL: ' +
                      `${process.env.NEXT_PUBLIC_CLIENT_URL}/p/${user.username}`,
                  });
                }}
              >
                <Share className="w-6 h-6" />
              </Button>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link href={`/dashboard/editProfile`}>
                <Button
                  variant="outline"
                  className="hover:bg-gray-900 hover:text-white"
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 min-w-full">
          <Card className="flex">
            <CardHeader>
              <CardTitle className="text-lg font-bold">About Me</CardTitle>
              <div className="mt-4 font-medium justify-center items-center flex mb">
                {user.bio!.length === 0 ||
                user.bio === null ||
                user.bio === undefined ? (
                  <p>No bio set</p>
                ) : (
                  <p className="">{user.bio}</p>
                )}
              </div>
            </CardHeader>
          </Card>

          <Card className="flex">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Interests</CardTitle>
              <div className="mt-4 font-medium justify-center items-center flex mb">
                {user.bio.length === 0 ||
                user.bio === null ||
                user.bio === undefined ? (
                  <p>No Interests set</p>
                ) : (
                  <p className="">{user.bio}</p>
                )}
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Course Enrollments:</h2>
          {user.CourseEnrollment.length === 0 ? (
            <div className=" h-32 flex flex-col items-center justify-center">
              <div>
                <p>No courses available</p>
              </div>
              <div className="mt-2">
                <Link href={'/learn'}>
                  <Button variant={'outline'}>View courses</Button>
                </Link>
              </div>
            </div>
          ) : (
            <ul className="flex flex-col gap-4 sm:flex-row">
              {user.CourseEnrollment.map((enrollment) => (
                <Card className={cn('w-[350px]')} key={enrollment.id}>
                  <CardHeader>
                    <CardTitle>{enrollment.name}</CardTitle>
                    <CardDescription>{enrollment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <div className="flex-1 space-y-1">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/i/${enrollment.image}`}
                          alt={`${enrollment.name} image`}
                          width={300}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className=" flex justify-center items-center">
                      <h1>
                        {enrollment.completed ? 'COMPLETED' : 'IN_PROGRESS'}
                      </h1>
                    </div>
                    <div>
                      <Progress
                        value={
                          (enrollment.progress / enrollment.totalModules) * 100
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter className=" flex justify-center items-center">
                    <Link href={`/learn/${enrollment.id}`}>
                      <Button className="w-full" variant={'outline'}>
                        View Course
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-4 mt-8">
          <h2 className="text-2xl font-bold mb-4">Achievements:</h2>
          {user.achievements.length === 0 ? (
            <div className=" h-32 flex flex-col items-center justify-center">
              <div>
                <p>No achievements available</p>
              </div>
              <div className="mt-2">
                <Link href={'/learn'}>
                  <Button variant={'outline'}>View courses</Button>
                </Link>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
