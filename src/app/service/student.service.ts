import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'app/model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


   getAllStudent() {
    //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

    return this.http.get<any>("http://localhost:8080/student/findAllstudent/");
  }

  addStudent(studednt: Student){
    return this.http.post<any>("http://localhost:8080/student/addStudent/",studednt );
  }
}
