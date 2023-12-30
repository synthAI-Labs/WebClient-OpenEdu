interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
    userId: number;
}

interface Subtopic {
    id: number;
    name: string;
    description: string;
    courseId: number;
    image: string;
    modules: Module[];
}

interface Topic {
    id: number;
    name: string;
    description: string;
    image: string;
    userId: null;
    tags: string[];
    subtopics: Subtopic[];
}

interface Module {
    id: number;
    name: string;
    type: 'text' | 'quiz' | 'video';
    content: string[];
    quiz: Quiz[];
    video?: string | null;
    image: string;
    subtopicId: number;
}

interface Quiz {
    id: number;
    Question: string;
    Options: string[];
    Answer: string[];
    image?: string | null;
    moduleId: number;
}