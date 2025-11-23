# Etapa 1: Build (Essa imagem ainda funciona)
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: Run (TROQUEI A IMAGEM AQUI)
# De: FROM openjdk:17-jdk-slim (que não existe mais)
# Para: eclipse-temurin (a versão moderna e estável)
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
# Pega o .jar gerado na etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta 8080
EXPOSE 8080

# Inicia o Java com limite de memória
ENTRYPOINT ["java", "-Xmx350m", "-jar", "app.jar"]