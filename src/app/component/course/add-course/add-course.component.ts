import { LectureServiceService } from './../../../service/lecture-service.service';
import { DegreeProgramService } from 'app/service/degree-program.service';
import { CourseService } from './../../../service/course.service';
import { Lecture } from './../../../model/Lecture';
import { DegreeProgram } from 'app/model/DegreeProgram';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DegreeLectureCourse } from 'app/model/DegreeLectureCourse';
import { DegreeCourse } from 'app/model/DegreeCourse';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  DegreeProgramList: DegreeProgram[];
  lectureList: Lecture[];

  degreeLectureCourseforSave: DegreeLectureCourse;

  @Input() onSelectedDegreeCourse: DegreeCourse;
  @Input() edit: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private degreeProgramService: DegreeProgramService,
    private LectureSercise: LectureServiceService
  ) { }

  ngOnInit() {

    // this.getAllDegreeProgram();
    // this.getAllLectuer();

    this.courseForm = this.formBuilder.group({
      degreeProgram: ["", Validators.required],
      lecture: ["", Validators.required],
      name: ["", Validators.required],
    });

  }

  // ngAfterViewInit() {
  //   if (this.edit) {
  //     this.degreeProgramForm.get('department').patchValue(this.onSelectedDegreeProgram.department);
  //     this.degreeProgramForm.get('name').patchValue(this.onSelectedDegreeProgram.name);

  //   }

  // }

  // getAllDepartment() {

  //   this.departmentService.getAllDepartments().subscribe(data => {
  //     this.departmentList = data;
  //     console.log(this.departmentList);
  //   }, err => {
  //     console.log(err);
  //   })
  // }

  // saveDegreeProgram() {
  //   console.log("degreeprogram", this.degreeProgramForm.value);
  //   this.degreeProgramForSave = this.degreeProgramForm.value;
  //   if (this.edit) {
  //     this.degreeProgramForSave.id = this.onSelectedDegreeProgram.id;
  //     this.degreeProgramForSave.edit = this.edit;
  //   }
  //   this.degreeProgramService.addDegreeProgram(this.degreeProgramForSave).subscribe(data => {
  //     console.log("success", data);

  //     if (this.edit) {
  //       console.log("success_ in edit", data);
  //       if (data.action === "saved") {
  //         this.degreeProgramService._editDegreeProgramToList.next(data.degreeProgram);
  //         this.degreeProgramService._set_ngxModal_edit(true);
  //       }


  //       } else {
  //         //--- set saved degreeProgram data to the addDegreeProgram, if data properly saved 
  //         if (data.action === "saved") {
  //           this.degreeProgramService._addDegreeProgramToList.next(data.degreeProgram);
  //           this.degreeProgramService._set_ngxModal_add(true);
  //         }
  //       }


  //     }, err => {
  //       console.log("error", err);
  //     })
  //   }


}
