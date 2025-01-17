

# **Projet de fin de module NoSQL**
Ce projet consiste à développer une API backend pour une plateforme d'apprentissage en ligne. L'API permet de gérer les cours, les étudiants, ainsi que leurs inscriptions. Les données sont stockées dans une base de données **MongoDB**, et un cache **Redis** est utilisé pour améliorer les performances en mettant en cache les données fréquemment accédées.

---

## **Installation et lancement du projet**

1. **Cloner le dépôt** :  
   ```bash
   git clone https://github.com/maane2025/learning-platform-nosql.git
   cd learning-platform-nosql
   ```

2. **Installer les dépendances** :  
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :  
   Créez un fichier `.env` à la racine du projet avec le contenu suivant :  
   ```plaintext
   MONGODB_URI=mongodb://localhost:27017
   MONGODB_DB_NAME=learning_platform
   REDIS_URI=redis://localhost:6379
   PORT=3000
   ```

4. **Lancer le projet** :  
   ```bash
   npm start
   ```
   L'API sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000).

---

## **Endpoints de l'API**

### **Cours**
- `GET /courses` : Récupérer tous les cours.
- `POST /courses` : Créer un nouveau cours.
- `GET /courses/:id` : Récupérer un cours par son ID.
- `PUT /courses/:id` : Mettre à jour un cours par son ID.
- `DELETE /courses/:id` : Supprimer un cours par son ID.
- `GET /courses/stats` : Récupérer des statistiques sur les cours (nombre total, durée totale, etc.).

### **Étudiants**
- `GET /students` : Récupérer tous les étudiants.
- `POST /students` : Créer un nouvel étudiant.
- `GET /students/:id` : Récupérer un étudiant par son ID.
- `PUT /students/:id` : Mettre à jour un étudiant par son ID.
- `DELETE /students/:id` : Supprimer un étudiant par son ID.
- `POST /students/:id/enroll` : Inscrire un étudiant à un cours.
- `GET /students/:id/courses` : Récupérer les cours auxquels un étudiant est inscrit.

---

## **Structure du projet**
- **`src/config`** : Configuration de l'application (bases de données, variables d'environnement).
- **`src/controllers`** : Contient la logique métier pour les entités (cours, étudiants).
- **`src/routes`** : Définit les routes de l'API.
- **`src/services`** : Fournit des services pour interagir avec MongoDB et Redis.
- **`src/app.js`** : Point d'entrée de l'application.

---

## **Questions fréquentes**

### 1. **Comment gérer efficacement le cache avec Redis ?**
   - Utilisez des fonctions utilitaires pour **mettre en cache**, **récupérer**, et **supprimer** des données. 
   - Définissez un **TTL (Time To Live)** sur les clés pour gérer la durée de vie des données mises en cache.

### 2. **Quelles sont les bonnes pratiques pour les clés Redis ?**
   - Utilisez des noms de clés **descriptifs** et **cohérents**.  
   - Implémentez des **namespaces** pour éviter les collisions.  
   - Définissez des **durées de vie appropriées** pour chaque type de donnée.

### 3. **Pourquoi créer des services séparés ?**
   - Pour séparer la logique métier de l'interaction avec les bases de données, ce qui améliore la **modularité**, la **réutilisabilité** et la **maintenabilité**.

### 4. **Pourquoi séparer les routes dans différents fichiers ?**
   - Cela permet de mieux organiser le code en regroupant les routes par entité (par ex., cours, étudiants).  

### 5. **Quelle est la différence entre un contrôleur et une route ?**
   - Une **route** définit l'URL et la méthode HTTP (ex. `GET /courses`).
   - Un **contrôleur** contient la logique métier associée à cette route.

### 6. **Pourquoi valider les variables d'environnement au démarrage ?**
   - Pour s'assurer que toutes les configurations nécessaires sont présentes.  
   - En cas de variable manquante, une erreur explicative est levée, empêchant l'application de démarrer.

### 7. **Pourquoi créer un module séparé pour les connexions aux bases de données ?**
   - Cela permet de centraliser la gestion des connexions, facilitant la réutilisation du code et améliorant la maintenabilité.

### 8. **Comment gérer proprement la fermeture des connexions ?**
   - Implémentez des fonctions dédiées pour fermer les connexions et appelez-les lors de l'arrêt de l'application.

### 9. **Comment organiser le point d'entrée de l'application (`app.js`) ?**
   - Initialisez les connexions aux bases de données.  
   - Configurez les middlewares Express.  
   - Montez les routes.  
   - Démarrez le serveur.

---

