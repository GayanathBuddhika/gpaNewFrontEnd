import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyComponent } from '../faculty/faculty.component';
import { MainComponentRoutingModule } from '../main-component-routing/main-component-routing.module';
import { MainResultComponent } from '../result/main-result/main-result.component';

@NgModule({
  declarations: [FacultyComponent,MainResultComponent],
  imports: [
    MainComponentRoutingModule,
    CommonModule
  ]
})
export class MainComponentModule { }
