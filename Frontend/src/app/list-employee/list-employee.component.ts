import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    const modalElement = document.getElementById('updateModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show(); // Open the Bootstrap modal
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee).subscribe({
      next: () => {
        const modalElement = document.getElementById('updateModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
        this.loadEmployees();
        
      },
      error: (err) => {
        console.error('Update failed', err);
        // Optionally display an error message to the user
      }
    });
    
  }
}