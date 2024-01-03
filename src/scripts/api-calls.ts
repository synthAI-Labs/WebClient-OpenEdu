export async function getPublicProfileOfUser(userName: string, version: boolean=false) {
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

export async function getAllCoursesData(): Promise<Course[] | undefined> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function getAllTopicsInCourse(courseId: string): Promise<Topic | null> {
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


export async function getModuleDetails(courseId: number, topicId: number, moduleId: number) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/learn/courses/${courseId}/${topicId}/${moduleId}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
    );

    if (!res.ok) {
        console.log(Error(`HTTP error! Status: ${res.status}`));
    }

    const data = await res.json();
    return data;
}