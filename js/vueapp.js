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
      value3: 'Valeur 3',
      value2: 'Valeur 2',
      value1: 'Valeur 1'
    },

    // Error
    errorMessage: 'Veuillez séléctionner un chiffre',

    isNotIE: true,
    isVisible: false,

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
    }
  }
});
