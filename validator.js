function validateMarka() {
    var x = document.forms["form1"]["Marka"].value;
    var bladNazwa= document.getElementById('marka_alert');
    var pattern = /[0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style","display:block");
    }
    else{
        if(pattern.test(x)){
          bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Marka nie może zawierać liczb</p>';
          bladNazwa.setAttribute("style","display:block");
        }
        else if (x.length > 10) {
          bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
          bladNazwa.setAttribute("style","display:block");
        }
        else{
          bladNazwa.setAttribute("style","display:none");
        }
    }
}

function validateModel(){
  var x = document.forms["form1"]["Model"].value;
  var bladNazwa= document.getElementById('model_alert');
  var pattern = /[0-9]/i;

  if (x == "") {
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
      bladNazwa.setAttribute("style","display:block");
  }
  else{
      if(pattern.test(x)){
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Model nie może zawierać liczb</p>';
        bladNazwa.setAttribute("style","display:block");
      }
      else if (x.length > 10) {
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
        bladNazwa.setAttribute("style","display:block");
      }
      else{
        bladNazwa.setAttribute("style","display:none");
      }
  }
}

function validateRok(){
  var x = document.forms["form1"]["Rok"].value;
  var bladNazwa= document.getElementById('rok_alert');
  var pattern = /[^0-9]/i;

  if (x == "") {
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
      bladNazwa.setAttribute("style","display:block");
  }else{
    if(pattern.test(x)){
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
      bladNazwa.setAttribute("style","display:block");
    }
    else if (x.length > 4) {
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Rok nie może zawierać więcej niż 4 cyfry</p>';
      bladNazwa.setAttribute("style","display:block");
    }
    else{
      bladNazwa.setAttribute("style","display:none");
    }
  }
}

function validateCena(){
  var x = document.getElementById('Cena').value;
  var bladNazwa = document.getElementById('cena_alert');
  var decimal_pattern = /\d*\.\d{2}/;
  var words_patt = /[0-9]*/;


  if(x==""){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }else{
      if(words_patt.test(x)){
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
        bladNazwa.setAttribute("style","display:block;");
        console.log("jestem tu");
      }else if(words_patt.test(x)){
        var x=parseFloat(x).toFixed(2);
        document.getElementById('Cena').value=x;
        bladNazwa.setAttribute("style", "display:none");
      }
      else if(decimal_pattern.test(x)){
        console.log("jestem tu2");
        bladNazwa.setAttribute("style","display:none");
      }
  }
}

function validatePaliwo(){
  var x = document.getElementById("Paliwo").options[Paliwo.selectedIndex].value;
  var bladNazwa = document.getElementById('paliwo_alert');

  if(x==0){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }
  else{
    bladNazwa.setAttribute("style","display:none");
  }
}
