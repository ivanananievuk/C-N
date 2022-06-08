let boxes= document.querySelectorAll(".box");
let s = 0;

function Call(){
    
   
}



for (const box of boxes) {
    box.addEventListener('click', function onClick() {
        
      console.log(this);

      if (s != 0){
          
          this.innerHTML ="X";
          s = s +1;
          console.log(s);
         exit;
      }
      

      if (s == 0){

        console.log("no");
          this.innerHTML ="O";
          s = s-1;
          console.log(s);



      }



     
      Call()
    });
  }
  /** 
  boxes.forEach(
      this.addEventListener("click", function click(){
        
        console.log("hey");
      }))
  */