---
description: W zestawie narzędzi Teams Toolkit dodano nowe szablony projektów do tworzenia agentów.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Aktualizacje zestawu narzędzi usługi Teams

---


### Tworzenie agenta deklaratywnego

Z przyjemnością informujemy, że w tej wersji zestaw narzędzi Teams Toolkit dodano szablony projektów do tworzenia deklaratywnych agentów dla usługi Microsoft Copilot.

![Tworzenie projektu DA](../media/ttk_da_create.png)

Możesz utworzyć agenta deklaratywnego z akcją lub bez akcji. Możesz zdefiniować nowe interfejsy API lub użyć istniejących do wykonywania zadań lub pobierania danych.

Debugowanie i wyświetlanie podglądu agentów deklaratywnych w rozwiązaniu Microsoft Copilot za pomocą zestawu narzędzi Teams.

### Włącz bezproblemowe debugowanie jednym kliknięciem
W poprzednich wersjach, gdy użytkownicy debugowali dowolne rozwiązanie wygenerowane przy użyciu zestawu narzędzi Teams Toolkit, musieli użyć polecenia **Przygotuj zależność aplikacji Teams** przed debugowaniem projektu. To polecenie uruchomiło zestaw narzędzi Teams Toolkit, aby ułatwić deweloperom tworzenie niezbędnych zasobów na potrzeby debugowania, takich jak rejestrowanie lub aktualizowanie aplikacji Teams.

Aby ulepszyć środowisko debugowania i uczynić je bardziej intuicyjnym dla użytkowników programu Visual Studio, usunęliśmy ten krok i włączyliśmy środowisko debugowania jednym kliknięciem. Teraz możesz bezpośrednio kliknąć przycisk debugowania bez żadnych kroków przygotowania. Jeśli jednak wprowadzono zmiany w aplikacji Teams między dwoma zdarzeniami debugowania i trzeba zaktualizować aplikację Teams, nadal istnieje opcja, aby to zrobić.
Oferujemy dwa profile debugowania:

![debugowanie profilów](../media/ttk_debug_profiles.png)

- **Debugowanie z aktualizowaniem aplikacji Teams**: wybierz domyślny profil **Microsoft Teams (przeglądarka)**, jeśli wprowadzono zmiany w aplikacji Teams, aby upewnić się, że aktualizacje są zastosowane.
- **Debugowanie bez aktualizowania aplikacji Teams**: wybierz drugi profil **Microsoft Teams (przeglądarka) (pomiń aktualizowanie aplikacji Teams)** aby pominąć aktualizowanie zasobów aplikacji Teams, co ułatwia i przyspiesza debugowanie.

### Uaktualnianie do platformy .NET 9

Ponadto w tej wersji zestawu narzędzi Teams Toolkit odnowiono wszystkie szablony projektów, aby obsługiwały platformę .NET 9.

![Obsługa platformy ,net9](../media/ttk_net9.png)

**Udanego kodowania!**  
*Zespół Teams Toolkit Team*
