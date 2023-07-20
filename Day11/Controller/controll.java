package com.example.project.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.Model.model;
import com.example.project.Service.ser;
@CrossOrigin
@RestController
public class controll {
    @Autowired
    private ser apiService;
    @GetMapping("/")
    public List<model> getAllStudents() {
        return apiService.getAllStudents();
    }
    @GetMapping("/{id}")
    public model getStudentById(@PathVariable String email) {
        return apiService.getStudentById(email);
    }
    @PostMapping("/post")
    public boolean createStudent(@RequestBody model student) {
        return apiService.createStudent(student);
    }
    @PutMapping("/{email}")
    public model updateStudent( @RequestBody model student,@PathVariable String email) {
        return apiService.updateStudent(email,student);
    }
    @DeleteMapping("/{email}")
    public boolean deleteStudent(@PathVariable String email) {
       return apiService.deleteStudent(email);	
    }
}