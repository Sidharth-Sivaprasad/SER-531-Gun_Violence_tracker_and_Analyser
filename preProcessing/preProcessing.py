import pandas as pd
import numpy as np
import numbers
import plotly
from plotly.offline import init_notebook_mode, iplot
import plotly.graph_objs as go
from plotly import tools
import folium

gun_violence_df = pd.read_csv('gun-violence-data_01-2013_03-2018.csv')

gun_violence_df = gun_violence_df.drop(columns = ["gun_stolen", "location_description", "participant_age", "participant_relationship",
                      "state_house_district", "state_senate_district"]
                     , axis=1)

gun_violence_df = gun_violence_df.dropna(subset=['participant_type','participant_status', 'participant_gender',
                                                 'participant_age_group'])
suspects = []
victims = []
arrested = []
killed = []
injured = []
male_suspect = []
female_suspect = []
male_victim = []
female_victim = []
finalList = []
genderList = []
teen_victim = []
adult_victim = []
child_victim = []
teen_suspect = []
adult_suspect = []
child_suspect = []
ageList = []


for val in gun_violence_df['participant_type']:
    victims.append(val.count('Victim'))
    suspects.append(val.count('Subject-Suspect'))
    l1 = val.split("||")
    finalList.append(l1)

for val1 in gun_violence_df['participant_status']:
    arrested.append(val1.count('Arrested'))
    injured.append(val1.count('Injured'))
    killed.append(val1.count('Killed'))

for val in gun_violence_df['participant_gender']:
    l1 = val.split("||")
    genderList.append(l1)

for val in gun_violence_df['participant_age_group']:
    l1 = val.split("||")
    ageList.append(l1)

print(ageList[0:6])
for i in range(len(finalList)):
    l1 = finalList[i]
    l2 = genderList[i]
    female_victim_count = 0
    female_suspect_count = 0
    male_victim_count = 0
    male_suspect_count = 0
    for j in range(len(l2)):
        k = j
        while l2[j][0:2] != l1[k][0:2]:
            k= k+1
            if k == len(l1):
                break
        if k == len(l1):
            break
        if "Male" in l2[j]:
            if "Victim" in l1[k]:
               male_victim_count +=1
            else:
               male_suspect_count+=1
        else:
            if "Victim" in l1[k]:
                female_victim_count += 1
            else:
                female_suspect_count += 1
    male_suspect.append(male_suspect_count)
    male_victim.append(male_victim_count)
    female_victim.append(female_victim_count)
    female_suspect.append(female_suspect_count)

for i in range(len(finalList)):
    l1 = finalList[i]
    l2 = ageList[i]
    teen_victim_count = 0
    adult_victim_count = 0
    child_victim_count = 0
    teen_suspect_count = 0
    adult_suspect_count = 0
    child_suspect_count = 0
    for j in range(len(l2)):
        k = j
        while l2[j][0:2] != l1[k][0:2]:
            k= k+1
            if k == len(l1):
                break
        if k == len(l1):
            break
        if "Adult" in l2[j]:
            if "Victim" in l1[k]:
                adult_victim_count += 1
            else:
                adult_suspect_count += 1
        elif "Teen" in l2[j]:
            if "Victim" in l1[k]:
                teen_victim_count += 1
            else:
                teen_suspect_count += 1
        else:
            if "Victim" in l1[k]:
                child_victim_count += 1
            else:
                child_suspect_count += 1
    adult_victim.append(adult_victim_count)
    adult_suspect.append(adult_suspect_count)
    teen_victim.append(teen_victim_count)
    teen_suspect.append(teen_suspect_count)
    child_victim.append(child_victim_count)
    child_suspect.append(child_suspect_count)

gun_violence_df = gun_violence_df.assign(victim_count = victims, suspect_count = suspects
                                         ,arrested_count = arrested, injured_count = injured, kill_count = killed,
                                         male_victim_count = male_victim, male_suspect_count = male_suspect,
                                         female_victim_count = female_victim, female_suspect_count = female_suspect,
                                         adult_victim_count = adult_victim, adult_suspect_count = adult_suspect,
                                         teen_victim_count = teen_victim, teen_suspect_count = teen_suspect,
                                         child_victim_count = child_victim, child_suspect_count = child_suspect)
# print(gun_violence_df)
gun_violence_df.to_csv("processedData3.csv")
