import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms"
import {EmployeeService} from "../employee-service/employee.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  private employees;
  private selectedData;


  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){
    employeeService.getEmployees().subscribe(
      users => this.employees = users,
      error => console.log(error)
    );
    this.selectedData = this.employees;
  }

  onSelect(val){
    console.log(val);
    if(val=="E1"){
      this.selectedData=this.employees.filter(x => x.emplpyeeManagerId !== '' );
    }else{
      this.selectedData = this.employees.filter(x => x.emplpyeeManagerId == val);
    }
  }
}
