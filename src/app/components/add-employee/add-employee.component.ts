import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',

  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})


export class AddEmployeeComponent  {

  apiUrl: string = 'https://localhost:7013/api/Employee';

  employee: Employee = new Employee(0, ' ',' ');
  //  {
  //    EmpId: 0,
  //    EmpName: ' ',
  //  Address: ' ',
  //  validate():boolean {
  //    return true
  //  }

  //};

  constructor(private http: HttpClient) {

  }
 

  saveEmployee() {
    if (this.employee.validate()) {

      this.http.post(this.apiUrl, this.employee).subscribe();

      //let msg: string = JSON.stringify(this.employee);

      //alert(msg);
    }
    

  }


}
