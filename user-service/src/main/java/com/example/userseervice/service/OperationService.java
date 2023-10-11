package com.example.userseervice.service;

import com.example.userseervice.beans.Operation;
import com.example.userseervice.beans.User;
import com.example.userseervice.repository.OperationRepository;
import com.example.userseervice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperationService {
    @Autowired
    UserRepository userRepository ;
    @Autowired
    OperationRepository operationRepository;

    public boolean addOpration(int idUser, Operation operation){
        User user = userRepository.findById(idUser).get();
        operation.setUser(user);
        try{
            operationRepository.save(operation);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
