---
description: La configuration de l'achèvement de l'inclusion vous permet de contrôler quels en-têtes apparaissent dans la liste d'achèvement de l'inclusion.
thumbnailImage: ../media/IncludeStyleSuggestionsSetting-thumb.png
area: C++
featureId: ConfigurableIncludeCompletion
title: Complétion d'inclusion configurable
devComUrl: https://developercommunity.visualstudio.com/t/Include--is-now-behaving-the-same-as-/10538420

---


Vous pouvez désormais contrôler les en-têtes qui apparaissent dans la liste d'inclusion lorsque vous tapez `#include`.

Le paramètre déroulant dans **Outils > Options > Éditeur de texte > C/C++ > IntelliSense > Inclure le style pour les suggestions** affecte maintenant à la fois les suggestions d'inclusion et l'achèvement de l'inclusion, avec les comportements affinés suivants :

- **Directives de base (par défaut)** : Utilise des guillemets pour les chemins relatifs et des crochets pour tout le reste.
- **Mode guillemets** : Utilise les guillemets pour tous les en-têtes, à l'exception des en-têtes standard, qui utilisent des crochets.
- **Mode crochets :** Utilise des crochets pour tous les en-têtes qui font partie du chemin d'inclusion.

![Style d'inclusion pour le paramétrage des suggestions](../media/IncludeStyleSuggestionsSetting.png)

Auparavant, tous les en-têtes (à l'exception des en-têtes relatifs) apparaissaient dans les suggestions, quelle que soit la syntaxe utilisée. Avec cette mise à jour, vous pouvez affiner la façon dont les suggestions d'en-têtes apparaissent lorsque vous utilisez `#include <> and #include ""`.
