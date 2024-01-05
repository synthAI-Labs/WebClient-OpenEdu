
// model Course {
//     id 
//     name             String
//     description      String
//     image            String
//     madeByUserGit    String[]
//     madeByUser       String[]
//     GithubLink       String?
//     subtopics        Subtopic[]
//     tags             String[]
//   }

//   model Subtopic {
//     id            Int      @id @default(autoincrement())
//     name          String
//     description   String
//     madeByUserGit String[]
//     madeByUser    String[]
//     GithubLink    String?
//     courseId      Int      @map("courseId")
//     image         String
//     modules       Module[]
//   }

//   model Module {
//     id            Int      @id @default(autoincrement())
//     name          String
//     type          String
//     description   String
//     madeByUserGit String[]
//     madeByUser    String[]
//     GithubLink    String?
//     content       String?
//     quiz          Quiz[]
//     video         String?
//     image         String
//     subtopicId    Int      @map("subtopicId")
//     subtopic      Subtopic @relation(fields: [subtopicId], references: [id])
//   }

//   model Quiz {
//     id            Int      @id @default(autoincrement())
//     Question      String
//     Answer        String[]
//     Options       String[]
//     madeByUserGit String[]
//     madeByUser    String[]
//     GithubLink    String?
//     image         String?
//     Module        Module?  @relation(fields: [moduleId], references: [id])
//     moduleId      Int?
//   }


interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
    madeByUserGit: string[];
    madeByUser: string[];
    userId: null;
    tags: string[];
    subtopics: Subtopic[];
}

interface Subtopic {
    id: number;
    name: string;
    description: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    courseId: number;
    image: string;
    modules: Module[];
}


interface Module {
    id: number;
    name: string;
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
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
    madeByUserGit: string[];
    madeByUser: string[];
    tags: string[];
    Options: string[];
    Answer: string[];
    image?: string | null;
    moduleId: number;
}