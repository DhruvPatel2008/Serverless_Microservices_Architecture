# Serverless MERN Stack Microservices

This project demonstrates a serverless microservices architecture using the MERN stack.

## Project Structure
- `/microservices`: Contains the microservices for users and products.
- `/client`: React application to interact with the microservices.

## How to Run Locally
1. **Run Microservices:**
   - For each service in `/microservices`:
     ```
     cd microservices/<service-name>
     npm install
     npm start
     ```

2. **Run Client:**
   - Navigate to `/client`.
     ```
     npm install
     npm start
     ```

## Deployment
Follow the instructions in `infrastructure/deployment_instructions.md` to deploy the microservices and client.

Enjoy exploring serverless microservices with the MERN stack!