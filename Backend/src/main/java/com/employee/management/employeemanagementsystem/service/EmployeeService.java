package com.employee.management.employeemanagementsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.employee.management.employeemanagementsystem.entities.Employee;
import com.employee.management.employeemanagementsystem.repositories.EmployeeRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee) {
        
        return employeeRepository.save(employee);
    }

    public List<Employee> getEmployeesList(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> findEmployeeById(Integer id){
        return employeeRepository.findById(id);
    }

    public String deleteEmployeeById(Integer id) {
        try {
            if (employeeRepository.existsById(id)) {
                employeeRepository.deleteById(id);
               
            } else {
                return "Employee not found!";
            }
        } catch (Exception e) {
            return e.getMessage();
        }
        return "Employee deleted successfully!";
    }

    public String deleteAllEmployees(){
         employeeRepository.deleteAll();
         return "All Employees Deleted";
    }

    public Employee updateEmployee(@PathVariable Integer id,@RequestBody Employee updatedEmployee) {
        // Find the existing employee
        return employeeRepository.findById(id)
            .map(employee -> {
                // Update the employee's fields
                employee.setEmpName(updatedEmployee.getEmpName());
                employee.setDesignation(updatedEmployee.getDesignation());
                employee.setEmpSalary(updatedEmployee.getEmpSalary());

                // Save the updated employee
             var savedEmployee = employeeRepository.save(employee);
                return savedEmployee;
            })
            .orElseThrow();
    }
}
