import { Result } from 'app/model/Result';
import { ResultView } from './../../../model/ResultView';
import { ResultService } from 'app/service/result.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss']
})
export class ListResultComponent implements OnInit {
  modalRefOfFacultyList: BsModalRef;
  headersForLecture: any[];
  resultViewList: ResultView[] = [];
  resultList: Result[] = [];
  resultListForlecture: Result[] = [];
  examNames: any[] = [];
  selectedExamname: string;
  unicResultObjects: Result[] = [];
  selectedResultView: ResultView;
  

  constructor(
    private resultService: ResultService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.findAllExamName();
    this.findAllResult();
    this.headersForLecture =
      [
        { field: 'no', header: 'No' },
        { field: 'examName', header: 'Exam Name' },
        { field: 'subject', header: 'Subject' },
        { field: 'batch', header: 'Batch' },
        { field: 'view', header: 'view Result' },
        { field: 'edit', header: 'Edit' },
        { field: 'lectureApp', header: 'Lecture Approval' },
        { field: 'depaHedApproval', header: 'Dep Hed Approval' },
        { field: 'deenApp', header: 'Deen Approval' },
        { field: 'appComplete', header: 'complete' },

      ];

    this.resultService._addResultToList.subscribe(data => {
      let restViewList = [... this.resultViewList];
      restViewList.unshift(data);
      this.resultViewList = restViewList;
      console.log("reault view list", this.resultViewList);

    })

    this.resultService._editResultToList.subscribe(data => {
      let index = this.resultViewList.findIndex(resultView => resultView.id === data.id);
      this.resultViewList[index] = data;
    })



  }

  findAllResult() {
    this.resultService.findAllResult().subscribe(data => {
      this.resultList = data;

    }, err => {
      console.log(err);
    })
  }

  findAllExamName() {
    this.resultService.findAllExamName().subscribe(data => {
      // this.examNames = data;
      data.forEach(element => {
        let newexamname = {
          label: element,
          value: element
        }
        this.examNames.push(newexamname);
      });
      console.log("exam name ", data);
    }, err => {
      console.log(err);
    })
  }

  catogeraiceToViewResultForLecture() {
    // 67a5f5a9-206e-42b6-9f4f-b2686f8be8a2

    this.resultService.getResultForLecture("67a5f5a9-206e-42b6-9f4f-b2686f8be8a2", this.selectedExamname).subscribe(data => {
      console.log("111111111111", data);
      this.unicResultObjects = data;
      this.resultList.forEach(data2 => {
        // if(data.studentCourse.)
        if (data2.studentCourse.degreeCourse.user.id === "67a5f5a9-206e-42b6-9f4f-b2686f8be8a2" && data2.examName === this.selectedExamname) {
          this.resultListForlecture.push(data2);

        }
        console.log("2222222222222222222", this.resultListForlecture);
      })

      this.unicResultObjects.forEach(r => {
        let resultTemp: Result[] = [];
        let resultViewTEmp = new ResultView();
        this.resultListForlecture.forEach(r2 => {
          if (r2.studentCourse.degreeCourse.course.id === r.studentCourse.degreeCourse.course.id) {
            resultTemp.push(r2);
          }
        })
        resultViewTEmp.id = uuid.v4();
        resultViewTEmp.lectureApp = r.lecApproval;
        resultViewTEmp.hedApp = r.depHedApproval;
        resultViewTEmp.deenApp = r.deenApproval;
        resultViewTEmp.examName = r.examName;
        resultViewTEmp.studentCourse = r.studentCourse;
        resultViewTEmp.result = resultTemp;
        this.resultViewList.push(resultViewTEmp);
        console.log("333333333333", this.resultListForlecture);

        console.log("444444444444444", this.resultViewList);
      })
    }, err => {
      console.log(err);
    })



  }
  lecthreApproved(lecApprovedViewresult: ResultView) {
   const index = this.resultViewList.findIndex(data => data.id === lecApprovedViewresult.id);
   this.resultViewList[index].lectureApp = true;
   this.resultService.lectureApprove(lecApprovedViewresult.result).subscribe(data =>{
    console.log(data);
   },err =>{
     console.log(err);
   })
  }
  headApproved(headApprovedViewresult: ResultView) {
    const index = this.resultViewList.findIndex(data => data.id === headApprovedViewresult.id);
    this.resultViewList[index].hedApp = true;
    this.resultService.hedApprove(headApprovedViewresult.result).subscribe(data =>{
     console.log(data);
    },err =>{
      console.log(err);
    })
  }

  deenApproved(deenApprovedViewresult: ResultView) {
    const index = this.resultViewList.findIndex(data => data.id === deenApprovedViewresult.id);
    this.resultViewList[index].deenApp = true;
    this.resultService.deenApprove(deenApprovedViewresult.result).subscribe(data =>{
     console.log(data);
    },err =>{
      console.log(err);
    })
  }


  editResult(resultView: ResultView, template: TemplateRef<any>) {
      console.log("update  ", resultView);
      this.selectedResultView = resultView;
      this.openModal(template);
    }

    viewResultOpen(resultView: ResultView, template: TemplateRef<any>){
      this.selectedResultView = resultView;
      this.openModal(template);
    }

    openModal(template: TemplateRef<any>){
      this.modalRefOfFacultyList = this.modalService.show(template,{class: 'modal-lg'});
    }
}
