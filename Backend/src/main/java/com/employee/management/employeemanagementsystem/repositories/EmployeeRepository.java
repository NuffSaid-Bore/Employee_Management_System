package com.employee.management.employeemanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.management.employeemanagementsystem.entities.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer >{

}
