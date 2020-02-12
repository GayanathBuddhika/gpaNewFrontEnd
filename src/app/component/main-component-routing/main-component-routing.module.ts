import { StudentCourseComponent } from './../student-course/student-course.component';
import { CourseComponent } from './../course/course.component';
import { DegreeProgramComponent } from './../degree-program/degree-program.component';
import { StudentComponent } from './../student/student.component';
import { AddFacultyComponent } from './../faculty/addFaculty/add-faculty/add-faculty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { MainResultComponent } from '../result/main-result/main-result.component';
import { DepartmentComponent } from '../department/department.component';
import { LectureComponent } from '../user/lecture.component';
const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: FacultyComponent,
  //   data: {
  //     title: 'Dashboard Component'
  //   }
  // },
  {
    path: 'faculty',
    pathMatch: 'full',
    component: FacultyComponent,
    data: {
      title: 'faculty Component'
    }
  },
  {
    path: 'result',
    // pathMatch: 'full',
    component: MainResultComponent,
    data: {
      title: 'mainResult Component'
    }
  },
  {
    path: 'addFaculty',
    // pathMatch: 'full',
    component: AddFacultyComponent,
    data: {
      title: 'mainResult Component'
    }
  },
  {
    path: 'department',
    // pathMatch: 'full',
    component: DepartmentComponent,
    data: {
      title: 'Department'
    }
  },
   {
    path: 'student',
    // pathMatch: 'full',
    component: StudentComponent,
    data: {
      title: 'Student'
    }
  },
  {
    path: 'degreeProgram',
    // pathMatch: 'full',
    component: DegreeProgramComponent,
    data: {
      title: 'Degreeprogram'
    }
  },
  {
    path: 'user',
    // pathMatch: 'full',
    component: LectureComponent,
    data: {
      title: 'User'
    }
  },
  {
    path: 'course',
    // pathMatch: 'full',
    component: CourseComponent,
    data: {
      title: 'Course'
    }
  },
  {
    path: 'studentCourse',
    // pathMatch: 'full',
    component: StudentCourseComponent,
    data: {
      title: 'Department'
    }
  }




];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class MainComponentRoutingModule { }
