import { StudentCourse } from './StudentCourse';
import { Department } from './Department';
import { Result } from './Result';
export class ResultView{
    id: number;
    examName: string;
    lectureApp: boolean;
    hedApp: boolean;
    deenApp: boolean;
    studentCourse: StudentCourse;
    result: Result[];
}