---
description: O Kit de Ferramentas do Teams adicionou novos modelos de projetos para agentes de criação.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Atualizações do Teams Toolkit

---


### Criar agente declarativo

Temos o prazer de anunciar que, nesta versão, o Kit de Ferramentas do Teams adicionou modelos de projeto para a criação de Agentes Declarativos para o Microsoft Copilot.

![criar um projeto DA](../media/ttk_da_create.png)

Você pode criar um Agente Declarativo com ou sem uma ação. Você pode optar por definir novas APIs ou utilizar as existentes para executar tarefas ou recuperar dados.

Use o Kit de Ferramentas do Teams para depurar e visualizar seus Agentes Declarativos no Microsoft Copilot.

### Ativar a depuração suave com um único clique
Nas versões anteriores, quando os usuários depuravam qualquer solução gerada usando o Kit de Ferramentas do Teams, era necessário usar o comando **Preparar dependência do aplicativo do Teams** antes de depurar o projeto. Esse comando acionava o Kit de Ferramentas do Teams para ajudar os desenvolvedores a criar recursos essenciais para depuração, como registrar ou atualizar o aplicativo Teams.

Para aprimorar a experiência de depuração e torná-la mais intuitiva para usuários do Visual Studio, removemos essa etapa e habilitamos a experiência de depuração com um único clique. Agora, é possível clicar diretamente no botão de depuração sem nenhuma etapa de preparação. No entanto, se você tiver feito edições em seu aplicativo Teams entre dois eventos de depuração e precisa atualizar seu aplicativo Teams, ainda existe uma opção para fazer isso.
Oferecemos dois perfis de depuração:

![perfis de depuração](../media/ttk_debug_profiles.png)

- **Depurar com a atualização do aplicativo Teams**: selecione o perfil padrão **Microsoft Teams (navegador)** se você tiver feito edições no aplicativo Teams para garantir que as atualizações sejam aplicadas.
- **Depurar sem atualizar o aplicativo Teams**: escolha o segundo perfil **Microsoft Teams (navegador) (ignorar a atualização do aplicativo Teams)** para ignorar a atualização dos recursos do aplicativo Teams, tornando a depuração mais leve e rápida.

### Atualizar para .NET 9

Além disso, nesta versão, o Kit de Ferramentas do Teams atualizou todos os modelos de projeto para oferecer suporte ao .NET 9.

![Suporte do .net9](../media/ttk_net9.png)

**Boa codificação!**  
*A equipe do kit de ferramentas do Teams*
