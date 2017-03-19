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
  var digits_patt = /[0-9]*/;
  var words_patt = /[a-z][A-Z]*/;


  if(x==""){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }else{
      if(words_patt.test(x)){
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
        bladNazwa.setAttribute("style","display:block;");
        console.log("jestem tu");
      }
      else if(digits_patt.test(x)){
        var x=parseFloat(x).toFixed(2);
        document.getElementById('Cena').value=x;
        bladNazwa.setAttribute("style", "display:none");
        console.log("decimal");
      }
      else{
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

function validateKolor(){
  var x = document.getElementById("Kolor").value;
  var bladNazwa = document.getElementById('kolor_alert');
  var pattern = /[0-9]/i;

  if(x==0){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }else{
    if(pattern.test(x)){
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Kolor nie może zawierać liczb</p>';
      bladNazwa.setAttribute("style","display:block");
    }
    else if (x.length > 15) {
      bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Kolor nie może być dłuższy niż 15 znaków</p>';
      bladNazwa.setAttribute("style","display:block");
    }
    else{
      bladNazwa.setAttribute("style","display:none");
    }
  }
}

function validatePojemnosc(){
  var x = document.getElementById('Pojemnosc').value;
  var bladNazwa = document.getElementById('pojemnosc_alert');
  var digits_patt = /[0-9]*/;
  var words_patt = /[a-z][A-Z]*/;

  if(x==""){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }else{
      if(words_patt.test(x)){
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
        bladNazwa.setAttribute("style","display:block;");
      }
      else if(digits_patt.test(x)){
        var x=parseFloat(x).toFixed(1);
        document.getElementById('Pojemnosc').value=x;
        bladNazwa.setAttribute("style", "display:none");
      }
      else{
        bladNazwa.setAttribute("style","display:none");
      }
  }
}

function validatePrzebieg(){
  var x = document.getElementById('Przebieg').value;
  var bladNazwa = document.getElementById('przebieg_alert');
  var words_patt = /[a-z][A-Z]*/;

  if(x==""){
    bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
    bladNazwa.setAttribute("style","display:block");
  }else{
      if(words_patt.test(x)){
        bladNazwa.innerHTML='<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
        bladNazwa.setAttribute("style","display:block;");
      }
      else{
        bladNazwa.setAttribute("style","display:none");
      }
    }
}
