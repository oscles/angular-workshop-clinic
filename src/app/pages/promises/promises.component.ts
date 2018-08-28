import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.contarTresSegundos().then((resp) => {
      console.log(resp);
      console.log('Termino el proceso');
      
    }).catch((error) => {
      console.error(error);
      
    });
  }

  ngOnInit() {
  }

  contarTresSegundos():Promise<string> {
    return new Promise((resol, reject) => {

      let cont = 0;
      let interval = setInterval(() => {
        cont += 1;
        console.log(cont);
        
        if (cont == 3) {
          reject('Ejecutando con errores en un intervalo de 1seg');
          clearInterval(interval);
        }
      }, 1000);

    });
  }
}
