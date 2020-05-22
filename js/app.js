var app = new Vue({
  el: "#app",

  data: {
    // Site title
    title: "Règle de 3",

    // Links site & Repo
    links: {
      site: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repo: "https://github.com/cedricbeau/Regle-de-3",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    // Instructions
    instructions: [
      {
        id: 0,
        value: "Pour obtenir la valeur X, on multiplie la valeur 1 par la valeur 2, puis on divise le resultat par la valeur 3.",
      }
    ],

    // Error
    errorMessage: 'Veuillez renseigner un chiffre',

    // Inputs
    inputs : {
      value1: 'Valeur 1',
      value2: 'Valeur 2',
      value3: 'Valeur 3'
    },

    // Error
    errorMessage: 'Veuillez séléctionner un chiffre',

    isNotIE: true,
    isVisible: false,

    // BTN styles
    btnOpacityLess: .3,
    btnOpacityMore: 1


  },

  // Methods
  methods: {

    /**
     * Check if is IE Browser
     */
    checkIE: function() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        this.isNotIE = !this.isNotIE
      } else {
        this.isNotIE = this.isNotIE
      }

      return this.isNotIE;
    },

    /**
     * Display the instructions box
     */
    toggleInstructions: function () {
      this.isVisible = !this.isVisible;
    },

    /**
     *
     * @param {*} n
     * Detect number
     */
    isNumber: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    /**
     *
     * @param {*} val1
     * @param {*} val2
     * @param {*} val3
     * Calcul
     */
    regleTrois: function (val1, val2, val3) {
      return Math.floor((val1 * val2) / val3)
    },

    /**
     * Get Resultat
     */
    getResult: function () {

      const value1 = document.getElementById('value1')
      const value2 = document.getElementById('value2')
      const value3 = document.getElementById('value3')
      const valueX = document.getElementById('valueX')
      const btnReset = document.querySelector('.btn-reset')

      if(this.isNumber(this.regleTrois(value1.value, value2.value, value3.value) || valueX.innerText === 0) === false) {
        valueX.innerText = ''
        if(valueX.classList.contains('success')){
          valueX.classList.remove('success')
        }
      } else {
        valueX.innerText = this.regleTrois(value1.value, value2.value, value3.value)
        valueX.classList.add('success')
        btnReset.style.opacity = 1
        btnReset.style.pointerEvents = 'all'
      }
    },

    getAlert: function(e) {

      const self = e.target
      const selfValue = self.value
      const selfParent = self.parentNode

      // Inputs
      const value1 = document.getElementById('value1')
      const value2 = document.getElementById('value2')
      const value3 = document.getElementById('value3')

      //Btn
      const btnSubmit = document.querySelector('.btn-submit')

      if(this.isNumber(selfValue) === false) {

        //Desactive submit
        btnSubmit.style.opacity = this.btnOpacityLess
        btnSubmit.style.pointerEvents = 'none'

        //Add dangerbox
        selfParent.classList.add('error')

      } else {

        if(
          this.isNumber(value1.value) === true &&
          this.isNumber(value2.value) === true &&
          this.isNumber(value3.value) === true) {

            //Active submit
          btnSubmit.style.opacity = 1
          btnSubmit.style.pointerEvents = 'all'
        }
        if (selfParent.classList.contains('error')) {
          //Remove dangerbox
          selfParent.classList.remove('error')
        }
      }
    },

    /**
     *
     * @param {*} e
     * Reset function
     */
    getReset: function (e){

      const self = e.target
      const value1 = document.getElementById('value1')
      const value2 = document.getElementById('value2')
      const value3 = document.getElementById('value3')
      const valueX = document.getElementById('valueX')

      const btnSubmit = document.querySelector('.btn-submit')

      value1.value = ''
      value2.value = ''
      value3.value = ''
      valueX.innerHTML = ''

      if(valueX.classList.contains('success')) {
        valueX.classList.remove('success')
      }

      // Désactive le bouton reset
      self.style.opacity = this.btnOpacityLess
      self.style.pointerEvents = 'none'

      // Désactive le bouton submit
      btnSubmit.style.opacity = this.btnOpacityLess
      btnSubmit.style.pointerEvents = 'none'
    }
  }
});