# Etapa 1: Build (Usando Maven com Java 21)
# Atualizei para uma versão do Maven compatível com Java 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: Run (Usando Java 21 Leve para rodar)
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app
# Pega o .jar gerado na etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta 8080
EXPOSE 8080

# Inicia o Java com limite de memória (Segurança para o plano Free)
ENTRYPOINT ["java", "-Xmx350m", "-jar", "app.jar"]