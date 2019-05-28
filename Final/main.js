    
    $(document).ready(function() {
        $("#show_hide").click(function () {
            $( ".men_ex" ).toggle({
        duration: 3000,
        });
        })  

        $("#btn2").click(function(){
            $(".donation-container").toggle(1000);
          });
    })


var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
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
			// $(".donation-box").css("height", "500px");
			
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