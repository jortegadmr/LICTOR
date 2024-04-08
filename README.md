# LICTOR

## Tabla de Contenidos

- [LICTOR](#lictor)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Instalación](#instalación)
    - [Pasos para ejecutar el proyecto](#pasos-para-ejecutar-el-proyecto)

## Instalación

### Pasos para ejecutar el proyecto

1. **Instalar la base de datos (LICTOR):**
   - Ejecutar el archivo `elex.sql`.

2. **EN CONSOLA:**

   - **Instalar y ejecutar el back-end (LICTOR/elex):**
     ```
     cd elex
     mvn clean package
     mvnw spring-boot:run
     ```

   - **Instalar las dependencias del front-end (LICTOR/elex-Angular):**
     ```
     cd elex-Angular
     npm install
     ```

   - **Compilar y ejecutar el front-end:**
     ```
     ng build
     ng serve
     ```

Si necesitan ayuda para arrancar el proyecto no duden en ponerse en contacto:

Correo electrónico: jaortegadur@gmail.com