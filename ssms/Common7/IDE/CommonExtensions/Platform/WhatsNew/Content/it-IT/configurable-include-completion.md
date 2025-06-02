---
description: La configurazione di Includi completamento consente di controllare quali intestazioni vengono visualizzate nell'elenco Includi completamento.
thumbnailImage: ../media/IncludeStyleSuggestionsSetting-thumb.png
area: C++
featureId: ConfigurableIncludeCompletion
title: Includi completamento configurabile
devComUrl: https://developercommunity.visualstudio.com/t/Include--is-now-behaving-the-same-as-/10538420

---


È ora possibile controllare quali intestazioni vengono visualizzate nell'elenco Includi completamento quando si digita `#include`.

L'impostazione dell'elenco a discesa in **Strumenti > Opzioni > Editor di testo > C/C++ > IntelliSense > Includi stile per suggerimenti** ora incide sia sull'inclusione dei suggerimenti sia sull'inclusione del completamento, con i seguenti comportamenti precisi:

- **Linee guida di base (impostazione predefinita)**: usa le virgolette per i percorsi relativi e le parentesi angolari per tutto il resto.
- **Modalità virgolette**: usa le virgolette per tutte le intestazioni, tranne quelle standard che sono tra parentesi angolari.
- **Modalità parentesi angolari**: usa le parentesi angolari per tutte le intestazioni che fanno parte del percorso di inclusione.

![Impostazione Includi stile per suggerimenti](../media/IncludeStyleSuggestionsSetting.png)

In precedenza, tutte le intestazioni (tranne quelle relative) venivano visualizzate nei suggerimenti indipendentemente dalla sintassi usata. Con questo aggiornamento, è possibile perfezionare il modo in cui vengono visualizzati i suggerimenti delle intestazioni quando si usa `#include <> and #include ""`.
