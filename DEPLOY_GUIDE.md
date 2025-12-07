# 🚀 Guide de Déploiement du Backend

Ce guide explique comment déployer votre backend sur **Render** (gratuit) pour qu'il soit toujours en ligne.

## 📋 Prérequis

1. Un compte GitHub (gratuit)
2. Un compte Render (gratuit) : https://render.com
3. Un compte Gmail avec authentification à deux facteurs activée

---

## 🔧 Étape 1 : Préparer votre code sur GitHub

### 1.1 Initialiser Git (si pas déjà fait)

```bash
cd med-aziz-main
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Créer un dépôt sur GitHub

1. Allez sur https://github.com/new
2. Créez un nouveau dépôt (ex: `portfolio-aziz-backend`)
3. **NE PAS** cocher "Initialize with README"

### 1.3 Pousser votre code

```bash
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-aziz-backend.git
git branch -M main
git push -u origin main
```

---

## 🎯 Étape 2 : Configurer Gmail pour l'envoi d'emails

1. Allez sur votre compte Google : https://myaccount.google.com
2. Activez l'**Authentification à deux facteurs**
3. Générez un **Mot de passe d'application** :
   - Allez sur : https://myaccount.google.com/apppasswords
   - Sélectionnez "Application" : Mail
   - Sélectionnez "Appareil" : Autre (nommez-le "Render")
   - Cliquez sur "Générer"
   - **Copiez le mot de passe** (16 caractères) - vous en aurez besoin !

---

## 🌐 Étape 3 : Déployer sur Render

### 3.1 Créer un compte Render

1. Allez sur https://render.com
2. Cliquez sur **"Get Started for Free"**
3. Inscrivez-vous avec votre compte GitHub (recommandé)

### 3.2 Créer un nouveau Web Service

1. Dans le tableau de bord Render, cliquez sur **"New +"**
2. Sélectionnez **"Web Service"**
3. Cliquez sur **"Connect account"** et autorisez l'accès à GitHub
4. Sélectionnez votre dépôt `portfolio-aziz-backend`

### 3.3 Configurer le service

Remplissez les informations suivantes :

- **Name** : `portfolio-aziz-backend` (ou le nom que vous préférez)
- **Environment** : `Node`
- **Build Command** : `npm install && npm run build`
- **Start Command** : `npm run serve`
- **Plan** : `Free` (gratuit)

### 3.4 Ajouter les variables d'environnement

Dans la section **"Environment Variables"**, ajoutez :

| Key | Value |
|-----|-------|
| `EMAIL_USER` | Votre adresse Gmail (ex: `votre.email@gmail.com`) |
| `EMAIL_PASS` | Le mot de passe d'application Gmail (les 16 caractères) |
| `PORT` | `10000` (Render assigne automatiquement, mais on peut spécifier) |
| `NODE_ENV` | `production` |

**⚠️ Important** : Ne partagez JAMAIS ces valeurs publiquement !

### 3.5 Déployer

1. Cliquez sur **"Create Web Service"**
2. Render va commencer à déployer votre application
3. Attendez 2-3 minutes que le déploiement se termine

### 3.6 Récupérer l'URL de votre backend

Une fois le déploiement terminé, vous verrez une URL comme :
```
https://portfolio-aziz-backend.onrender.com
```

**⚠️ Note** : Sur le plan gratuit, le service "s'endort" après 15 minutes d'inactivité. Le premier accès après l'inactivité peut prendre 30-60 secondes.

---

## 🔄 Étape 4 : Connecter le Frontend au Backend déployé

### 4.1 Si vous utilisez le backend Node.js

Modifiez le fichier `src/components/Contact.js` pour pointer vers votre backend Render :

```javascript
// Dans handleSubmit, remplacez l'appel EmailJS par :
const response = await fetch('https://portfolio-aziz-backend.onrender.com/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.get('user_name'),
    email: formData.get('user_email'),
    message: formData.get('message')
  })
});
```

### 4.2 Déployer le Frontend

Pour déployer le frontend React, vous pouvez utiliser :
- **Vercel** (gratuit, recommandé) : https://vercel.com
- **Netlify** (gratuit) : https://netlify.com
- **Render** aussi (gratuit)

---

## ✅ Vérifier que tout fonctionne

1. Visitez votre URL Render : `https://portfolio-aziz-backend.onrender.com`
2. Testez l'endpoint avec curl ou Postman :
```bash
curl -X POST https://portfolio-aziz-backend.onrender.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

---

## 📝 Notes importantes

1. **Plan gratuit Render** :
   - Le service s'endort après 15 minutes d'inactivité
   - Le réveil prend 30-60 secondes
   - Limite de 750 heures/mois

2. **Plan payant** ($7/mois) :
   - Service toujours actif
   - Pas de délai au réveil
   - Support prioritaire

3. **Sécurité** :
   - Ne commitez JAMAIS votre fichier `.env`
   - Utilisez toujours des variables d'environnement
   - Gardez vos mots de passe secrets

---

## 🆘 Dépannage

### Le service ne démarre pas
- Vérifiez les logs dans Render Dashboard > Logs
- Vérifiez que toutes les variables d'environnement sont définies
- Vérifiez que `EMAIL_PASS` est bien le mot de passe d'application (16 caractères)

### Les emails ne sont pas envoyés
- Vérifiez que l'authentification à deux facteurs est activée
- Vérifiez que vous utilisez un mot de passe d'application, pas votre mot de passe Gmail
- Vérifiez les logs dans Render Dashboard

### Le service est trop lent
- C'est normal sur le plan gratuit (service qui se réveille)
- Envisagez le plan payant pour de meilleures performances

---

## 📚 Ressources utiles

- [Documentation Render](https://render.com/docs)
- [Node.js sur Render](https://render.com/docs/node-version)
- [Variables d'environnement sur Render](https://render.com/docs/environment-variables)

---

**Besoin d'aide ?** Consultez les logs dans Render Dashboard ou contactez le support Render.

