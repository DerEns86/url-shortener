# Dev Setup

A draft for the development setup with 

## Idea

The idea of this docker setup is to work with three containers:

1. **Frontend:** Angular
1. **Backend:** Java (Maven)
1. **Database:** Postgres

All three containers are connected through a network. That means you can work independently in each container and still access the other ones as long as they're running.

## Working with Dev Containers

To streamline the development process, it's a good idea to work with the Frontend in one Editor Window of VS Code and with the Backend in another VS Code window. Both windows should be spinned up as dev containers.

> Since all three containers are connected with the `docker-compose.yml` file, they'll spin up when you start the first dev container.

### Frontend

Navigate to the `frontend/` folder and reopen the folder as dev container.

### Backend

Navigate to the `backend/` folder and reopen the folder as dev container.
