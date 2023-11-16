let card__sobre =document.querySelector('.card__sobre'); 
let card_sobre =document.querySelector('.card_sobre'); 


function cardSobre(){
  card__sobre.style.opacity='1'
  card_sobre.style.margin='0 auto'
  card__sobre.style.margin='0'
  card__sobre.style.transform='rotate(-360deg)'
}

function scrollRolagem(){
    window.addEventListener('scroll', function() {
        console.log(window.scrollY)
       
        if (window.scrollY >= 330) {
         cardSobre()
        }
      
      }, {passive: true});
}scrollRolagem();

