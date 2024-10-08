import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
declare var bootstrap: any;
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'] 
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = { empId: 0, empName: '', designation: '', empSalary: 0 };
  

  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      (data) => {
        if(data.length == 0){
          this.errorMessage = "The employee's list is empty, Please add empoyee";
        }
        this.employees = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching employee data.';
        console.error(error);
      }
    );
  }
  openModal(employee: Employee): void {
    this.employee = { ...employee }; // Clone the employee object
  }

  updateEmployee(): void {
    this.employeeService.updatingEmployee(this.employee).subscribe(
      (response) =>{
        alert(`Response: ${response}`);

        this.loadEmployees();
      },
      (error) =>{
        alert(`Error: ${error}`);
      }
    );
    
  }

  deleteEmployee(employee : Employee){

  }
}
