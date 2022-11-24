package com.ser515.gunViolence.service;

import com.ser515.gunViolence.GlobalVariables;
import com.ser515.gunViolence.entities.Incident;
import com.ser515.gunViolence.helper.OwlReaderUtil;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.RDFNode;
import org.springframework.stereotype.Service;


@Service
public class IncidentService {
    public Incident getIncidentById(long id) {
        Incident  i = new Incident(1,"Tempe");
        return i;
    }

    public Incident getIncidentsByCity(String city) {
        String query = "select ?id ?location where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at <"
                + GlobalVariables.defaultNameSpace + city + "> . ?id project:took_place_at ?location} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        while( response.hasNext())
        {
            QuerySolution soln = response.nextSolution();
            RDFNode id = soln.get("?id");
            System.out.println(id.toString()+" "+soln.get("?location").toString());
        }
        return null;
    }

    public Incident getAllIncidents() {
        String query = "select ?id ?location where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at ?location} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        while( response.hasNext())
        {
            QuerySolution soln = response.nextSolution();
            RDFNode id = soln.get("?id");
            System.out.println(id.toString().substring(88)+" "+soln.get("?location").toString().substring(88));
        }
        return null;
    }
}
