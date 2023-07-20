package com.example.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.Model.model;
import com.example.project.Repository.repo;
@Service
public class ser{
    @Autowired
    private repo studentRepository;
    public List<model> getAllStudents() {
        return studentRepository.findAll();
    }
    public model getStudentById(String email) {
        return studentRepository.findById(email).get();
    }
    public boolean createStudent(model student) {
        return studentRepository.save(student) != null? true:false;
    }
    public model updateStudent(String email, model student) {
    	model stu = studentRepository.findById(email).get();
       
    	stu.setFirs_Name(student.getFirs_Name());
        stu.setLast_Name(student.getLast_Name());
        stu.setEmail(student.getEmail());
        stu.setRoom_TYpe(student.getRoom_TYpe());
        stu.setNumber_of_Guests(student.getNumber_of_Guests());
        stu.setArrival_Date(student.getArrival_Date());
        stu.setDeparture_Date(student.getDeparture_Date());
        stu.setFlight_Number(student.getFlight_Number());
        stu.setSpecial_Request(student.getSpecial_Request());
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