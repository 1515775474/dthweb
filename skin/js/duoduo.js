$(function() {
	
	
	 $(".nybanner_mid h4").addClass("animated fadeInUp").show();
	  $(".nybanner_mid p").addClass("animated fadeInUp").show();
	  
	  
	    $(".contentright").addClass("animated fadeInRight").show();
		 $(".nyleft").addClass("animated fadeInLeft").show();
	
	 $(".a1").addClass("animated fadeInUp").show();
    $(window).scroll(function() {
        var diffY = $(document).scrollTop();
		  console.log(diffY)
        if (diffY >= 300 && diffY <=600) {
			
			 setInterval(function() {
                $(".a2").addClass("animated fadeInUp").show();
            },
            200);
			 setInterval(function() {
                $(".a3").addClass("animated fadeInUp").show();
            },
            400);
			 setInterval(function() {
                $(".a4_aa").addClass("animated rollIn").show();
            },
            500);
			 setInterval(function() {
                $(".a4_ab").addClass("animated rollIn").show();
            },
            600);
				 setInterval(function() {
                $(".a4_ac").addClass("animated rollIn").show();
            },
            700);
			 setInterval(function() {
                $(".a4_ad").addClass("animated rollIn").show();
            },
            800);
          
        } 
		
		
		else if (diffY >= 600 && diffY < 900)

        {
			  
			 
		
            setInterval(function() {
                $(".hes_top").addClass("animated fadeInUp").show();
            },
            200);
			
			 setInterval(function() {
                $(".hes_bt1").addClass("animated flipInX").show();
            },
            600);
           

            setInterval(function() {
                $(".hes_bt2").addClass("animated flipInX").show();

            },
            1000);
			 setInterval(function() {
                $(".hes_bt3").addClass("animated flipInX").show();

            },
            1400);

		  
		  
		  
		  	 $(".huise_top").addClass("animated fadeInUp").show();
			  
		} else if (diffY >= 1100 && diffY < 1500)
         {     
		   
		
			
	
            $(".huise_top").addClass("animated rotateInUpRight").show();
		 
		 
		setInterval(function() {
		
 			 $(".huise_bt_1").addClass("animated rotateInUpRight").show(); },
            200);
		   setInterval(function() {
             $(".huise_bt_2").addClass("animated rotateInUpRight").show();},
            400);
            
			  setInterval(function() {
             $(".huise_bt_3").addClass("animated rotateInUpRight").show();},
            400);
			  setInterval(function() {
             $(".huise_bt_4").addClass("animated rotateInUpRight").show();},
            400);
			

		 } else if (diffY >=1500 && diffY <1900){
			
			
			
			$(".synews_tit").addClass("animated fadeInLeftBig").show();
			   setInterval(function() {
            $(".synews_bt").addClass("animated fadeInLeftBig").show();  
            },
            400);
			
			 
			
		
			 
			 }
      
	   else if (diffY > 2200  && diffY <3000){
			
			 
			setInterval(function() {
             $(".ccacx_top").addClass("animated flipInY").show();
            },
            200);
			  setInterval(function() {
             $(".ccacx_topa").addClass("animated flipInY").show();
            },
            400);
			  setInterval(function() {
             $(".ccacx_topb").addClass("animated fadeInRight").show();
            },
            600);
			 setInterval(function() {
             $(".ccacx_topc").addClass("animated fadeInRight").show();
            },
            800);
			
			 }



	  
    });

})