
export interface Achievement {
    id: number;
    name: string;
    description: string;
    courseId: number;
    userId: number;
}

export interface CourseEnrollment {
    id: number;
    userId: number;
    courseId: number;
    status: string;
    enrolledAt: string;
    completedAt: string | null;
}

export interface UserSettings {
    id: number;
    userId: number;
    publicProfile: boolean;
    publicEmail: boolean;
    publicBio: boolean;
    publicPhoto: boolean;
    publicName: boolean;
    publicInterests: boolean;
}

export interface UserProfile {
    id: number;
    username: string;
    photo: string;
    name: string;
    bio: string;
    email: string;
    password: string;
    emailVerified: boolean;
    role: string;
    token: string;
    interests: string[];
    userSettingsId: number;
    achievements: Achievement[];
    CourseEnrollment: CourseEnrollment[];
    settings: UserSettings;
}