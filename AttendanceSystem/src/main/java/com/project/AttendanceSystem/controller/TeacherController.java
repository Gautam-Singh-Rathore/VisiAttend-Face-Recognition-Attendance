package com.project.AttendanceSystem.controller;

import com.project.AttendanceSystem.dto.ClassRespose;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/get/classes/{teacherId}")
    public ResponseEntity findClassesByTeacherID(@PathVariable(name = "teacherId") Long uid){
        try {
            List<ClassRespose> classes = teacherService.findMyClasses(uid);
            return ResponseEntity.status(HttpStatus.OK).body(classes);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }
}
