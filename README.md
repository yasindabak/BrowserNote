# BrowserNote
Next.js: Shadcn UI + Local Storage

<img width="1440" height="795" alt="browser" src="https://github.com/user-attachments/assets/d4554c57-0b45-4051-98ff-f3abcd4db486" />

# BrowserNote

-------------
BrowserNote, Next.js + TypeScript ile hazırlanmış bir web uygulaması şablonudur. Bu proje, tarayıcıda çalışacak hafif bir not alma uygulaması olarak düşünülebilir. (Bu README bir şablondur — proje özelliklerini ve kullanım detaylarını kendi uygulamana göre güncellemenizi öneririm.)

Özellikler (örnek / düzenlenecek)
---------------------------------
- Next.js + TypeScript tabanlı modern uygulama yapısı
- Duyarlı (responsive) kullanıcı arayüzü
- Notların tarayıcıda saklanması (localStorage veya IndexedDB ile)
- Basit arama ve filtreleme
- Tema desteği (açık / koyu mod)
- Kolay dağıtım (Vercel, Netlify, vs.)

Teknolojiler
------------
- Next.js
- TypeScript
- ShadcnUi
- CSS / (isteğe bağlı: Tailwind, Sass vb.)
- (Opsiyonel) Zustand / Redux / Context API — durum yönetimi
- (Opsiyonel) localStorage veya IndexedDB ile kalıcı depolama

Başlarken (lokal)
-----------------
1. Depoyu klonlayın:
   git clone https://github.com/yasindabak/BrowserNote.git
2. Proje dizinine gidin:
   cd BrowserNote
3. Bağımlılıkları yükleyin:
   - npm kullanıyorsanız:
     npm install
   - yarn kullanıyorsanız:
     yarn
   - pnpm kullanıyorsanız:
     pnpm install
4. Geliştirme sunucusunu başlatın:
   npm run dev
   Proje genellikle http://localhost:3000 adresinde çalışır.

Yayına Hazırlık / Build
-----------------------
- Üretim için build:
  npm run build
- Üretimi çalıştır:
  npm run start

Yayına (Deployment) Önerileri
----------------------------
- Vercel: Next.js projeleri için en kolay seçenek — GitHub repo bağlantısı ile otomatik deploy.
- Alternatif: Netlify veya kendi sunucunuzda Docker ile çalıştırma.

Ortam Değişkenleri
------------------
(Eğer proje .env değişkenleri kullanıyorsa burada listeleyin)
- NEXT_PUBLIC_API_URL — (örnek) API taban URL
- NODE_ENV — development | production

Proje Yapısı (örnek)
-------------------
- /pages — Next.js sayfaları
- /components — yeniden kullanılabilir React bileşenleri
- /styles — genel stil dosyaları
- /public — statik varlıklar
- /lib veya /utils — yardımcı fonksiyonlar

Testler ve Lint
---------------
- Lint:
  npm run lint
- Test (varsa):
  npm run test

Sorunlar / Feature Talepleri
----------------------------
Herhangi bir hata veya yeni özellik isteği için GitHub Issues kullanın.


Notlar
------
- Bu README örnek bir şablondur. Projeye özel kullanım talimatlarını, bağımlılık listesini, ortam değişkenlerini ve ekran görüntülerini ekleyerek özelleştirmenizi öneririm.
