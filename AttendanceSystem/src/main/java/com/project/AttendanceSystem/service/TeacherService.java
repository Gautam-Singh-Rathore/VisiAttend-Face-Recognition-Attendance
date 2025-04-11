package com.project.AttendanceSystem.service;

import com.project.AttendanceSystem.dto.ClassRespose;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.entity.Teacher;
import com.project.AttendanceSystem.repository.ClassesRepo;
import com.project.AttendanceSystem.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private ClassesRepo classesRepo;

    public List<ClassRespose> findMyClasses(Long id){
        Teacher teacher = teacherRepo.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("No teacher found"));
        List<Classes> classes = classesRepo.findAllByTeacher(teacher)
                 .orElseThrow(()-> new RuntimeException("No classes found"));
        List<ClassRespose> resposes = new ArrayList<>();
        for(Classes c : classes ){
            resposes.add(new ClassRespose(c.getId() , c.getName() , teacher.getName() , id ));
        }
        return resposes;
    }
}
