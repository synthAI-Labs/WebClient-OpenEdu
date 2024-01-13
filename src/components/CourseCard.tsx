'use client';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { checkValues, searchLocalStorage } from '@/scripts/check-user-auth';
import { toast } from './ui/use-toast';
import { ToastAction } from './ui/toast';

const CourseCard = ({ course }: { course: Course }) => {
  const EnrollUser = async () => {
    if (process.browser) {
      const userLoggedIn = checkValues();
      const { authorization, userId } = searchLocalStorage();
      if (userLoggedIn) {
        const user = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/enroll/${course.id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: authorization,
              user_id: userId,
            },
          },
        );

        const data = await user.json();

        console.log(data);
        if (data.status === 201) {
          toast({
            title: 'Enrolled Successfully',
            description: 'You have succesfully nrolled in the course',
          });
        } else if (data.status === 200) {
          toast({
            title: 'Already Enrolled',
            description: 'You are already enrolled in the course',
          });
        } else {
          toast({
            title: 'Error',
            description: data.message,
          });
        }
      } else {
        toast({
          title: 'Please Login to Enroll',
          description: 'You need to login to enroll in a course',
          action: <ToastAction altText="Login">Login</ToastAction>,
        });
      }
    }
  };

  return (
    <Card className={cn('w-[350px] mx-4 my-4')}>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/i/${course.image}`}
              alt={`${course.name} image`}
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="flex-1 space-y-1">
            <p className="text-sm text-gray-500">
              <strong>Tags:</strong> {course.tags.join(', ')}
            </p>
          </div>
        </div>
        <div className=" flex justify-start items-start text-left">
          Contributors:{' '}
          {Array.isArray(course.madeByUser)
            ? course.madeByUser.map((user, index) => (
                <Link key={index} href={course.madeByUserGit[index]}>
                  {' '}
                  <Image
                    key={index}
                    src={user}
                    alt="user Image"
                    width={20}
                    height={20}
                  />
                </Link>
              ))
            : 'None'}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-x-8">
        <Button className="w-full flex-1" onClick={() => EnrollUser()}>
          Enroll
        </Button>
        <Link className=" flex-1" href={`/learn/${course.id}`}>
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
