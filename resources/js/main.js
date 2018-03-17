var vm = new Vue({
    el:'.jumbotron',
  methods: {
      displayMsg: function(event) {
          console.log("D'oh!");
          if($(".speech-balloon").hasClass("visible")){
              $(".speech-balloon").removeClass("visible");
          } else {
              $('.speech-balloon').addClass("visible");
          }
      }
  }
})
