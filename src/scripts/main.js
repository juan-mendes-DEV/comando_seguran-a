let cards = document.querySelector('.card_rotate');
let card = document.querySelector('.card');
let cardOne = document.querySelector('.card_one');
let cardTwo = document.querySelector('.card_two');
let titleCards =document.querySelector('.title_cards'); 

function cardRotateOne(){
  
  cardOne.style.opacity='1'
  cardOne.style.marginLeft='0vh'
  cardOne.style.transform='rotate(-360deg)'
}
function cardRotateTwo(){
  cardTwo.style.opacity='1'
  cardTwo.style.marginLeft='0vh'
  cardTwo.style.transform='rotate(-360deg)'
}
function cardRotate(){
    card.style.opacity='1'
    card.style.marginLeft='0vh'
    card.style.transform='rotate(-360deg)'
}
function titleCard(){
    titleCards.style.opacity='1'
}
function scrollRolagem(){
    window.addEventListener('scroll', function() {
        console.log(window.scrollY)
       
        if (window.innerWidth <= 500) { // 800px é apenas um exemplo, você pode ajustar este valor
          if (window.scrollY >= 100) { // metade de 330, ajuste este valor conforme necessário
            titleCard()
            cardRotate()
            cardRotateOne()
            cardRotateTwo()
            console.log('entrou')
          }
        } else {
          if (window.scrollY >= 100) {
            titleCard()
            cardRotate()
            cardRotateOne()
            cardRotateTwo()
            console.log('entrou1')
          }
        }
      
      }, {passive: true});
}scrollRolagem();

