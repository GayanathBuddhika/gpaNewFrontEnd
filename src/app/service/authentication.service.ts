import { User } from './../model/User';
import { Department } from 'app/model/Department';
import { RequestUser } from './../model/requestUser';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from './../model/authUser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<AuthUser>;
  public currentUser: Observable<AuthUser>;

  public _addCurentUser = new Subject<User>();

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthUser {
    return this.currentUserSubject.value;
  }

  login(requestUser: RequestUser) {

    // const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
    // #############################
    return this.http.post<any>("http://localhost:8080/authenticate", requestUser)
      .pipe(map(user => {

        // console.log("log details....", JSON.parse(user.myuser));
        // this._addCurentUser.next(user.myuser);
        // login successful if there's a jwt token in the response
        if (user && user.jwt) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    console.log("user log out",this.currentUserSubject.getValue());
    localStorage.removeItem('currentUser');
   
    this.currentUserSubject.next(null);
    console.log("user log out",this.currentUserSubject.getValue());
  }
}
