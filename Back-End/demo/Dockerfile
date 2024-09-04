FROM openjdk:22-jdk-slim
ARG JAR_FILE=target/demo-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app_Foodies.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_Foodies.jar"]