import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-doughnut',
  templateUrl: './graphic-doughnut.component.html',
  styleUrls: ['./graphic-doughnut.component.css']
})
export class GraphicDoughnutComponent implements OnInit {

  @Input() pieChartLabels:string[] = [];
  @Input() pieChartData:number[] = [];
  @Input() pieChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
