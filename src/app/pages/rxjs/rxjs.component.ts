import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subscription: Subscription;

  constructor() {
   
    this.subscription = this.executeObservable()
      .subscribe( 
        resp => console.log('subs', resp),
        error => console.error('Fatal', error),
        () => console.log('Ha termindo el susbcriptor')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // cuando no necesite la pagina nos vamos desuscribir del observe
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  executeObservable(): Observable<number> {
    return new Observable( observer => {
      let cont = 0;
      let output: any = {
        'value': cont
      };

      let interval = setInterval( () => {
        cont += 1;
        observer.next(cont);
        
       /*if (cont === 3) {
        clearInterval(interval);
        observer.complete();
       } 
        
        if (cont == 2) {
          observer.error('Ha ocurrido un error en el servidor');
        }*/

      }, 500);
    });

  }

}
