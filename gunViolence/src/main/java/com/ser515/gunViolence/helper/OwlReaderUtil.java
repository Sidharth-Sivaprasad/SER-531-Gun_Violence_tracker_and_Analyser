package com.ser515.gunViolence.helper;


import java.io.InputStream;

import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.*;
import org.apache.jena.util.FileManager;

public class OwlReaderUtil {

    static String url = "http://35.90.223.93:3030/gun_violence";
    static String defaultNameSpace = "http://www.semanticweb.org/sidharthkoyipallilsivaprasad/ontologies/2022/10/Gun_Violence#";
    static OntModel OpenConnectOwl(){
        OntModel mode = null;
        mode = ModelFactory.createOntologyModel(OntModelSpec.OWL_DL_MEM_RULE_INF);
        InputStream file = FileManager.get().open("Ontologies/Gun_Violence-trial.owl");
        return (OntModel) mode.read(file,defaultNameSpace);
    }

    public static ResultSet execSparqlQuery( String queryStr) {
        StringBuffer finalQuery = new StringBuffer();
        finalQuery.append("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ");
        finalQuery.append("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ");
        finalQuery.append("PREFIX project: <http://www.semanticweb.org/sidharthkoyipallilsivaprasad/ontologies/2022/10/Gun_Violence#> ");
        finalQuery.append(queryStr);
        QueryExecution q = QueryExecutionFactory.sparqlService(url,
                finalQuery.toString());
        ResultSet results = q.execSelect();
        return results;

    }

}
