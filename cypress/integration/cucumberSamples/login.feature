Feature:Login into Application
Scenario:Valid Login into Application
Given User is on Login Page 
#When User enter login credentials 
When User enter "tomsmith" and "SuperSecretPassword!"
Then Should display Home Page 