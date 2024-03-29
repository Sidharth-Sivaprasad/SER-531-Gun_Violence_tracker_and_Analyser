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

    public List<Incident> getIncidentsByCity(String city, String year) {
        String query = "select ?id ?state ?city ?address ?injured ?killed ?date ?guns" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_city <" +GlobalVariables.defaultNameSpace+city+
                "> . ?id project:has_city ?city . ?id project:has_state ?state. " +
                "?id project:address ?address . ?id project:number_injured ?injured. " +
                "?id project:number_killed ?killed. OPTIONAL {?id project:has_gun_number ?guns .}" +
                "?id project:has_date ?date. FILTER(STRENDS(str(?date),\""+year+"\"))} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(city);
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(soln.getResource("?state").getLocalName());
            a.setAddress(soln.getLiteral("?address").getValue().toString());
            a.setDate(soln.getLiteral("?date").getValue().toString());
            a.setInjured((int)(soln.getLiteral("?injured").getValue()));
            a.setKilled((int)(soln.getLiteral("?killed").getValue()));
            if(soln.getLiteral("?guns") == null){
                a.setNumberOfGuns(0);
            }else {
                a.setNumberOfGuns((int) (soln.getLiteral("?guns").getValue()));
            }
            res.add(a);
        }
        return res;
    }

    public List<Incident> getIncidentsByState(String state, String year) {
        String query = "select ?id ?state ?city ?address ?injured ?killed ?date ?guns" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_city ?city  . ?id project:has_state <"
                +GlobalVariables.defaultNameSpace+state+ "> . ?id project:has_state ?state. "
                +"?id project:address ?address . ?id project:number_injured ?injured. " +
                "?id project:number_killed ?killed. OPTIONAL {?id project:has_gun_number ?guns .}"+
                "?id project:has_date ?date. FILTER(STRENDS(str(?date),\""+year+"\"))} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(soln.getResource("?city").getLocalName());
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(state);
            a.setAddress(soln.getLiteral("?address").getValue().toString());
            a.setDate(soln.getLiteral("?date").getValue().toString());
            a.setInjured((int)(soln.getLiteral("?injured").getValue()));
            a.setKilled((int)(soln.getLiteral("?killed").getValue()));
            if(soln.getLiteral("?guns") == null){
                a.setNumberOfGuns(0);
            }else {
                a.setNumberOfGuns((int) (soln.getLiteral("?guns").getValue()));
            }
            res.add(a);
        }
        return res;
    }

    public Map<String,String> countIncidentsByState(String year) {
        String query = "select ?state (COUNT(*) as ?count) where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_state ?state." +
                "?id project:has_date ?date. FILTER(STRENDS(str(?date),\""+year+"\"))}"+
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
    public List<Incident> getIncidentsByYear(String year) {
        int count =0;
        String query = "select DISTINCT ?id ?state ?city ?address ?injured ?killed ?date ?guns" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_city ?city . ?id project:has_state ?state. " +
                "?id project:address ?address . ?id project:number_injured ?injured. " +
                "?id project:number_killed ?killed. ?id project:has_date ?date. " +
                "OPTIONAL {?id project:has_gun_number ?guns .} FILTER(STRENDS(str(?date),\""+year+"\")) } ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<Incident> res= new ArrayList<>();
        while( response.hasNext())
        {
            Incident a = new Incident();
            QuerySolution soln = response.nextSolution();
            a.setCity(soln.getResource("?city").getLocalName());
            a.setId(soln.get("?id").toString().substring(88));
            a.setState(soln.getResource("?state").getLocalName());
            a.setAddress(soln.getLiteral("?address").getValue().toString());
            a.setDate(soln.getLiteral("?date").getValue().toString());
            a.setInjured((int)(soln.getLiteral("?injured").getValue()));
            a.setKilled((int)(soln.getLiteral("?killed").getValue()));
            if(soln.getLiteral("?guns") == null){
                a.setNumberOfGuns(0);
            }else {
                a.setNumberOfGuns((int) (soln.getLiteral("?guns").getValue()));
            }
            res.add(a);
        }
        System.out.println(res.size());
        return res;
    }


    public Map<String, Double> getVictimGenderStats(String year) {
        String query = "select (SUM(?females) as ?femaleCount) (SUM(?males) as ?maleCount)" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_victim ?victim . ?victim project:number_of_males ?males . " +
                "?victim project:number_of_females ?females . ?id project:has_date ?date. " +
                "FILTER(STRENDS(str(?date),\""+year+"\")) } ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        QuerySolution soln = response.nextSolution();
        double males = (int)(soln.getLiteral("?maleCount").getValue());
        double females = (int)(soln.getLiteral("?femaleCount").getValue());
        double maleAvg = ((males)/(males+females))*100;
        double femaleAvg = ((females)/(males+females))*100;
        Map<String,Double> res = new HashMap<>();
        res.put("males",maleAvg);
        res.put("females",femaleAvg);
        return res;
    }

    public Map<String, Double> getSuspectGenderStats(String year) {
        String query = "select (SUM(?females) as ?femaleCount) (SUM(?males) as ?maleCount)" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_suspect ?suspect . ?suspect project:number_of_males ?males . " +
                "?suspect project:number_of_females ?females . ?id project:has_date ?date. " +
                "FILTER(STRENDS(str(?date),\""+year+"\")) } ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        QuerySolution soln = response.nextSolution();
        double males = (int)(soln.getLiteral("?maleCount").getValue());
        double females = (int)(soln.getLiteral("?femaleCount").getValue());
        double maleAvg = ((males)/(males+females))*100;
        double femaleAvg = ((females)/(males+females))*100;
        Map<String,Double> res = new HashMap<>();
        res.put("males",maleAvg);
        res.put("females",femaleAvg);
        return res;
    }

    public Map<String, Double> getVictimAgeStats(String year) {
        String query = "select (SUM(?teens) as ?teenCount) (SUM(?children) as ?childrenCount)" +
                "(SUM(?adults) as ?adultCount) where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_victim ?victim . ?victim project:number_of_adults ?adults . " +
                "?victim project:number_of_teens ?teens . ?victim project:number_of_children ?children . " +
                "?id project:has_date ?date. FILTER(STRENDS(str(?date),\""+year+"\")) } ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        QuerySolution soln = response.nextSolution();
        double teens = (int)(soln.getLiteral("?teenCount").getValue());
        double adults = (int)(soln.getLiteral("?adultCount").getValue());
        double children = (int)(soln.getLiteral("?childrenCount").getValue());
        double teenAvg = ((teens)/(teens+adults+children))*100;
        double adultAvg = ((adults)/(teens+adults+children))*100;
        double childrenAvg = ((children)/(teens+adults+children))*100;
        Map<String,Double> res = new HashMap<>();
        res.put("children",childrenAvg);
        res.put("teens",teenAvg);
        res.put("adults",adultAvg);
        return res;
    }

    public Map<String, Double> getSuspectAgeStats(String year) {
        String query = "select (SUM(?teens) as ?teenCount) (SUM(?children) as ?childrenCount)" +
                "(SUM(?adults) as ?adultCount) where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_suspect ?suspect . ?suspect project:number_of_adults ?adults . " +
                "?suspect project:number_of_teens ?teens . ?suspect project:number_of_children ?children . " +
                "?id project:has_date ?date. FILTER(STRENDS(str(?date),\""+year+"\")) } ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        QuerySolution soln = response.nextSolution();
        double teens = (int)(soln.getLiteral("?teenCount").getValue());
        double adults = (int)(soln.getLiteral("?adultCount").getValue());
        double children = (int)(soln.getLiteral("?childrenCount").getValue());
        double teenAvg = ((teens)/(teens+adults+children))*100;
        double adultAvg = ((adults)/(teens+adults+children))*100;
        double childrenAvg = ((children)/(teens+adults+children))*100;
        Map<String,Double> res = new HashMap<>();
        res.put("children",childrenAvg);
        res.put("teens",teenAvg);
        res.put("adults",adultAvg);
        return res;
    }

    public List<String> getCitiesByState(String state, String year) {
        String query = "select DISTINCT ?city" +
                " where{?id rdf:type " + "<" + GlobalVariables.defaultNameSpace+
                "Incident_ID> . ?id project:has_city  ?city . ?id project:has_state <"
                +GlobalVariables.defaultNameSpace+state+ "> . ?id project:has_date ?date. " +
                "FILTER(STRENDS(str(?date),\""+year+"\"))} ";
        ResultSet response  = OwlReaderUtil.execSparqlQuery(query);
        List<String> res= new ArrayList<>();
        while( response.hasNext()) {
            QuerySolution soln = response.nextSolution();
            res.add(soln.getResource("?city").getLocalName());
        }
        return res;
    }
}
