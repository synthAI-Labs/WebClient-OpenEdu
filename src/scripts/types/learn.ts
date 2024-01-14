
interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
    madeByUserGit: string[];
    madeByUser: string[];
    userId: null;
    tags: string[];
    modules: Module[];
}

interface Module {
    description: string;
    id: number;
    name: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    type: 'text' | 'video';
    content: string;
    video?: string | null;
    image: string;
    subtopicId: number;
}

interface Quiz {
    id: number;
    Question: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    Options: string[];
    Answer: string[];
    image?: string | null;
    moduleId: number;
}
