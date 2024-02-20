import { Course } from '@/interfaces/learn';

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
        }),
        credentials: 'include',
    })

    const data = botResponse.json()
    console.log(data)
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
            credentials: 'include',
        },
    );

    if (!res.ok) {
        console.log(Error(`HTTP error! Status: ${res.status}`));
    }

    const data = await res.json();
    console.log(data);
    return data;
}
