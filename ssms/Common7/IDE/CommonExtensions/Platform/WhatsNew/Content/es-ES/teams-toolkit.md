---
description: En el Kit de herramientas de Teams se han agregado nuevas plantillas de proyectos para crear agentes.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Actualizaciones del Kit de herramientas de Teams

---


### Crear un agente declarativo

Nos complace anunciar que en esta versión del Kit de herramientas de Teams se han agregado plantillas de proyecto para crear agentes declarativos para Microsoft Copilot.

![creación de un proyecto de DA](../media/ttk_da_create.png)

Puede crear un agente declarativo con o sin una acción. Se puede elegir entre definir nuevas APIs o usar las existentes para realizar tareas o recuperar datos.

Use el Kit de herramientas de Teams para depurar y obtener una vista previa de los agentes declarativos en Microsoft Copilot.

### Habilitar depuración rápida con un solo clic
En versiones anteriores, cuando los usuarios depuraban cualquier solución generada con el Kit de herramientas de Teams, necesitaban usar el comando **Prepare Teams app dependency** antes de depurar el proyecto. Este comando activaba el Kit de herramientas de Teams para que los desarrolladores pudieran crear recursos esenciales para la depuración, como registrar o actualizar la aplicación de Teams.

Para mejorar la forma de usar la depuración y hacer que sea más intuitiva para los usuarios de Visual Studio, hemos quitado este paso y hemos habilitado una función de depuración con un solo clic. Ahora, puede hacer clic directamente en el botón depurar sin realizar los pasos de preparación. Sin embargo, si ha realizado modificaciones en la aplicación de Teams entre dos eventos de depuración y necesita actualizar la aplicación de Teams, sigue habiendo una opción para hacerlo.
Ofrecemos dos perfiles de depuración:

![perfiles de depuración](../media/ttk_debug_profiles.png)

- **Depurar con la actualización de la aplicación de Teams**: seleccione el perfil predeterminado **Microsoft Teams (navegador)** si ha realizado modificaciones en la aplicación de Teams para garantizar que se aplican las actualizaciones.
- **Depurar sin actualizar la aplicación de Teams**: elija el segundo perfil **Microsoft Teams (navegador) (omitir actualización de la aplicación de Teams)** para saltarse la actualización de los recursos de la aplicación de Teams, haciendo que la depuración sea más ligera y rápida.

### Actualice a .NET 9.

Asimismo, en esta versión del Kit de herramientas de Teams se han actualizado todas las plantillas de proyecto para poder soportar .NET 9.

![compatibilidad con .net9](../media/ttk_net9.png)

**Disfrute programando.**  
*El equipo del Kit de herramientas de Teams*
