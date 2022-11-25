package com.ser515.gunViolence.controller;

import com.ser515.gunViolence.entities.Incident;
import com.ser515.gunViolence.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class IncidentController {

    @Autowired
    IncidentService incidentService;
    @GetMapping("/incident")
    ResponseEntity<Incident> getIncidentById(@RequestParam("id") long id) {
        Incident incident = incidentService.getIncidentById(id);
        return ResponseEntity.ok(incident);
    }
    @GetMapping("/incidentsByCity")
    ResponseEntity<?> getIncidentsByCity(@RequestParam("city") String city) {
        List<Incident> incidents = incidentService.getIncidentsByCity(city);
        return ResponseEntity.ok(incidents);
    }
    @GetMapping("/incidentsByState")
    ResponseEntity<?> getIncidentsByState(@RequestParam("state") String state) {
        List<Incident> incidents = incidentService.getIncidentsByState(state);
        return ResponseEntity.ok(incidents);
    }
    @GetMapping("/allIncidents")
    ResponseEntity<?> getAllIncidents() {
        List<Incident> incidents = incidentService.getAllIncidents();
        return  ResponseEntity.ok(incidents);
    }

    @GetMapping("/countIncidentsByState")
    ResponseEntity<?> countIncidentsByState() {
        Map<String, String> count= incidentService.countIncidentsByState();
        return  ResponseEntity.ok(count);
    }
}
