package com.ser515.gunViolence.service;

import com.ser515.gunViolence.GlobalVariables;
import com.ser515.gunViolence.entities.Incident;
import com.ser515.gunViolence.helper.OwlReaderUtil;
import org.apache.jena.query.ResultSet;
import org.springframework.stereotype.Service;


@Service
public class IncidentService {
    public Incident getIncidentById(long id) {
        Incident  i = new Incident(1,"Tempe");
        return i;
    }

    public Incident getIncidentCountByCity(String city) {
        String query = "select ?id where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:took_place_at <"
                + GlobalVariables.defaultNameSpace + city + "> .} ";
        ResultSet res  = OwlReaderUtil.execSparqlQuery(query);
        return null;
    }
}
