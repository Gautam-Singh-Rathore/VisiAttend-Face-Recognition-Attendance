package com.project.AttendanceSystem.dto;

public class JoinClassRequest {

    private Long classId;
    private Long rollNo;

    // Constructor
    public JoinClassRequest(Long classId, Long rollNo) {
        this.classId = classId;
        this.rollNo = rollNo;
    }

    // Getters and Setters

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public Long getRollNo() {
        return rollNo;
    }

    public void setRollNo(Long rollNo) {
        this.rollNo = rollNo;
    }
}
