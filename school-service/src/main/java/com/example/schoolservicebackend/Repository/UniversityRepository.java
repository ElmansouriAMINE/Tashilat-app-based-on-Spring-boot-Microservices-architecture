package com.example.schoolservicebackend.Repository;

import com.example.schoolservicebackend.Beans.Inscription;
import com.example.schoolservicebackend.Beans.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UniversityRepository extends JpaRepository<University,Long> {
    @Query(value="select name,count(*) from university GROUP BY MONTH(name) ",nativeQuery = true)
    Object getNbFeesByMonth(String val);
}
