import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { AddEmpReactComponent } from './components/add-emp-react/add-emp-react.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeelistComponent,
    AddEmpReactComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
