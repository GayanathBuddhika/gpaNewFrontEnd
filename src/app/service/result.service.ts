import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Result } from 'app/model/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private _ngxModal_add = new BehaviorSubject<boolean>(false);
  private _ngxModal_edit = new BehaviorSubject<boolean>(false);

  public _addResultToList = new Subject<Result>();
  public _editResultToList = new Subject<Result>();
  constructor(private http: HttpClient) { }
  
  getResultByEpNumber(epNumber: string) {
    //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

    return this.http.get<any>("http://localhost:8080/result/findReultByEpNum/"+ epNumber);
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
