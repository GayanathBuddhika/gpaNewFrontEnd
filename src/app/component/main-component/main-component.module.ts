import { DepartmentListComponent } from './../department//department-list/department-list.component';
import { AddDepartmentComponent } from './../department/add-department/add-department.component';
import { DepartmentComponent } from './../department/department.component';
import { FacultyListComponent } from './../faculty/facultylist/faculty-list/faculty-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyComponent } from '../faculty/faculty.component';
import { MainComponentRoutingModule } from '../main-component-routing/main-component-routing.module';
import { MainResultComponent } from '../result/main-result/main-result.component';
import { AddFacultyComponent } from '../faculty/addFaculty/add-faculty/add-faculty.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap';





@NgModule({
  declarations: [
    FacultyComponent,
    MainResultComponent,
    AddFacultyComponent,
    FacultyListComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    DepartmentListComponent


  ],
  imports: [

    CommonModule,
    MainComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    DropdownModule,
    ModalModule.forRoot(),

    // BrowserAnimationsModule

  ],
  entryComponents: [
    AddFacultyComponent
  ],
})
export class MainComponentModule { }
