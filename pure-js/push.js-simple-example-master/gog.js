window.onload = function() {
    
    let permission = Push.Permission.has();
    console.log(permission);

    let btn = document.querySelector("button#btn");
    let btnClose = document.querySelector("button#btnClose");

    btn.addEventListener("click", function(){
        Push.create("Ebubekir Yigen",{
            title:"Hi",
            body:"How Are You ?",
            icon:"/ben.jpg",
            tag:"Ebubekir",
            timeout:3000,
            onclick:function() {
                window.focus();
                this.close();
            }
        })
    })
    btnClose.addEventListener("click", function() {
        Push.clear("ebubekir")
    })
}




