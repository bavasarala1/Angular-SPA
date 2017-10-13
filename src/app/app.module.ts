import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeService} from "./employee-service/employee.service";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  { path: 'employees', component: ViewEmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
