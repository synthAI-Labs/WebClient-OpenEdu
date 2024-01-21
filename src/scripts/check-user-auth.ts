"use client"
import Cookies from 'js-cookie'

export function searchLocalStorage(): { authorization: string, userId: string } {
    const authorization: string = localStorage.getItem('authorization') as string;
    const userId: string = localStorage.getItem('user-Id') as string;
    return { authorization, userId };
}

export function getImageFromLocalStorage() {
    const imageAddress: string = localStorage.getItem('userPhoto') as string
    return imageAddress
}

export function getVerifiedFromLocalStorage() {
    const verified: boolean = localStorage.getItem('userVerified') === 'true' ? true : false
    return verified
}

export function setVerifiedInLocalStorage(verified: boolean) {
    try {
        localStorage.setItem('userVerified', verified.toString())
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export function storeValues(authorization: string, userId: string, userPhoto: string, userVerified: boolean, access_token: string =''): Boolean {
    try {
        localStorage.setItem('authorization', authorization);
        localStorage.setItem('user-Id', userId);
        localStorage.setItem('userPhoto', userPhoto);
        localStorage.setItem('userVerified', userVerified.toString());
        localStorage.setItem('access_token',access_token );
        Cookies.set('access_token', access_token, {path: '/'})
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
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('userVerified');
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');
    Cookies.remove('access_token');
    if (!checkValues()) {
        return false;
    } else {
        return true;
    }
}
