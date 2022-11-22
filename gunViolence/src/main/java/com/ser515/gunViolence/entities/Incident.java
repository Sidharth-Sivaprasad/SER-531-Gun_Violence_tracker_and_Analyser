package com.ser515.gunViolence.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
public class Incident {

    @Id
    long id;

    String city;

}
