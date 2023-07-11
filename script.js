// document.getElementById("demo")
// document.getElementsByClassName()
// document.getElementsByTagName()
// function para(){
//     document.getElementById("demo").innerHTML="My name is Deepika";
// }
// function photo(){
//     document.getElementById("demo").innerHTML="My name is Deepika";
//     document.getElementById("demo").style.fontFamily="Edwardian Script ITC";
// }
// function deep(){
//     document.getElementById("demo").innerHTML="My name is Deepika";
//     document.getElementById("demo").style.fontFamily="visible"
// }
// console.log(5+5);
// alert(5+5);
// add the number

function addition(){
    var x =parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = x + y;
    document.getElementById("add").innerHTML = z;
}
// var x = 5;
// var y = 6;
// var z = x + y;
// document.write(z)
// document.getElementById("add").innerHTML = z;
function subration(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z = x-y;
    document.getElementById("sub").innerHTML = z;
}
function multiplication(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z = x*y;
    document.getElementById("multi").innerHTML = z;
}
function division(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z = x / y;
    document.getElementById("div").innerHTML = z;
}