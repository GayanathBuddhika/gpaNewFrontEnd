import { User } from './../../../model/User';
import { StudentService } from './../../../service/student.service';
import { DepartmentService } from './../../../service/department.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'app/model/Department';
import { Student } from 'app/model/Student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit, AfterViewInit {
  // meme form eke error msg popup ekak danna one / epnumber validate karanna one upercase walata
  //---for reactive form
  studentForm: FormGroup;
  submitted = false;
  studentForSave: Student;
  departmentList: Department[] = [];
  @Input() selectedStudednt: Student;
  @Input() edit: Boolean = false;

  currentUser: User = JSON.parse(localStorage.getItem('currentUser')).user;
  constructor(
    private formBuilder: FormBuilder,
    // private departmentSertvice: DepartmentService,
    private studedntService: StudentService
  ) { }

  ngOnInit() {
    // this.getAllDepartment();
    this.studentForm = this.formBuilder.group({
      epNumber: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      batch: ['', Validators.required],
      studentName: ['', Validators.required],
      degreeProYear: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],

    });

  }
  // --- set the selected employee value to the form input when edit value is true
  ngAfterViewInit() {
    if (this.edit) {
      this.studentForm.get('epNumber').patchValue(this.selectedStudednt.epNumber);
      this.studentForm.get('registrationNumber').patchValue(this.selectedStudednt.registrationNumber);
      this.studentForm.get('batch').patchValue(this.selectedStudednt.batch);
      this.studentForm.get('studentName').patchValue(this.selectedStudednt.studentName);
      if (this.selectedStudednt.degreeProYear === 4) {
        this.studentForm.get('degreeProYear').patchValue('4');
      } else {
        this.studentForm.get('degreeProYear').patchValue('3');
      }

      this.studentForm.get('email').patchValue(this.selectedStudednt.email);
      this.studentForm.get('phoneNumber').patchValue(this.selectedStudednt.phoneNumber);

    }
  }

  // getAllDepartment() {
  //   this.departmentSertvice.getAllDepartments().subscribe(data => {
  //     this.departmentList = data;

  //   }, err => {
  //     console.log(err);
  //   })
  // }
  get f() { return this.studentForm.controls; }


  savestudent() {
    console.log("faculty", this.studentForm.value);

    this.submitted = true;

    if (this.studentForm.invalid) {
      return;
    }

    this.studentForSave = this.studentForm.value;
    this.studentForSave.department = this.currentUser.department;
    if (this.edit) {
      this.studentForSave.id = this.selectedStudednt.id;
      this.studentForSave.edit = this.edit;
    }




    this.studedntService.addStudent(this.studentForSave).subscribe(data => {


      if (this.edit) {
        if (data.action === "saved") {
          console.log("saved student ", data.student);
          this.studedntService._editStudentToList.next(data.student);
          this.studedntService._set_ngxModal_edit(true);

        }
      } else {
        if (data.action === "saved") {
          this.studedntService._addStudentToList.next(data.student);
          this.studedntService._set_ngxModal_add(true);
        }
      }

      console.log("save student ", data);
    }, err => {
      console.log(err);
    })

  }

}
