import { User } from './../../../model/User';
import { AuthenticationService } from './../../../service/authentication.service';
import { DepartmentService } from './../../../service/department.service';
import { DegreeProgramService } from 'app/service/degree-program.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DegreeProgram } from 'app/model/DegreeProgram';
import { Department } from 'app/model/Department';

@Component({
  selector: 'app-add-degree-program',
  templateUrl: './add-degree-program.component.html',
  styleUrls: ['./add-degree-program.component.scss']
})
export class AddDegreeProgramComponent implements OnInit {

  //---for reactive form
  degreeProgramForm: FormGroup;
  DegreeProgramList: DegreeProgram[];
  degreeProgramForSave = new  DegreeProgram();
  departmentList: Department[] = [];
  currentUser : User = JSON.parse(localStorage.getItem('currentUser')).user;

  @Input() onSelectedDegreeProgram: DegreeProgram;
  @Input() edit: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private degreeProgramService: DegreeProgramService,
    private departmentService: DepartmentService,
    private authenticationService: AuthenticationService
  ) { 
     
  }

  ngOnInit() {
  
 
    this.degreeProgramForm = this.formBuilder.group({
      // department: ["", Validators.required],
      name: ["", Validators.required],
    });

  }


  // --- set the selected employee value to the form input when edit value is true
  ngAfterViewInit() {
    if (this.edit) {
      // this.degreeProgramForm.get('department').patchValue(this.onSelectedDegreeProgram.department);
      this.degreeProgramForm.get('name').patchValue(this.onSelectedDegreeProgram.name);

    }

  }


  // getAllDepartment() {

  //   this.departmentService.getAllDepartments().subscribe(data => {
  //     this.departmentList = data;
  //     console.log(this.departmentList);
  //   }, err => {
  //     console.log(err);
  //   })
  // }





  

  saveDegreeProgram() {
    console.log("degreeprogram", this.degreeProgramForm.value);
    this.degreeProgramForSave.name = this.degreeProgramForm.get('name').value;
    this.degreeProgramForSave.department = this.currentUser.department;
    if (this.edit) {
      this.degreeProgramForSave.id = this.onSelectedDegreeProgram.id;
      this.degreeProgramForSave.edit = this.edit;
    }
    this.degreeProgramService.addDegreeProgram(this.degreeProgramForSave).subscribe(data => {
      console.log("success", data);

      if (this.edit) {
        console.log("success_ in edit", data);
        if (data.action === "saved") {
          this.degreeProgramService._editDegreeProgramToList.next(data.degreeProgram);
          this.degreeProgramService._set_ngxModal_edit(true);
        }


      } else {
        //--- set saved degreeProgram data to the addDegreeProgram, if data properly saved 
        if (data.action === "saved") {
          this.degreeProgramService._addDegreeProgramToList.next(data.degreeProgram);
          this.degreeProgramService._set_ngxModal_add(true);
        }
      }


    }, err => {
      console.log("error", err);
    })
  }

}

