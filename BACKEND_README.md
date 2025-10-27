# Backend Email Setup

Ce projet utilise un backend Node.js avec Express et Nodemailer pour envoyer des emails depuis le formulaire de contact.

## 📋 Configuration

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet avec les informations suivantes :

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 3. Configurer Gmail (si vous utilisez Gmail)

1. Allez sur votre compte Google
2. Activez l'authentification à deux facteurs
3. Générez un "Mot de passe d'application" : https://myaccount.google.com/apppasswords
4. Utilisez ce mot de passe dans `EMAIL_PASS`

### 4. Lancer le projet

```bash
# Installer les dépendances backend
npm install

# Lancer le serveur backend
npm run server

# Dans un autre terminal, lancer le frontend React
npm start
```

Ou utiliser le script `dev` pour lancer les deux :

```bash
npm run dev
```

## 🔧 Endpoints API

### POST /api/send-email

Envoie un email depuis le formulaire de contact.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## 📧 Test

1. Remplissez le formulaire de contact sur http://localhost:3000
2. Le message sera envoyé à : mohamedaziz.zormati@polytechnicien.tn

## 🚀 Production

Pour le déploiement en production :

1. Configurez les variables d'environnement sur votre plateforme de déploiement
2. Modifiez l'URL dans `Contact.js` pour pointer vers votre API
3. Déployez le backend sur Heroku, Vercel, ou votre serveur

