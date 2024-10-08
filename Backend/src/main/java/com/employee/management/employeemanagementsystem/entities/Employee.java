package com.employee.management.employeemanagementsystem.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @Column(name="emp_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer empId;
    @Column(name="emp_name")
    private String empName;
    @Column(name="designation")
    private String designation;
    @Column(name="emp_salary")
    private double empSalary;
}
