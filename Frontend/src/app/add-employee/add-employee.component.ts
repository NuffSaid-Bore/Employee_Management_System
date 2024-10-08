import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  errorMessage: string = '';
  // employee = {
  //   empName: '',
  //   designation: '',
  //   empSalary: null
  // };
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }
  

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        // Optionally, reset the form or navigate back
        this.employee = new Employee(); // Reset the form
        this.errorMessage = '';
        this.router.navigate(['/employees']);
      },
      (error) => {
        this.errorMessage = 'Error adding employee.';
        console.error('Error details:', error); // Log the full error object
      }
    );
  }
}
