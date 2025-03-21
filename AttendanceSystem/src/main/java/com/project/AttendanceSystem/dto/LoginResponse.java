package com.project.AttendanceSystem.dto;

import com.project.AttendanceSystem.entity.Role;

public class LoginResponse {

    private String name;
    private String email;
    private Long uid;
    private Role role;

    // Constructors
    public LoginResponse() {
    }
    public LoginResponse(String name, String email, Long uid , Role role) {
        this.name = name;
        this.email = email;
        this.uid = uid;
        this.role = role;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }



    // Getters and Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }
}
