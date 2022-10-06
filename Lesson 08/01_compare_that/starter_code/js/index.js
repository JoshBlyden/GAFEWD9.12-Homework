
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     console.log(a);
     console.log(b);
     // Add comparison logic
     
     // Are they not numbers
     // Are they equal
     // Is A greater than B
     // Is B greater than A


     if(isNaN(a) || isNaN(b)){
      comparison = "N/A";
     }else if(a > b){
      comparison = ">";
     }else if(a == b){
      comparison = "=";
     }else if(a < b){
      comparison = "<";
      }
     document.querySelector('#comparison').innerText = comparison;
   };
 