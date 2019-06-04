    
$(document).ready(function() {

    var firstName = "";
    var lastName = "";
    var email = "";
    var dType = "";
    var receipt = "";
    var anon = "";
    var list = "";
    var amount = "";
    
    var $hamburger = $(".hamburger");
    
    $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active");
        $(".links").toggle(0);
        
    });
    $("#show_hide").click(function () {
        $( ".men_ex" ).toggle({duration: 30,});
    })  


    

    /*$("#btn2").click(function(){
        $(".donation-container").toggle(1000);
    });*/

    $(".button").click(function(){
        $(".button").removeClass("selected");
        $(this).addClass("selected");
        
        $(this).find("input").focus();
    });
    
    
    $(".set-amount").keyup(function(){
        
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });
    
    
    $("input").on("change", function(){
        
        firstName = $("#firstName").val();
        lastName = $("#lastName").val();
        email = $("#email").val();
        
        if ( $("#one-time").prop( "checked" ) ){
            dType = "One-Time";
        }
        if ( $("#monthly").prop( "checked" ) ){
            dType = "Monthly";
        }

    });

    $("#btn1").click(function(){
        $(".donation-container").show(400);
        $(".donation-container2").hide(400);

    });

    $("#btn2").click(function(){
        $(".donation-container2").show(400);
        $(".donation-container").hide(400);

    });

    $(".donate-button").click(function(){
		alert("Thank you!");
	});

    
})