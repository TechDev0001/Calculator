let number = document.getElementById('one');
let output = document.getElementById('output');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let multiple = document.getElementById('mult');
let subtraction = document.getElementById('sub');
let pluse = document.getElementById('pluse');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let AC = document.getElementById('ac');

let equal = document.getElementById('equal');




let s = 0, k = 0, m = [];

dot.addEventListener("click", function () {
    output.innerHTML += ".";
    value(".");
});


zero.addEventListener("click", function () {
    output.innerHTML += "0";
    value(0);
});


number.addEventListener("click", function () {
    output.innerHTML += "1";
    value(1);
});


two.addEventListener("click", function () {
    output.innerHTML += "2";
    value(2);
})
three.addEventListener("click", function () {
    output.innerHTML += "3";
    value(3);
})
four.addEventListener("click", function () {
    output.innerHTML += "4";
    value(4);
})
five.addEventListener("click", function () {
    output.innerHTML += "5";
    value(5);
})
six.addEventListener("click", function () {
    output.innerHTML += "6";
    value(6);
})
seven.addEventListener("click", function () {
    output.innerHTML += "7";
    value(7);
})
eight.addEventListener("click", function () {
    output.innerHTML += "8";
    value(8);
})
nine.addEventListener("click", function () {
    output.innerHTML += "9";
    value(9);
})

multiple.addEventListener("click", function () {
    s = 3;
    m[k] = "*";
    k++;
    output.innerHTML += "*";
})

subtraction.addEventListener("click", function () {
    s = 2;
    m[k] = "-";
    k++;
    output.innerHTML += "-";
})

pluse.addEventListener("click", function () {
    m[k] = "+";
    k++;
    s = 1;
    output.innerHTML += "+";
})

let a = 0, b = 0, c = 0, d = 0, e = 0, digit = 0 ,ans=0;

function value(digit) {

    
    if (s == 0) {

        a = a * 10 + digit;
    }

    else if (s == 1) {
        b = b * 10 + digit;
    }
    else if (s == 2) {
        c = c * 10 + digit;
    }
    else if (s == 3) {
        d = d * 10 + digit;
    }
    else {
        e = e * 10 + digit;
    }
    return 0;
}

equal.addEventListener("click", function () {
    // output.innerHTML = "";
    for (let q = 0; q < 5; q++) {
        if (m[q] == "+") {
            a= a + b;
            // break;
        }
        else if (m[q] == "-") {
            a= a - c;
        }
        else if (m[q] == "*") {
            a= a * d;
        }
        m[q]=q;
    }
    
    // e = 0;
    // m[0]="+";
    // a = 0;
    output.innerHTML = a;
    c=0;d=0;e=0;
    b=0;
    
})
AC.addEventListener("click", function () {
    digit = 0;
    ans=0;
    a=0;b=0;c=0;d=0;e=0;
    s=0;
    output.innerHTML = " ";
});

