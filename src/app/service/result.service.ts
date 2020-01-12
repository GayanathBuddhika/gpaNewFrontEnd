import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }
  
  getResultByEpNumber(epNumber: string) {
    //const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });

    return this.http.get<any>("http://localhost:8080/result/findReultByEpNum/"+ epNumber);
  }
}
