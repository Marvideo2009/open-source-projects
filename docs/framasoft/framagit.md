---
sidebar_position: 6
title: Framagit - Hébergement Git
---

# 🖥️ Framagit - Hébergement Git libre

[Framagit](https://framagit.org/) est une **alternative à GitHub**, basée sur **GitLab** et hébergée en France.

---

## 🎯 Pourquoi utiliser Framagit ?
✅ **Hébergement Git open-source** et sans pistage.  
✅ **Serveurs en France**, respectueux des données personnelles.  
✅ **Gestion complète des projets** : CI/CD, merge requests, wiki, etc.  
✅ **Compatible avec Git** : Fonctionne comme GitHub.  

---

## 📌 Comment utiliser Framagit ?
1. **Accède à** [https://framagit.org/](https://framagit.org/)
2. **Crée un compte** (nécessaire pour gérer des dépôts).
3. **Crée un nouveau projet** et ajoute ton code.
4. **Utilise Git pour pousser ton code** :
   ```sh
   git clone https://framagit.org/utilisateur/mon-projet.git
   cd mon-projet
   git add .
   git commit -m "Ajout initial"
   git push origin main
