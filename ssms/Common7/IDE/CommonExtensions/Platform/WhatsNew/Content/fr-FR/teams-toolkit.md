---
description: Teams Toolkit a ajouté de nouveaux modèles de projet pour la création d’agents.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Mises à jour de la boîte à outils Teams

---


### Créer un agent déclaratif

Nous sommes heureux d’annoncer que cette version de Teams Toolkit propose de nouveaux modèles de projet pour la création d’agents déclaratifs pour Microsoft Copilot.

![Créer un projet DA](../media/ttk_da_create.png)

Vous pouvez créer un agent déclaratif avec ou sans action. Vous pouvez choisir de définir de nouvelles API ou d'utiliser les API existantes pour effectuer des tâches ou récupérer des données.

Utilisez Teams Toolkit pour déboguer et afficher un aperçu de vos agents déclaratifs dans Microsoft Copilot.

### Activation du débogage en un seul clic
Dans les versions précédentes, lorsque les utilisateurs déboguaient une solution générée à l'aide de Teams Toolkit, ils devaient utiliser la commande **Prepare Teams app dependency** avant de déboguer le projet. Cette commande déclenchait Teams Toolkit pour aider les développeurs à créer des ressources essentielles au débogage, telles que l'enregistrement ou la mise à jour de l'application Teams.

Pour améliorer l'expérience de débogage et la rendre plus intuitive pour les utilisateurs de Visual Studio, nous avons supprimé cette étape et activé l'expérience de débogage en un clic. Désormais, vous pouvez cliquer directement sur le bouton de débogage sans aucune étape de préparation. Cependant, si vous avez apporté des modifications à votre application Teams entre deux événements de débogage et que vous avez besoin de mettre à jour votre application Teams, il reste une option pour le faire.
Nous vous proposons deux profils de débogage :

![profils de débogage](../media/ttk_debug_profiles.png)

- **Débogage avec mise à jour de l'application Teams :** Sélectionnez le **profil par défaut Microsoft Teams (navigateur)** si vous avez apporté des modifications à votre appli Teams pour vous assurer que les mises à jour sont appliquées.
- **Débogage sans mise à jour de l'application Teams** : Choisissez le second profil **Microsoft Teams (navigateur) (skip update Teams app)** pour ne pas mettre à jour les ressources de l'app Teams, ce qui allège et accélère le débogage.

### Mettre à niveau vers .NET 9

En outre, dans cette version, Teams Toolkit a actualisé tous les modèles de projet pour prendre en charge .NET 9.

![Prise en charge de .net9](../media/ttk_net9.png)

**Codez bien !**  
*L’équipe de Teams Toolkit*
