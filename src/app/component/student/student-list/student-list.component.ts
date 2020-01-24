import { Student } from './../../../model/Student';
import { StudentService } from './../../../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: Student[]=[];
  headers: any[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getAllStudent();
    this.headers =
    [
      { field: 'no', header: 'No' },
      {field: 'epNumber', header: 'EP Number'},
      {field: 'registrationNumber', header: 'Registrations Number'},
      { field: 'student', header: 'student Name' },    
      {field: 'batch', header: 'Batch'},
      {field: 'degreeProYear', header: 'Degree_Pro Year'},  
      { field: 'edit', header: 'Edit' },
      { field: 'delete', header: 'Delete' }

    ];
  }


  getAllStudent(){
    this.studentService.getAllStudent().subscribe(data =>{
      this.studentList = data;
      console.log("student ", this.studentList);
    }, err =>{
      console.log(err)
    })
  }

}
