import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {

  graphics: any = {
    graphic1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con Tocino'],
      data: [24, 36, 48],
      type: 'pie',
      legend: 'El pan se come con mantequilla'
    },
    graphic2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4800, 8600],
      type: 'pie',
      legend: 'Entrevistados'
    },
    graphic3: {
      labels: ['Si', 'No'],
      data: [95, 15],
      type: 'pie',
      legend: '¿Le dan gases los frijoles?'
    },
    graphic4: {
      labels: ['Si', 'No'],
      data: [74, 32],
      type: 'pie',
      legend: '¿Le importa que le den gases?'
    },
  }

  constructor() { }

  ngOnInit() {
  }

}
