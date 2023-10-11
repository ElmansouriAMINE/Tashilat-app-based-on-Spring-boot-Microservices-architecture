package com.example.userseervice.repository;

import com.example.userseervice.beans.ActiveUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ActiveUsersRepository extends JpaRepository<ActiveUsers,Integer> {
    public ActiveUsers findByUserId(int id);
    @Query(value = "SELECT COUNT(*) FROM `active_users` ;",nativeQuery = true)
    Integer getAllActive( );
}
