import { User } from './../../../model/User';
import { UserService } from './../../../service/user.service';

import { Lecture } from '../../../model/Lecture';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
  modalRefOfUserList: BsModalRef;
  headers: any[];
  userList: User[] = [];
  onSelecteduser: User;
  constructor(
    private userService: UserService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getAllUser();
    // -- for primeNG table
    this.headers =
      [
        { field: 'no', header: 'No' },       
        { field: 'name', header: 'Name' },
        { field: 'email', header: 'Email' },
        { field: 'PhoneNumner', header: 'Phone Number' },
        { field: 'role', header: 'Role' },
        { field: 'department', header: 'Department' },
        { field: 'faculty', header: 'Faculty' },
        { field: 'edit', header: 'Edit' },
        { field: 'delete', header: 'Delete' }

      ];

      // id: string;
      // ai: string;   
      // email: string;
      // role: string;   
      // name: string;  
      // phoneNumber: string;
      // department: Department;
      // faculty: Faculty;

    this.userService.get_ngxModal_edit_$().subscribe(data => {
      if (data) {
        this.modalRefOfUserList.hide();
      }
    })

    this.userService._addUserToList.subscribe(data => {
      console.log("*********");
      let users = [...this.userList];
      users.unshift(data);
      this.userList = users;
      console.log("*********", this.userList);
    })

    this.userService._editUserToList.subscribe(data => {
      let index = this.userList.findIndex(user => user.id === data.id);
      this.userList[index] = data;
    })

  }

  getAllUser() {
    this.userService.getAllUsers().subscribe(data => {
      console.log("users  ", data);
      this.userList = data;
    })
  }

  update(user: User, template: TemplateRef<any>) {
    console.log("update  ",user);
    this.onSelecteduser = user;
    this.openModal(template);
  }

  delete(user: User) {
    this.userService.deleteUser(user.id).subscribe(data => {
      let index = this.userList.indexOf(user);
      // let index = this.departmentList.indexOf();
      // this.facultyList.splice(index, 0);
      this.userList = this.userList.filter((val, i) => i != index);
      console.log("data", data);
    }, err => {
      console.log("err", err);
    })
    console.log("delete  ", user);
  }


  openModal(template: TemplateRef<any>) {
    this.modalRefOfUserList= this.modalService.show(template, { class: 'modal-lg' });
  }

}
