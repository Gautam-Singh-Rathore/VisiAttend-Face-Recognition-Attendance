package com.project.AttendanceSystem.repository;

import com.project.AttendanceSystem.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<Users , Long> {

    public Optional<Users> findByEmail(String email);
}
