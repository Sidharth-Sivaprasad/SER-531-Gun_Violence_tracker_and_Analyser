# SER-531-Gun_Violence_tracker_and_Analyser

Gun Violence tracker and analyzer application provides the detailed and user friendly analysis
of the gun violence happening in various cities in USA.

# Preprocessing of Dataset

The initial dataset was preprocessed where unwanted data were filtered out . We used python file(preProcessing.py in the preprocessing folder) for pre processing.

# Setting up Fuseki Server in AWS EC2 instance that we have hosted

ssh -i fuseki-key-pair.pem ec2-user@35.90.223.93
We have pushed the .pem file in the repository.

 cd apache-jena-fuseki-4.6.1/
 java -jar fuseki-server.jar --update --mem /gun_violence ( For creating the dataset )
 
 After the fuseki server is up , add the data(Gun_Violence-trial.owl present in the ontologies folder) in the gun_violence dataset.

http://35.90.223.93:3030 ( Fuseki endpoint )

# Setting up Backend application

ssh -i gunViolence.pem ec2-user@18.237.213.164
The above command is for getting into the instance.

We have created a JAR file for our spring boot application. JAR file is present in EC2 instance.

This command is used for running the backend application.
java -jar gunViolence-0.0.1-SNAPSHOT.jar

http://18.237.213.164:8080 (Backend url)


# Setting up React application

The User Interface for the application is made in React. We have hosted our frontend application in Google Cloud Console. We have exposed the following endpoints:

http://34.123.241.54:3000/

# Please install Moesif Cors Extension when running the application.

