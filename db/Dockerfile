# Utiliser l'image officielle MySQL comme base
FROM mysql:5.7

# Copier le script d'initialisation dans le conteneur
COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL
EXPOSE 3306
