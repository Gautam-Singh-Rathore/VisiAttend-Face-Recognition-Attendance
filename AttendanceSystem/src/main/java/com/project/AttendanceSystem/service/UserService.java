package com.project.AttendanceSystem.service;

import com.project.AttendanceSystem.dto.LoginRequest;
import com.project.AttendanceSystem.dto.LoginResponse;
import com.project.AttendanceSystem.dto.UserDTO;
import com.project.AttendanceSystem.entity.Role;
import com.project.AttendanceSystem.entity.Student;
import com.project.AttendanceSystem.entity.Teacher;
import com.project.AttendanceSystem.entity.Users;
import com.project.AttendanceSystem.repository.StudentRepo;
import com.project.AttendanceSystem.repository.TeacherRepo;
import com.project.AttendanceSystem.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private TeacherRepo teacherRepo;

    public Users createUser(UserDTO userDTO){
        if(userDTO==null){
            throw new IllegalArgumentException("Null value not accepted");
        }
        Users newUser = new Users(userDTO.getEmail() , userDTO.getPassword() , userDTO.getRole());
        Users savedUser;
        try {
            savedUser= userRepo.save(newUser);
        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("User Could not be created : "+e.getMessage());
        }

        try {
            if(userDTO.getRole() == Role.STUDENT){
                Student newStudent = new Student(savedUser , userDTO.getName());
                studentRepo.save(newStudent);
            }else if(userDTO.getRole() == Role.TEACHER){
                Teacher newTeacher = new Teacher(savedUser , userDTO.getName());
                teacherRepo.save(newTeacher);
            }else {
                throw new IllegalArgumentException("Invalid role :"+userDTO.getRole());
            }

        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("Error occurred while creating associated user entity: "+e.getMessage());
        }

        return savedUser;

    }

    public LoginResponse login(LoginRequest request){
        if(request==null){
            throw new IllegalArgumentException("Invalid arguments");
        }
        Users users = userRepo.findByEmail(request.getEmail()).orElseThrow(()->new RuntimeException("User Not Found"));
        if(users.getRole()==Role.STUDENT){
            Student student = studentRepo.findByUser(users).orElseThrow(()->new RuntimeException("Student Not Found"));
            return new LoginResponse(student.getName() , users.getEmail() ,student.getRollNo() , users.getRole());
        }
        Teacher teacher = teacherRepo.findByUser(users).orElseThrow(()-> new RuntimeException("Teacher Not Found"));
        return new LoginResponse(teacher.getName() , users.getEmail(), teacher.getEmployeeId() , users.getRole());
    }
}
