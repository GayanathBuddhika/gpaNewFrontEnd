import { UserService } from './../../service/user.service';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {
  modalRef: BsModalRef
  constructor(
    private modalService: BsModalService,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.get_ngxModal_add_$().subscribe(data => {
      if (data) {
        this.modalRef.hide();
        this.userService._set_ngxModal_add(false)
      }

    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }


}
