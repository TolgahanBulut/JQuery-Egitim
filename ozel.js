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


// ---------------------------------------- Add class


// $(function(){
// 	$("p").addClass("renk")
// })


// ---------------------------------------- Has class


// $(function(){
	// 	var sor = $("p").hasClass("renks");
	
	// 	if(sor==true){
	// 		alert("var");
	// 	}else{
	// 		alert("Yok")
	// 	}
	// })


// --------------------------------------------Metod Zincirlemesi



// $(function(){

// 	$("div").height(400).fadeOut(2000).fadeIn(2000);
	
// })






// ---------------------------------------- Remove class


// $(function(){

//  	$("p").removeClass("renk")
// })




// ---------------------------------------- Toggle class



// $(function(){

// 	$("button").on("click", function(){

// 	$("p").toggleClass("renk");

// 	});
// })


// ---------------------------------------- Class Bulma



// $(function(){

	// 				// BUTONSUZ 
	
	// 	// var sor = $("div").hasClass("Tolga")
	
	// 	// if(sor == true) {
	// 	// 	alert("tolga classı var");
	
	// 	// }else {
	// 	// 	alert("tolga Classı YOK!");
	// 	// }
	
	// 				// BUTONLU
	
	// 	$("button").on("click",function(){
	
	// 		 var sor = $("div").hasClass("tolga")
	
	// 		 if(sor == true) {
	// 		 	alert("tolga classı var");
	
	// 		 }else {
	// 		 	alert("tolga Classı YOK!");
	// 		 }
	// 	})
		
	// })





// ---------------------------------------- Append & Prepend Kullanımı


// $(function(){


// // Düz yazı olarak ekleme

// 	// $(".javascript").append("Append ile arkasına eklendi");
// 	// $(".jquery").prepend("Prepend ile Önüne Eklendi");

// // Html Kodlar İle Ekleme

// 	$(".javascript").append("<p>append İle arkasına eklendi </p>");
// 	$(".javascript").prepend("<p><b />Prepend İle Önüne eklendi </p>");

// 	$(".liste").append("<option>Bootstrap</option>");
// 	$(".liste").prepend("<option>Css</option>");


// })



// ---------------------------------------- AppendTo & PrependTo Kullanımı

