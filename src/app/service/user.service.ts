import { RequestUser } from './../model/requestUser';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/User';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role = [
    {
      label: 'SYSTEM_ADMIN',
      value: 'SYSTEM_ADMIN'
    },
    {
      label: 'DEPARTMENT_ADMIN',
      value: 'DEPARTMENT_ADMIN'
    },
    {
      label: 'DEPARTMENT_HEAD',
      value: 'DEPARTMENT_HEAD'
    },
    {
      label: 'DEEN',
      value: 'DEEN'
    },
    {
      label: 'LECTURE',
      value: 'LECTURE'
    },
    {
      label: 'STUDENT',
      value: 'STUDENT'
    },

  //   SYSTEM_ADMIN,
	// DEPARTMENT_ADMIN,
	// DEPARTMENT_HEAD,
	// DEEN,
	// LECTURE,
	// c,
  ]

private _ngxModal_add = new BehaviorSubject<boolean>(false);
private _ngxModal_edit = new BehaviorSubject<boolean>(false);

public _addUserToList = new Subject<User>();
public _editUserToList = new Subject<User>();

constructor(private http: HttpClient) { }


getAllUsers() {
  //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

  return this.http.get<any>("http://localhost:8080/user/findAllUsers/");
}
getAllRole() {
  //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

  return this.http.get<any>("http://localhost:8080/user/findAllRole/");
}

getAllLecturesByDepId(depId: string) {
  //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

  return this.http.get<any>("http://localhost:8080/user/findAllLecture/"+ depId);
}

addUser(user: User) {
  //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

  return this.http.post<any>("http://localhost:8080/user/addUser/", user);
}

 deleteUser(userId: string) {
  //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });    
  return this.http.post<any>("http://localhost:8080/user/deleteUser/"+ userId,{});
}

register(user: RequestUser) {
  return this.http.post<any>("http://localhost:8080/register", user);

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
