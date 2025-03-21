package com.project.AttendanceSystem.dto;

import com.project.AttendanceSystem.entity.Status;

import java.time.LocalDate;

public class AttendanceRespose {

    private LocalDate date;
    private String className;
    private String teacherName;
    private Status status;

    // Constructor
    public AttendanceRespose(LocalDate date, String className, String teacherName, Status status) {
        this.date = date;
        this.className = className;
        this.teacherName = teacherName;
        this.status = status;
    }
    public AttendanceRespose() {
    }

    // Getters and Setters

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
