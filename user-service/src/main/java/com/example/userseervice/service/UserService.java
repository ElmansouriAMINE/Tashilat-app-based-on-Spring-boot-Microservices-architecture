package com.example.userseervice.service;

import com.example.userseervice.beans.ActiveUsers;
import com.example.userseervice.beans.User;
import com.example.userseervice.repository.ActiveUsersRepository;
import com.example.userseervice.repository.OperationRepository;
import com.example.userseervice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    OperationRepository operationRepository;
    @Autowired
    ActiveUsersRepository activeUsersRepository ;

    public User register(User user){
        user.setRole("agent");
        return userRepository.save(user);
    }
    public List<User> addUser(int idOp ,User user){
        User userOp = userRepository.findById(idOp).get();
        userRepository.save(user);
        List<User> users = new ArrayList<>();
        for(User u:userRepository.findAll()){
            if(u != userOp )
                users.add(u);
        }
        return users;
    }

    public List<User> deleteUser(int idOp ,int id){
        User user = userRepository.findById(id).get();
        User userOp = userRepository.findById(idOp).get();
        userRepository.delete(user);
        List<User> users = new ArrayList<>();
        for(User u:userRepository.findAll()){
            if(u != userOp )
                users.add(u);
        }
        return users;
    }
    public List<User> upgrade(int idOp,int id){
        User user = userRepository.findById(id).get();
        if(user.getRole().equals("Admin"))
            user.setRole("Agent");
        else
            user.setRole("Admin");
        userRepository.save(user);
        User userOp = userRepository.findById(idOp).get();
        List<User> users = new ArrayList<>();
        for(User u:userRepository.findAll()){
            if(u != userOp )
                users.add(u);
        }
        return users;
    }
    public List<User> updateUser(int idOp,User user){
        userRepository.save(user);
        User userOp = userRepository.findById(idOp).get();
        List<User> users = new ArrayList<>();
        for(User u:userRepository.findAll()){
            if(u != userOp )
                users.add(u);
        }
        return users;
    }
    public List<User> allUsers(int id){
        List<User> users = new ArrayList<>();
        User user = userRepository.findById(id).get();
        for(User u:userRepository.findAll()){
            if(u != user )
                users.add(u);
        }
        return users;
    }
    public Object login(String email,String password){
        if(userRepository.findByEmailAndPassword(email,password) != null){
            ActiveUsers activeUsers = new ActiveUsers();
            activeUsers.setUser(userRepository.findByEmailAndPassword(email,password));
            activeUsersRepository.save(activeUsers);
            return userRepository.findByEmailAndPassword(email,password);
        }else {
            return false;
        }
    }
    public Boolean logOut(int id){
       try{
            ActiveUsers activeUsers = activeUsersRepository.findByUserId(id);
            activeUsersRepository.delete(activeUsers);
            return true;
        }catch(Exception e) {
            return false;
        }
    }
    public HashMap globalStatistic(){
        HashMap map = new HashMap();
        map.put("admin",userRepository.getAllAdmins());
        map.put("agent",userRepository.getAllAgnts());
        map.put("active",activeUsersRepository.getAllActive());
        return map;

    }
    public HashMap barData(String type){
        HashMap map = new HashMap();
        List<List<?>> labels = userRepository.getLabels();
        List<List<?>> data = operationRepository.getData(type);
        List resLabeels = new  ArrayList<>();
        List resData = new  ArrayList<>();
        for(int i =0;i<data.size();i++){
            for (int j=0;j<labels.size();j++){
                if(labels.get(j).get(0) == data.get(i).get(0)){
                    resLabeels.add(labels.get(j).get(1));
                    resData.add(data.get(j).get(1));
                }
            }
        }
        map.put("data",resData);
        map.put("labels",resLabeels);
        return map;

    }
    public HashMap lineData(String type){
        HashMap map = new HashMap();
        List<List<?>> labels = userRepository.getLabels();
        List<List<?>> data = operationRepository.getChifAff(type);
        List resLabeels = new  ArrayList<>();
        List resData = new  ArrayList<>();
        for(int i =0;i<data.size();i++){
            for (int j=0;j<labels.size();j++){
                if(labels.get(j).get(0) == data.get(i).get(0)){
                    resLabeels.add(labels.get(j).get(1));
                    resData.add(data.get(j).get(1));
                }
            }
        }
        map.put("data",resData);
        map.put("labels",resLabeels);
        return map;

    }
}
