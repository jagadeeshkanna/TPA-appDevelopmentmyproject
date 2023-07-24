package com.example.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.project.Model.model;
import com.example.project.Model.temple;
@Repository
public interface repo6 extends JpaRepository<temple,String> {
}