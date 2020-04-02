import { ResultView } from './../../../model/ResultView';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Result } from 'app/model/Result';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit, AfterViewInit {
  resultViewHeader: any[];
  results: Result[];
  @Input() selectedResultView: ResultView;
  constructor() { }


  ngOnInit() {
    this.resultViewHeader =
    [
      { field: 'no', header: 'No' },
      { field: 'epNumber', header: 'EP Number' },
      { field: 'studentName', header: 'Student Name' },      
      { field: 'result', header: 'Result' },     

    ];
  }
  ngAfterViewInit() {
   
    this.results = this.selectedResultView.result
    
  }

}
