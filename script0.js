function limpiar() {
    document.getElementById("formulario").reset()
}

function coeficiente_binomial() {
    var m = parseInt(document.getElementById("valorx").value);
    var n = parseInt(document.getElementById("valory").value);

    var ncr = 1;
    for (var k = 1; k <= n; k++) {
        ncr = ncr*(m-k+1)/k
    }
    document.getElementById("resultado").innerHTML = ncr;
}

function sumar() {
    var x = parseInt(document.getElementById("numero").value);
    var suma = 0;
    var mod = 0;
    
    while (x > 0) {
        mod = x % 10
        x = Math.trunc(x / 10)
        suma = suma + mod
    }
    document.getElementById("sumatoria").innerHTML = suma;

}


function primos() {
    var x = parseInt(document.getElementById("primo").value);
    var c = 0;
    var res = 1;

    for (var i = 1; i <= x; i++) {
        if ((x % i) == 0) {
            c = c + 1
        }
        if (c > 2) {
            res = 0
            break
        }
    }
    if (res = 1) {
        document.getElementById("esprimo").innerHTML = "Es un número primo";
    }
    else {
        document.getElementById("esprimo").innerHTML = "No es un número primo";
    }

}

function sacar_raiz() {
    var n1 = parseInt(document.getElementById("valor1").value);
    var n2 = parseInt(document.getElementById("valor2").value);
    var n3 = parseInt(document.getElementById("valor3").value);

    d = Math.pow(n2, 2) - (4 * n1 * n3);
    document.getElementById("discriminante").innerHTML = d;

    let x1 = (-n2 + Math.sqrt(d)) / (2 * n1)
    let x2 = (-n2 - Math.sqrt(d)) / (2 * n1)
    document.getElementById("raices1").innerHTML = x1;
    document.getElementById("raices2").innerHTML = x2;

    if (d == 0) {
        document.getElementById("final").innerHTML = "una Raiz";
    }

    else if (d < 0) {
        document.getElementById("final").innerHTML = "cero raices reales";
    }

    else {
        document.getElementById("final").innerHTML = "dos raices";
    }
}


//Script del ejrcicio 1

function EvaluarN() {
    var z = parseInt(document.getElementById("numero10").value);
    var P = Math.log(Math.abs(Math.pow(z, 2) - Math.pow(z, 3)))
    var P2 = (75 / 2 * z) * Math.cos(0.8 * z - 3)

    document.getElementById("valora").innerHTML = P;
    document.getElementById("valorb").innerHTML = P2;
}

function EvaluarXY() {
    var x1 = parseInt(document.getElementById("valorx1").value);
    var y1 = parseInt(document.getElementById("valory1").value);
    var L = Math.pow(x1, 2) + Math.pow(y1, 2) - (Math.pow(x1, 2) / Math.pow(y1, 2));
    a1 = (x1 - y1) / (x1 - 2 * y1)
    b1 = Math.sqrt(x1 * y1)
    c = (parseFloat(x1, 10) + parseFloat(y1, 10))
    c1 = Math.sqrt(c)
    d = Math.pow(a1, 2)
    e = Math.sqrt(x1 / y1)
    var L2 = b1 - c1 + d - e;

    document.getElementById("valorx10").innerHTML = x1;
    document.getElementById("valory10").innerHTML = y1;
    document.getElementById("valorx2").innerHTML = L;
    document.getElementById("valory2").innerHTML = L2;

}

function Edad_cronologica() {
    var num1 = parseInt(document.getElementById("fecha").value);
    var num2 = parseInt(document.getElementById("año").value);
    var res = (num2 - num1)
    var res2 = ((res - 1) * 11) + 31
    document.getElementById("edad").innerHTML = res2;
}