'use strict';

toggleConsigne()
function toggleConsigne(){

  let btn = document.querySelector('.btn-consignes')
  
  function toggleClass(el1, el2, el3) {
    el1.classList.toggle('is-down')
    el2.classList.toggle('is-down')
    el3.classList.toggle('is-down')
  }

  function toggleEls(){
    let consigne = document.querySelector('.consignes')
    let content = document.querySelector('.content')
    let btn = document.querySelector('.btn-consignes')
    toggleClass(consigne, content, btn)
  }
  
  btn.addEventListener('click', toggleEls, false)  

}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Calcul
function regleTrois(val1, val2, val3) {
  return Math.floor((val1 * val2) / val3)
}

function values() {

  let value1 = document.getElementById('value1')
  let value2 = document.getElementById('value2')
  let value3 = document.getElementById('value3')
  let valueX = document.getElementById('valueX')

  let inputs = document.querySelectorAll('input')
  for(let i=0;i<inputs.length;i++){

    let input = inputs[i]

    if(isNumber(input.value) === false) {
      console.log(isNumber(input.value))  
      input.parentNode.classList.add('danger')    
    } else {
      console.log(isNumber(input.value))
      if (input.parentNode.classList.contains('danger')) {
        input.parentNode.classList.remove('danger')
      }
    }
  }

  if(isNumber(regleTrois(value1.value, value2.value, value3.value) || valueX.innerText === 0) === false) {
    valueX.innerText = ''
    if(valueX.classList.contains('success')){
      valueX.classList.remove('success')
    }
  } else {
    valueX.innerText = regleTrois(value1.value, value2.value, value3.value)
    valueX.classList.add('success')
  }
  
}

let btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('click', values, false)
