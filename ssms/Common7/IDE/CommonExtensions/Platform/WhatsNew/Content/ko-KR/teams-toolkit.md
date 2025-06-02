---
description: Teams Toolkit은 에이전트를 구축할 수 있는 새로운 프로젝트 템플릿을 추가했습니다.
thumbnailImage: ../media/ttk_da_create-thumb.png
area: IDE
featureId: Teamstoolkit
title: Teams Toolkit 업데이트

---


### 선언적 에이전트 생성

이번 릴리스에서 Teams Toolkit은 Microsoft Copilot을 위한 선언적 에이전트를 구축할 수 있는 프로젝트 템플릿을 추가했다고 발표하게 되어 기쁩니다.

![DA 프로젝트 생성](../media/ttk_da_create.png)

작업을 사용하거나 사용하지 않고 선언적 에이전트를 만들 수 있습니다. 새로운 API를 정의하거나 기존의 API를 활용하여 작업을 수행하거나 데이터를 가져올 수 있습니다.

Teams Toolkit을 사용하여 Microsoft Copilot에서 선언적 에이전트를 디버그하고 미리 볼 수 있습니다.

### 원클릭 디버그 원활하게 활성화
이전 버전에서는 사용자가 Teams Toolkit을 사용하여 생성한 솔루션을 디버깅할 때, 프로젝트 디버깅 전에 **Teams 앱 종속성 준비** 명령을 사용해야 했습니다. 이 명령은 Teams Toolkit이 개발자가 디버깅에 필요한 필수 리소스(예: Teams 앱 등록 또는 업데이트)를 생성하도록 도왔습니다.

디버깅 경험을 향상시키고 Visual Studio 사용자에게 더 직관적인 환경을 제공하기 위해 이 단계를 제거하고 원클릭 디버깅 경험을 활성화했습니다. 이제 준비 단계 없이 디버그 버튼을 직접 클릭할 수 있습니다. 그러나 두 디버그 이벤트 사이에 Teams 앱을 수정하고 앱을 업데이트해야 하는 경우, 이를 수행할 수 있는 옵션은 여전히 남아 있습니다.
두 가지 디버그 프로필 제공:

![디버그 프로필](../media/ttk_debug_profiles.png)

- **Teams 앱 업데이트로 디버그**: Teams 앱을 수정한 경우 업데이트가 적용되도록 기본 프로필 **Microsoft Teams (브라우저)** 를 선택하세요.
- **Teams 앱 업데이트 없이 디버그**: Teams 앱 리소스 업데이트를 건너뛰고 디버깅을 더 가볍고 빠르게 만들려면 두 번째 프로필 **Microsoft Teams (브라우저) (Teams 앱 업데이트 건너뛰기)** 를 선택하세요.

### .NET 9로 업그레이드

또한, 이번 릴리스에서는 Teams Toolkit이 모든 프로젝트 템플릿을 새로 고쳐 .NET 9를 지원하도록 했습니다.

![.net9 지원](../media/ttk_net9.png)

**즐거운 코딩 되세요!**  
*Teams Toolkit 팀*
