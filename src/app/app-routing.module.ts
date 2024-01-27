import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddEmpReactComponent } from './components/add-emp-react/add-emp-react.component';

const routes: Routes = [
  { path: '', component: EmployeelistComponent },
  { path: 'list', component: EmployeelistComponent, pathMatch: 'prefix' },
  { path: 'employees', component: EmployeelistComponent, pathMatch:'full'},
  { path: 'add', component: AddEmpReactComponent },
  { path: 'add-react', component: AddEmpReactComponent },
  { path: 'entry', component: AddEmployeeComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
