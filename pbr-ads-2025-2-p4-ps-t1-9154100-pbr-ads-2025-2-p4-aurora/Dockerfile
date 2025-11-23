# Etapa 1: Build (Compila o projeto usando Maven)
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: Run (Roda o projeto usando um Java leve)
FROM openjdk:17-jdk-slim
WORKDIR /app
# Pega o .jar gerado na etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta 8080
EXPOSE 8080

# Inicia o Java com limite de memória (350mb) para não travar o servidor grátis
ENTRYPOINT ["java", "-Xmx350m", "-jar", "app.jar"]