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
    ResponseEntity<?> getIncidentByYear(@RequestParam("year") String year) {
        List<Incident> incidents = incidentService.getIncidentsByYear(year);
        return ResponseEntity.ok(incidents);
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

    @GetMapping("/victimGenderStats")
    ResponseEntity<?> getVictimGenderStats(@RequestParam("year") String year) {
        Map<String, Double> count= incidentService.getVictimGenderStats(year);
        return  ResponseEntity.ok(count);
    }

    @GetMapping("/suspectGenderStats")
    ResponseEntity<?> getSuspectGenderStats(@RequestParam("year") String year) {
        Map<String, Double> count= incidentService.getSuspectGenderStats(year);
        return  ResponseEntity.ok(count);
    }

    @GetMapping("/victimAgeStats")
    ResponseEntity<?> getVictimAgeStats(@RequestParam("year") String year) {
        Map<String, Double> count= incidentService.getVictimAgeStats(year);
        return  ResponseEntity.ok(count);
    }

    @GetMapping("/suspectAgeStats")
    ResponseEntity<?> getSuspectAgeStats(@RequestParam("year") String year) {
        Map<String, Double> count= incidentService.getSuspectAgeStats(year);
        return  ResponseEntity.ok(count);
    }
}
