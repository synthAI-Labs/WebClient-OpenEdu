
export async function getPublicProfileOfUser(userName: string) {
    // username is userId
    const response = await fetch(`${process.env.SERVER_URL}/p/${userName}`);

    if (!response.ok) {
        // Check if the response status is not OK
        return `Failed to fetch user: ${response.statusText}`;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        // Only parse the JSON if the content type indicates JSON
        const user = await response.json();
        console.log(user);
        return user;
    } else {
        // Handle non-JSON response (e.g., 'Profile is private')
        const nonJsonResponse = await response.text();
        console.log(nonJsonResponse);
        return null;
    }
}

export async function getAllCoursesData(): Promise<Course[] | undefined> {
    try {
        const response = await fetch(`${process.env.SERVER_URL}/learn/courses`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function getAllTopicsInCourse(courseId: string): Promise<Topic | null> {
    const response = await fetch(
        `${process.env.SERVER_URL}/learn/courses/${courseId}`,
    );

    if (!response.ok) {
        return null;
    }

    const courseDetails = await response.json();

    return courseDetails;
}


export async function getAllModulesInASubtopic(courseId: number, topicId: number) {
    const res = await fetch(
        `${process.env.SERVER_URL}/learn/courses/${courseId}/${topicId}`,
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
        `${process.env.SERVER_URL}/learn/courses/${courseId}/${topicId}/${moduleId}`,
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