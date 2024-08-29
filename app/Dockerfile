# Utiliser l'image officielle Node.js comme base
FROM node:14

# Créer le répertoire de l'application
WORKDIR /usr/src/app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par l'application
EXPOSE 8080

# Démarrer l'application
CMD ["node", "server.js"]
