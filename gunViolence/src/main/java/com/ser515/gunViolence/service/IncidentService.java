package com.ser515.gunViolence.service;

import com.ser515.gunViolence.GlobalVariables;
import com.ser515.gunViolence.entities.Incident;
import com.ser515.gunViolence.helper.OwlReaderUtil;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.RDFNode;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class IncidentService {
    public Incident getIncidentById(long id) {
        return null;
    }

    public List<Incident> getIncidentsByCity(String city) {
        String query = "select ?id ?state ?location" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at <" +GlobalVariables.defaultNameSpace+city+
                "> . ?id project:took_place_at ?location . ?location project:has_state ?state. " +
                "} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(city);
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(soln.getResource("?state").getLocalName());
            res.add(a);
        }
        return res;
    }

    public List<Incident> getIncidentsByState(String state) {
        String query = "select ?id ?state ?location" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at ?location . ?location project:has_state <"
                +GlobalVariables.defaultNameSpace+state+ "> . ?location project:has_state ?state. " + "} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(soln.getResource("?location").getLocalName());
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(state);
            res.add(a);
        }
        return res;
    }
    public List<Incident> getAllIncidents() {
        String query = "select ?id ?state ?location" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at ?location . ?location project:has_state ?state. " +
                "} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(soln.getResource("?location").getLocalName());
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(soln.getResource("?state").getLocalName());
            res.add(a);
        }
        return res;
    }
    public Map<String,String> countIncidentsByState() {
        String query = "select ?state (COUNT(*) as ?count) where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at ?location . ?location project:has_state ?state. }"+
                "GROUP BY ?state ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        Map<String, String> count = new HashMap<>();
        while( response.hasNext())
        {

            QuerySolution soln = response.nextSolution();
            count.put(soln.getResource("?state").getLocalName(),soln.getLiteral("?count").getValue().toString());
        }
        return count;
    }

}
