FROM maven:3.9.8-eclipse-temurin-21

WORKDIR /workspace/backend

# Install any additional development tools if needed
RUN apt-get update && apt-get install -y git

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]
