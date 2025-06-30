# Étape 1 : Image de base Ruby
FROM ruby:3.2

# Installer les dépendances système
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs \
  npm \
  git \
  curl \
  postgresql-client

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers Gemfile et installer les gems
COPY Gemfile* ./
RUN bundle install

# Copier l’ensemble de l’application
COPY . .

# Copier et rendre exécutable le script d’entrée
COPY bin/docker-entrypoint /bin/docker-entrypoint
RUN chmod +x /bin/docker-entrypoint

# Exposer le port de Rails
EXPOSE 3000

# Définir l’entrée du conteneur
ENTRYPOINT ["/bin/docker-entrypoint"]

# La commande par défaut : sera passée **à** l’entrypoint
CMD ["bash", "-c", "rm -f tmp/pids/server.pid && bin/rails server -b 0.0.0.0 -p 3000"]

