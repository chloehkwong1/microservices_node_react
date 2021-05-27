# Microservices with Node JS and React

Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes.

The Course can be found on Udemy: https://www.udemy.com/course/microservices-with-node-js-and-react/

## Course Content
### Section 1: Fundamental Ideas Around Microservices
- Sync - services communicate with each other using direct requests
- Async - services communicate with each other using _events_ (event bus)

Async is the way to go!

We're going to create a lot of different services. They're going to have incoming requests. The service is going to do something locally with that request. And if it makes a change to any data, it's going to emit an event. Other services will then wait on around, listen for events to come in and eventually populate databases that look like this right here to answer some very specific queries.
### Section 2: A Mini-Microservices App
### Section 3: Running Services with Docker
### Section 4: Orchestrating Collections of services with Kubernetes
### Section 5: Architecture of Multi-Service Apps
### Section 6: Leveraging a Cloud Environment for Development
### Section 7: Response Normalization Strategies
### Section 8: Ddatabase Management and Modeling
### Section 9: Authentication Strategies and Options
### Section 10: Testing Isolated Microservices
### Section 11: Integrating a Server-Side-Rendered React App
### Section 12: Code Sharing and Reuse Between Services
### Section 13: CRUD Server Setup
### Section 14: NATS Streaming Server - an Event Bus Implementation
### Section 15: Connecting to NATS in Node JS World
### Section 16: Managing a NATS Client
### Section 17: Cross-Service Data Replication in Action
### Section 18: Understanding Event Flow
### Section 19: Listening for Events and Handling Concurrency Issues
### Section 20: Worker Services
### Section 21: Handling Payments
### Section 22: Back to the Client
### Section 23: CI/CD
