import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedService, SidebarService, UserService } from './service.index';
import { LoginGuardGuard } from './guards/login-guard.guard';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    SidebarService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
