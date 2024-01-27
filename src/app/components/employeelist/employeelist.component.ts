import { Component } from '@angular/core';
import { Employee } from "../../models/employee"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  apiUrl: string = 'https://localhost:7013/api/Employee';
  employees: Employee[] = [];

  constructor(private http: HttpClient) {

    //this.employees = new Array();
    //this.employees.push(new Employee(1, "abc", "ctg"));
    //this.employees.push(new Employee(2, "def", "ctg"));
    //this.employees.push(new Employee(3, "xyz", "ctg"));
    this.getEmployee();
  }
  selectedEmployeeName: string | undefined;

  getEmployee() {

    this.http.get<Employee[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });


    return this.employees;
  }
}
