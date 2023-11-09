# kartvizit-app

****
- [EN : Description :book: :leftwards_arrow_with_hook:](#en)  
- [TR : Açıklama :book: :leftwards_arrow_with_hook:](#tr)
****

## Summer Internship Business Card Application and Docker

*   ### Project Purpose and Goals:
    
    The purpose of this project is to learn enterprise software development processes and clean code writing principles. For this purpose, I have developed an application where you can save your business cards securely and access them quickly after registering and logging in to the system. The goals of the project are:
    
    *   \* Implementation of enterprise software development processes.
    *   \* Project development with Agile methodology and Scrum.
    *   \* Application of clean code writing principles.
    *   \* Dockerization of the application.
    *   \* Creating an error-free and fast-running application.
*   ### Adopted Software Development Methodology:
    
    The Scrum model, one of the Agile methodologies, will be used in the project. Scrum is a model that allows managing the project development process in a more flexible and iterative way. The Scrum model divides the project into small parts, that is, sprints, and allows work to be done on predetermined tasks in each sprint. The main features of the Scrum model are: Product owner: The person designated as the product owner in the project determines the user requirements and directs the development process by determining the priority order of the sprints. Scrum Master: The person who manages the Scrum practices of the project and ensures that the team runs smoothly. Their duties include removing obstacles, supporting the team and optimizing the process. Development Team: Team members responsible for the realization of the project. Roles such as Back-End and Front-End developers and database specialists may be included in this team. In the Scrum model, project development is carried out iteratively. Each sprint covers a period of time, usually ranging from 1 to 2 weeks. Sprint planning meetings are held before each sprint and the team is expected to achieve the goals throughout the sprint. At the end of the sprint, the work accomplished is reviewed and the feedback of user/team members is taken into account. Within the scope of this project, sprints will be created using the Scrum model, tasks will be determined and the process will be reviewed regularly. In this way, project progress will be monitored, flexibility and customer focus will be provided, and the development process will be easier to optimize.
    
*   ### Technology and Languages Used in the Project:
    
    *   Angular - Angular CLI
    *   Node.js(JavaScript)-Express
    *   MongoDB
    *   Docker
    *   Bootstrap
    *   SCSS
    *   HTML
    *   JavaScript
*   ### \-LOCAL- Project Removal Steps:
    
    We need the*   **npm** package manager. Install the npm package manager from the Node.js website.
    *   Open the command terminal under the \`business card-backend-app\` folder and start it.
    *   Run the npm install command.
    *   Run the npm run serve command.
    *   BackEnd will run at localhost:3000 by default.
    *   BackEnd - To connect to the database (MongoDb), you can enter your own database connection address in the connectionString in the app.config.js file.
    *   Run \`cmd\` as administrator. Enter the command \`npm install -g typescript\`.
    *   Run \`cmd\` as administrator. Enter the command \`npm install -g @angular/cli\`.
    *   Open the command terminal under the \`business-card-frontend-app\` folder and start it.
    *   Run the npm install command.
    *   Run ng serve
    *   FrontEnd will run at localhost:4200 by default.
    *   To access the BackEnd, make sure that the BASE\_URL address under the config.backend.js file is the same as the address where the Back-End is running. By default it will run at localhost:3000.
    *   Note: if you want, you can build the project with docker and run it via docker:  
        \`docker build -t my-angular-app-businesscard\` under \`businesscard-frontend-app\` folder. Run the \` command.  
        Run the \`docker run -p 4200:4200 my-angular-app-businesscard\` command under the \`businesscard-frontend-app\` folder.  
        Under \`businesscard-backend-app\` folder \`docker build -t my-backend-app-businesscard. Run the \` command.  
        Run the \`docker run -p 3000:3000 my-backend-app-businesscard\` command under the \`businesscard-backend-app\` folder.  
        
*   ### Features of the Application:
    
    *   User Registration
    *   User Login
    *   Adding a Business Card
    *   Business Card Editing
    *   Deleting a Business Card

*   ### Images from the Program:

    * ![](/img/1.png) Login - Process Bar Will Be Active Until The Process Is Completed.
    * ![](/img/2.png) Register - If the form does not comply with the rules, the button will be disabled. - Process Bar Will Be Active Until The Process Is Completed.
    * ![](/img/3.png) Card Update - If the form does not comply with the rules, the button will be disabled. - Process Bar Will Be Active Until The Process Is Completed.
    * ![](/img/4.png) Update Successful
    * ![](/img/5.png) Adding a Card - If the form does not comply with the rules, the button will be disabled. - Process Bar Will Be Active Until The Process Is Completed.
    * ![](/img/6.png) Adding Card Successful
    * ![](/img/7.png) Card Deletion - Process Bar Will Be Active Until The Process Is Completed.
    * ![](/img/8.png) Card Deletion Successful
    
    ## Yaz Stajı Kartvizit Uygulaması ve Docker
    
*  ### Proje Amacı ve Hedefleri:
        
    Bu projenin amacı, kurumsal yazılım geliştirme süreçlerini ve temiz kod yazma prensiplerini öğrenmektir. Bu amaç doğrultusunda, sisteme kayıt olup giriş yaptıktan sonra kartvizitlerinizi güvenli bir şekilde kayıt edebileceğiniz ve hızlı bir şekilde ulaşabileceğiniz bir uygulama geliştirdim. Projenin hedefleri şunlardır:
        
    *   \* Kurumsal yazılım geliştirme süreçlerinin uygulanması.
    *   \* Agile metodolojisi ve Scrum ile proje gelişitirilmesi.
    *   \* Temiz kod yazma prensiplerinin uygulanması.
    *   \* Uygulamanın Dockerize edilmesi.
    *   \* Hatasız ve hızlı çalışan bir uygulama ortaya konması.

*  ### Benimsenen Yazılım Geliştirme Metodolojisi:
        
    Projede Agile metodolojilerinden Scrum modeli kullanılacaktır. Scrum, proje geliştirme sürecini daha esnek ve iteratif bir şekilde yönetmeye olanak sağlayan bir modeldir. Scrum modeli projeyi küçük parçalara yani sprintlere böler ve her sprintte önceden belirlenmiş işler üzerinde çalışma yapılmasına olanak sağlar. Scrum modelinin temel özellikleri şunlardır: Ürün sahibi: Projede ürün sahibi olarak belirlenen kişi kullanıcı gereksinimlerini belirler ve sprintlerin öncelik sırasını belirleyerek geliştirme sürecine yön verir. Scrum Master: Projenin Scrum uygulamalarını yöneten ve takımın sorunsuz bir şekilde çalışmasını sağlayan kişidir. Engelleri kaldırmak takımı desteklemek ve süreci optimize etmek gibi görevleri vardır. Geliştirme Takımı: Projenin gerçekleştirilmesinden sorumlu olan ekip üyeleridir. Back-End ve Front-End geliştiriciler veri tabanı uzmanı gibi roller bu takımda yer alabilir. Scrum modelinde, projenin geliştirilmesi iteratif bir şekilde gerçekleştirilir. Her sprint, genellikle 1 ila 2 hafta arasında değişen bir zaman dilimini kapsar. Her sprint öncesinde sprint planlama toplantıları yapılır ve sprint boyunca takımın hedefleri gerçekleştirmesi beklenir. Sprint sonunda gerçekleştirilen işler gözden geçirilir ve kullanıcı/ekip üyelerinin geri bildirimleri dikkate alınır. Bu proje kapsamında, Scrum modeli kullanılarak sprintler oluşturulacak, işler belirlenecek ve süreç düzenli olarak gözden geçirilecektir Bu sayede proje ilerlemesi takip edilecek, esneklik ve müşteri odaklılık sağlanacak ve geliştirme süreci optimize edilmesi kolaylaşacaktır.
        
*  ### Projede Kullanılan Teknoloji Ve Diller:
        
    *   Angular - Angular CLI
    *   Node.js(JavaScript)-Express
    *   MongoDB
    *   Docker
    *   Bootstrap
    *   SCSS
    *   HTML
    *   JavaScript
*  ### \-LOCAL- Proje Ayağa Kaldırma Adımları:
        
    *   **npm** paket yöneticisine ihtiyacımız var. Node.js web sitesinden npm paket yöneticisini kurun.
    *   \`kartvizit-backend-app\` klasörü altında komut terminali açın başlatın.
    *   npm install komutunu çalıştırın.
    *   npm run serve komutunu çalıştırın.
    *   BackEnd default olarak localhost:3000 adresinde çalışacaktır.
    *   BackEnd - Veritabanı (MongoDb) bağlantısını yapmak için app.config.js dosyası içindeki connectionString'e kendi veritabanı bağlantı adresenizini girebilirsiniz.
    *   \`cmd\` yi yönetici olarak çalıştırın. \`npm install -g typescript\` komutunu girin.
    *   \`cmd\` yi yönetici olarak çalıştırın. \`npm install -g @angular/cli\` komutunu girin.
    *   \`kartvizit-frontend-app\` klasörü altında komut terminali açın başlatın.
    *   npm install komutunu çalıştırın.
    *   ng serve komutunu çalıştırın
    *   FrontEnd default olarak localhost:4200 adresinde çalışacaktır.
    *   BackEnd'e erişebilmek için config.backend.js doyası altındaki BASE\_URL adresinin Back-End'in çalıştığı adres ile aynı olduğundan emin olun. Default olarak localhost:3000 adresinde çalışacaktır.
    *   Not: isterseniz projeyi docker ile build edip docker üzerinden çalıştırabilirsiniz bunun için:  
        \`kartvizit-frontend-app\` klasörü altında \`docker build -t my-angular-app-kartvizit . \` komutunu çalıştırın.  
        \`kartvizit-frontend-app\` klasörü altında \`docker run -p 4200:4200 my-angular-app-kartvizit\` komutunu çalıştırın.  
        \`kartvizit-backend-app\` klasörü altında \`docker build -t my-backend-app-kartvizit . \` komutunu çalıştırın.  
        \`kartvizit-backend-app\` klasörü altında \`docker run -p 3000:3000 my-backend-app-kartvizit\` komutunu çalıştırın.  
            
*  ### Uygulamanın Özellikleri:
        
    *   Kullanıcı Kayıt
    *   Kullanıcı Giriş
    *   Kartvizit Ekleme
    *   Kartvizit Düzenleme
    *   Kartvizit Silme
      
*  ### Programdan Görseller:
    *   ![](/img/1.png) Giriş Yap - İşlem Tamamlanan Kadar Process Bar Aktif Olur.
    *   ![](/img/2.png) Kayıt Ol - Form kurallara uygun değilde buton disabled olur. - İşlem Tamamlanan Kadar Process Bar Aktif Olur.
    *   ![](/img/3.png) Kart Güncelleme - Form kurallara uygun değilde buton disabled olur. - İşlem Tamamlanan Kadar Process Bar Aktif Olur.
    *   ![](/img/4.png) Güncelleme Başarılı
    *   ![](/img/5.png) Kart Ekleme - Form kurallara uygun değilde buton disabled olur. - İşlem Tamamlanan Kadar Process Bar Aktif Olur.
    *   ![](/img/6.png) Kart Ekeleme Başarılı
    *   ![](/img/7.png) Kart Silme - İşlem Tamamlanan Kadar Process Bar Aktif Olur.
    *   ![](/img/8.png) Kart Silme Başarılı
