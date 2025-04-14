<!DOCTYPE html>
<html>
<head>
    <title>Ürün Detay</title>
    <?php require_once('inc/head-product.php');?>
    <script type="text/javascript">
        $(document).ready(function(){
  $('.banner').bxSlider({    
  pager: false
  });  
  $('.prPhoto').bxSlider({
    pagerCustom: '#bx-pager' /*отображение превьюшек вместо точек*/
  });      
  $('.relPhoto').bxSlider({
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 7,
    moveSlides: 7,
    slideMargin: 10,
    ticker: false,
    speed: 1000,
    pager: false
  });          
});
$('#gallery').photobox('a',{
  loop: false 
});
    </script>
</head>
<body>
<?php require_once('inc/header.php');?>
<?php require_once('inc/banner.php');?>
<section class="way">
    <div class="container">
        <div class="col-md-12 fixed-padding-left">
            <div class="way-text">
                <article>
                    <a href="index.php">Anasayfa</a>&nbsp&nbsp ▶ &nbsp&nbsp <a href="dokumantasyon.php">regülatör</a>&nbsp&nbsp ▶ &nbsp&nbsp <a href="dokumantasyon.php">Servo Regülatörler</a>
                </article>
            </div>
        </div> 
    </div>
</section>
<section class="detail">
<div class="container">
<div class="col-md-12">
  <div class="col-xs-12 col-sm-6 fixed-padding-left" id="block-1">
    <div class="wrap">
        <a data-fancybox="gallery" href="assets/img/product1-1.png" "><i class="fa fa-search"></i></a>
         <a data-fancybox="gallery" href="assets/img/product1-1.png" "></i></a>
          <a data-fancybox="gallery" href="assets/img/product1-1.png" "></i></a>
      <ul class="prPhoto" id="gallery">
        <li>
          <img src="assets/img/product1-1.png"/>
          </a>
        </li>
        <li>
          <img src="assets/img/product1-1.png"/>
        </li>
        <li>
          <img src="assets/img/product1-1.png"/>
        </li>
      </ul>
      <div id="bx-pager" class="hidden-xs">
        <div class="col-md-4 ct">
        <a data-slide-index="0" href=""><img src="assets/img/product1-1.png"/></a>
       </div>
       <div class="col-md-4 ct">
        <a data-slide-index="1" href=""><img src="assets/img/product1-1.png"/></a>
    </div>
    <div class="col-md-4 ct">
        <a data-slide-index="2" href=""><img src="assets/img/product1-1.png"/></a>
    </div>
      </div>
    </div>
  </div>

<div class="Corporate-text-in col-md-6">
                <article class="contact-textx">
                    <legend>SERVO REGÜLATÖRLER</legend>
                    <p>
            Güç Elektroniği sektöründe edinilen yaklaşık 15 yıllık tecrübeyle kurulan GPS Endüstriyel, 2015 yılı itibariyle İstanbul Kıraç’ta 4.000m2'lik kapalı, 1000 m2 açık alana sahip fabrikasında hizmet vermeye başlamıştır. IS0 9001, IS0 14001 Çevre Yönetim Sistemi ve ulusal sertifikalarıyla, Türkiye'nin tek çatı altında en büyük redresör üretim tesisi olma unvanına sahiptir.<br><br>

Koşulsuz müşteri memnuniyeti anlayışı ile çevreye duyarlı olarak yüksek kaliteli ve en son teknolojiye sahip yeni nesil ürünler sunan GPS Endüstriyel, çok kısa zamanda güç elektroniği sektöründe güvenilir ve önde gelen firmalardan biri olmayı başarmıştır.<br><br>

GPS Endüstriyel, güç elektroniği alanında uzman yazılımcı, donanımcı ve tasarımcılardan oluşan yaklaşık 25 kişilik bir ekibe sahiptir. AR-GE’yi bir kültür olarak gören GPS Endüstriyel, bu çalışmalarına kuruluşu itibariyle başlamıştır. Bununla birlikte etkili bir şekilde nitelikli tasarım yetenekleri, bilgi birikimi ve teknolojik altyapısı ile özgün ürünler tasarlanmaya başlanmıştır.

GPS Endüstriyel’in ürün gamında; Yüksek verimli Kaplama Redresörleri, Formasyon Redresörleri, Test Cihazları, Otomasyon Çözümleri, Akü Redresör Grupları, Kesintisiz Güç Kaynakları, Regülatörler, Frekans Konvertörleri, Invertörler, DC Güç Kaynakları, Özel DC Sistemler ve Şarj redresörleri bulunmaktadır.<br><br>

Türkiye'nin her noktasında 7 gün 24 saat kolay ulaşılabilir olmayı ve hızlı servis vermeyi amaçlayan GPS Endüstriyel, kaliteli, dürüst hizmet anlayışı ve müşteri memnuniyeti ilkelerine bağlı kalarak hizmetlerini sürdürmektedir.<br><br>

Sürekli gelişim ve yeniliği bir ilke haline getirmiş olan GPS Endüstriyel, ürün kalitesi ve satış sonrası hizmetlerinde önce hizmet ilkesi ile Dünya standartlarında bir çalışma şekli sunmaktadır. Tüm müşterilerine kesintisiz enerji sağlayarak, işlerinde katma değer yaratmalarını sağlamakta ve en güçlü redresör üreticisi olma hedefiyle çalışmalarını aralıksız sürdürmektedir.
                    </p>
                         <div class="col-md-6 margin-fixedd fixed-padding-left">
              <a data-toggle="modal" id="myBtn" href="#"> <article class="lt-fix ct-fix-fixed"><img src="assets/img/pop-1.png">
                <p class="tech">Teklif İste</p></article></a>
                  <div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <section class="contact-form col-md-12 fixed-padding-left">
            <form class="contact-text">
                <fieldset>
                <legend>Sipariş Formu</legend>
                <p>size daha sağlıklı ulaşabilmemiz için aşağıdaki formu eksiksiz doldurunuz.</p>
                <input type="text" name="" placeholder="Ad - Soyad"><br>
                <input type="text" name="" placeholder="Firma Ünvanı"><br>
                <input type="text" name="" placeholder="Telefon"><br>
                <input type="text" name="" placeholder="Konu"><br>
                <textarea placeholder="Mesaj"></textarea>
                <input type="submit" name="" value="Gönder">
                </fieldset>
            </form>
        </section>
  </div>
</div>
<script type="text/javascript">
        // Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];

// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    </script>

            </div>
                </article>
            </div>


</section>

<?php require_once('inc/footer.php');?>
</body>
</html>