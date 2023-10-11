package com.example.userseervice.beans;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String tele;
    private String address;
    private String cni;
    private String matricule;
    private String role;

    public User() {
    }
    public User(int id, String firstName, String lastName, String email, String password, String tele, String address, String cni, String matricule, String role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.tele = tele;
        this.address = address;
        this.cni = cni;
        this.matricule = matricule;
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public String getPassword() {
        return password;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getTele() {
        return tele;
    }

    public String getAddress() {
        return address;
    }


    public String getCni() {
        return cni;
    }

    public String getMatricule() {
        return matricule;
    }



    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTele(String tele) {
        this.tele = tele;
    }

    public void setAddress(String address) {
        this.address = address;
    }



    public void setCni(String cni) {
        this.cni = cni;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
