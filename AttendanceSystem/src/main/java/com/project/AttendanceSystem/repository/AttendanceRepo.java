package com.project.AttendanceSystem.repository;

import com.project.AttendanceSystem.dto.AttendanceRespose;
import com.project.AttendanceSystem.entity.Attendance;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AttendanceRepo extends JpaRepository<Attendance , Long> {

    Optional<List<Attendance>> findAllByStudent(Student student);

    Optional<List<Attendance>> findByClasses(Classes classes);
}
