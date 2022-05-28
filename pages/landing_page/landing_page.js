let resto_card=document.getElementsByClassName("card");
for (let i=0;i<resto_card.length;i++){
    resto_card[i].addEventListener("click",function(){
        document.location="../resto_page/resto_page.html";
    })
}
let see_all = document.getElementsByClassName("see-all-btn")[0];
see_all.addEventListener("click",function(){
   for (let i=0;i<resto_card.length;i++){
       resto_card[i].style.display="block";
   } })