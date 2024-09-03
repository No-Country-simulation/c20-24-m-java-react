FROM openjdk:22-jdk-slim
ARG JAR_FILE=target/Foodies-0.0.1.jar
COPY ${JAR_FILE} app_Foodies.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_Foodies.jar"]