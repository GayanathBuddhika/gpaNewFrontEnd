import { FormsModule } from './forms/forms.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DegreeProgramComponent } from './component/degree-program/degree-program.component';
import { AddDegreeProgramComponent } from './component/degree-program/add-degree-program/add-degree-program.component';
import { DegreeProgramListComponent } from './component/degree-program/degree-program-list/degree-program-list.component';
import { TectureComponent } from './component/tecture/tecture.component';
import { LectureComponent } from './component/lecture/lecture.component';
import { AddLectureComponent } from './component/lecture/add-lecture/add-lecture.component';
import { LectureListComponent } from './component/lecture/lecture-list/lecture-list.component';
// import { StudentComponent } from './component/student/student.component';
// import { StudentListComponent } from './component/student/student-list/student-list.component';
// import { StudentAddComponent } from './component/student/student-add/student-add.component';
// import { DepartmentComponent } from './component/department/department/department.component';
// import { AddDepartmentComponent } from './component/department/addDepartment/add-department/add-department.component';
// import { DepartmentListComponent } from './component/department/departmentList/department-list/department-list.component';





@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent,
    TectureComponent,
    LectureComponent,
    AddLectureComponent,
    LectureListComponent,
   
 
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
