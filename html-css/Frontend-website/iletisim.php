<!DOCTYPE html>
<html>
<head>
    <title>İletişim</title>
    <?php require_once('inc/head.php');?>
</head>
<body>
<?php require_once('inc/header.php');?>
<?php require_once('inc/banner.php');?>
<section class="way">
    <div class="container">
        <div class="col-md-12 fixed-padding-left">
            <div class="way-text">
                <article>
                    <a href="index.php">Anasayfa</a> &nbsp&nbsp ▶ &nbsp&nbsp <a href="dokumantasyon.php">Dökümantasyon</a>
                </article>
            </div>
        </div> 
    </div>
</section>
<section class="contact">
<div class="container">
    <div class="col-md-12 fixed-padding-left">
        <section class="contact-form col-md-5 fixed-padding-left">
            <form class="contact-text">
                <fieldset>
                <legend>İletişim Formu</legend>
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
         <section class="contact-form col-md-6 fixed-padding-left tc">
            <article class="contact-text tic-tac">
                <legend>Gps Endüstriyel Güç Sistemlerit</legend>
                <p>İstiklal Mah. Limni Sk. No: 1 Kıraç - ESENYURT / İSTANBUL</p><br>
                <p>
                    Tel: +90 212 577 22 43 <br>
                    Faks: +90 212 549 32 39<br>
                    Mail: info@gpsendustiriyel.com.tr
                </p>
            </article>
               <section id="contact" class="page12 fullH"  style="height: 325px;">
        <article class="colL" style="text-align: left;">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhSZfstyriFMLN-S4HzHceh0M_QTGMnrE&callback=initMap"
            type="text/javascript"></script>

    <div class="googlemaps" id="googlemaps" style="width:100%;height:325px; display: block;"></div>

    <script type="text/javascript">
        //Google maps intergration begins here
        var map;
        var MY_MAPTYPE_ID = 'custom_style';
        var agadress = new google.maps.LatLng(41.0463919, 28.6346563);

        function initialize() {

            //position settings
            var mapOptions = {
                zoom: 15,
                center: agadress,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                scaleControl: false,
                streetViewControl: false,
                panControl: true,
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT
                },
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT
                },
                mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID
            };

            //Define map
            map = new google.maps.Map(document.getElementById('googlemaps'),
                mapOptions);

            //Pin edit
            var image = 'assets/img/pin2.png';
            var position_28 = new google.maps.LatLng(41.0463919, 28.6346563);
            var marker_pisiren_28 = new google.maps.Marker({
                map: map,
                icon: image,
                position: position_28
            });

            //gmaps stilleri
            //Styled map intergration begins here
            var styledMapOptions = {
                name: 'GPS Endüstriyel'
            };

            //visual settings
            var featureOpts = [{
                stylers: [
                    {"saturation": 0},
                    {"gamma": 1}
                ]
            }];
            //Define styled map
            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

            //Set styled map as default
            map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
            //Styled map intergration ends here

        }

        google.maps.event.addDomListener(window, 'load', initialize);
    </script>

        </section>
        </section>
    </div>
</div>
</section>
<?php require_once('inc/footer.php');?>
</body>
</html>