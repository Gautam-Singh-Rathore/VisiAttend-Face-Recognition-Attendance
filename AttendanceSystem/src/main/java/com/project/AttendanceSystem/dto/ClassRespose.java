package com.project.AttendanceSystem.dto;

public class ClassRespose {
    private Long id;
    private String name;
    private String teacherName ;
    private Long teacherId;
    // Constructor

    public ClassRespose(Long id, String name, String teacherName) {
        this.id = id;
        this.name = name;
        this.teacherName = teacherName;
    }

    public ClassRespose(Long id, String name, String teacherName, Long teacherId) {
        this.id = id;
        this.name = name;
        this.teacherName = teacherName;
        this.teacherId = teacherId;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }
}
