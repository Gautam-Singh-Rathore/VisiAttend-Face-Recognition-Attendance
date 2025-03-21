package com.project.AttendanceSystem.controller;

import com.project.AttendanceSystem.dto.LoginRequest;
import com.project.AttendanceSystem.dto.LoginResponse;
import com.project.AttendanceSystem.dto.UserDTO;
import com.project.AttendanceSystem.entity.Users;
import com.project.AttendanceSystem.service.UserService;
import jakarta.persistence.PostRemove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO user){
        Users createdUser;
        try {
             createdUser = userService.createUser(user);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User could not be created. Please check the input data.");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        LoginResponse loggedUser;
        try {
            loggedUser = userService.login(request);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Credentials");
        }
        return ResponseEntity.status(HttpStatus.OK).body(loggedUser);
    }
}
