package com.example.userseervice.repository;

import com.example.userseervice.beans.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OperationRepository extends JpaRepository<Operation,Integer> {

    @Query(value = "select user_id , count(*) as 'totale' from operation where type LIKE :type group by user_id",nativeQuery = true)
    List<List<?>> getData(@Param("type") String type );

    @Query(value = "select user_id , SUM(montant) as 'totale' from operation where type LIKE :type group by user_id",nativeQuery = true)
    List<List<?>> getChifAff(@Param("type") String type );

    @Query(value = "select COUNT(*) as 'totale' from operation  where user_id =:id AND type LIKE :typeOf",nativeQuery = true)
    Integer getNumOp(@Param("id") int id,@Param("typeOf") String typeOf);

}
