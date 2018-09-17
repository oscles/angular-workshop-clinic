import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageindexComponent } from './pageindex.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';


const routes: Routes = [
    {
        path: '',
        component: PageindexComponent,
        canActivate: [LoginGuardGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'Dashboard' }
            },
            {
                path: 'graphic',
                component: Graphics1Component,
                data: { title: 'Graphics' }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: { title: 'Progress' }
            },
            {
                path: 'promises',
                component: PromisesComponent,
                data: { title: 'Promises' }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: { title: 'Rxjs' }
            },
            {
                path: 'account-settings',
                component: AccountSettingsComponent,
                data: { title: 'Account settings' }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

