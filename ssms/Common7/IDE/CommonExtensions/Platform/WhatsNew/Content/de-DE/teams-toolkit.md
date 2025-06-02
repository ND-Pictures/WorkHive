---
description: Teams Toolkit hat neue Projektvorlagen für die Erstellung von Agenten hinzugefügt.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Updates für das Teams-Toolkit

---


### Erstellen eines deklarativen Agents

Wir freuen uns, Ihnen mitteilen zu können, dass Teams Toolkit in dieser Version Projektvorlagen für die Erstellung deklarativer Agenten für Microsoft Copilot hinzugefügt hat.

![DA-Projekt erstellen](../media/ttk_da_create.png)

Sie können einen Declarative Agent mit oder ohne eine Aktion erstellen. Sie haben die Wahl, neue APIs zu definieren oder bestehende zu verwenden, um Aufgaben auszuführen oder Daten abzurufen.

Verwenden Sie Teams Toolkit, um Ihre deklarativen Agenten in Microsoft Copilot zu debuggen und eine Vorschau zu erstellen.

### Reibungsloses Debuggen mit nur einem Klick aktivieren
In früheren Versionen mussten Benutzer beim Debuggen einer Lösung, die mit dem Teams-Toolkit generiert wurde, den Befehl **Teams-App-Abhängigkeit vorbereiten** verwenden, bevor sie das Projekt debuggen. Mit diesem Befehl wurde das Teams-Toolkit ausgelöst, damit Entwickler wichtige Ressourcen für das Debuggen erstellen können, z. B. das Registrieren oder Aktualisieren der Teams-App.

Um die Debugerfahrung zu verbessern und für Visual Studio-Benutzer intuitiver zu machen, haben wir diesen Schritt entfernt und das Debuggen mit einem Klick aktiviert. Jetzt können Sie ohne Vorbereitungsschritte direkt auf die Debugschaltfläche klicken. Wenn Sie jedoch Änderungen an Ihrer Teams-App zwischen zwei Debugereignissen vorgenommen haben und Ihre Teams-App aktualisieren müssen, bleibt dies weiterhin möglich.
Wir bieten zwei Debugprofile an:

![Debugprofile](../media/ttk_debug_profiles.png)

- **Debuggen mit der Aktualisierung der Teams-App**: Wählen Sie das Standardprofil **Microsoft Teams (Browser)** aus, wenn Sie Änderungen an Ihrer Teams-App vorgenommen haben, um sicherzustellen, dass die Updates angewendet werden.
- **Debuggen ohne Aktualisieren der Teams-App**: Wählen Sie das zweite Profil **Microsoft Teams (Browser) (Update-Teams-App überspringen)** aus, um die Aktualisierung der Teams-App-Ressourcen zu überspringen, wodurch das Debuggen einfacher und schneller wird.

### Aktualisieren auf .NET 9

Darüber hinaus hat Teams Toolkit in dieser Version alle Projektvorlagen aktualisiert, um .NET 9 zu unterstützen.

![.net9-Support](../media/ttk_net9.png)

**Viel Spaß beim Programmieren!**  
*Das Teams Toolkit Team*
