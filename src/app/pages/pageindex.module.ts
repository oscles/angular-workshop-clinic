import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PageindexComponent } from './pageindex.component';
import { IncrementerComponent } from '../components/incrementer/incrementer.component';

import { PagesRoutingModule } from './pageindex.routes';
import { SharedModule } from '../shared/shared.module';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
    declarations: [
        PageindexComponent,
        DashboardComponent,
        Graphics1Component,
        ProgressComponent,
        IncrementerComponent,
        GraphicDoughnutComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent
    ],
    imports: [ 
        SharedModule,
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        Graphics1Component,
        ProgressComponent,
    ],
    providers: [],
})
export class PageIndexModule {}