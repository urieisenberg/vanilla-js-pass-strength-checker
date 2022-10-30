const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


function trigger (){
 if (input.value != ""){

     indicator.style.display = "block";
     indicator.style.display = "flex";

     /* weak */
     if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) str = 1;
     /* medium */
     if (input.value.length >=6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) str = 2;
     /* strong */
     if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) str = 3;

     /* weak */
     if (str == 1){
         weak.classList.add("active");
         text.style.display = "block";
         text.textContent = "Your Password Is Too Weak!";
         text.classList.add("weak");
     }

     /* medium */
     if (str == 2){
         medium.classList.add("active");
         text.textContent = "Your Password Is Medium...";
         text.classList.add("medium");
     } else {
         medium.classList.remove("active");
         text.classList.remove("medium");
     }
     
     /* strong */
     if (str == 3){
         weak.classList.add("active");
         medium.classList.add("active");
         strong.classList.add("active");
         text.textContent = "Now Your Password Is Strong (:";
         text.classList.add("strong");
     } else {
         strong.classList.remove("active");
         text.classList.remove("strong");
     }



     /* hide and show */
     showBtn.style.display = "block";
     showBtn.onclick = function (){
         if (input.type == "password"){
             input.type = "text";
             showBtn.textContent = "Hide";
             showBtn.style.color = "#23ad5c";
         } else {
             input.type = "password";
             showBtn.textContent = "Show";
             showBtn.style.color = "#000";
         }
     }

     
 } else {
     indicator.style.display = "none";
     text.style.display = "none";
     showBtn.style.display = "none";

 } 
}

