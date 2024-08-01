const result = document.getElementById("result");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");
const btn11 = document.getElementById("btn-11");
const btn12 = document.getElementById("btn-12");
const btn13 = document.getElementById("btn-13");
const btn14 = document.getElementById("btn-14");
const btn15 = document.getElementById("btn-15");
const btn16 = document.getElementById("btn-16");
const btn17 = document.getElementById("btn-17");
const btn18 = document.getElementById("btn-18");
const btn19 = document.getElementById("btn-19");
const btn20 = document.getElementById("btn-20");

let display = "";

btn6.onclick = function(){
    display = display+"7";
    console.log(display);
    result.textContent = display;
}
btn7.onclick = function(){
    display = display+"8"; 
    result.textContent = display;
}
btn8.onclick = function(){
    display = display+"9"; 
    result.textContent = display;
}
btn11.onclick = function(){
    display = display+"4"; 
    result.textContent = display;
}
btn12.onclick = function(){
    display = display+"5"; 
    result.textContent = display;
}
btn13.onclick = function(){
    display = display+"6"; 
    result.textContent = display;
}
btn16.onclick = function(){
    display = display+"1"; 
    result.textContent = display;
}
btn17.onclick = function(){
    display = display+"2"; 
    result.textContent = display;
}
btn18.onclick = function(){
    display = display+"3"; 
    result.textContent = display;
}
btn19.onclick = function(){
    display = display+"0"; 
    result.textContent = display;
}
btn1.onclick = function(){
    result.innerHTML = "0";
}