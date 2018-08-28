import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { Page404Component } from './page404/page404.component';




@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent,
        Page404Component,
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent,
        Page404Component,
    ],
    providers: [],
})
export class SharedModule {}