package com.project.AttendanceSystem.repository;

import com.project.AttendanceSystem.entity.Student;
import com.project.AttendanceSystem.entity.Teacher;
import com.project.AttendanceSystem.entity.Users;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher , Long> {

    public Optional<Teacher> findByUser(Users users);
}
