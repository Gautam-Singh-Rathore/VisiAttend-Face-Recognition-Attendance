//package com.project.AttendanceSystem.service;
//
//import com.project.AttendanceSystem.dto.AttendanceRequest;
//import com.project.AttendanceSystem.entity.Attendance;
//import com.project.AttendanceSystem.entity.Classes;
//import com.project.AttendanceSystem.entity.Status;
//import com.project.AttendanceSystem.entity.Student;
//import com.project.AttendanceSystem.repository.AttendanceRepo;
//import com.project.AttendanceSystem.repository.ClassesRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class AttendanceService {
//    @Autowired
//    private AttendanceRepo attendanceRepo;
//
//    @Autowired
//    private ClassesRepo classesRepo;
//
//    public void markAttendance(AttendanceRequest request){
//        List<Long> present = request.getPresent();
//        Long classId = request.getClassId();
//        // Fetch the class
//        Classes classes = classesRepo.findById(classId)
//                .orElseThrow(()->  new RuntimeException("Class not found"));
//        // Get all students in that class
//        List<Student> students = classes.getStudents();
//        for(Student std : students){
//            boolean isPresent = present.contains(std.getRollNo());
//            Attendance attendance = new Attendance();
//            attendance.setStudent(std);
//            attendance.setClasses(classes);
//            attendance.setDate(request.getDate());
//            if(isPresent){
//                attendance.setStatus(Status.PRESENT);
//            }else {
//                attendance.setStatus(Status.ABSENT);
//            }
//
//            attendanceRepo.save(attendance);
//        }
//    }
//
//}
//

package com.project.AttendanceSystem.service;

import com.project.AttendanceSystem.dto.AttendanceRequest;
import com.project.AttendanceSystem.dto.AttendanceRespose;
import com.project.AttendanceSystem.entity.Attendance;
import com.project.AttendanceSystem.entity.Classes;
import com.project.AttendanceSystem.entity.Status;
import com.project.AttendanceSystem.entity.Student;
import com.project.AttendanceSystem.repository.AttendanceRepo;
import com.project.AttendanceSystem.repository.ClassesRepo;
import com.project.AttendanceSystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepo attendanceRepo;

    @Autowired
    private ClassesRepo classesRepo;

    @Autowired
    private StudentRepo studentRepo;

    public void markAttendance(AttendanceRequest request) {
        List<Long> present = request.getPresent();
        Long classId = request.getClassId();

        // Fetch the class with students
        Classes classes = classesRepo.findByIdWithStudents(classId)
                .orElseThrow(() -> new RuntimeException("Class not found with ID: " + classId));

        // Get all students in the class
        List<Student> students = classes.getStudents();
        if (students.isEmpty()) {
            throw new RuntimeException("No students found for class ID: " + classId);
        }

        for (Student std : students) {
            if (std.getRollNo() == null) {
                throw new RuntimeException("Student ID is null for: " + std.getRollNo());
            }

            boolean isPresent = present.contains(std.getRollNo());
            Attendance attendance = new Attendance();
            attendance.setStudent(std);
            attendance.setClasses(classes);
            attendance.setDate(request.getDate());
            attendance.setStatus(isPresent ? Status.PRESENT : Status.ABSENT);

            // Log before saving
            System.out.println("Saving Attendance -> Student ID: " + std.getRollNo() + ", Class ID: " + classes.getId());

            attendanceRepo.save(attendance);
        }
    }

    public List<AttendanceRespose> getAttendanceByRollNo(Long rollNo){
        if(rollNo==null){
            throw new IllegalArgumentException("Null value not accepted");
        }
        Student student = studentRepo.findById(rollNo)
                .orElseThrow(()-> new RuntimeException("Student Not Found"));

        List<Attendance> list = attendanceRepo.findAllByStudent(student)
                .orElseThrow(()-> new RuntimeException("Attendance not found"));

        List<AttendanceRespose> ans = new ArrayList<>();
        for(Attendance temp : list){
            ans.add(new AttendanceRespose(temp.getDate() , temp.getClasses().getName() , temp.getClasses().getTeacher().getName() , temp.getStatus()));
        }
        return ans;
    }

    public List<AttendanceRespose> getAttendanceByClassId(Long id){
        Classes classes = classesRepo.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("No class found"));
        List<Attendance> attendances = attendanceRepo.findByClasses(classes)
                .orElseThrow(()-> new RuntimeException("No attendance found"));
        List<AttendanceRespose> resposes = new ArrayList<>();
        for (Attendance a:attendances){
            resposes.add(new AttendanceRespose(a.getDate(), classes.getName(), a.getStudent().getName() , a.getStatus()));
        }

        return resposes;
    }
}

