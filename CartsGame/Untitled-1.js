 
    var timeGame = 0;
    var FinalScore = 0,
         
         HighScore = 0,
         result = 0,
         planet = "",
        
         CartsArr = []; 
         
        //---------TIMER FUNCTION--------

        
    function Start(){
        if (sessionStorage.highScoreResult == undefined){
            sessionStorage.highScoreResult = 0;
        }
        
        $('.HighScore').text('High score: ' + sessionStorage.highScoreResult);
        $('#Game').addClass('gameHiden');
        $('#GameStart').removeClass('gameHiden');
       var timer =  setInterval(Time, 100);
     
       function Time(){
       
         timeGame += 2;
         $('.timer_1').css('width', timeGame + 'px');
         if(timeGame == 760){
            
             clearInterval(timer);
             $("body").css("background-image"," url('image/SpacePexeso.jpg')");
             $("#GameStart").addClass('gameHiden');
             $('#SectionGameOver').removeClass('gameHiden');
              FinalScore = result;
             $('.Finalscore').text('Final score: ' + FinalScore);
             
         if (FinalScore >  sessionStorage.highScoreResult){
            sessionStorage.highScoreResult = FinalScore;
             
             
              }}
    }
    }
         
        
       //-------CART TURN FUNCTION-----
    function turn(event){
       
        $(event.target).toggleClass('Cart');
        planet = $(event.target).attr('class');
          CartsArr.push(planet);
         
          if (CartsArr[0] == CartsArr[1]){
            setTimeout(TrueCart, 1000);
            function TrueCart(){
                $("." + planet).css("opacity", "0");
                result += 10;
                  $('h4').text('Score:' + result );
                  CartsArr = [];
           
            }
              
           
             }

            if (CartsArr[1] && CartsArr[0] !== CartsArr[1]) {
                setTimeout(WrongCart, 1000);
                function WrongCart(){
                    $("." + CartsArr[0]).addClass('Cart');
                   $("." + CartsArr[1]).addClass('Cart');
                   CartsArr = [];
                }
               
            
             }
      }  ;   
          
             
            
          
           
           
        
            
  
     
     
   