package com.employee.management.employeemanagementsystem.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.employee.management.employeemanagementsystem.entities.Employee;
import com.employee.management.employeemanagementsystem.service.EmployeeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;






@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
   private EmployeeService employeeService; 

   @GetMapping("/all")
   public List<Employee> getAllEmployees(){
    return employeeService.getEmployeesList();
   }

   @GetMapping("/{id}")
   public Optional<Employee> employeeById(@PathVariable Integer id){
    return employeeService.findEmployeeById(id);
   }

    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return "Employee Successfully Added";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteEmployeeById(@PathVariable Integer id){
        employeeService.deleteEmployeeById(id);
        return "Employee deleted successfully!";
    }

    
    @RequestMapping("/search/{id}")
    public String getEmployee(@RequestParam Integer id){
        employeeService.findEmployeeById(id);
        return "Employee Found";
    }

    @DeleteMapping("/deleteAll")
    public String deleteAllEmployees(){
        employeeService.deleteAllEmployees();
        return "All Employees have been deleted!";
    }

    @PutMapping("/update")
    public Employee updateEmployeeRecords(@RequestBody Employee employee){
        employeeService.updateEmployee(employee);
     return employee;
    }

}
