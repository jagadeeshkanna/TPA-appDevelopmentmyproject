package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.project.Model.heritage;
import com.example.project.Model.model;
@Repository
public interface repo3 extends JpaRepository<heritage,String> {
}