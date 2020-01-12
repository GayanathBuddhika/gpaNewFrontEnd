import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyComponent } from '../faculty/faculty.component';
import { MainComponentRoutingModule } from '../main-component-routing/main-component-routing.module';

@NgModule({
  declarations: [FacultyComponent],
  imports: [
    MainComponentRoutingModule,
    CommonModule
  ]
})
export class MainComponentModule { }
