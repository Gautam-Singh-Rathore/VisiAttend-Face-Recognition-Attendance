package com.project.AttendanceSystem.repository;

import com.project.AttendanceSystem.entity.Student;
import com.project.AttendanceSystem.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<Student , Long> {

    public Optional<Student> findByUser(Users users);
}
