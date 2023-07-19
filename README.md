# kartvizit-app
<h3 align="center" color="Darkblue">Yaz Stajı Kartvizit Uygulaması ve Docker</h5>

<ol>
<li>
      <h3 color="Red">Proje Amacı ve Hedefleri:</h3>
      <p>Bu projenin amacı, kurumsal yazılım geliştirme süreçlerini ve temiz kod yazma prensiplerini öğrenmektir. Bu amaç doğrultusunda, sisteme kayıt olup giriş yaptıktan sonra kartvizitlerinizi güvenli bir şekilde kayıt edebileceğiniz ve hızlı bir şekilde ulaşabileceğiniz bir uygulama geliştirdim. Projenin hedefleri şunlardır:</p>
      <ul>
        <li>* Kurumsal yazılım geliştirme süreçlerinin uygulanması.</li>
        <li>* Agile metodolojisi ve Scrum ile proje gelişitirilmesi.</li>
        <li>* Temiz kod yazma prensiplerinin uygulanması.</li>
        <li>* Uygulamanın Dockerize edilmesi.</li>
        <li>* Hatasız ve hızlı çalışan bir uygulama ortaya konması.</li>
      </ul>
  </li>
  <li>
      <h3 color="Red">Benimsenen Yazılım Geliştirme Metodolojisi:</h3>
      <p>Projede Agile metodolojilerinden Scrum modeli kullanılacaktır. Scrum, proje geliştirme sürecini daha esnek ve iteratif bir şekilde yönetmeye olanak sağlayan bir modeldir. Scrum modeli projeyi küçük parçalara yani sprintlere böler ve her sprintte önceden belirlenmiş işler üzerinde çalışma yapılmasına olanak sağlar.

Scrum modelinin temel özellikleri şunlardır:

	Ürün sahibi: Projede ürün sahibi olarak belirlenen kişi kullanıcı gereksinimlerini belirler ve sprintlerin öncelik sırasını belirleyerek geliştirme sürecine yön verir.

	Scrum Master: Projenin Scrum uygulamalarını yöneten ve takımın sorunsuz bir şekilde çalışmasını sağlayan kişidir. Engelleri kaldırmak takımı desteklemek ve süreci optimize etmek gibi görevleri vardır.

	Geliştirme Takımı: Projenin gerçekleştirilmesinden sorumlu olan ekip üyeleridir. Back-End ve Front-End geliştiriciler veri tabanı uzmanı gibi roller bu takımda yer alabilir.

Scrum modelinde, projenin geliştirilmesi iteratif bir şekilde gerçekleştirilir. Her sprint, genellikle 1 ila 2 hafta arasında değişen bir zaman dilimini kapsar. Her sprint öncesinde sprint planlama toplantıları yapılır ve sprint boyunca takımın hedefleri gerçekleştirmesi beklenir. Sprint sonunda gerçekleştirilen işler gözden geçirilir ve kullanıcı/ekip üyelerinin geri bildirimleri dikkate alınır.

Bu proje kapsamında, Scrum modeli kullanılarak sprintler oluşturulacak, işler belirlenecek ve süreç düzenli olarak gözden geçirilecektir Bu sayede proje ilerlemesi takip edilecek, esneklik ve müşteri odaklılık sağlanacak ve geliştirme süreci optimize edilmesi kolaylaşacaktır.</p>
  </li>
  <li>
      <h3 color="Red">Projede Kullanılan Teknoloji Ve Diller:</h3>
      <ul>
        <li>Angular - Angular CLI</li>
        <li>Node.js(JavaScript)-Express</li>
	<li>MongoDB</li>
        <li>Docker</li>
        <li>HTML</li>
        <li>SCSS</li>
        <li>JavaScript</li>
      </ul>
  </li>
  <li>
      <h3 color="Red"> -LOCAL- Proje Ayağa Kaldırma Adımları:</h3>
      <ul>
        <li><strong>npm</strong> paket yöneticisine ihtiyacımız var. Node.js web sitesinden npm paket yöneticisini kurun.</li>
        <li>`kartvizit-backend-app` klasörü altında komut terminali açın başlatın.</li>
        <li>npm install komutunu çalıştırın.</li>
        <li>npm run serve komutunu çalıştırın.</li>   
      	<li>BackEnd default olarak localhost:3000 adresinde çalışacaktır.</li>
      	<li>BackEnd - Veritabanı (MongoDb) bağlantısını yapmak için app.config.js dosyası içindeki connectionString'e kendi veritabanı bağlantı adresenizini girebilirsiniz.</li>
        <li>`cmd` yi yönetici olarak çalıştırın. `npm install -g typescript` komutunu girin.</li>
        <li>`cmd` yi yönetici olarak çalıştırın. `npm install -g @angular/cli` komutunu girin.</li>
      	<li>`kartvizit-frontend-app` klasörü altında komut terminali açın başlatın.</li>
        <li>npm install komutunu çalıştırın.</li>
        <li>ng serve komutunu çalıştırın</li>  
        <li>FrontEnd default olarak localhost:4200 adresinde çalışacaktır.</li>
      	<li>BackEnd'e erişebilmek için config.backend.js doyası altındaki BASE_URL adresinin Back-End'in çalıştığı adres ile aynı olduğundan emin olun. Default olarak localhost:3000 adresinde çalışacaktır.</li>
	<li>Not: isterseniz projeyi docker ile build edip docker üzerinden çalıştırabilirsiniz bunun için:<br>
	`kartvizit-frontend-app` klasörü altında `docker build -t my-angular-app-kartvizit . ` komutunu çalıştırın.<br>
	`kartvizit-frontend-app` klasörü altında `docker run -p 4200:4200 my-angular-app-kartvizit` komutunu çalıştırın.<br>
	`kartvizit-backend-app` klasörü altında `docker build -t my-backend-app-kartvizit . ` komutunu çalıştırın.<br>
	`kartvizit-backend-app` klasörü altında `docker run -p 3000:3000 my-backend-app-kartvizit` komutunu çalıştırın.<br>
	</li>
      </ul>
  </li>
  <li>
      <h3 color="Red">Uygulamanın Özellikleri:</h3>
      <ul>        
        <li>Kullanıcı Kayıt</li>
        <li>Kullanıcı Giriş</li>
        <li>Kartvizit Ekleme</li>
        <li>Kartvizit Düzenleme</li>
        <li>Kartvizit Silme</li>
      </ul>
  </li>
  <li>
      <h3 color="Red">Programdan Görseller:</h3>
      <ul>        
        <li><img src="/img/1.png"> Mesajlaşma </li>
       <li><img src="/img/2.png"> Konum Arama </li>
       <li><img src="/img/3.png"> Konuma Göre Arkadaş Ekleme </li>
       <li><img src="/img/4.png"> Profil Sayfası Ve Bilgileri Güncelleme </li>
      </ul>
  </li>	
</ol>

