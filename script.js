let x = document.querySelector("#repay_div");
let x_inp = document.querySelector("#repay");

let y = document.querySelector("#interest_div");
let y_inp = document.querySelector("#interes");

x.onclick = function(){
    x.className = "radio pozadina";
    y.className = "radio";
    x_inp.checked = true;
}

y.onclick = function(){
    y.className = "radio pozadina";
    x.className = "radio";
    y_inp.checked = true;
}