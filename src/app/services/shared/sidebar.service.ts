import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menus: any[] = [
    {
      title: 'Principal',
      icon: '',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Progress', url: '/progress'},
        {title: 'Graphics', url: '/graphic'},
        {title: 'Promises', url: '/promises'},
        {title: 'Rxjs', url: '/rxjs'},
      ]
    }
  ];

  constructor() { }
}
