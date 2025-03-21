package com.project.AttendanceSystem.controller;

import com.project.AttendanceSystem.dto.ClassRequest;
import com.project.AttendanceSystem.dto.ClassRespose;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.service.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/class")
public class ClassesController {

    @Autowired
    private ClassesService classesService;

    @GetMapping("/all")
    public ResponseEntity<?> findAllClasses(){
        List<ClassRespose> resp;
        try {
            resp = classesService.findAll();
            return ResponseEntity.ok(resp);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong ...");
        }


    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody ClassRequest classRequest){
        Classes newClass ;
        try {
            newClass = classesService.createClass(classRequest);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Class could not be created");
        }
        ClassRespose respose = new ClassRespose(newClass.getId() , newClass.getName() , newClass.getTeacher().getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(respose);
    }
}
