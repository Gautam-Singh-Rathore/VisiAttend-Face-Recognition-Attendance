package com.project.AttendanceSystem.service;

import com.project.AttendanceSystem.dto.ClassRespose;
import com.project.AttendanceSystem.dto.JoinClassRequest;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.entity.Student;
import com.project.AttendanceSystem.repository.ClassesRepo;
import com.project.AttendanceSystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ClassesRepo classesRepo;

    public void joinClass(JoinClassRequest joinClassRequest){
        Long rollNo = joinClassRequest.getRollNo();
        Long classId = joinClassRequest.getClassId();

        Student student = studentRepo.findById(rollNo)
                .orElseThrow(()->new RuntimeException("Student not found"));

        Classes classes = classesRepo.findById(classId)
                .orElseThrow(() -> new RuntimeException("Class not found"));

        student.getClasses().add(classes);
        classes.getStudents().add(student);

        studentRepo.save(student);
        classesRepo.save(classes);
    }
}
