package com.example.schoolservicebackend.Services;

import com.example.schoolservicebackend.Beans.AddResponse;
import com.example.schoolservicebackend.Beans.University;
import com.example.schoolservicebackend.Repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class UniversityService {
    //debut

    @Autowired
    UniversityRepository universityRepository;



    public List<University> getAllUniversities(){
        return universityRepository.findAll();
    }
    public University getUniversityByID(Long id){
        return universityRepository.findById(id).get();
    }

//    public int[] getFeesStatistics(){
//        return universityRepository.getNbFeesByMonth();
//    }

    public University addUniversity(University university){


        university.setId(getMaxId());
        universityRepository.save(university);
        return university;

    }


    public Long getMaxId(){
        return (long) (universityRepository.findAll().size() +1 );
    }
    public University updateUniversity(University university){
        universityRepository.save(university);
        return university;

    }
    public AddResponse deleteUniversity(Long id){
        universityRepository.deleteById(id);
        AddResponse res =new AddResponse();
        res.setMsg("University Deleted!");
        res.setId(id);
        return res;



    }
    
    
    //fin
}
