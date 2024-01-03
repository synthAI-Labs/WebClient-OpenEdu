import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const CourseCard = ({ course }: { course: Course }) => {
  return (
    < Card className={cn('w-[350px] mx-4 my-4')} >
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>
          {course.description}
        </CardDescription>
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
        <div className=' flex justify-start items-start text-left'>
          Contributors: {Array.isArray(course.madeByUser) ? course.madeByUser.map((user, index) => (
            <Link key={index} href={course.madeByUserGit[index]}> <Image key={index} src={user} alt='user Image' width={20} height={20} /></Link>
          )) : 'None'}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Link href={`/learn/${course.id}`}>
          <Button className="w-full">
            View Course
          </Button>
        </Link>
      </CardFooter>
    </Card >
  )
}

export default CourseCard;