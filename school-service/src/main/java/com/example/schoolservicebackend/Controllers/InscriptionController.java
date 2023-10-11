package com.example.schoolservicebackend.Controllers;


import com.example.schoolservicebackend.Beans.AddResponse;
import com.example.schoolservicebackend.Beans.Inscription;
import com.example.schoolservicebackend.Repository.InscriptionRepository;
import com.example.schoolservicebackend.Services.InscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class InscriptionController {

    @Autowired
    InscriptionService inscriptionService;
    @Autowired
    InscriptionRepository inscriptionRepository;


    @GetMapping("/inscriptions")
    public List<Inscription> getInscriptions(){


            return inscriptionService.getAllInscriptions();


    }

    @GetMapping("/schoolfees-statistics/{val}")
    public  ArrayList<Integer> getChartStatistics(@PathVariable(value="val") String val){

            ArrayList<Integer> data = new ArrayList<>();
            for (int i =1;i<13;i++){
                Integer value = inscriptionService.getFeesStatistics(val, String.valueOf(i));
                if (value==null){
                    data.add(0);
                }
                else {
                    data.add(value);
                }
            }

            return data;
}







    @GetMapping("/schoolfees-statistics/nbuniversities")
    public List<Object> getChartNbClientsByUniversity(){


        return inscriptionService.nbClientsByUniversity();


    }
    @GetMapping("/inscription/{id}")
    public ResponseEntity<Inscription> getCloursById(@PathVariable(value="id") Long id )
    {
        try{
            Inscription inscription= inscriptionService.getInscriptionByID(id);
            return new ResponseEntity<Inscription>(inscription, HttpStatus.OK);

        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//    @GetMapping("/inscription/code")
//    public ResponseEntity<Inscription> getInscriptionByCode(@RequestParam(value="code") String code)
//    {
//        try{
//            Inscription inscription= inscriptionService.getInscriptionByCode(code);
//            return new ResponseEntity<Inscription>(inscription, HttpStatus.OK);
//
//        }
//        catch(Exception e)
//        {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//
//    }

    @PostMapping("/addinscription")
    public Inscription addInscription(@RequestBody Inscription inscription)
    {
        return inscriptionService.addInscription(inscription);
    }

    @PutMapping("/updateinscription/{id}")
    public ResponseEntity<Inscription> updateInscription(@PathVariable(value="id") Long id,@RequestBody Inscription inscription)
    {
        try{
            Inscription existInscription = inscriptionService.getInscriptionByID(id);
            existInscription.setYear(inscription.getYear());
            existInscription.setNumber(inscription.getNumber());
            existInscription.setLast_name(inscription.getLast_name());
            existInscription.setFirst_name(inscription.getFirst_name());
            existInscription.setUniversity(inscription.getUniversity());
            existInscription.setAmount(inscription.getAmount());
            existInscription.setPaymentDate(inscription.getPaymentDate());
            existInscription.setRegistrationDate(inscription.getRegistrationDate());
            existInscription.setMatricule(inscription.getMatricule());
            Inscription updated_class = inscriptionService.updateInscription(existInscription);
            return new ResponseEntity<Inscription>(updated_class,HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        }

    }

    @DeleteMapping("/deleteinscription/{id}")
    public AddResponse deleteInscription(@PathVariable(value="id") Long id)

    {

        return inscriptionService.deleteInscription(id);
    }

//    @DeleteMapping("/deleteinscription/{id}")
//    public ResponseEntity<String,Boolean> deleteInscription(@PathVariable(value="id") Long id)
//
//    {  Inscription inscription= inscriptionRepository.findById(id)
//            .orElse(() -> new ResourceNotFoundException("Registration not exist with id : " +id));
//            inscriptionRepository.delete(inscription);
//     Map<String,Boolean> response = new HashMap<>();
//     response.put("Deleted",Boolean.TRUE);
//return ResponseEntity.ok(response);


}
