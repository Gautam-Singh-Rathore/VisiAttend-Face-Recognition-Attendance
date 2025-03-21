package com.project.AttendanceSystem.dto;

import java.time.LocalDate;
import java.util.List;

public class AttendanceRequest {
    private List<Long> present;
    private Long ClassId;
    private LocalDate date;

    // Constructor
    public AttendanceRequest() {
    }

    public AttendanceRequest(List<Long> present, Long classId, LocalDate date) {
        this.present = present;
        ClassId = classId;
        this.date = date;
    }

    // Getters and Setters

    public List<Long> getPresent() {
        return present;
    }

    public void setPresent(List<Long> present) {
        this.present = present;
    }

    public Long getClassId() {
        return ClassId;
    }

    public void setClassId(Long classId) {
        ClassId = classId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
