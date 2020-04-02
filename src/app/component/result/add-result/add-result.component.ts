import { ResultView } from './../../../model/ResultView';
import { element } from 'protractor';
import { StudentCourse } from './../../../model/StudentCourse';
import { DegreeCourse } from 'app/model/DegreeCourse';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ResultService } from 'app/service/result.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Result } from 'app/model/Result';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent implements OnInit, AfterViewInit {
  resultForm: FormGroup;
  resultForm2: FormGroup;
  batchs: any[] = [];
  headers: any[];
  degreeCourses: DegreeCourse[] = [];
  studentCourseList: StudentCourse[] = [];
  resultMarks: any[] = [];
  viewTable: boolean = false;
  resultList: Result[] = [];
  resultView = new ResultView();
  @Input() edit: boolean = false;
  @Input() selectedResultView: ResultView;
  constructor(
    private resultService: ResultService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    console.log("random number", uuid.v4());
    this.getBatchs();
    this.getSubjects();
    this.getResultMark();

    this.resultForm = this.formBuilder.group({
      examName: ["", Validators.required],
      batch: ["", Validators.required],
      degreeCourse: ["", Validators.required],

    });

    this.resultForm2 = this.formBuilder.group({
      data: this.formBuilder.array([])
    })

    this.headers =
      [
        { field: 'no', header: 'No' },
        { field: 'epNumber', header: 'Ep Number' },
        { field: 'name', header: 'Name' },
        { field: 'result', header: 'Result' },
        // { field: 'edit', header: 'Edit' },
        // { field: 'delete', header: 'Delete' }

      ];




  }

  ngAfterViewInit() {
    if (this.edit) {
      this.resultForm.get('examName').patchValue(this.selectedResultView.examName);
      // ***** this should be  complete
      const newbatch = {
        label: this.selectedResultView.studentCourse.student.batch,
        value: this.selectedResultView.studentCourse.student.batch
      };
      console.log("************* 66666666666", newbatch);
      this.resultForm.get('batch').patchValue(newbatch);
      // *****
      console.log("************* 77777777", this.selectedResultView.studentCourse.degreeCourse.course.name);
      this.resultForm.get('degreeCourse').patchValue(this.selectedResultView.studentCourse.degreeCourse);

      console.log("******* 1111111");

      console.log("******* 22222222");
      this.selectedResultView.result.forEach(result => {
        this.studentCourseList.push(result.studentCourse);
      })
      console.log("******* 3333333333");
      this.createTable(this.studentCourseList);
    }

  }

  initItem(): FormGroup {
    return this.formBuilder.group({

      epNumber: ["", Validators.required],
      name: ["", Validators.required],
      mark: ["", Validators.required],
    })
  }

  getBatchs() {
    this.resultService.getbatchs().subscribe(data => {
      console.log("batches data", data);
      data.forEach(element => {
        let newbatch = {
          label: element,
          value: element
        }
        this.batchs.push(newbatch);
      });
      console.log("new batches data", this.batchs);
    }, err => {
      console.log(err);
    })
  }

  getSubjects() {
    //   67a5f5a9-206e-42b6-9f4f-b2686f8be8a2
    this.resultService.getCourse("67a5f5a9-206e-42b6-9f4f-b2686f8be8a2").subscribe(data => {
      this.degreeCourses = data;
      console.log(this.degreeCourses);
    }, err => {
      console.log(err);
    })


  }

  createTable(studentCourseList: StudentCourse[]) {
    console.log("11111111111111111111");
    if (studentCourseList) {
      console.log("22222222222222222222222");
      // add form group to form array
      studentCourseList.forEach(element => {
        this.addrows();
      })
      // set value to rows 
      const controlls = this.resultForm2.get('data') as FormArray;

      controlls.controls.forEach((element, i) => {
        console.log("3333333333333333333");
        element.get('epNumber').patchValue(studentCourseList[i].student.epNumber);
        element.get('name').patchValue(studentCourseList[i].student.studentName);
      })
      console.log("44444444444444444444");
      this.viewTable = true;
      console.log("5555555555555555555");
    }
  }

  findSutudent() {
    console.log("select subject ", this.resultForm.value)
    this.resultService.findStudents(this.resultForm.value.degreeCourse.course.id, this.resultForm.value.batch).subscribe(data => {
      console.log("students", data);
      this.studentCourseList = data;

      this.createTable(this.studentCourseList);

      // if (this.studentCourseList) {
      //   // add form group to form array
      //   this.studentCourseList.forEach(element => {
      //     this.addrows();
      //   })
      //   // set value to rows 
      //   const controlls = this.resultForm2.get('data') as FormArray;

      //   controlls.controls.forEach((element, i) => {
      //     element.get('epNumber').patchValue(this.studentCourseList[i].student.epNumber);
      //     element.get('name').patchValue(this.studentCourseList[i].student.studentName);
      //   })
      //   this.viewTable = true;
      // }


    }, err => {
      console.log(err);
    })
  }

  getResultMark() {
    this.resultMarks = this.resultService.result;
    console.log("result Marks", this.resultMarks);
  }

  submit() {
    console.log("result", this.resultForm2.value);
    // create resultList object to submit
    const controlls = this.resultForm2.get('data') as FormArray;
    controlls.controls.forEach(element => {
      const index = this.studentCourseList.findIndex(data => data.student.epNumber === element.get('epNumber').value)
      let dumyResult = new Result();
      if (this.edit) {
        dumyResult.lecApproval = this.selectedResultView.lectureApp;
        dumyResult.depHedApproval = this.selectedResultView.hedApp;
        dumyResult.deenApproval = this.selectedResultView.deenApp;

      } else {
        dumyResult.lecApproval = false;
        dumyResult.depHedApproval = false;
        dumyResult.deenApproval = false;
      }
      dumyResult.studentCourse = this.studentCourseList[index];
      dumyResult.result = element.get('mark').value;
      dumyResult.examName = this.resultForm.get('examName').value;

      dumyResult.edit = this.edit;
      this.resultList.push(dumyResult);
    });
    // add id to edit result object
    if (this.edit) {
      this.selectedResultView.result.forEach(element => {
        const index = this.resultList.findIndex(data => data.studentCourse.id === element.studentCourse.id)
        this.resultList[index].id = element.id;

      })
    }
    // save result
    this.resultService.addResult(this.resultList, this.edit).subscribe(data => {
      console.log("result for submit", this.resultList);
      console.log("saved result ", data);
      // create result view object form data
      if (!this.edit) {
        this.resultView.id = uuid.v4();
        this.resultView.lectureApp = false;
        this.resultView.hedApp = false;
        this.resultView.deenApp = false;
      }

      this.resultView.examName = this.resultForm.get('examName').value;
      this.resultView.studentCourse = data.result[0].studentCourse;
      this.resultView.result = data.result;




      if (this.edit) {
        if (data.action === "saved") {
          this.resultService._editResultToList.next(this.resultView);
          this.resultService._set_ngxModal_edit(true);
        }
      } else {
        if (data.action === "saved") {
          this.resultService._addResultToList.next(this.resultView);
          this.resultService._set_ngxModal_add(true);
        }
      }
    }, err => {
      console.log(err);
    })


  }

  addrows() {
    const control = this.resultForm2.get('data') as FormArray;
    control.push(this.initItem());
  }

}
