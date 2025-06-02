---
description: La configuración de la finalización include permite controlar qué encabezados aparecen en la lista de finalización.
thumbnailImage: ../media/IncludeStyleSuggestionsSetting-thumb.png
area: C++
featureId: ConfigurableIncludeCompletion
title: Finalización Include configurable
devComUrl: https://developercommunity.visualstudio.com/t/Include--is-now-behaving-the-same-as-/10538420

---


Ahora se pueden controlar los encabezados que aparecen en la lista de finalización escribiendo `#include`.

La opción desplegable en **Herramientas > Opciones > Editor de texto > C/C++ > IntelliSense > Estilo de include para sugerencias** ahora afecta tanto a las sugerencias de include como al completado con include, con las siguientes acciones específicas:

- **Reglas básicas (predeterminado):**: usa comillas para rutas de acceso relativas y corchetes angulares para todo lo demás.
- **Modo de comillas**: usa comillas para todos los encabezados excepto los encabezados estándar, que usan corchetes angulares.
- **Modo corchetes angulares**: se usan corchetes angulares para todos los encabezados que forman parte de la ruta de acceso include.

![Estilo de include para la configuración de sugerencias](../media/IncludeStyleSuggestionsSetting.png)

Anteriormente, todos los encabezados (excepto los relativos) aparecían en sugerencias, fuera cual fuera la sintaxis usada. Con esta actualización, se puede especificar más en detalle cómo aparecerán las sugerencias de encabezados al usar `#include <> and #include ""`.
