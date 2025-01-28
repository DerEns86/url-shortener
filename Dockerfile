# Stage 1: Build the backend
FROM maven:3.9.9-eclipse-temurin-23-alpine AS backend-build
WORKDIR /workspace/backend

# Copy Maven Wrapper and ensure it is executable
COPY backend/mvnw .
COPY backend/.mvn .mvn
RUN chmod +x mvnw

# Copy the backend source code
COPY backend/pom.xml .
COPY backend/src ./src

# Build the backend
RUN ./mvnw clean package -DskipTests

# Stage 2: Build the frontend
FROM node:20 AS frontend-build
WORKDIR /workspace/frontend

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the frontend source code
COPY frontend/ .
RUN npm run build

# Stage 3: Combine backend and frontend
FROM eclipse-temurin:23-jre-alpine
WORKDIR /app

# Copy the backend JAR file
COPY --from=backend-build /workspace/backend/target/*.jar app.jar

# Copy the frontend build files
COPY --from=frontend-build /workspace/frontend/dist/frontend /app/public

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]