'use strict';

(function(){
	
	// Variables
	// Inputs
	let value1 = document.getElementById('value1')
	let value2 = document.getElementById('value2')
	let value3 = document.getElementById('value3')
	let valueX = document.getElementById('valueX')
	let inputs = document.querySelectorAll('input')
	//Btns
	let btnSubmit = document.querySelector('.btn-submit')
	let btnReset = document.querySelector('.btn-reset')
	
	// Detect number
	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	//Calcul
	function regleTrois(val1, val2, val3) {
	  return Math.floor((val1 * val2) / val3)
	}
	
	//Alert boxes
	function alertBoxes() {
		
		if(isNumber(this.value) === false) {
			//Desactive submit
			btnSubmit.style.opacity = .5
			btnSubmit.style.pointerEvents = 'none'
		  //Add dangerbox  
		  this.parentNode.classList.add('danger')    
		} else {
		  console.log(isNumber(this.value))
		  if(
		  	isNumber(value1.value) === true &&
		  	isNumber(value1.value) === true &&
		  	isNumber(value3.value) === true) {
			  //Active submit
			  btnSubmit.style.opacity = 1
			  btnSubmit.style.pointerEvents = 'all'
			}	      
			if (this.parentNode.classList.contains('danger')) {
				//Remove dangerbox
			  this.parentNode.classList.remove('danger')
			}
		}   
	 
	}
	
	//Get Resultat
	function getResult() { 
		
	  if(isNumber(regleTrois(value1.value, value2.value, value3.value) || valueX.innerText === 0) === false) {
	    valueX.innerText = ''
	    if(valueX.classList.contains('success')){
	      valueX.classList.remove('success')
	    }
	  } else {
	    valueX.innerText = regleTrois(value1.value, value2.value, value3.value)
	    valueX.classList.add('success')
	    btnReset.style.visibility = 'visible'
	  }
	  
	}
	
	// Reset function
	function reset(){
		// Supprime les valeurs des champs
		value1.value = ''
	  value2.value = ''
	  value3.value = ''
	  valueX.innerHTML = ''
	  if(valueX.classList.contains('success')) {
		  valueX.classList.remove('success')
	  }
	  // Désactive le bouton reset
	  this.style.visibility = 'hidden'
	  // Désactive le bouton submit
	  btnSubmit.style.opacity = .5
	  btnSubmit.style.pointerEvents = 'none'
	}
	
	// Event listener
	// keyup
	for(let i=0;i<inputs.length;i++){
		let input = inputs[i]    
	  input.addEventListener('keyup', alertBoxes, false)    
	}
	// submit
	btnSubmit.addEventListener('click', getResult, false)
	// reset
	btnReset.addEventListener('click', reset, false)

})()
