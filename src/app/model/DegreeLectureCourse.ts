import { Lecture } from './Lecture';
import { Course } from './Course';
import { DegreeProgram } from 'app/model/DegreeProgram';
export class DegreeLectureCourse{  
    degreeProgram: DegreeProgram;
    course: Course;
    lecture: Lecture;
}
