# DockerWorkshop

Docker
Follow the instructions of the README.md
Fork and clone this repository
This project will evaluate your ability to create and containerize a full stack application. The goal of this exercise is not to finish quickly, but rather to do the best you can so we can gauge where everyone in the class is at and how well you're absorbing the material. Take your time and don't stress out!

You will be:

Writing valid Dockerfiles
Executing Docker CLI commands
Writing valid docker-compose.yaml files
Composing Docker containers to mesh your services together
Submitting the project:
Fork the sdi-blended-docker-workshop repository to your own GitHub to submit your code for this project.
Submit a link to your forked repository below.
Project Instructions
Project Setup
Create the following folder structure:
/api
/ui
README.md
docker-compose.yaml
Containerize a React Application
Navigate to the /ui folder
Build a React w/ Vite app (nothing fancy - an out of the box app will work fine!)
Verify npm run dev - will start and run your application and that you can access the default App loading page.
Modify the App to indicate each application author’s name (just in the App.js is fine!)
Add a Dockerfile for the React app
Build the Docker image
Run the Docker Image as a Docker Container
GOAL: Make sure you can connect to that application via localhost (this means the container has correctly forwarded the port)
AFTER GOAL: remove the container and application.
Use Docker Compose to execute your ui application.
Create a service inside your docker-compose file at the root of the file system.
From the command line at the root of your application run: docker-compose up
GOAL: Make sure you can STILL connect to your application on localhost - but using ONLY the docker-compose command
AFTER GOAL: use docker-compose down, verify that you can no longer access your application.
Containerize an Express Application
Setup a BARE BONES express application.
Navigate to the /api folder
Create an express application set it up to listen to a desired PORT
Set up one root route to ensure the application works
‘/’ route is sufficient enough, when you hit your root route - send a response with something like “My API is up and running Yo!”
Create a Dockerfile for the Express API
Build the Docker image for the API
Run the Docker image as a Docker Container.
GOAL: Make sure you can connect to your API at localhost and you see your response string rendered to the application.
Use Docker Compose to execute your api.
Add a service to your docker-compose.yaml file at the root of your system.
From the command line at the root of your application run: docker-compose up
GOAL: Make sure you can STILL connect to your React application on localhost, AND that you can connect to your API - but using ONLY the docker-compose command
AFTER GOAL: use docker-compose down, verify that you can no longer access your React or your API.
Stretch Goals:
Set up your docker-compose file to connect to a PostgreSQL image
Using Knex migrations and seeds, create/seed the database with the application's authors information
Set up your API to retrieve data from your database to send as a response from the Express application
Render the data from the database on your React client (leveraging an API call to your Express API server)
Create a volume in docker-compose to persist data beyond the life of your containers
To verify that data persists, use docker-compose up to start your application suite, connect to the database via the command line and insert a record. Run docker-compose down, then docker-compose up. Verify that inserted record persists even when you compose down.