package com.example.schoolservicebackend.Repository;

import com.example.schoolservicebackend.Beans.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InscriptionRepository extends JpaRepository<Inscription,Long> {
    @Query(value="select count(*) from inscription WHERE  YEAR(payment_date) =:val and MONTH(payment_date) =:mth GROUP BY MONTH(payment_date) ",nativeQuery = true)
    Integer getNbFeesByMonth(String val,String mth);
    @Query(value="select university,count(*) from inscription GROUP BY university ",nativeQuery = true)
    List<Object> nbClientsByUniversity();

}
