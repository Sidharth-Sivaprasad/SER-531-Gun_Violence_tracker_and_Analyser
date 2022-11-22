package com.ser515.gunViolence.controller;

import com.ser515.gunViolence.entities.Incident;
import com.ser515.gunViolence.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IncidentController {

    @Autowired
    IncidentService incidentService;
    @GetMapping("/incident")
    ResponseEntity<Incident> getIncidentById(@RequestParam("id") long id) {
        Incident incident = incidentService.getIncidentById(id);
        return ResponseEntity.ok(incident);
    }
}
