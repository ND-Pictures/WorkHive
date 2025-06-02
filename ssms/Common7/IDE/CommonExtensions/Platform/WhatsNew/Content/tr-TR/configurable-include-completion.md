---
description: Ekleme tamamlamanın yapılandırılması, ekleme tamamlama listesinde hangi üst bilgilerin görüneceğini denetlemenizi sağlar.
thumbnailImage: ../media/IncludeStyleSuggestionsSetting-thumb.png
area: C++
featureId: ConfigurableIncludeCompletion
title: Yapılandırılabilir Ekleme Tamamlama
devComUrl: https://developercommunity.visualstudio.com/t/Include--is-now-behaving-the-same-as-/10538420

---


Artık `#include` yazdığınızda ekleme tamamlama listesinde hangi üst bilgilerin görüneceğini denetleyebilirsiniz.

**Araçlar > Seçenekler > Metin Düzenleyici > C/C++ > IntelliSense > Öneriler için stil ekle** altında açılan ayar artık aşağıdaki iyileştirilmiş davranışlarla hem önerileri dahil etmeyi hem de tamamlamayı dahil etmeyi etkiliyor:

- **Temel Yönergeler (Varsayılan)**: Göreli yollar için tırnak işaretleri ve diğer her şey için açılı ayraçlar kullanır.
- **Alıntı modu**: Açılı ayraç kullanan standart üst bilgiler dışındaki tüm üst bilgiler için tırnak işaretleri kullanır.
- **Açılı ayraç modu**: Ekleme yolunun parçası olan tüm üst bilgiler için açılı ayraçları kullanır.

![Öneri Ayarı için Stil Ekle](../media/IncludeStyleSuggestionsSetting.png)

Daha önce, kullanılan söz dizimine bakılmaksızın önerilerde tüm üst bilgiler (göreli olanlar hariç) görünüyordu. Bu güncelleştirmeyle, `#include <> and #include ""` kullanırken üst bilgi önerilerinin nasıl görüneceğini belirleyebilirsiniz.
