package com.project.AttendanceSystem.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rollNo;


    @OneToOne(cascade = CascadeType.ALL , orphanRemoval = true)
    @JoinColumn(name = "user_id" , unique = true , nullable = false)
    private Users user;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "students")
    private List<Classes> classes;

    @OneToMany(mappedBy = "student" , cascade = CascadeType.ALL)
    private List<Attendance> attendanceList;

    // Constructors
    public Student() {
    }

    public Student(Users user, String name) {
        this.user = user;
        this.name = name;

    }

    // Getters and Setters

    public Long getRollNo() {
        return rollNo;
    }

    public void setRollNo(Long rollNo) {
        this.rollNo = rollNo;
    }

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

    public List<Classes> getClasses() {
        return classes;
    }

    public void setClasses(List<Classes> classes) {
        this.classes = classes;
    }
}
