
import { DegreeProgramListComponent } from './../../degree-program/degree-program-list/degree-program-list.component';
import { LectureServiceService } from './../../../service/lecture-service.service';
import { DegreeProgramService } from 'app/service/degree-program.service';
import { CourseService } from './../../../service/course.service';
import { Lecture } from './../../../model/Lecture';
import { DegreeProgram } from 'app/model/DegreeProgram';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DegreeLectureCourse } from 'app/model/DegreeLectureCourse';
import { DegreeCourse } from 'app/model/DegreeCourse';
import { Course } from 'app/model/Course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  degreeProgramList: DegreeProgram[];
  lectureList: Lecture[];

  // degreeLectureCourseforSave=  new DegreeLectureCourse();
  course = new Course();

  @Input() onSelectedDegreeCourse: DegreeCourse;
  @Input() edit: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private degreeProgramService: DegreeProgramService,
    private LectureSercise: LectureServiceService
  ) { }

  ngOnInit() {

    this.getAllDegreeProgram();
    this.getAllLectuer();

    this.courseForm = this.formBuilder.group({
      degreeProgram: ["", Validators.required],
      lecture: ["", Validators.required],
      courseCode: ["", Validators.required],
      name: ["", Validators.required],
    });

  }

  // ngAfterViewInit() {
  //   if (this.edit) {
  //     this.degreeProgramForm.get('department').patchValue(this.onSelectedDegreeProgram.department);
  //     this.degreeProgramForm.get('name').patchValue(this.onSelectedDegreeProgram.name);

  //   }

  // }
  getAllDegreeProgram(){
    this.degreeProgramService.getAllDegreeprogram().subscribe(data =>{
      this.degreeProgramList = data;

    },err =>{
      console.log(err);
    })
  }

  getAllLectuer(){
    this.LectureSercise.getAllLectures().subscribe(data =>{
      this.lectureList = data;
    }, err =>{
      console.log(err);
    })
  }

  saveCourse(){

    console.log("course form Data", this.courseForm.get('degreeProgram').value);    
    let degreeId  = this.courseForm.get('degreeProgram').value.id;
    let lectureId  = this.courseForm.get('lecture').value.id;    
    this.course.courseCode = this.courseForm.get('courseCode').value;
    this.course.name = this.courseForm.get('name').value;
    this.course.edit = false;

        this.courseService.addCourse(this.course,degreeId,lectureId).subscribe(data =>{

        },err=>{
          console.log(err);
        }
        );

  }
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
