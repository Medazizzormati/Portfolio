# 🔧 Dépannage du Formulaire de Contact

## ❌ Pourquoi le formulaire ne fonctionne pas ?

Le formulaire de contact utilise une **Serverless Function** sur Vercel qui nécessite une configuration.

---

## ✅ Solutions

### 1. **En Développement Local (npm start)**

Le formulaire **ne fonctionnera pas** en développement local car l'API `/api/send-email` nécessite un serveur backend.

**Solution temporaire pour tester :**
```bash
# Terminal 1 - Lancer le frontend
npm start

# Terminal 2 - Lancer le backend
npm run server
```

Le formulaire essaiera alors d'utiliser `http://localhost:5000/api/send-email`

---

### 2. **En Production (Vercel)**

Pour que le formulaire fonctionne sur Vercel, vous devez :

#### Étape 1 : Déployer sur Vercel
1. Allez sur https://vercel.com
2. Connectez votre dépôt GitHub
3. Déployez le projet

#### Étape 2 : Configurer les variables d'environnement

Dans Vercel Dashboard → Settings → Environment Variables, ajoutez :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `EMAIL_USER` | votre-email@gmail.com | Votre adresse Gmail |
| `EMAIL_PASS` | xxxx xxxx xxxx xxxx | Mot de passe d'application Gmail (16 caractères) |

#### Étape 3 : Obtenir le mot de passe d'application Gmail

1. Allez sur : https://myaccount.google.com/apppasswords
2. Activez l'**Authentification à deux facteurs** si ce n'est pas déjà fait
3. Sélectionnez "Application" : **Mail**
4. Sélectionnez "Appareil" : **Autre (Vercel)**
5. Cliquez sur **"Générer"**
6. **Copiez les 16 caractères** (ex: `abcd efgh ijkl mnop`)
7. Collez dans `EMAIL_PASS` sur Vercel

#### Étape 4 : Redéployer

Après avoir ajouté les variables d'environnement :
1. Allez dans Vercel Dashboard → Deployments
2. Cliquez sur les 3 points (...) du dernier déploiement
3. Cliquez sur **"Redeploy"**

---

## 🧪 Tester le formulaire

### En Local (avec backend)
```bash
npm run dev
```
→ Le formulaire devrait fonctionner sur `http://localhost:3000`

### En Production (Vercel)
1. Visitez votre site Vercel
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez votre boîte email : `mohamedaziz.zormati@polytechnicien.tn`

---

## 🔍 Vérifier les logs

### En Local
Les logs s'affichent dans le terminal où tourne le backend (`npm run server`)

### Sur Vercel
1. Allez dans Vercel Dashboard
2. Cliquez sur votre projet
3. Onglet **"Functions"**
4. Cliquez sur `/api/send-email`
5. Voir les logs en temps réel

---

## ⚠️ Erreurs courantes

### "Network error" ou "404"
- ❌ L'API n'est pas disponible
- ✅ Solution : Vérifiez que vous êtes sur Vercel et que les variables d'environnement sont configurées

### "500 Server Error"
- ❌ Variables d'environnement manquantes ou incorrectes
- ✅ Solution : Vérifiez `EMAIL_USER` et `EMAIL_PASS` sur Vercel

### "Failed to send email"
- ❌ Problème avec Gmail (mot de passe incorrect, 2FA non activé)
- ✅ Solution : Utilisez un mot de passe d'application, pas votre mot de passe normal

---

## 📧 Alternative : EmailJS (plus simple)

Si vous voulez une solution plus simple qui fonctionne immédiatement :

1. Créez un compte sur https://www.emailjs.com (gratuit)
2. Configurez un service email
3. Modifiez `Contact.js` pour utiliser EmailJS au lieu de l'API backend

---

## ✅ Vérification finale

Pour vérifier que tout fonctionne :

1. ✅ Projet déployé sur Vercel
2. ✅ Variables d'environnement `EMAIL_USER` et `EMAIL_PASS` configurées
3. ✅ Mot de passe d'application Gmail correct (16 caractères)
4. ✅ Authentification à deux facteurs activée sur Gmail
5. ✅ Redéploiement effectué après configuration

---

**Besoin d'aide ?** Consultez les logs dans Vercel Dashboard ou vérifiez les variables d'environnement.

