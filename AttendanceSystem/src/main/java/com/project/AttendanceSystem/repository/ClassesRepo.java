package com.project.AttendanceSystem.repository;

import com.project.AttendanceSystem.entity.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassesRepo extends JpaRepository<Classes , Long> {

    @Query("SELECT c FROM Classes c LEFT JOIN FETCH c.students WHERE c.id = :classId")
    Optional<Classes> findByIdWithStudents(@Param("classId") Long classId);
}
