"use client"
export function searchLocalStorage(): { authorization: string, userId: string } {
    const authorization: string = localStorage.getItem('authorization') as string;
    const userId: string = localStorage.getItem('user-Id') as string;
    return { authorization, userId };
}

export function storeValues(authorization: string, userId: string): Boolean {
    try {
        localStorage.setItem('authorization', authorization);
        localStorage.setItem('user-Id', userId);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export function checkValues(): boolean {
    const { authorization, userId } = searchLocalStorage();
    return !!authorization && !!userId;
}

export function deletedValues(): boolean {
    localStorage.removeItem('authorization');
    localStorage.removeItem('user-Id');

    if (!checkValues()) {
        return false;
    } else {
        return true;
    }
}
