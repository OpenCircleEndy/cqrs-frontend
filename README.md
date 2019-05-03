# CQRS Show Case Application
This application is a show case for a [Command-Query Responsibility Segregation](https://martinfowler.com/bliki/CQRS.html) pattern.This is a pattern which is well suited for task-driven applications whereas system-of-records applications would imply CRUD style applications. Another interesting read on this subject is [REST without PUT](https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling) helping to understand the difference. Next to this Web Application implementation there is a [Server built with Spring Boot](https://github.com/OpenCircleEndy/cqrs).
## Application services
It can create leads and create contracts from leads.
## Showcases
- Use Commands for changing application state. 
- Use Queries for projecting application state.
- Websockets using [StompJS](https://www.npmjs.com/package/@stomp/stompjs).
## Requirements for demo
You'll need the server implementation running.
## CQRS
This is a task-driven UI which allows you to request the creation of a lead send a create contract request for approval. The UI forms are do not create or edit domain objects, in the sense there is no 'Contract form' where you can edit all the attributes of the Contract domain object.

The Angular components which query the server are updated independent of the Anguler components which send Commands.
## Bonus: Websockets
Could not help myself adding a websocket for updated the leads. The contracts are updated using an Angular Event Emitter. Open two windows and notice the difference in behavior between adding leads and requesting contracts. 
