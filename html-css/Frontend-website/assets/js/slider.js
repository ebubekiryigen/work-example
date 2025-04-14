$(function(){

	$(".sbuton:eq(1)").click(function(){
		var alt=parseInt($(".skap").css("bottom"))+200;
		$(".sbuton").hide();
		if(alt>="200"){
			var alt2=parseInt($(".skap").css("bottom"));
			var k1=(alt2+25)+"px",k2=alt2+"px";
			$(".skap").finish().animate({"bottom":k1},200).animate({"bottom":k2},200,function(){ $(".sbuton").show(); });
		}else{
			var k1=(alt+25)+"px",k2=(alt-30)+"px",k3=alt+"px";
			$(".skap").finish().animate({"bottom":k1},200).animate({"bottom":k2},200).animate({"bottom":k3},200,function(){ $(".sbuton").show(); });
		}
	});
	
	$(".sbuton:eq(0)").click(function(){
		var alt=parseInt($(".skap").css("bottom"))-200;
		$(".sbuton").hide();
		if(alt<="-400"){
			var alt2=parseInt($(".skap").css("bottom"));
			var k1=(alt2-25)+"px",k2=alt2+"px";
			$(".skap").finish().animate({"bottom":k1},200).animate({"bottom":k2},200,function(){ $(".sbuton").show(); });
		}else{
			var k1=(alt-30)+"px",k2=(alt+25)+"px",k3=alt+"px";
			$(".skap").finish().animate({"bottom":k1},200).animate({"bottom":k2},200).animate({"bottom":k3},200,function(){ $(".sbuton").show(); });
		}
	});
	
	var pos=$(".sliderana").position();
	$(".sgolge").css({"left":pos.left,"top":pos.top+200})

});