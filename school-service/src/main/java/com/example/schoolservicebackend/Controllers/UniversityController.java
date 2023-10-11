package com.example.schoolservicebackend.Controllers;

import com.example.schoolservicebackend.Beans.AddResponse;
import com.example.schoolservicebackend.Beans.University;
import com.example.schoolservicebackend.Beans.University;
import com.example.schoolservicebackend.Services.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UniversityController {

    @Autowired
    UniversityService universityService;
    @Autowired
    UniversityService inscriptionRepository;


    @GetMapping("/universities")
    public List<University> getUniversities(){


        return universityService.getAllUniversities();


    }

//    @GetMapping("/schoolfees-statistics")
//    public int[] getChartStatistics(){
//
//
//        return universityService.getFeesStatistics();
//
//
//    }
    @GetMapping("/university/{id}")
    public ResponseEntity<University> getUniversityById(@PathVariable(value="id") Long id )
    {
        try{
            University university= universityService.getUniversityByID(id);
            return new ResponseEntity<University>(university, HttpStatus.OK);

        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//    @GetMapping("/university/code")
//    public ResponseEntity<University> getInscriptionByCode(@RequestParam(value="code") String code)
//    {
//        try{
//            University university= universityService.getInscriptionByCode(code);
//            return new ResponseEntity<University>(university, HttpStatus.OK);
//
//        }
//        catch(Exception e)
//        {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//
//    }

    @PostMapping("/adduniversity")
    public University addUniversity(@RequestBody University university)
    {
        return universityService.addUniversity(university);
    }

    @PutMapping("/updateuniversity/{id}")
    public ResponseEntity<University> updateUniversity(@PathVariable(value="id") Long id,@RequestBody University university)
    {
        try{
            University existUniversity = universityService.getUniversityByID(id);
            existUniversity.setCode(university.getCode());
            existUniversity.setName(university.getName());
            existUniversity.setAddress(university.getAddress());

            University updated_class = universityService.updateUniversity(existUniversity);
            return new ResponseEntity<University>(updated_class,HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        }

    }

    @DeleteMapping("/deleteuniversity/{id}")
    public AddResponse deleteUniversity(@PathVariable(value="id") Long id)

    {

        return universityService.deleteUniversity(id);
    }

//    @DeleteMapping("/deleteinscription/{id}")
//    public ResponseEntity<String,Boolean> deleteInscription(@PathVariable(value="id") Long id)
//
//    {  University university= inscriptionRepository.findById(id)
//            .orElse(() -> new ResourceNotFoundException("Registration not exist with id : " +id));
//            inscriptionRepository.delete(university);
//     Map<String,Boolean> response = new HashMap<>();
//     response.put("Deleted",Boolean.TRUE);
//return ResponseEntity.ok(response);


}

