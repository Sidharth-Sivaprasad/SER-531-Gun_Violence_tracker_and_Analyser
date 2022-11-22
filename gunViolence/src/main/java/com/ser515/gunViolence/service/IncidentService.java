package com.ser515.gunViolence.service;

import com.ser515.gunViolence.entities.Incident;
import org.springframework.stereotype.Service;

@Service
public class IncidentService {
    public Incident getIncidentById(long id) {
        Incident  i = new Incident(1,"Tempe");
        return i;
    }
}
