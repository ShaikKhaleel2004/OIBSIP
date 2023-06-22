// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  function pull() {
    var num = document.getElementById("validationCustom01").value;
    var typ = document.getElementById("inputState").value;
   
    if(typ === "Celsius") {
      var F = ( num * ( 9 / 5 ) ) + 32
      console.log(F+"°F")
      //document.getElementById("validationDefault05").value = F;
    }
    else if(typ === "Fahrenheit"){
      var C = ( num - 32 ) * ( 5 / 9 )
      console.log(C+"°C")
      //document.querySelector("validationDefault05").value = C;
    }
    else{
      console.log("Choose either F or C")
    }



  
  

  }