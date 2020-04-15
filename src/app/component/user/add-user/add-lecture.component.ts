import { FacultyService } from './../../../service/faculty.service';
import { UserService } from './../../../service/user.service';
import { User } from './../../../model/User';
import { Faculty } from './../../../model/Faculty';
import { DepartmentService } from '../../../service/department.service';

import { Lecture } from '../../../model/Lecture';
import { Department } from 'app/model/Department';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.scss']
})
export class AddLectureComponent implements OnInit {
  // for reactive form
  userform: FormGroup;
  user: User[];
  userForSave: User;
  departmentList: Department[] = [];
  facultyList: Faculty[] = [];
  roleList: any[] = [];
  roles: any[];
  submitted = false;
  @Input() onSelecteduser: User;
  @Input() edit: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private departmentService: DepartmentService,
    private facultyService: FacultyService
  ) { }


  ngOnInit() {
    this.getAllDepartment();
    this.getAllFaculty();
    this.getAllRole();

    this.userform = this.formBuilder.group({
      role: ['', Validators.required],
      faculty: ['', Validators.required],
      department: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],

    });

  }

  ngAfterViewInit() {
    if (this.edit) {
      this.userform.get('faculty').patchValue(this.onSelecteduser.faculty);
      this.userform.get('department').patchValue(this.onSelecteduser.department);
      this.userform.get('role').patchValue(this.onSelecteduser.role);
      this.userform.get('name').patchValue(this.onSelecteduser.name);
      this.userform.get('email').patchValue(this.onSelecteduser.email);
      this.userform.get('phoneNumber').patchValue(this.onSelecteduser.phoneNumber);
    }

  }

  get f() { return this.userform.controls }

  getAllDepartment() {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departmentList = data;
      console.log(this.departmentList);
    }, err => {
      console.log(err);
    })
  }

  getAllFaculty() {
    this.facultyService.getAllFaculty().subscribe(data => {
      console.log("faculty", data);
      this.facultyList = data;
    }, err => {
      console.log(err);
    })
  }

  getAllRole() {
    this.userService.getAllRole().subscribe(data => {
      console.log("Role", data);
      this.roles = data;
      for (let i = 0; i < this.roles.length; i++) {
        let newRole = {
          label: this.roles[i],
          value: this.roles[i]
        }
        this.roleList.push(newRole);

      }
      console.log("new role", this.roleList)
    }, err => {
      console.log(err)
    })
  }

  saveUser() {
    console.log("LECTURE", this.userform.value);
    this.submitted = true;
    if(this.userform.invalid){
      return;
    }
    this.userForSave = this.userform.value;
    this.userForSave.edit = false;
    if (this.edit) {
      this.userForSave.id = this.onSelecteduser.id;
      this.userForSave.edit = this.edit;
    }
    console.log("User", this.userForSave);
    this.userService.addUser(this.userForSave).subscribe(data => {
      console.log("success", data);

      if (this.edit) {
        console.log("success_ in edit", data);
        if (data.action === "saved") {
          this.userService._editUserToList.next(data.user);
          this.userService._set_ngxModal_edit(true);
        }


      } else {
        //--- set saved degreeProgram data to the addDegreeProgram, if data properly saved 
        if (data.action === "saved") {
          this.userService._addUserToList.next(data.user);
          this.userService._set_ngxModal_add(true);
          this.userService._set_ngxModal_add(true);
        }
      }


    }, err => {
      console.log("error", err);
    })
  }

}
