Pasos para ejecutar el proyecto:

    Instalar la base de datos (LICTOR)

        ejecutar el archivo elex.sql 
    
    Instalar y ejecutar el back-end: (LICTOR/elex)

        cd elex
        mvn clean package


    Instalar las dependencias del front-end: (LICTOR/elex-Angular)

        cd elex-Angular
        npm install

    Compilar y ejecutar el front-end:

        ng build
        ng serve
