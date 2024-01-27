import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp-react',
  templateUrl: './add-emp-react.component.html',
  styleUrl: './add-emp-react.component.css',
 
})
export class AddEmpReactComponent implements OnInit {  

  model!: Employee ;
  form!: FormGroup;

  ngOnInit() {

    this.model = new Employee(0, '', '');

    this.form = new FormGroup({
      EmployeeName: new FormControl(this.model.empName, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(4)        
      ]),
      EmployeeAddress: new FormControl(this.model.address),
      EmployeeId: new FormControl(this.model.empId),
    })
  }

  get empname() {
    return this.form.get('EmployeeName')!;
  }
}
