package com.example.project.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.Model.beach;
import com.example.project.Model.heritage;
import com.example.project.Model.hills;
import com.example.project.Model.hotel;
import com.example.project.Model.local;
import com.example.project.Model.model;
import com.example.project.Model.museum;
import com.example.project.Model.temple;
import com.example.project.Model.wildlife;
import com.example.project.Service.ser;
@CrossOrigin
@RestController
@EnableAutoConfiguration


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
    
   
    @PostMapping("/postm")
    public boolean createStudent1(@RequestBody model a) {
        return apiService.createStudent1(a);
    }
    
 
    @PostMapping("/postb")
    public boolean createStudent2(@RequestBody beach b) {
        return apiService.createStudent2(b);
    }
    
    
    @PostMapping("/posth")
    public boolean createStudent3(@RequestBody hills c) {
        return apiService.createStudent3(c);
    }
    
    @PostMapping("/posthe")
    public boolean createStudent4(@RequestBody heritage d) {
        return apiService.createStudent4(d);
    }
    
    
    @PostMapping("/postho")
    public boolean createStudent5(@RequestBody hotel e) {
        return apiService.createStudent5(e);
    }
    
    
    @PostMapping("/postl")
    public boolean createStudent6(@RequestBody  local f) {
        return apiService.createStudent6(f);
    }
    
    @PostMapping("/postme")
    public boolean createStudent7(@RequestBody  museum g) {
        return apiService.createStudent7(g);
    }
    
   
    @PostMapping("/postt")
    public boolean createStudent8(@RequestBody  temple h) {
        return apiService.createStudent8(h);
    }
    
 
    @PostMapping("/postw")
    public boolean createStudent9(@RequestBody  wildlife i) {
        return apiService.createStudent9(i);
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