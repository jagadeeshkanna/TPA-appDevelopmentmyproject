package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.project.Model.heritage;
import com.example.project.Model.model;
@Repository
@Service
public interface repo extends JpaRepository<model,String> {

	
}
