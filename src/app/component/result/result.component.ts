import { ResultService } from 'app/service/result.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private resultService: ResultService
  ) { }

  ngOnInit() {
      
    this.resultService.get_ngxModal_add_$().subscribe(data =>{
      if(data){
        this.modalRef.hide();
        this.resultService._set_ngxModal_add(false);
      }
    
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

}
