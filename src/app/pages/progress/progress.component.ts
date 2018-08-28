import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  percent1: number = 25;
  percent2: number = 50;

  constructor() { }

  ngOnInit() {
  }
}
