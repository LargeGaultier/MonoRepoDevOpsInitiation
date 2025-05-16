# MonoRepoDevOpsInitiation

Ce projet met en place un **workflow GitFlow** simple, des **Commits Conventionnels**, et des **hooks Git** pour garantir qualité et cohérence du code.

---

## 📑 Règles Git utilisées (GitFlow)

1. **Branches principales**  
   - `main` : branche de production, contient toujours la version stable publiée.  
   - `develop` : branche d’intégration continue, regroupe toutes les fonctionnalités prêtes.

2. **Branches fonctionnelles**  
   - `feature/xxx` : pour chaque nouvelle fonctionnalité ou amélioration, on crée une branche issue de `develop` :  
     ```bash
     git checkout -b feature/ma-fonctionnalite develop
     ```  
   - Une fois développée et testée, on ouvre une PR `feature/...` → `develop`, on valide via CI, review et merge.

3. **Releases & Hotfixes** (prêtes à être ajoutées)  
   - `release/x.y.z` pour préparer une nouvelle version.  
   - `hotfix/x.y.z` pour corriger rapidement un bug en production.

---

## ✨ Convention de commit suivie (Conventional Commits)

Tous les messages de commit doivent respecter la spécification **Conventional Commits** :

```text
<type>(<scope>?): <description>

<body>?

<footer>?```