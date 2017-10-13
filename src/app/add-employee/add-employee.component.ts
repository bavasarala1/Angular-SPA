import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee-service/employee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{

  private employees;

  constructor(private route: ActivatedRoute, private employeeService:EmployeeService) {
    employeeService.getEmployees().subscribe(
      users => this.employees = users,
      error => console.log(error)
    );
  }

  employee={
    "employeeId":null,
    "employeeFname":null,
    "employeeLname":null,
    "emplpyeeManagerId":null,
    "employeeroles":null
  };

  employeeroles = ['Director', 'Software Developer', 'Support', 'Analyst', 'Sales', 'Accounting', 'Hardware', 'It'];


  addEmployee(){
    this.employeeService.addEmployees(this.employee)
      .subscribe(user => {
        console.log(user);
        alert("Employee added");
      });
  }

}
