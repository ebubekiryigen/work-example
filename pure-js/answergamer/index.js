const sorular = [
      {
        soru: "Türkiye'nin başkenti neresidir?",
        cevap: "Ankara"
      },
      {
        soru: "İstanbul hangi coğrafi bölgede yer almaktadır?",
        cevap: "Marmara"
      },
      {
        soru: "Hangi gezegen Güneş Sistemi'nde 5. sıradadır?",
        cevap: "Jüpiter"
      },
      {
        soru: "Bir bardak su kaç mililitredir?",
        cevap: "200"
      }
    ];

    function rastgeleSoru() {
      const randomIndex = Math.floor(Math.random() * sorular.length);
      const soru = sorular[randomIndex];
      return soru;
    }

    const soruParagrafi = document.getElementById("soru");
    let suankiSoru = rastgeleSoru();
    soruParagrafi.textContent = suankiSoru.soru;

    let puan = 0;
    function kontrolEt() {
      const cevap = document.getElementById("cevap").value;
      if (cevap.toLowerCase() === suankiSoru.cevap.toLowerCase()) {
        document.getElementById("sonuc").textContent = "Doğru!";
        puan++;
      } else {
        document.getElementById("sonuc").textContent = "Yanlış!";
      }
      document.getElementById("puan").textContent = `Puanınız: ${puan}`;
      suankiSoru = rastgeleSoru();
      soruParagrafi.textContent = suankiSoru.soru;
      document.getElementById("cevap").value = "";
    }