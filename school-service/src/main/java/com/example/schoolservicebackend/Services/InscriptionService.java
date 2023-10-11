package com.example.schoolservicebackend.Services;

import com.example.schoolservicebackend.Beans.AddResponse;
import com.example.schoolservicebackend.Beans.Inscription;
import com.example.schoolservicebackend.Repository.InscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
@Component
@Service
public class InscriptionService {

    @Autowired
    InscriptionRepository inscriptionRepository;



    public List<Inscription> getAllInscriptions(){
        return inscriptionRepository.findAll();
    }
    public Inscription getInscriptionByID(Long id){
        return inscriptionRepository.findById(id).get();
    }

    public Integer getFeesStatistics(String val ,String mth){
        return inscriptionRepository.getNbFeesByMonth(val,mth);
    }

    public List<Object> nbClientsByUniversity(){
        return inscriptionRepository.nbClientsByUniversity();
    }

    public Inscription addInscription(Inscription inscription){


        inscription.setId(getMaxId());
        inscriptionRepository.save(inscription);
        return inscription;

    }


    public Long getMaxId(){
        return (long) (inscriptionRepository.findAll().size() +1 );
    }
    public Inscription updateInscription(Inscription inscription){
        inscriptionRepository.save(inscription);
        return inscription;

    }
    public AddResponse deleteInscription(Long id){
        inscriptionRepository.deleteById(id);
        AddResponse res =new AddResponse();
        res.setMsg("Registration Deleted!");
        res.setId(id);
        return res;


    }


}
