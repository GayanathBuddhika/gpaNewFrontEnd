import { Component, OnInit } from '@angular/core';
import { ResultService } from 'app/service/result.service';
import { Result } from 'app/model/Result';

@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.scss']
})
export class MainResultComponent implements OnInit {
  results: Result[] = [{"id":"10","ai":1,"result":"C","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"10","ai":1,"courseCode":"IS 11201","name":"Fundamentals of Information Systems"}},{"id":"100","ai":10,"result":"B+","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"100","ai":10,"courseCode":"IS 12209","name":"Emerging Technologies for Information Systems"}},{"id":"110","ai":11,"result":"A-","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"110","ai":11,"courseCode":"IS 12210","name":"Advanced Mathematics"}},{"id":"120","ai":12,"result":"C","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"120","ai":12,"courseCode":"IS 12311","name":"Analysis of Algorithms"}},{"id":"130","ai":13,"result":"D","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"130","ai":13,"courseCode":"IS 12212","name":"Human Computer Interaction"}},{"id":"140","ai":14,"result":"D+","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"140","ai":14,"courseCode":"CPE 1201","name":"Professional English II"}},{"id":"190","ai":19,"result":"A","examDate":"1245","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"150","ai":15,"courseCode":"IS 21213","name":"Personal Productivity with IS technology"}},{"id":"20","ai":2,"result":"C","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"20","ai":2,"courseCode":"IS 11302","name":"Structured Programming Techniques"}},{"id":"200","ai":20,"result":"B","examDate":"1452","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"160","ai":16,"courseCode":"IS 21215","name":"Object Oriented Analysis and Design"}},{"id":"210","ai":21,"result":"C","examDate":"1452","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"170","ai":17,"courseCode":"IS 31227","name":"Rapid Application Development"}},{"id":"220","ai":22,"result":"A","examDate":"1452","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"180","ai":18,"courseCode":"IS 31228","name":"Electronic Business Strategy, Architecture and "}},{"id":"230","ai":23,"result":"B","examDate":"1422","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"190","ai":19,"courseCode":"IS 41243","name":"Introduction to Distributed Systems"}},{"id":"240","ai":24,"result":"A","examDate":"1452","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"200","ai":20,"courseCode":"IS 41244","name":"Information Systems Strategies, Management & "}},{"id":"250","ai":25,"result":"D","examDate":"1545","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"210","ai":21,"courseCode":"IS 21214","name":"Software Project Management"}},{"id":"260","ai":26,"result":"B+","examDate":"7554","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"220","ai":22,"courseCode":"IS 21216","name":"Platform Technologies"}},{"id":"270","ai":27,"result":"C","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"230","ai":23,"courseCode":"IS 21217","name":"System Analysis and Design"}},{"id":"280","ai":28,"result":"C+","examDate":"65469","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"240","ai":24,"courseCode":"IS 21218","name":"Information Assurance and Security"}},{"id":"290","ai":29,"result":"A","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"250","ai":25,"courseCode":"IS 21219","name":"Social and Professional Issues"}},{"id":"30","ai":3,"result":"C","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"30","ai":3,"courseCode":"IS 11203","name":"Information Systems Theory and Practice"}},{"id":"300","ai":30,"result":"B","examDate":"4527","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"260","ai":26,"courseCode":"CPE 2101","name":"Professional English III Compulsory"}},{"id":"310","ai":31,"result":"A+","examDate":"354567","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"270","ai":27,"courseCode":"IS 22220","name":"System Administration and Maintenance"}},{"id":"320","ai":32,"result":"A","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"280","ai":28,"courseCode":"IS 22221","name":"Operating System Concepts"}},{"id":"330","ai":33,"result":"B","examDate":"2314654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"290","ai":29,"courseCode":"IS 22222","name":"System Integration and Architecture"}},{"id":"340","ai":34,"result":"B+","examDate":"5465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"300","ai":30,"courseCode":"IS 22223","name":"IS Risk Management"}},{"id":"350","ai":35,"result":"C","examDate":"65465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"310","ai":31,"courseCode":"IS 22224","name":"IT Governance"}},{"id":"360","ai":36,"result":"B","examDate":"54156","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"320","ai":32,"courseCode":"IS 22225","name":"Business Intelligence"}},{"id":"370","ai":37,"result":"C","examDate":"3214654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"330","ai":33,"courseCode":"IS 22226","name":"Web Technologies"}},{"id":"380","ai":38,"result":"A+","examDate":"65446","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"340","ai":34,"courseCode":"CPE 2201","name":"Professional English IV"}},{"id":"390","ai":39,"result":"D+","examDate":"56465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"350","ai":35,"courseCode":"IS 31227","name":"Rapid Application Development"}},{"id":"40","ai":4,"result":"C","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"40","ai":4,"courseCode":"IS 11204","name":"Information System Infrastructure"}},{"id":"400","ai":40,"result":"A","examDate":"56456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"360","ai":36,"courseCode":"IS 31228","name":"Electronic Business Strategy, Architecture and "}},{"id":"410","ai":41,"result":"B+","examDate":"65456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"370","ai":37,"courseCode":"IS 31129","name":"Enterprise Architecture"}},{"id":"420","ai":42,"result":"B","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"380","ai":38,"courseCode":"IS 31230","name":"Mini Project"}},{"id":"430","ai":43,"result":"C+","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"390","ai":39,"courseCode":"IS 31231","name":"Management Information Systems"}},{"id":"440","ai":44,"result":"C","examDate":"25456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"400","ai":40,"courseCode":"IS 31232","name":"IT Auditing"}},{"id":"450","ai":45,"result":"A+","examDate":"55456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"410","ai":41,"courseCode":"IS 31233","name":"Entrepreneurship and Innovation"}},{"id":"460","ai":46,"result":"A","examDate":"6544","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"420","ai":42,"courseCode":"IS 31234","name":"Software Engineering"}},{"id":"470","ai":47,"result":"B+","examDate":"522456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"430","ai":43,"courseCode":"IS 31235","name":"Data Communication and Networks"}},{"id":"480","ai":48,"result":"C","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"440","ai":44,"courseCode":"IS 31236","name":"Geographical Information Systems"}},{"id":"490","ai":49,"result":"A","examDate":"56465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"450","ai":45,"courseCode":"IS 31237","name":"Advanced Database Systems"}},{"id":"50","ai":5,"result":"B-","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"50","ai":5,"courseCode":"IS 11205","name":"Fundamentals of Mathematics"}},{"id":"500","ai":50,"result":"B+","examDate":"65465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"460","ai":46,"courseCode":"IS 31238","name":"Organizational Behavior and Management"}},{"id":"510","ai":51,"result":"A","examDate":"5456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"500","ai":50,"courseCode":"IS 32842","name":"Industrial Training"}},{"id":"520","ai":52,"result":"C","examDate":"5646","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"510","ai":51,"courseCode":"IS 41243","name":"Introduction to Distributed Systems"}},{"id":"530","ai":53,"result":"A","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"520","ai":52,"courseCode":"IS 41244","name":"Information Systems Strategies, Management & "}},{"id":"540","ai":54,"result":"A+","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"530","ai":53,"courseCode":"IS 41245","name":"Business Process Management"}},{"id":"550","ai":55,"result":"A","examDate":"254","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"540","ai":54,"courseCode":"IS 41246","name":"Enterprise Resource Planning"}},{"id":"560","ai":56,"result":"B+","examDate":"56445646","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"550","ai":55,"courseCode":"IS 41247","name":"Research Method"}},{"id":"570","ai":57,"result":"C","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"560","ai":56,"courseCode":"IS 41248","name":"Cloud Computing"}},{"id":"580","ai":58,"result":"D+","examDate":"6554","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"570","ai":57,"courseCode":"IS 41249","name":"Logistics Systems and Transportation "}},{"id":"590","ai":59,"result":"A+","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"580","ai":58,"courseCode":"IS 41250","name":"Human Resource Management"}},{"id":"60","ai":6,"result":"D+","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"60","ai":6,"courseCode":"IS 11206","name":"Statistics & Probability Theory"}},{"id":"600","ai":60,"result":"B","examDate":"54","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"590","ai":59,"courseCode":"IS 41251","name":"Data Mining and Applications"}},{"id":"610","ai":61,"result":"B+","examDate":"6546456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"560","ai":56,"courseCode":"IS 41248","name":"Cloud Computing"}},{"id":"620","ai":62,"result":"D","examDate":"5415","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"570","ai":57,"courseCode":"IS 41249","name":"Logistics Systems and Transportation "}},{"id":"630","ai":63,"result":"A","examDate":"364165","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"580","ai":58,"courseCode":"IS 41250","name":"Human Resource Management"}},{"id":"640","ai":64,"result":"B","examDate":"514787","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"590","ai":59,"courseCode":"IS 41251","name":"Data Mining and Applications"}},{"id":"650","ai":65,"result":"A+","examDate":"456","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"600","ai":60,"courseCode":"IS 41252","name":"Multimedia and Hypermedia Systems "}},{"id":"660","ai":66,"result":"A","examDate":"4556","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"610","ai":61,"courseCode":"IS 42853","name":"Research Project in Information Systems"}},{"id":"670","ai":67,"result":"D+","examDate":"6546","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"620","ai":62,"courseCode":"IS 42254","name":"Business/IT Alignment"}},{"id":"680","ai":68,"result":"B","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"630","ai":63,"courseCode":"IS 42255","name":"Business Process Simulation"}},{"id":"690","ai":69,"result":"A+","examDate":"56465","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"640","ai":64,"courseCode":"IS 42256","name":"Information System Economics"}},{"id":"70","ai":7,"result":"D+","examDate":"2018/12/20","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"70","ai":7,"courseCode":"CPE 1101","name":"Professional English I"}},{"id":"700","ai":70,"result":"C","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"650","ai":65,"courseCode":"IS 42257","name":"Enterprise Modeling Ontologies"}},{"id":"710","ai":71,"result":"C+","examDate":"564654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"680","ai":68,"courseCode":"IS 42259","name":"Web Service Technologies"}},{"id":"720","ai":72,"result":"D+","examDate":"654","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"670","ai":67,"courseCode":"IS 42258","name":"Enterprise Architecture Framework"}},{"id":"80","ai":8,"result":"A","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"80","ai":8,"courseCode":"IS 12307","name":"Object Oriented Programming"}},{"id":"90","ai":9,"result":"B","examDate":"2019/06/10","student":{"id":"779edc47-3c92-4942-bc1e-9b3edc045968","ai":9,"epNumber":"EP2032","registrationNumber":"14/AS/CI/007","batch":"2014/15","studentName":"gayanath","degreeProYear":4,"department":{"id":"10","ai":1,"name":"CIS ","faculty":{"id":"2fabec15-2dbf-4758-a817-04972daae403","ai":6,"name":"applide","edit":false},"edit":false}},"course":{"id":"90","ai":9,"courseCode":"IS 12308","name":"Database Systems"}}];
  firstYearResults: Result[] = [];
  secondYearResults: Result[] = [];
  thredYearResults: Result[] = [];
  forthtYearResults: Result[] = [];
  year1sem1sem2: Boolean = false;
  year2sem1sem2: Boolean = false;
  year3sem1sem2: Boolean = false;
  year4sem1sem2: Boolean = false;
  absentOrRepeetInYear1: Boolean = false;
  absentOrRepeetInYear2: Boolean = false;
  absentOrRepeetInYear3: Boolean = false;
  absentOrRepeetInYear4: Boolean = false;
  gpa1Year: number;
  gpa2Year: number;
  gpa3Year: number;
  gpa4Year: number;
  totalCreditYear1: number;
  totalCreditYear2: number;
  totalCreditYear3: number;
  totalCreditYear4: number;

  finalGpa: number;
  calFianalGpa: boolean = false;
  msgAwardOfClass: string;

  constructor(private resultViewService: ResultService) { }

  ngOnInit() {
    this.getResultByEpNumber();
  }


  //get result array by epa number and pass that data to related methode for find finalgpa
  getResultByEpNumber() {
 
      // pass this result array to this methode for catogarice results by year  
      this.catogariceSubjectsEyerBy(this.results);

      this.calculateGpa();

    // this.resultViewService.getResultByEpNumber("EP2032").subscribe(data => {
    //   this.results = data;
    //   // pass this result array to this methode for catogarice results by year  
    //   this.catogariceSubjectsEyerBy(this.results);

    //   this.calculateGpa();

    //   console.log(this.results);
    //   console.log(this.results[0].student.degreeProYear);
    //   console.log(this.firstYearResults.length);
    //   console.log(this.secondYearResults.length);
    //   console.log(this.thredYearResults.length);
    //   console.log(this.forthtYearResults.length);


    // }, err => {

    // });



  }

  calculateGpa(){
      // find gpa for first year
      if (this.firstYearResults.length > 0) {
        // pass first year results to this methode for find there has sem1 and sem2 result
        this.year1sem1sem2 = this.checkSemOneSemTwoinclude(this.firstYearResults);
        if (this.year1sem1sem2) {
          // pass first year result to this methode for find there has repeeted subjects or absent subjects
          this.absentOrRepeetInYear1 = this.checkResultHasRepeetOrAbsent(this.firstYearResults);
          if (this.absentOrRepeetInYear1) {
            // fass first year results to this methode for find first year gpa                
            this.gpa1Year = this.findGpaInYear(this.firstYearResults);
            console.log("first year gpa", this.gpa1Year);
          }
        }

      }

      // find gpa for second  year
      if (this.secondYearResults.length > 0) {
        // pass second year results to this methode for find there has sem1 and sem2 result
        this.year2sem1sem2 = this.checkSemOneSemTwoinclude(this.secondYearResults);
        if (this.year2sem1sem2) {
          // pass second year result to this methode for find there has repeeted subjects or absent subjects
          this.absentOrRepeetInYear2 = this.checkResultHasRepeetOrAbsent(this.secondYearResults);
          if (this.absentOrRepeetInYear2) {
            // fass second year results to this methode for find second year gpa
            this.gpa2Year = this.findGpaInYear(this.secondYearResults)
            console.log("second year gpa", this.gpa2Year);
          }
        }
      }

      // find gpa for therd  year
      if (this.thredYearResults.length > 0) {
        // pass therd year results to this methode for find there has sem1 and sem2 result
        this.year3sem1sem2 = this.checkSemOneSemTwoinclude(this.thredYearResults);
        if (this.year3sem1sem2) {
          // pass therd year result to this methode for find there has repeeted subjects or absent subjects
          this.absentOrRepeetInYear3 = this.checkResultHasRepeetOrAbsent(this.thredYearResults);
          if (this.absentOrRepeetInYear3) {
            // fass therd year results to this methode for find therd year gpa
            this.gpa3Year = this.findGpaInYear(this.thredYearResults)
            console.log("thred year gpa", this.gpa3Year);
          }
        }
      }

      // find gpa for fourth  year
      if (this.forthtYearResults.length > 0) {
        // pass fourth year results to this methode for find there has sem1 and sem2 result
        this.year4sem1sem2 = this.checkSemOneSemTwoinclude(this.forthtYearResults);
        if (this.year4sem1sem2) {
          // pass fourth year result to this methode for find there has repeeted subjects or absent subjects
          this.absentOrRepeetInYear4 = this.checkResultHasRepeetOrAbsent(this.forthtYearResults);
          if (this.absentOrRepeetInYear4) {
            // fass fourth year results to this methode for find fourth year gpa
            this.gpa4Year = this.findGpaInYear(this.forthtYearResults)
            console.log("forth year gpa", this.gpa4Year);
          }
        }
      }

      console.log("year1sem1sem2", this.year1sem1sem2);
      console.log("year2sem1sem2", this.year2sem1sem2);
      console.log("year3sem1sem2", this.year3sem1sem2);
      console.log("year4sem1sem2", this.year4sem1sem2);

      //calculate gpa for 3 year degree program student
      if (this.results[0].student.degreeProYear === 3) {
        if (this.absentOrRepeetInYear1 && this.absentOrRepeetInYear2 && this.absentOrRepeetInYear3) {
          this.calculateFinalGpaForThreeYeardf();
        }
      }
      //calculate gpa for 4 year degree program student
      if (this.results[0].student.degreeProYear === 4) {
        if (this.absentOrRepeetInYear1 && this.absentOrRepeetInYear2 && this.absentOrRepeetInYear3 && this.absentOrRepeetInYear4) {
          this.calculateFinalGpaForFourYeardf();
        }
      }

      
  }


  // categorize result for years by using subject code
  catogariceSubjectsEyerBy(results: Result[]) {

    results.forEach((result, i) => {
      let codeNumber = result.course.courseCode.match(/\d/g);
      switch (codeNumber[0]) {
        case "1":
          this.firstYearResults.push(result);
          break;
        case "2":
          this.secondYearResults.push(result);
          break;
        case "3":
          this.thredYearResults.push(result);
          break;
        case "4":
          this.forthtYearResults.push(result);
          break;
      }

    });

  }

  // check that pased result set has sem1 and sem2 subjects
  checkSemOneSemTwoinclude(results: Result[]) {
    let sem1 = false;
    let sem2 = false;
    let sem1sem2 = false;
    results.forEach(result => {
      let codeNumber = result.course.courseCode.match(/\d/g);
      switch (codeNumber[1]) {
        case "1":
          sem1 = true;
          break;
        case "2":
          sem2 = true;
          break;
      }
    });

    if (sem1 && sem2) {
      sem1sem2 = true;
    } else {
      sem1sem2 = false;
    }

    return sem1sem2;
  }

  // check that passed result set has absent or repeeted subject
  checkResultHasRepeetOrAbsent(results: Result[]) {
    let repeetOrAbsent: any;
    results.forEach(result => {

      if (result.result === "E" || result.result == "abc") {
        repeetOrAbsent = false;
      } else {
        repeetOrAbsent = true;
      }

    })

    return repeetOrAbsent;
  }

  // find gpa for year
  findGpaInYear(results: Result[]) {
    let sumOfCredits: number = 0;
    let creditPoint: number = 0;
    let cpGp: number = 0;
    let sumCpGp: number = 0;
    let gpa: number = 0;
    let gradePoit: number = 0;
    results.forEach(result => {
      let codeNumber = result.course.courseCode.match(/\d/g);
      // get credit for a subject by using code number
      creditPoint = parseInt(codeNumber[2]);
      // get total creadit point
      sumOfCredits += creditPoint;
      // assing total credit for related year
      switch (codeNumber[0]) {
        case "1":
          this.totalCreditYear1 = sumOfCredits;
          break;
        case "2":
          this.totalCreditYear2 = sumOfCredits;
          break;
        case "3":
          this.totalCreditYear3 = sumOfCredits;
          break;
        case "4":
          this.totalCreditYear4 = sumOfCredits;
          break;

      }

      // get grate point for a subject by result
      switch (result.result) {

        case "A+":
          gradePoit = 4.00;
          break;
        case "A":
          gradePoit = 4.00;
          break;
        case "A-":
          gradePoit = 4.00;
          break;
        case "B+":
          gradePoit = 3.30;
          break;
        case "B":
          gradePoit = 3.00;
          break;
        case "B-":
          gradePoit = 2.70;
          break;
        case "C+":
          gradePoit = 2.30;
          break;
        case "C":
          gradePoit = 2.00;
          break;
        case "C-":
          gradePoit = 1.70;
          break;
        case "D+":
          gradePoit = 1.30;
          break;
        case "D":
          gradePoit = 1.00;
          break;
        case "E":
          gradePoit = 0.00;
          break;
      }
      // get (credit point * grade point) for a subject 
      cpGp = creditPoint * gradePoit;
      // get total value of (credit point * grade point) 
      sumCpGp += cpGp;
    });

    // calculate gpa
    gpa = sumCpGp / sumOfCredits;

    return gpa;

  }

  // calculate gpa for three year degree program
  calculateFinalGpaForThreeYeardf() {

    let sumOfatp = 0.3 * this.totalCreditYear1 * this.gpa1Year + 0.3 * this.totalCreditYear2 * this.gpa2Year + 0.4 * this.totalCreditYear3 * this.gpa3Year;
    let sumOfat = 0.3 * this.totalCreditYear1 + 0.3 * this.totalCreditYear2 + 0.4 * this.totalCreditYear3;

    this.finalGpa = sumOfatp / sumOfat;
    this.calFianalGpa = true;
    console.log("final gpa for three year ", this.finalGpa)

  }

  // calculate gpa for four year degree program
  calculateFinalGpaForFourYeardf() {

    let sumOfatp = 0.2 * this.totalCreditYear1 * this.gpa1Year + 0.2 * this.totalCreditYear2 * this.gpa2Year + 0.3 * this.totalCreditYear3 * this.gpa3Year + 0.3 * this.totalCreditYear4 * this.gpa4Year;
    let sumOfat = 0.2 * this.totalCreditYear1 + 0.2 * this.totalCreditYear2 + 0.3 * this.totalCreditYear3 + 0.3 * this.totalCreditYear4;

    this.finalGpa = sumOfatp / sumOfat;
    this.calFianalGpa = true;
    console.log("final gpa for four year ", this.finalGpa)

  }

  // awardOfClasses(){

  //  if(this.finalGpa >= 3.7)
  //   this.msgAwardOfClass = "FIRST CLASS";
  //  }else(){


  //  }
  // }

}
