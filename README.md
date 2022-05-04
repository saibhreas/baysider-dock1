<p align='center'>
  <a href="https://github.com/saibhreas">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white">
  </a>
  
  <a href='https://www.linkedin.com/in/siobhanknuttel'>
      <img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>
  </a>
</p>

# ![node icon](./img/NodeJS_small.png) baysider-dock1

Development site for Traversy Media backend API for DevCamper

  ## Contributors: Traversy Media + Saibhreas
  
  ### Github User: https://github.com/saibhreas
  
  #### Email: fullstack@saibhreas.com
  
  ## Purpose: 

  This project is directed by TM Media, it is:

    "This is a project based course where we build an extensive, in-depth backend API for DevCamper,
     a bootcamp directory app. We will start from scratch and end up with a professional deployed 
     API with documentation."

  It's my sandbox to exhibit this model for Node Express  MongoDB side.  NPM installations will be done in pieces as the project develops.
  Annotation to the README will follow changes as prescribed by the course.
  
  ## Table of Content
  
  1. [Description](##description)
  2. [Installation](###installation)
  3. [Usage](###usage)
  4. [Contributing](###contributing)
  5. [Technologies](###technologies)
  6. [Questions:(###questions)]
  
  ## Description
  
  ${data.description}
    
  ### Licence: ${data.lic}
  
  ${renderLicenseLink(data.lic)}
  
  ### Installation

NPM init create package.json

  - Edit scripts in package.json

        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "NODE_ENV=production node server",
         "dev": "nodemon server"
        }


Add Dependencies

    * npm i express dotenv
    * npm i -D nodemon
    * npm install mongoose
    * npm i colors
    * npm i slugify
    * npm install node-geocoder


Routes to be used

     GET/POST/PUT/DELETE

      * /api/v1/bootcamps
      * /api/v1/courses
      * /api/v1/reviews
      * /api/v1/auth
      * /api/v1/users
  
    /v1 is implemented to allow for AGILE production.  /vx may be implemented later on depending on site changes and api development 
  
Documentation practices

  Files

    * controllers

        header comments for each function denote method and route and information regarding security layer / authentication T or F
        
  ### Usage

  * ${data.usage}  
  
  ### Technologies
  
  Node
  Mongo
  ${data.tech}
  ### Questions? Feel free to contact: ${data.email}
  
  ### Images
  
  ${data.imgs}
  
  ### Links
  dolphins
  