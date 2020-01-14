import { AddFacultyComponent } from './../faculty/addFaculty/add-faculty/add-faculty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { MainResultComponent } from '../result/main-result/main-result.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FacultyComponent,
    data: {
      title: 'Dashboard Component'
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
