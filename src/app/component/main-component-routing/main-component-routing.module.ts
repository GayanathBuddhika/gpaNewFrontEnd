import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FacultyComponent,
    data: {
      title: 'Dashboard Component'
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
