/* --------------------------- BOLUM 1 GİRİŞ -------------------------------








// $(document).ready(function(){
//     $("p").click(function(){

//         $(this).hide();
//     });
// });



// 1.Yöntem

// $(document).ready(function(){
//     $('div').html('Div içine yazıyorum')
// });


// // 1.Yöntem

// $().ready(function(){
//     $('p').html('Paragraf içine yazıyorum')
// });


// // 3.Yöntem
// $(function(){
//     $('b').html('B içine yazıyorum')
// });



//$(document).ready(function(){
//     $('div').html('Tolgahan BULUT')
// })

// $().ready(function(){
//     $('i').addClass('italic')
// })

// $(function(){
//    $('div').html('Tolgahan Bulut')
// })

function gostergizle(){


	 $("#reklam").toggle();


};




 ------------------------------------------------------------------------
*/ 



/* ----------------------------------- BOLUM 2 SECİCİLER --------------------------
*/



// $(function(){
//     $("p").css("color","green")
// });

// $(function(){
// 	$("div").css("color","red")
// })



// -------------------------------------

// $(function(){
// 	$(".javascript").css("color","pink");

// 	$("#jquery").css("color","purple");

// 	$(".javascript,#jquery").css({"background-color":"black"});

// })




// --------------------------------------



// $(function(){
	// $("input").css("width","600px")


	// 1.	Yol
	// $("input[type='text']").css("background-color","red");

	// $("input[type='password']").css({"background-color":"purple"})

	// 2. Yol

//	$("input:text").css("background-color","red");
//	$("input:password").css({"background-color":"purple"});
	
// })




// --------------------------------------------


// $(function(){

	// İlk indis eleman seçilir.

	// $("li:first").css({"background-color":"green"})

	// Son indis eleman seçilir.

	// $("li:last").css({"background-color":"green"})

	// Tek indisli elemanlar seçilir.

	// $("li:odd").css({"background-color":"green"})

	// Çift indisli elemanlar seçilir.

	// $("li:even").css({"background-color":"green"})

// })




// --------------------------------------------


// $(function(){

// 	$("tr:odd").css({"background-color":"grey"})
// 	$("tr:even").css({"background-color":"green"})



// })





// --------------------------------------------


// $(function(){
	
// 	$(".child p:first").css({"background-color":"red"})

// 	$(".child p:last").css({"background-color":"red"})

// 	$(".child p:odd").css({"background-color":"red"})

// 	$(".child p:even").css({"background-color":"red"})

// })


// --------------------------------------------

// $(function(){
// 	$(".tolga").find("span").css({"background-color":"red"})

// 	$(".udemy").find("p").css({"background-color":"orange"})

// 	$(".tolga").find("b").css({"background-color":"violet"})

// })


// --------------------------------------------

// $(function(){


// 	$(".iki").prev().css({"background-color":"red"})


// 	$(".iki").next().css({"background-color":"red"})
// })


// --------------------------------------------

// $(function(){
// 	$(".udemy li:eq(2)").css({"background-color":"orange"});
// })

// --------------------------------------------

// $(function(){

// 	// $("div").first().css({"background-color":"violet"});

// 	// $("div").last().css({"background-color":"violet"});

// 	// $("div").filter(".ücüncü").css({"background-color":"violet"});

// 	$("div").not(".ikinci").css({"background-color":"violet"});

// })


// --------------------------------------------


// $(function(){

// 	$("ul li").each(function(index) {
// 		alert(index+`.eleman : `+$(this).text());
// 	}
// })


// --------------------------------------------

// $(function(){

// 	$("li").slice(1,4).css({"background-color":"red"})
// })


// --------------------------------------------


// $(function(){
// 	if($("div").is("#udemy")) {
// 		$("b").text("Evet Var!")
// 	} else {
// 		$("b").text("Hayır Yok!")
// 	}
// })