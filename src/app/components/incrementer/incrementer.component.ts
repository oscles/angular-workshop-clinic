import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  @Input() percent: number = 50;
  @Input() legend: string = 'Leyend';

  @Output() changeValueProgress: EventEmitter<number>;
  
  // permite ver el codigo natvo de un elemento html
  @ViewChild('txtProgress') txtProgress:ElementRef; 

  constructor() {
    this.changeValueProgress = new EventEmitter();
  }

  ngOnInit() {
  }

  onChanges(event: number) {
    if (event <= 0)
      this.percent = 0;
    if (event >= 100)
      this.percent = 100;
    else
      this.percent = event;
    this.txtProgress.nativeElement.value = this.percent;
    this.changeValueProgress.emit(this.percent);
  }

  changeValue(value: number) {
    if (this.percent <= 0 && value < 0){
      this.percent = 0;
      return;
    }
    if (this.percent >= 100 && value > 0){
      this.percent = 100;
      return;
    }
    else
      this.percent += value;
    this.changeValueProgress.emit(this.percent);
    this.txtProgress.nativeElement.focus();
  }
}
