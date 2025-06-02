---
description: Teams 工具包为生成代理添加了新的项目模板。
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Teams 工具包更新

---


### 创建声明式代理

我们很高兴地宣布，在此版本中，Teams 工具包添加了用于为 Microsoft Copilot 生成声明性代理的项目模板。

![创建 DA 项目](../media/ttk_da_create.png)

可以创建带有或不带有操作的声明性代理。 可以选择定义新的 API，或利用现有的 API来执行任务或检索数据。

使用 Teams 工具包在 Microsoft Copilot 中调试和预览声明性代理。

### 启用流畅的一键调试
在以前的版本中，当用户调试使用 Teams 工具包生成的任何解决方案时，需要在调试项目前使用**准备 Teams 应用依赖项**命令。 此命令会触发 Teams 工具包，以帮助开发人员创建调试所需的基本资源，如注册或更新 Teams 应用。

为了增强 Visual Studio 用户的调试体验并使其更加直观，我们取消了这一步骤，并启用了一键调试体验。 现在可以直接点击调试按钮，而无需任何准备步骤。 但是，如果在两次调试事件之间对 Teams 应用进行了编辑，并需要更新 Teams 应用，则仍有一个选项可以实现这一功能。
我们提供两种调试配置文件：

![调试配置文件](../media/ttk_debug_profiles.png)

- **调试时更新 Teams 应用**：如果对 Teams 应用进行了编辑，请选择默认配置文件 **Microsoft Teams（浏览器）**，以确保应用更新。
- **调试时不更新 Teams 应用**：选择第二个配置文件 **Microsoft Teams（浏览器）（跳过更新 Teams 应用）** 以跳过更新 Teams 应用资源，使调试更轻松、更快捷。

### 升级到 .NET 9

此外，在此版本中，Teams 工具包更新了所有项目模板，以支持 .NET 9。

![.net9 支持](../media/ttk_net9.png)

**祝你编码愉快！**  
*Teams 工具包团队*
