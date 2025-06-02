---
description: Teams 工具組已新增新的專案範本用於建置代理程式。
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Teams 工具組更新

---


### 建立宣告式代理程式

我們很高興宣佈在這個版本中，Teams 工具組已新增專案範本，用於建置適用於 Microsoft Copilot 的宣告式代理程式。

![建立 DA 專案](../media/ttk_da_create.png)

您可以使用或不使用動作來建立宣告式代理程式。 您可以選擇定義新的 API，或使用現有的 API 來執行工作或擷取資料。

使用 Teams 工具組偵錯及預覽您在 Microsoft Copilot 中的宣告式代理程式。

### 啟用順暢的單鍵偵錯
在舊版本中，當使用者對使用 Teams 工具組產生的任何解決方案進行偵錯時，他們必須先使用命令**準備 Teams 應用程式相依性**，再對專案進行偵錯。 此命令會觸發 Teams 工具組，協助開發人員建立必要的資源以進行偵錯，例如註冊或更新 Teams 應用程式。

為了增強偵錯體驗，並使 Visual Studio 對於使用者更為直覺化，我們已移除此步驟並啟用單鍵偵錯體驗。 現在，您可以直接按一下偵錯按鈕，不需任何準備步驟。 不過，如果您在兩個偵錯事件之間對 Teams 應用程式進行編輯，而且需要更新 Teams 應用程式，仍然有選項可以執行。
我們提供兩個偵錯設定檔：

![偵錯設定檔](../media/ttk_debug_profiles.png)

- **更新 Teams 應用程式的偵錯**：如果您對 Teams 應用程式進行編輯以確保套用更新，請選取預設設定檔 **Microsoft Teams (瀏覽器)**。
- **不更新 Teams 應用程式的偵錯**：選擇第二個設定檔 **Microsoft Teams (瀏覽器) (略過更新 Teams 應用程式)** 以略過更新 Teams 應用程式資源，讓偵錯負擔更輕且更快速。

### 升級至 .NET 9

此外，在此版本中，Teams 工具組已重新整理所有專案範本以支援 .NET 9。

![.net9 支援](../media/ttk_net9.png)

**祝各位程式撰寫愉快！**  
*Teams 工具組團隊*
