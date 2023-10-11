package com.example.userseervice.controller;

import com.example.userseervice.beans.Operation;
import com.example.userseervice.repository.OperationRepository;
import com.example.userseervice.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/operation")
@RestController
@CrossOrigin
public class OperationController {
    @Autowired
    OperationService operationService;
    @Autowired
    OperationRepository operationRepository;

    @PostMapping("/add/{idUser}")
    public Boolean addOperation(@RequestBody Operation operation,@PathVariable(value = "idUser") int idUser){
        return operationService.addOpration(idUser,operation);
    }
    @GetMapping("/{type}/{id}")
    public Integer getNumOp(@PathVariable(value = "type") String type,@PathVariable(value = "id") int id){
        return operationRepository.getNumOp(id,type);
    }

}
