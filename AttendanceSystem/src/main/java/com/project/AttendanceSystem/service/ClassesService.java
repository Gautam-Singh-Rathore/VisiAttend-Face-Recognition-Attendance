package com.project.AttendanceSystem.service;

import com.project.AttendanceSystem.dto.ClassRequest;
import com.project.AttendanceSystem.dto.ClassRespose;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.entity.Teacher;
import com.project.AttendanceSystem.repository.ClassesRepo;
import com.project.AttendanceSystem.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClassesService {

    @Autowired
    private ClassesRepo classesRepo;

    @Autowired
    private TeacherRepo teacherRepo;

    public List<ClassRespose> findAll(){
       var list =  classesRepo.findAll();
       List<ClassRespose> respose = new ArrayList<>();
       for(Classes one : list){
           respose.add(new ClassRespose(one.getId(), one.getName(), one.getTeacher().getName() , one.getTeacher().getEmployeeId()));
       }
       return respose;

    }

    public Classes createClass(ClassRequest classRequest){
        if(classRequest==null){
            throw new IllegalArgumentException("Null value not accepted");
        }
        Teacher teacher = teacherRepo.findById(classRequest.getTeacherId())
                .orElseThrow(()->new RuntimeException("Teacher not found"));

        Classes newClass = new Classes();
        newClass.setName(classRequest.getName());
        newClass.setTeacher(teacher);

        Classes savedClass;
        try {
            savedClass = classesRepo.save(newClass);
        }catch (DataIntegrityViolationException e){
            throw new RuntimeException("User Could not be created : "+e.getMessage());
        }
        return savedClass;
    }
}
