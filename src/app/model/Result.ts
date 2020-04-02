import { Course } from './Course';
import { Student } from './Student';
import { StudentCourse } from './StudentCourse';
export class Result {
    id: string;
    ai: string;
    result: string;
    examName: string;
    studentCourse: StudentCourse;
    depHedApproval: boolean;
	lecApproval: boolean;
    deenApproval: boolean;
    edit: boolean;

}
