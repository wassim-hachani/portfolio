$(document).ready(function(){
    
    //For the Navbar to appear on Scroll
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        } 

        //scrolling button btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    //typing effect
    var typed = new Typed(".typing-1",{
        strings:[
            "Mechanical Student", "Front-End Web Developer", "Freelancer"
        ],
        typeSpeed: 100, 
        backSpeed: 60,
        loops: true
    });

    var typed = new Typed(".typing-2",{
        strings:[
            "Mechanical Student", " Front-End Web Developer", "Freelancer"
        ],
        typeSpeed: 100, 
        backSpeed: 60,
        loops: true
    });

});