# venturus-trial

[![codecov](https://codecov.io/gh/jschneiderm98/venturus-trial/branch/main/graph/badge.svg?token=F6XC5A9JRI)](https://codecov.io/gh/jschneiderm98/venturus-trial)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=bugs)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=ncloc)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=security_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=code_smells)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_venturus-trial&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/dashboard?id=jschneiderm98_venturus-trial)

## Documentation



## System requirements 

 1. Install [Docker](https://docs.docker.com/engine/installation/)
 2. Install [Docker Compose](https://docs.docker.com/compose/install/)

## Guide

 1. Clone the repository:
 ```
 git clone https://github.com/jschneiderm98/venturus-trial.git
 ```
 2. Create local network with docker:
 ```
 docker network create network-api
 ```
 3. Create and start the service container:

 ```
 docker-compose build
 docker-compose up
 ```

 4. Acess the application on port 3000 of your `browser`: [http://localhost:3000]()

 5. When you want to stop the container you can use:
 ```
 docker-compose down
 ``` 
 
 
