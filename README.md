# Url Shortener

A full stack web application to shorten long URLs and have access to analytics.
This project is developed with Java, Maven, Spring Boot, and Postgres in the backend, and Angular in the frontend.

## Prerequisites
- Java 21 and Maven
- Node.js and npm
- PostgresSql

## Installation

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/DerEns86/url-shortener
    cd url-shortener
    ```

2.Database Setup
 - Set the following environment variables in Docker:
        ```properties
        DB_URL=jdbc:postgresql://localhost:5432/url_shortener
        DB_USERNAME=your_username
        DB_PASSWORD=your_password
        ```
   - Run the `docker-compose.yml`

3. Edit the configuration file:
    - Edit the `application.properties` file in the `src/main/resources` directory.
    - Set the following environment variables:
        ```properties
        DB_URL=jdbc:postgresql://localhost:5432/url_shortener
        DB_USERNAME=your_username
        DB_PASSWORD=your_password
        ```

4. Install dependencies and start the backend:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create environments:
    ```bash
    npm g environments
    ```
    
4. Start the application:
    ```bash
    npm start
    ```

### Ports
The frontend is running on `http://localhost:4200`
and the backend on `http://localhost:8080`
