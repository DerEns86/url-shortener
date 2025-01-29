# Stage 1: Build the frontend
FROM node:20 AS frontend-build
WORKDIR /workspace/frontend

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the frontend source code and build it
COPY frontend/ ./
RUN npm run build --configuration="production" --base-href="/app/"

# Stage 2: Prepare backend with frontend build
FROM maven:3.9.9-eclipse-temurin-23-alpine AS backend-build
WORKDIR /workspace/backend

# Copy Maven Wrapper and ensure it is executable
COPY backend/mvnw ./
COPY backend/.mvn .mvn
RUN chmod +x mvnw

# Copy the backend source code
COPY backend/pom.xml ./
COPY backend/src ./src

# Copy the built frontend files into the backend's static folder
COPY --from=frontend-build /workspace/frontend/dist/frontend/browser ./src/main/resources/static/

# Build the backend (includes the frontend static files)
RUN ./mvnw clean package -DskipTests

# Stage 3: Final application image
FROM eclipse-temurin:23-jre-alpine
WORKDIR /app

# Copy the backend JAR file
COPY --from=backend-build /workspace/backend/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
