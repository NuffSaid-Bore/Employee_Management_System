import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private allEmployeesUrl ="http://localhost:8081/employee/all";
  private addEmployeeUrl ="http://localhost:8081/employee/add";
  private updateEmployeeUrl = "http://localhost:8081/employee/update/{id}";
  private findEmployeeByIdUrl ="http://localhost:8081/employee/search/{id}";
  private deleteEmployeeByIdUrl ="http://localhost:8081/employee/delete{id}";
  
  constructor(private httpClient : HttpClient) { }

  // getting employee's list
  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.allEmployeesUrl}`);
  }

  // adding an employee to the list
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.addEmployeeUrl}`, employee);
  }

  // get employee by id
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.findEmployeeByIdUrl}/${id}`);
  }

  // update Employee
  updatingEmployee(employee: Employee): Observable<Employee> {
    console.log('Updating employee:', employee);
    return this.httpClient.put<Employee>(`${this.updateEmployeeUrl}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.deleteEmployeeByIdUrl}/${id}`)
  }

}
