# 🚀 Déployer votre Portfolio avec Vercel (via GitHub)

Ce guide explique comment déployer votre portfolio avec backend directement depuis GitHub sur **Vercel** (100% gratuit et automatique).

---

## ✨ Pourquoi Vercel ?

- ✅ **100% Gratuit** pour les projets personnels
- ✅ **Se connecte directement à GitHub** - déploiement automatique
- ✅ **Sans configuration complexe** - ça fonctionne tout seul
- ✅ **Toujours en ligne** - pas de réveil comme Render
- ✅ **URL personnalisée** possible
- ✅ **Backend + Frontend** dans le même projet

---

## 📋 Prérequis

1. ✅ Votre code est déjà sur GitHub : https://github.com/Medazizzormati/Portfolio
2. Un compte Gmail avec authentification à deux facteurs activée

---

## 🎯 Étape 1 : Configurer Gmail pour l'envoi d'emails

1. Allez sur votre compte Google : https://myaccount.google.com
2. Activez l'**Authentification à deux facteurs**
3. Générez un **Mot de passe d'application** :
   - Allez sur : https://myaccount.google.com/apppasswords
   - Sélectionnez "Application" : Mail
   - Sélectionnez "Appareil" : Autre (nommez-le "Vercel")
   - Cliquez sur "Générer"
   - **Copiez le mot de passe** (16 caractères) - vous en aurez besoin !

---

## 🌐 Étape 2 : Déployer sur Vercel depuis GitHub

### 2.1 Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"** (c'est le plus simple !)
4. Autorisez Vercel à accéder à vos dépôts GitHub

### 2.2 Importer votre projet

1. Dans le tableau de bord Vercel, cliquez sur **"Add New..."**
2. Cliquez sur **"Project"**
3. Vous verrez la liste de vos dépôts GitHub
4. Trouvez **"Medazizzormati/Portfolio"** et cliquez sur **"Import"**

### 2.3 Configurer le projet

Vercel détectera automatiquement que c'est un projet React. Les paramètres par défaut devraient être :

- **Framework Preset** : `Create React App` (détecté automatiquement)
- **Root Directory** : `./` (racine)
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `build` (automatique)

**⚠️ Ne changez rien**, c'est déjà bien configuré !

### 2.4 Ajouter les variables d'environnement

Dans la section **"Environment Variables"**, cliquez sur **"Add"** et ajoutez :

| Variable | Valeur |
|----------|--------|
| `EMAIL_USER` | Votre adresse Gmail (ex: `votre.email@gmail.com`) |
| `EMAIL_PASS` | Le mot de passe d'application Gmail (les 16 caractères) |
| `NODE_ENV` | `production` |

**⚠️ Important** : Ne partagez JAMAIS ces valeurs publiquement !

### 2.5 Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes que Vercel déploie votre projet
3. ✅ **C'est fait !** Vous verrez une URL comme :
   ```
   https://portfolio-aziz.vercel.app
   ```

---

## 🎨 Étape 3 : Mettre à jour le Frontend (optionnel)

Si vous utilisez le backend Node.js au lieu d'EmailJS, mettez à jour `src/components/Contact.js` :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.user_name.value,
        email: e.target.user_email.value,
        message: e.target.message.value
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      showNotification("✅ Message sent successfully!", 'success');
      e.target.reset();
    } else {
      showNotification("❌ Failed to send message. Please try again.", 'error');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    showNotification("❌ Failed to send message. Please try again.", 'error');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 🔄 Déploiement automatique

**La meilleure partie** : À chaque fois que vous poussez du code sur GitHub, Vercel redéploiera automatiquement votre site !

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push origin main
```

→ Vercel déploiera automatiquement les changements en 1-2 minutes !

---

## 🌍 URL personnalisée (optionnel)

1. Dans Vercel Dashboard, allez dans **Settings** > **Domains**
2. Ajoutez votre propre domaine (si vous en avez un)
3. Ou utilisez le domaine Vercel fourni gratuitement

---

## ✅ Tester votre déploiement

1. Visitez votre URL Vercel : `https://votre-projet.vercel.app`
2. Testez le formulaire de contact
3. Vérifiez que vous recevez les emails

---

## 📊 Voir les logs

1. Allez dans Vercel Dashboard
2. Cliquez sur votre projet
3. Allez dans l'onglet **"Logs"**
4. Vous verrez toutes les erreurs et logs en temps réel

---

## 🆘 Dépannage

### Le déploiement échoue
- Vérifiez les logs dans Vercel Dashboard
- Assurez-vous que `npm run build` fonctionne localement
- Vérifiez que toutes les variables d'environnement sont définies

### Les emails ne sont pas envoyés
- Vérifiez que `EMAIL_USER` et `EMAIL_PASS` sont correctement définis
- Vérifiez que vous utilisez un mot de passe d'application Gmail (pas votre mot de passe normal)
- Consultez les logs dans Vercel Dashboard > Logs

### L'API ne fonctionne pas
- Vérifiez que le fichier `api/send-email.js` existe
- Les routes API doivent commencer par `/api/`

---

## 🎉 C'est tout !

Votre portfolio est maintenant déployé et toujours en ligne sur Vercel, connecté directement à GitHub !

**Avantages Vercel vs Render :**
- ✅ Toujours actif (pas de réveil)
- ✅ Plus rapide
- ✅ Déploiement automatique depuis GitHub
- ✅ 100% gratuit pour les projets personnels

---

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Déploiement React sur Vercel](https://vercel.com/docs/frameworks/create-react-app)
- [Variables d'environnement Vercel](https://vercel.com/docs/environment-variables)

---

**Besoin d'aide ?** Consultez les logs dans Vercel Dashboard ou la documentation Vercel.

