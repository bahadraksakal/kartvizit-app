# kartvizit-app

****
- [EN : Description :book: :leftwards_arrow_with_hook:](#en)  
- [TR : Açıklama :book: :leftwards_arrow_with_hook:](#tr)
****

#### [EN]
<h3 align="center" color="Darkblue">Summer Internship Business Card Application and Docker</h5>

<be>
<li>
       <h3 color="Red">Project Purpose and Goals:</h3>
       <p>The purpose of this project is to learn enterprise software development processes and clean code writing principles. For this purpose, I have developed an application where you can save your business cards securely and access them quickly after registering and logging in to the system. The goals of the project are:</p>
       <ul>
         <li>* Implementation of enterprise software development processes.</li>
         <li>* Project development with Agile methodology and Scrum.</li>
         <li>* Application of clean code writing principles.</li>
         <li>* Dockerization of the application.</li>
         <li>* Creating an error-free and fast-running application.</li>
       </ul>
   </li>
   <li>
       <h3 color="Red">Adopted Software Development Methodology:</h3>
       <p>The Scrum model, one of the Agile methodologies, will be used in the project. Scrum is a model that allows managing the project development process in a more flexible and iterative way. The Scrum model divides the project into small parts, that is, sprints, and allows work to be done on predetermined tasks in each sprint.

The main features of the Scrum model are:

Product owner: The person designated as the product owner in the project determines the user requirements and directs the development process by determining the priority order of the sprints.

Scrum Master: The person who manages the Scrum practices of the project and ensures that the team runs smoothly. Their duties include removing obstacles, supporting the team and optimizing the process.

Development Team: Team members responsible for the realization of the project. Roles such as Back-End and Front-End developers and database specialists may be included in this team.

In the Scrum model, project development is carried out iteratively. Each sprint covers a period of time, usually ranging from 1 to 2 weeks. Sprint planning meetings are held before each sprint and the team is expected to achieve the goals throughout the sprint. At the end of the sprint, the work accomplished is reviewed and the feedback of user/team members is taken into account.

Within the scope of this project, sprints will be created using the Scrum model, tasks will be determined and the process will be reviewed regularly. In this way, project progress will be monitored, flexibility and customer focus will be provided, and the development process will be easier to optimize.</p>
   </li>
   <li>
       <h3 color="Red">Technology and Languages Used in the Project:</h3>
       <ul>
         <li>Angular - Angular CLI</li>
         <li>Node.js(JavaScript)-Express</li>
<li>MongoDB</li>
         <li>Docker</li>
         <li>Bootstrap</li>
         <li>SCSS</li>
<li>HTML</li>
         <li>JavaScript</li>
       </ul>
   </li>
   <li>
       <h3 color="Red"> -LOCAL- Project Removal Steps:</h3>
       <ul>
         We need the <li><strong>npm</strong> package manager. Install the npm package manager from the Node.js website.</li>
         <li>Open the command terminal under the `business card-backend-app` folder and start it.</li>
         <li>Run the npm install command.</li>
         <li>Run the npm run serve command.</li>
       <li>BackEnd will run at localhost:3000 by default.</li>
       <li>BackEnd - To connect to the database (MongoDb), you can enter your own database connection address in the connectionString in the app.config.js file.</li>
         <li>Run `cmd` as administrator. Enter the command `npm install -g typescript`.</li>
         <li>Run `cmd` as administrator. Enter the command `npm install -g @angular/cli`.</li>
       <li>Open the command terminal under the `business-card-frontend-app` folder and start it.</li>
         <li>Run the npm install command.</li>
         <li>Run ng serve</li>
         <li>FrontEnd will run at localhost:4200 by default.</li>
       <li>To access the BackEnd, make sure that the BASE_URL address under the config.backend.js file is the same as the address where the Back-End is running. By default it will run at localhost:3000.</li>
<li>Note: if you want, you can build the project with docker and run it via docker:<br>
`docker build -t my-angular-app-businesscard` under `businesscard-frontend-app` folder. Run the ` command.<br>
Run the `docker run -p 4200:4200 my-angular-app-businesscard` command under the `businesscard-frontend-app` folder.<br>
Under `businesscard-backend-app` folder `docker build -t my-backend-app-businesscard. Run the ` command.<br>
Run the `docker run -p 3000:3000 my-backend-app-businesscard` command under the `businesscard-backend-app` folder.<br>
</li>
       </ul>
   </li>
   <li>
       <h3 color="Red">Features of the Application:</h3>
       <ul>
         <li>User Registration</li>
         <li>User Login</li>
         <li>Adding a Business Card</li>
         <li>Business Card Editing</li>
         <li>Deleting a Business Card</li>
       </ul>
   </li>
   <li>
### [Click For Images From The Program :leftwards_arrow_with_hook:](#Programdan-Görseller)  

****
****

#### [TR]

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
        <li>Bootstrap</li>
        <li>SCSS</li>
	<li>HTML</li>
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
	  
### Programdan Görseller:
	  
      <ul>        
        <li><img src="/img/1.png"> Giriş Yap -  İşlem Tamamlanan Kadar Process Bar Aktif Olur.</li>
       <li><img src="/img/2.png"> Kayıt Ol - Form kurallara uygun değilde buton disabled olur. -  İşlem Tamamlanan Kadar Process Bar Aktif Olur.</li>
       <li><img src="/img/3.png"> Kart Güncelleme - Form kurallara uygun değilde buton disabled olur. -  İşlem Tamamlanan Kadar Process Bar Aktif Olur.</li>
       <li><img src="/img/4.png"> Güncelleme Başarılı </li>
       <li><img src="/img/5.png"> Kart Ekleme - Form kurallara uygun değilde buton disabled olur. -  İşlem Tamamlanan Kadar Process Bar Aktif Olur.</li>
       <li><img src="/img/6.png"> Kart Ekeleme Başarılı </li>
       <li><img src="/img/7.png"> Kart Silme - İşlem Tamamlanan Kadar Process Bar Aktif Olur.</li>
       <li><img src="/img/8.png"> Kart Silme Başarılı </li>
      </ul>
  </li>	
</ol>

