import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { PageIndexModule } from './pages/pageindex.module';
import { ServiceModule } from './services/service.module';

// routes
import { AppRoutesModule } from './app.routes';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PageIndexModule,
    AppRoutesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
