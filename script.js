let theDiv = document.getElementById('theDiv');
let div1 = document.getElementById('1');
let div2 = document.getElementById('2');
let div3 = document.getElementById('3');
let btn = document.getElementById('btn');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3')
let chekBtn = document.getElementById('chekBtn');

let stat = 0;


 btn.onclick = function(){

    if(stat===0){
        div1.style.display = 'block'
        stat =1;
    }
   else if(stat===1){
        div1.style.display = 'none'
        div2.style.display = 'block'

        stat=2;
    }

    else if(stat===2){
        div2.style.display = 'none'
        div3.style.display = 'block'
    }
    
 }     

 let qs = 0;

 chekBtn.onclick = function(){


   if(qs===0){
      if(inp1.value ==="rami"){
        div1.style.backgroundColor = 'blue'
    }
    

    qs=1;
   } 

  else if(qs===1){

    if(inp2.value ==="hanna"){
        div2.style.backgroundColor = 'blue'
    }
    

    qs=2;

   }


  else if(qs===2){

    if(inp3.value ==="momo"){
        div3.style.backgroundColor = 'blue'
    }
    

    qs=3;

   }




  
 }


     
    
   





