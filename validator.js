function validateMarka() {
    var x = document.forms["form1"]["Marka"].value;
    var bladNazwa = document.getElementById('marka_alert');
    var pattern = /[0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Marka nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 10) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateModel() {
    var x = document.forms["form1"]["Model"].value;
    var bladNazwa = document.getElementById('model_alert');
    var pattern = /[0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Model nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 10) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateRok() {
    var x = document.forms["form1"]["Rok"].value;
    var bladNazwa = document.getElementById('rok_alert');
    var pattern = /[^0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 4) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Rok nie może zawierać więcej niż 4 cyfry</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateCena() {
    var x = document.getElementById('Cena').value;
    var bladNazwa = document.getElementById('cena_alert');
    var digits_patt = /[0-9]*/;
    var words_patt = /[a-z][A-Z]*/;


    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else if (digits_patt.test(x)) {
            var x = parseFloat(x).toFixed(2);
            document.getElementById('Cena').value = x;
            bladNazwa.setAttribute("style", "display:none");
            return true;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePaliwo() {
    var x = document.getElementById("Paliwo").options[Paliwo.selectedIndex].value;
    var bladNazwa = document.getElementById('paliwo_alert');

    if (x == 0) {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        bladNazwa.setAttribute("style", "display:none");
        return true;
    }
}

function validateKolor() {
    var x = document.getElementById("Kolor").value;
    var bladNazwa = document.getElementById('kolor_alert');
    var pattern = /[0-9]/i;

    if (x == 0) {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Kolor nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 15) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Kolor nie może być dłuższy niż 15 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePojemnosc() {
    var x = document.getElementById('Pojemnosc').value;
    var bladNazwa = document.getElementById('pojemnosc_alert');
    var digits_patt = /[0-9]*/;
    var words_patt = /[a-z][A-Z]*/;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else if (digits_patt.test(x)) {
            var x = parseFloat(x).toFixed(1);
            document.getElementById('Pojemnosc').value = x;
            bladNazwa.setAttribute("style", "display:none");
            return true;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePrzebieg() {
    var x = document.getElementById('Przebieg').value;
    var bladNazwa = document.getElementById('przebieg_alert');
    var words_patt = /[a-z][A-Z]*/;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateAll() {
    if (validateMarka() && validateModel() && validateRok() && validateCena() && validatePaliwo() && validateKolor() && validatePojemnosc() && validatePrzebieg()) {

        var rows = "";
        var marka = document.getElementById('Marka').value;
        var model = document.getElementById('Model').value;
        var rok = document.getElementById('Rok').value;
        var cena = document.getElementById('Cena').value;
        var paliwo = document.getElementById('Paliwo').value;
        var kolor = document.getElementById('Kolor').value;
        var pojemnosc = document.getElementById('Pojemnosc').value;
        var przebieg = document.getElementById('Przebieg').value;

        //document.getElementById("myTable").setAttribute("style", "display:block");

        //rows += "<tr><td>" + marka + "</td><td>" + model + "</td><td>" + rok + "</td><td>" + cena + "</td><td>" + paliwo + "</td><td>" + kolor + "</td><td>" + pojemnosc + "</td><td>" + przebieg + "</td></tr>";
        //$(rows).appendTo($("#myTable tbody"));
        //$("#myTable").tablesorter();
        <?php
        $servername = "mysql.hostinger.pl";
        $username = "u657292145_auto";
        $password = "ciasteczko1";

        try {
            $conn = new PDO("mysql:host=$servername;dbname=u657292145_auto", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected successfully";
            }
        catch(PDOException $e)
            {
            echo "Connection failed: " . $e->getMessage();
            }



            $sql = "INSERT INTO Samochody (marka, model, pojemnosc_silnika, rok_produkcji, przebieg, kolor, paliwo, uwagi) VALUES (marka,model,)";
            $result = $conn->query($sql);

        ?>

        return true;
    } else {
        return false;
    }
}
