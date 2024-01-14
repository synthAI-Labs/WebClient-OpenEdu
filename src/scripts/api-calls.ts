import { useToast as useToastAny } from 'ui/use-toast';
const toast: any = useToastAny();
export async function getResponseFromBot(authorization: string, userId: string, userMessage: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
      method: 'POST',
      headers: {
        "authorization": authorization,
        "user_id": userId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    if (response.status === 403) {
      const errorData = await response.json();
      toast.error(`Error: ${errorData.message}`, { position: toast.POSITION.TOP_CENTER });
    } else if (response.status === 404) {
      const errorData = await response.json();
      toast({
        title: 'Error',
        type: 'foreground',
        variant: 'destructive', // if it is critical error, like 500
        description: 'Please accept the terms and conditions', // it'll be message received from user
        });
      const data = await response.json();
      return data;
    }
  } catch (error) {
    toast.error('An unexpected error occurred. Please try again later.', { position: toast.POSITION.TOP_CENTER });
    console.error(error);
  }

export async function getPublicProfileOfUser(userName: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/p/${userName}`);

    if (response.status === 404) {
        return {
            status: 404,
            message: 'User not found'
        };
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        const user = await response.json();
        return user;
    } else {
        return null;
    }
}

export async function getResponseFromBot(authorization: string, userId: string, userMessage: string) {
    console.log(authorization, userId, userMessage)

    const botResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        method: 'POST',
        headers: {
            "authorization": authorization,
            "user_id": userId,
            "Content-Type": "application/json" // Add this line to specify the content type as JSON
        },
        body: JSON.stringify({ // Convert the message to JSON
            message: userMessage
        })
    })

    const data = botResponse.json()
    console.log(data)
}

export async function getAllCoursesData(): Promise<Course[] | undefined> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function getAllTopicsInCourse(courseId: string): Promise<Course | null> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/${courseId}`,
    );

    if (!response.ok) {
        return null;
    }

    const courseDetails = await response.json();

    return courseDetails;
}


export async function getAllModulesInASubtopic(courseId: number, topicId: number) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/${courseId}/${topicId}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
    );

    if (!res.ok) {
        console.log(Error(`HTTP error! Status: ${res.status}`));
    }

    const data = await res.json();
    console.log(data);
    return data;
}


export async function getModuleDetails(moduleId: number) {
    if (moduleId) {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/m/${moduleId}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            },
        );
        console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/m/${moduleId}`)

        if (!res.ok) {
            console.log(Error(`HTTP error! Status: ${res.status}`));
        }

        const data = await res.json();
        return data;
    }


    const data = await res.json();
    return data;
}

