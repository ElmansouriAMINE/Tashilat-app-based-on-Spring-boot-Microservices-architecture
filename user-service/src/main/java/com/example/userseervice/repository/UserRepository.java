package com.example.userseervice.repository;

import com.example.userseervice.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmailAndPassword(String email , String password);

    @Query(value = "SELECT COUNT(*) FROM `user` WHERE role like 'admin';",nativeQuery = true)
    Integer getAllAdmins( );
    @Query(value = "SELECT COUNT(*) FROM `user` WHERE role like 'agent';",nativeQuery = true)
    Integer getAllAgnts( );
    @Query(value = "select id , last_name from user ;",nativeQuery = true)
    List<List<?>> getLabels( );

}
