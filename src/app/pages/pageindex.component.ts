import { Component, OnInit } from '@angular/core';

// permite cargar funciones desde fuera de angular
declare function initPlugin();

@Component({
  selector: 'app-pageindex',
  templateUrl: './pageindex.component.html',
  styles: []
})
export class PageindexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugin();
  }

}
