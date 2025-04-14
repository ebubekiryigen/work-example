<!DOCTYPE html>
<html>
<head>
<title> Toplu Mail Gönderimi</title>

<style type="text/css">
	form textarea{width: 100%; height:90px; border-color: #ccc;}
	.ck.ck-editor__editable_inline{height:400px !important;}
	textarea:focus-visible, textarea:focus, input:focus-visible, input:focus{border-color: #ccc !important; outline:none;}
	label{font-size: 18px;color: #57657f;font-weight: 400;}
	.arus-table tr td a{color:#e5e2e7 !important;}
	text{font-family: 'Roboto', sans-serif; font-weight:400}
	.table *{border:1px solid #ccc;}
</style>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="//cdn.ckeditor.com/4.17.1/full/ckeditor.js"></script><link href="assets/css/bootstrap.min.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="assets/css/form.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
<meta charset="utf-8">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
	<div class="pt-2 pb-2 mb-2 header-bg">

        <div class="container d-flex">

            <div class="d-flex col-md-9">

                <a href="" class="logo justify-start col">

                    <img src="assets/img/logo-arus3.png" class="">

                </a>

                <h4 class="title justify-content-center col">TOPLU MAİL</h4>

            </div>

        </div>

    </div>
<div class="container">
	<form method="POST" id="gonderilenform" action="process.php">
		<label>Mail İçeriği</label>
		 <textarea name="content" id="editor"></textarea><br>
		 <label>Konu Başlığı</label><br>
		 <input name="title" type="text" class="p-1 w-100"><br><br>
		 <label>Mail Adresleri (alt alta giriniz)</label>
		 <textarea name="email" class="p-1 w-100"></textarea><br>
		 <input type="submit" name="Gönder" value="Mail Gönder" id="buton" class="btn button-arus ml-0 mt-2">
	</form>
</div>

    <script>
            CKEDITOR.replace( 'editor' );
    </script>
	<script>
	$(document).ready(function(){
		$("#buton").on("click", function(){ 
		    for ( instance in CKEDITOR.instances ) {
			    CKEDITOR.instances[instance].updateElement();
			}
			var gonderilenform = $("#gonderilenform").serialize(); 
			
			$.ajax({
				url:'process.php', 
				type:'POST', 
				data:gonderilenform, 
				success:function(e){ 
					$("#veriler").html("").html(e); 
				}
			});
			""
		});
	});
	</script>
</body>
</html>
