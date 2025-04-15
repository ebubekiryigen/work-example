    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const kutuBoyutu = 20;
    const kutuSayisi = 20;
    const yilan = [];
    let yemX;
    let yemY;
    let xHiz = kutuBoyutu;
    let yHiz = 0;
    let oyunBitti = false;

    function baslangic() {
    for (let i = 0; i < 3; i++) {
        yilan.push({x: i, y: 0});
    }
    yeniYem();
    }

    function yeniYem() {
    yemX = Math.floor(Math.random() * kutuSayisi);
    yemY = Math.floor(Math.random() * kutuSayisi);
    }

    function ciz() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    yilan.forEach(function(kutu) {
        context.fillStyle = "green";
        context.fillRect(kutu.x * kutuBoyutu, kutu.y * kutuBoyutu, kutuBoyutu, kutuBoyutu);
    });

    context.fillStyle = "red";
    context.fillRect(yemX * kutuBoyutu, yemY * kutuBoyutu, kutuBoyutu, kutuBoyutu);
    }

    function hareketEt() {
    const kafa = {x: yilan[0].x + xHiz / kutuBoyutu, y: yilan[0].y + yHiz / kutuBoyutu};

    yilan.unshift(kafa);

    if (yemX === kafa.x && yemY === kafa.y) {
        yeniYem();
    } else {
        yilan.pop();
    }
    }

    function kontrol() {
    if (yilan[0].x < 0 || yilan[0].x >= kutuSayisi || yilan[0].y < 0 || yilan[0].y >= kutuSayisi) {
        oyunBitti = true;
    }
    for (let i = 1; i < yilan.length; i++) {
        if (yilan[0].x === yilan[i].x && yilan[0].y === yilan[i].y) {
        oyunBitti = true;
        }
    }
    }

    function oyunuYenidenBaslat() {
    yilan.length = 0;
    xHiz = kutuBoyutu;
    yHiz = 0;
    oyunBitti = false;
    baslangic();
    }

    document.addEventListener("keydown", function(e) {
    if (e.keyCode === 37 && xHiz !== kutuBoyutu) {
        xHiz = -kutuBoyutu;
        yHiz = 0;
    } else if (e.keyCode === 38 && yHiz !== kutuBoyutu) {
        xHiz = 0;
        yHiz = -kutuBoyutu;
    } else if (e.keyCode === 39 && xHiz !== -kutuBoyutu) {
        xHiz = kutuBoyutu;
        yHiz = 0;
    } else if (e.keyCode === 40 && yHiz !== -kutuBoyutu) {
        xHiz = 0;
        yHiz = kutuBoyutu;
    }
    });

    function oyunDongusu() {
    if (!oyunBitti) {
        setTimeout(function() {
        hareketEt();
        kontrol();
        ciz();
        oyunDongusu();
        }, 100);
    } else {
        alert("Oyun bitti! Skorunuz: " + yilan.length);
        oyunuYenidenBaslat();
    }
    }

    baslangic();
    oyunDongusu();