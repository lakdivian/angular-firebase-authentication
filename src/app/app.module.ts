import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: "full"},
  { path: 'login', component: LoginComponentComponent},
  { path: '**', redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
