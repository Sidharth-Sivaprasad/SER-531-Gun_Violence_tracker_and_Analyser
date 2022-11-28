package com.ser515.gunViolence.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Incident {

    @Id
    String id;

    String city;

    String state;

    String address;

    String date;

    Integer numberOfGuns;

    Integer victim_count;

    Integer suspect_count;

    Integer female_victim_count;

    Integer male_victim_count;

    Integer female_suspect_count;

    Integer male_suspect_count;

    Integer child_victim_count;

    Integer teen_victim_count;

    Integer adult_victim_count;

    Integer adult_suspect_count;

    Integer child_suspect_count;

    Integer teen_suspect_count;

    Integer injured;

    Integer killed;
}
