import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from 'app/model/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private _ngxModal_add = new BehaviorSubject<boolean>(false);
  private _ngxModal_edit = new BehaviorSubject<boolean>(false);

  public _addResultToList = new Subject<Result>();
  public _editResultToList = new Subject<Result>();
 result = [
   {
     label: 'A+',
     value: 'A+'
   },
   {
    label: 'A',
    value: 'A'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B+',
    value: 'B+'
  },
  {
    label: 'B',
    value: 'B'
  },
  {
    label: 'B-',
    value: 'B-'
  },
  {
    label: 'C+',
    value: 'C+'
  },
  {
    label: 'C',
    value: 'C'
  },
  {
    label: 'C-',
    value: 'C-'
  },
  {
    label: 'D+',
    value: 'D+'
  },
  {
    label: 'D',
    value: 'D'
  },
  {
    label: 'E',
    value: 'E'
  }
  
 ];
  constructor(private http: HttpClient) { }

  getResultByEpNumber(epNumber: string) {
    //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

    return this.http.get<any>("http://localhost:8080/result/findReultByEpNum/" + epNumber);
  }

  getbatchs() {
    return this.http.get<any>("http://localhost:8080/result/findbatch");
  }

  getCourse(lectureId: String) {
    return this.http.get<any>("http://localhost:8080/result/findcourse/" + lectureId);
  }

  findStudents(courseId: string, batch: string) {
    let parameters = new HttpParams();
    parameters = parameters.set('courseId', courseId).set('batch', batch);
    return this.http.get<any>("http://localhost:8080/result/findStudent", { params: parameters });
  }
  _set_ngxModal_add(value: boolean) {
    this._ngxModal_add.next(value);
  }

  get_ngxModal_add_$(): Observable<boolean> {
    return this._ngxModal_add.asObservable();
  }

  _set_ngxModal_edit(value: boolean) {
    this._ngxModal_edit.next(value);
  }

  get_ngxModal_edit_$(): Observable<boolean> {
    return this._ngxModal_edit.asObservable();
  }



}
