# Stage 1: Build Angular Frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build -- --configuration production

# Stage 2: Prepare Spring Boot Backend with Frontend
FROM eclipse-temurin:21-jdk-alpine AS backend-build
WORKDIR /app/backend
COPY backend/pom.xml ./
COPY backend/mvnw ./
COPY backend/.mvn/wrapper ./.mvn/wrapper
RUN ./mvnw dependency:resolve
COPY backend/ ./
COPY --from=frontend-build /app/frontend/dist/frontend/browser ./src/main/resources/static
RUN ./mvnw clean package -DskipTests

# Stage 3: Runtime Container
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
