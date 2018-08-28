import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  namePage: string;

  constructor(
    private router: Router,
    private _title: Title,
    private _metaDataHtml: Meta
  ) {

    this.getDataRoute()
      .subscribe((data) => {
        console.log(data);
        this.namePage = data.title;

        // cambiando el titulo de la pagina
        this._title.setTitle(this.namePage);
        
        // agregando metadatos a nuestras paginas
        let metaDescription: MetaDefinition = {
          name: 'description',
          content: this.namePage
        };

        let metaKeywords: MetaDefinition = {
          name: 'keywords',
          content: 'salud, clinicas, doctores'
        } 

        this._metaDataHtml.updateTag(metaDescription);
        this._metaDataHtml.updateTag(metaKeywords);
      });
  }

  ngOnInit() {
  }

  getDataRoute() {
    // Permite capturar la data que mando por el router
    return this.router.events
      .pipe(
        // filtrando para comprobar si el objeto es del tipo ActivationEnd
        filter(event => event instanceof ActivationEnd),
        // filtrando para comprobar si el firstChild == null
        filter((event: ActivationEnd) => event.snapshot.firstChild == null),
        // seteando la data que filtramos
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }

}
