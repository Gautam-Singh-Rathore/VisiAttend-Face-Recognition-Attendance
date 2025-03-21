package com.project.AttendanceSystem.controller;

import com.project.AttendanceSystem.dto.JoinClassRequest;
import com.project.AttendanceSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/join")
    public ResponseEntity<?> joinClass(@RequestBody JoinClassRequest request){
        try {
            studentService.joinClass(request);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not added");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("User added to the class");
    }
}
