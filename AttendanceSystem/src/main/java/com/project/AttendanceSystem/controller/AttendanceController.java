package com.project.AttendanceSystem.controller;

import com.project.AttendanceSystem.dto.AttendanceRequest;
import com.project.AttendanceSystem.dto.AttendanceRespose;
import com.project.AttendanceSystem.entity.Attendance;
import com.project.AttendanceSystem.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/mark")
    public ResponseEntity<?> markAttendance(@RequestBody AttendanceRequest request){
        try {
            attendanceService.markAttendance(request);
            return ResponseEntity.status(HttpStatus.OK).body("Attendance marked successfully...");
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Process failed...");
        }

    }

    @GetMapping("/get/{rollNo}")
    public ResponseEntity<?> getAttendance(@PathVariable("rollNo") Long rollNo){
        try {
            List<AttendanceRespose> data = attendanceService.getAttendanceByRollNo(rollNo);
            return ResponseEntity.status(HttpStatus.OK).body(data);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Attendance not found..");
        }
    }


}
