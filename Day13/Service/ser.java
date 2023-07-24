package com.example.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Model.beach;
import com.example.project.Model.heritage;
import com.example.project.Model.hills;
import com.example.project.Model.hotel;
import com.example.project.Model.local;
import com.example.project.Model.model;
import com.example.project.Model.museum;
import com.example.project.Model.temple;
import com.example.project.Model.wildlife;
import com.example.project.Repository.repo;
import com.example.project.Repository.repo1;
import com.example.project.Repository.repo2;
import com.example.project.Repository.repo3;
import com.example.project.Repository.repo4;
import com.example.project.Repository.repo5;
import com.example.project.Repository.repo6;
import com.example.project.Repository.repo7;
import com.example.project.Repository.repo8;
@Service
public class ser{
    @Autowired
    private repo studentRepository;
    @Autowired
    private repo1 student1;
    @Autowired
    private repo2 student2;
    @Autowired
    private repo3 student3;
    @Autowired
    private repo4 student4;
    @Autowired
    private repo5 student5;
    @Autowired
    private repo6 student6;
    @Autowired
    private repo7 student7;
    @Autowired
    private repo8 student8;
    
    public List<model> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public model getStudentById(String email) {
        return studentRepository.findById(email).get();
    }
    
    public boolean createStudent1(model a){
        return studentRepository.save(a) != null? true:false;
    }
    
    
    public boolean createStudent2(beach b){
       return student2.save(b) != null? true:false;
    }
    
    
    public boolean createStudent3(hills c) {
        return student8.save(c) != null? true:false;
    }
    
    public boolean createStudent4(heritage d) {
        return student3.save(d) != null? true:false;
    }
    
    public boolean createStudent5(hotel e) {
        return student1.save(e) != null? true:false;
    }
    
    public boolean createStudent6(local f) {
        return student4.save(f) != null? true:false;
    }
    
    public boolean createStudent7(museum g) {
        return student5.save(g) != null? true:false;
    }
    
    public boolean createStudent8(temple h) {
        return student6.save(h) != null? true:false;
    }
    
    public boolean createStudent9(wildlife i) {
        return student7.save(i) != null? true:false;
    }
    
    
    public model updateStudent(String email, model student) {
    	model stu = studentRepository.findById(email).get();
        stu.setName(student.getName());
        stu.setEmail(student.getEmail());
        stu.setPassword(student.getPassword());
        stu.setConfirmpassword(student.getConfirmpassword());
      return studentRepository.save(stu);
    }
    public boolean deleteStudent(String email) {
        if(studentRepository.findById(email).isPresent()){
            studentRepository.deleteById(email);
          return true;
        } 
        return false;
    }
}