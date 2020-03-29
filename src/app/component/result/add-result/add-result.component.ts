import { StudentCourse } from './../../../model/StudentCourse';
import { DegreeCourse } from 'app/model/DegreeCourse';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ResultService } from 'app/service/result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent implements OnInit {
  resultForm: FormGroup;
  resultForm2: FormGroup;
  batchs: any[] = [];
  headers: any[];
  degreeCourse: DegreeCourse[] = [];
  studentCourseList: StudentCourse[] = [];
  resultMarks: any[] = [];
  viewTable: boolean = false;
  constructor(
    private resultService: ResultService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.getBatchs();
    this.getSubjects();
    this.getResultMark();

    this.resultForm = this.formBuilder.group({
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
      this.degreeCourse = data;
      console.log(this.degreeCourse);
    }, err => {
      console.log(err);
    })


  }

  findSutudent() {
    console.log("select subject ", this.resultForm.value)
    this.resultService.findStudents(this.resultForm.value.degreeCourse.course.id, this.resultForm.value.batch).subscribe(data => {
      console.log("students", data);
      this.studentCourseList = data;

      if (data) {
        // add form group to form array
        this.studentCourseList.forEach(element => {
          this.addrows();
        })
        // set value to rows 
        const controlls = this.resultForm2.get('data') as FormArray;
      
        controlls.controls.forEach((element, i) => {
          element.get('epNumber').patchValue(this.studentCourseList[i].student.epNumber);
          element.get('name').patchValue(this.studentCourseList[i].student.studentName);
        })
        this.viewTable = true;
      }


    }, err => {
      console.log(err);
    })
  }

  getResultMark() {
    this.resultMarks = this.resultService.result;
    console.log("result Marks", this.resultMarks);
  }
  submit(data: any) {
    console.log("table data",this.resultForm2.value);
  }
  addrows() {
    const control = this.resultForm2.get('data') as FormArray;
    control.push(this.initItem());
  }

}
