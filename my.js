let display= document.getElementById("inputbtn");
let buttons=document.querySelectorAll("button");

let buttonsArray= Array.from(buttons)
let string= '';
  buttonsArray.forEach (btn =>{

  // console.log(btn)
      btn.addEventListener('click', function(event){
       
        if(event.target.innerHTML== 'DEL'){
          string=string.substring(0, string.length-1);
          display.value=string
        }else if (event.target.innerHTML=='AC'){
         string='';
         display.value=string
        }else if(event.target.innerHTML=='='){
                 string=eval(string);
                 display.value=string;
        } else{
          string=string+event.target.innerHTML;
          display.value=string
        }

       
        console.log(event.target.innerHTML)
      });
});

// console.log("hamza mir")