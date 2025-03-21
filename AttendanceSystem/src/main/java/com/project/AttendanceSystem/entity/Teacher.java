package com.project.AttendanceSystem.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;


    @OneToOne(cascade = CascadeType.ALL , orphanRemoval = true)
    @JoinColumn(name = "user_id", unique = true, nullable = false )
    private Users user;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "teacher" , cascade = CascadeType.ALL)
    private List<Classes> classes;

    // Constructors
    public Teacher() {
    }

    public Teacher(Users user, String name) {
        this.user = user;
        this.name = name;
    }

    // Getters and Setters


    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

}
