package com.example.schoolservicebackend.Beans;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table(name="Inscription")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Inscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int year,number;
    private Date registrationDate;
    private String matricule,last_name,first_name,university;
    private double amount;
    private Date paymentDate;
}
