// //lights

// function redorange() {
//     $('#orangelight').css('opacity', 1)
//   };
  
//   function green() {
//     $('#redlight').css('opacity', 0.4)
//     $('#orangelight').css('opacity', 0.4)
//     $('#greenlight').css('opacity', 1)
//     clearInterval(first);
//   };
  
//   function orange() {
//     $('#orangelight').css('opacity', 1)
//     $('#greenlight').css('opacity', 0.4)
//     clearInterval(second);
//   };
  
//   function red() {
//     $('#redlight').css('opacity', 1)
//     $('#orangelight').css('opacity', 0.4)
//     clearInterval(third);
//     first = setInterval(redorange, 4000);
//     second = setInterval(green, 5000);
//     third = setInterval(orange, 8000);
//   }; 
    
//   var first = setInterval(redorange, 4000);
  
//   var second = setInterval(green, 5000);
  
//   var third = setInterval(orange, 8000);
  
//   var fourth = setInterval(red, 10000);
  
//   //words
  
//   function stay() {
//       $('#walkword').css('opacity', 0.4)
//       $('#stayword').css('opacity', 1)
//   };
  
//   function walk() {
//       $('#walkword').css('opacity', 1)
//       $('#stayword').css('opacity', 0.4)
//       clearInterval(wfirst);
//       wfirst = setInterval(stay, 2000);
//       clearInterval(wsecond);
//       wsecond = setInterval(walk, 10000);
//   };
  
//   var wfirst = setInterval(stay, 3000);
//   var wsecond = setInterval (walk, 11000);
var red=document.querySelector(".red");
var stop=document.querySelector(".stay");   
red.addEventListener("click",function(){
    if(stop.style.color!="red"){
        red.style.color="red"
        stop.style.color="red"
       
    }else{
        red.style.color="black"
        stop.style.color="black"
    }
})
var green=document.querySelector(".green");
var go=document.querySelector(".walk");   
green.addEventListener("click",function(){
    if(green.style.color!="green"){
        green.style.color="green"
        go.style.color="green"
        
    }else{
        green.style.color="black"
        go.style.color="black"

    }
})
var orange=document.querySelector(".orange");
var ready=document.querySelector(".ready");   
orange.addEventListener("click",function(){
    if(orange.style.color!="orange"){
        orange.style.color="orange"
        ready.style.color="orange"
        
    }else{
        orange.style.color="black"
        ready.style.color="black"
    }
})