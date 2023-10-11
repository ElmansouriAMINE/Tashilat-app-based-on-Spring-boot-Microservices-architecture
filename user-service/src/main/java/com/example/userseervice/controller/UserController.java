package com.example.userseervice.controller;

import com.example.userseervice.beans.User;
import com.example.userseervice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/add")
    User register(@RequestBody User user){
        return userService.register(user);
    }
    @PostMapping("{idOp}/add")
    List<User> AddUser(@RequestBody User user,@PathVariable(value = "idOp") int idOp){
        return userService.addUser(idOp,user);
    }
    @DeleteMapping ("{idOp}/delete/{id}")
    List<User> AddUser(@PathVariable(value = "idOp") int idOp,@PathVariable(value = "id") int id){
       return userService.deleteUser(idOp,id);
    }
    @PutMapping ("{idOp}/update")
    List<User> update(@PathVariable(value = "idOp") int idOp,@RequestBody User user){
        return userService.updateUser(idOp,user);
    }
    @PostMapping("/login")
    Object login(@RequestBody HashMap map){
        return userService.login((String) map.get("email"),(String) map.get("password"));
    }
    @DeleteMapping("/logout/{id}")
    Object login(@PathVariable(value = "id") int id){
        return userService.logOut(id);
    }
    @GetMapping("/all/{id}")
    Object allUsers(@PathVariable(value = "id") int id){
        return userService.allUsers(id);
    }
    @GetMapping("{idOp}/upgrade/{id}")
    Object upgrade(@PathVariable(value = "idOp") int idOp,@PathVariable(value = "id") int id){
        return userService.upgrade(idOp,id);
    }
    @GetMapping("/global statistic")
    HashMap globalStatistic(){
        return userService.globalStatistic();
    }
    @GetMapping("/bar data/{type}")
    HashMap barData(@PathVariable String type){
        return userService.barData(type);
    }
    @GetMapping("/line data/{type}")
    HashMap lineData(@PathVariable String type){
        return userService.lineData(type);
    }
}
