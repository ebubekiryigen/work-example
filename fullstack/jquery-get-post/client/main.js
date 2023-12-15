$(document).ready(function(){
    $('#send_btn').click(function(){
        $.post("http://localhost/frontend/js/jquery/datafetching/backend/insert.php",$("#data").serialize(),function(response){
            if(response == "1") {
                alert("Bilgiler Başarılı Bir Şekilde Eklendi")
            }
        })
    })
    $('#records').click(function(){
        $('#list').html('')
        $.get("http://localhost/frontend/js/jquery/datafetching/backend/list.php",{},function(response){
            let jsonData = JSON.parse(response)
            $(jsonData).each(function(index, item){
                $("#list").append(`
                <div class="farm">
                    <li>Adı      : ${item.full_name}</li>
                    <li>Email    : ${item.email}</li>
                    <li>Numarası : ${item.phone}</li>
                </div>
                `)
            })
        })
    })
    
})





