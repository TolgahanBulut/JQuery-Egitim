/* 

------------------------- TAG SEÇİCİLER

$(function(){
    $("p").css("color","green")
});

$(function(){
	$("div").css("color","red")
})

*/

/*
------------------------------- ID-CLASS SEÇİCİLER

$(function(){
	$(".javascript").css("color","pink");

	$("#jquery").css("color","purple");

	$(".javascript,#jquery").css({"background-color":"black"});


})

*/


/* 

-----------------------------------Alternatif Özellikli Diğer Element Seçiciler

$(function(){
	// $("input").css("width","600px")


	// 1.	Yol
	// $("input[type='text']").css("background-color","red");

	// $("input[type='password']").css({"background-color":"purple"})

	// 2. Yol

	$("input:text").css("background-color","red");
	$("input:password").css({"background-color":"purple"});
	
})


*/




/* 

-----------------------------------------  Sıralamalı Seçiciler



$(function(){

	// İlk indis eleman seçilir.

	// $("li:first").css({"background-color":"green"})

	// Son indis eleman seçilir.

	// $("li:last").css({"background-color":"green"})

	// Tek indisli elemanlar seçilir.

	$("li:odd").css({"background-color":"green"})

	// Çift indisli elemanlar seçilir.

	// $("li:even").css({"background-color":"green"})

})







*/





/* 

-----------------------------------------  Zebra Stili Tablo Yapım Uygulaması 

$(function(){

	$("tr:odd").css({"background-color":"grey"})
	$("tr:even").css({"background-color":"green"})



})



*/




/* 

-----------------------------------------Çocuk Seçiciler(Child)

$(function(){
	
	$(".child p:first").css({"background-color":"red"})

	$(".child p:last").css({"background-color":"red"})

	$(".child p:odd").css({"background-color":"red"})

	$(".child p:even").css({"background-color":"red"})

})




*/





/* 

-----------------------------------------Elemanları Bulup Seçme

$(function(){
	$(".tolga").find("span").css({"background-color":"red"})

	$(".udemy").find("p").css({"background-color":"orange"})

	$(".tolga").find("b").css({"background-color":"violet"})

})




*/





/* 

-----------------------------------------Previous ve Next - Bulma Fonksiyonları

$(function(){


	$(".iki").prev().css({"background-color":"red"})

	
	$(".iki").next().css({"background-color":"red"})
})


*/





/* 

-----------------------------------------Eleman index numarasına göre seçme

$(function(){
	$(".udemy li:eq(2)").css({"background-color":"orange"});
})




*/




/* 

-----------------------------------------Filtreleme Fonksiyonları

// $(function(){

// 	// $("div").first().css({"background-color":"violet"});

// 	// $("div").last().css({"background-color":"violet"});

// 	// $("div").filter(".ücüncü").css({"background-color":"violet"});

// 	$("div").not(".ikinci").css({"background-color":"violet"});

// })




*/





/* 

-----------------------------------------Each Döngü Fonksiyonu Kullanımı

$(function(){

	$("ul li").each(function(index) {
		alert(index+`.eleman : `+$(this).text());
	}
})



*/


/* 

-----------------------------------------Slice Seçici Kullanımı




/*

$(function(){

	$("li").slice(1,4).css({"background-color":"red"})
})


*/ 

/*

-----------------------------------------is Kullanımı


$(function(){
	if($("div").is("#udemy")) {
		$("b").text("Evet Var!")
	} else {
		$("b").text("Hayır Yok!")
	}
})



*/