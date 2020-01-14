import { FacultyService } from 'app/service/faculty.service';
import { Component, OnInit } from '@angular/core';
import { Faculty } from 'app/model/Faculty';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  headers: any[];
  facultyList: Faculty[] = [];
  constructor(
    private facultyService: FacultyService
  ) { }

  ngOnInit() {
    this.getAllFaculty();
    // -- for primeNG table
    this.headers =
      [
        { field: 'no', header: 'No' },
        { field: 'name', header: 'Name' },
        { field: 'edit', header: 'Edit' },
        { field: 'delete', header: 'Delete' }

      ];

    this.facultyService._addFacultyToList.subscribe(data => {
      console.log("*********aaaa");
      let facList = [...this.facultyList];
      facList.unshift(data);
      this.facultyList = facList;
      console.log("*********aaaa",this.facultyList);
    })
  }

  getAllFaculty() {
    this.facultyService.getAllFaculty().subscribe(data => {
      this.facultyList = data;
      console.log("faculty list ", this.facultyList);
    }, err => {
      console.log("err", err);
    })
  }
  update(faculty: any) {
    console.log("update  ", faculty);
  }

  delete(faculty: Faculty) {
    this.facultyService.deleteFaculty(faculty.id).subscribe(data => {
      console.log("data", data);
    }, err => {
      console.log("err", err);
    })
    console.log("delete  ", faculty);
  }

}
