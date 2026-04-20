package com._AML_3A.Rest_Api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com._AML_3A.Rest_Api.model.Student;
import com._AML_3A.Rest_Api.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Add or update student
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // Get student by ID
    public Student getStudentById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // Delete student
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}