let Num = document.getElementById("in");
let Hour = document.getElementById("p1");
let Min = document.getElementById("p2");
let Sec = document.getElementById("p3");
let B1 = document.getElementById("b1");
let B2 = document.getElementById("b2");
let B3 = document.getElementById("b3");
let p = document.getElementById("p4");
B1.addEventListener("click", Dokme1);
B2.addEventListener("click", Dokme2);
B3.addEventListener("click", Dokme3);
var flag = true;
function Dokme1() {
  if (Num.value == "") {
    p.innerHTML = "Please Enter A Number Frist";
    p.classList.toggle("p4");
    clearInterval(s);
  }
  if (flag == true && Num.value != "") {
    p.innerHTML = "";
    var hours = Num.value / 60;
    Hour.innerHTML = show(Math.floor(hours));
    var minutes = (hours - Hour.innerHTML) * 60;
    Min.innerHTML = show(Math.round(minutes));
    var second = (minutes - Min.innerHTML) * 60;
    Sec.innerHTML = show(Math.round(second));
    s = setInterval(tenet, 1000);
  } else {
    s = setInterval(tenet, 1000);
  }

  function tenet() {
    if (Number(Min.innerHTML) == 0 && Number(Hour.innerHTML) > 0) {
      Hour.innerHTML = show(Number(Hour.innerHTML) - 1);
      Min.innerHTML = 60;
    }
    if (Number(Sec.innerHTML) == 0) {
      Min.innerHTML = show(Number(Min.innerHTML) - 1);
      Sec.innerHTML = 59;
    } else {
      Sec.innerHTML = show(Number(Sec.innerHTML) - 1);
    }
    if (
      Number(Sec.innerHTML) == 0 &&
      Number(Min.innerHTML) == 0 &&
      Number(Hour.innerHTML) == 0
    ) {
      clearInterval(s);
    }
  }
}

function Dokme2() {
  clearInterval(s);
  flag = false;
}
function Dokme3() {
  location.reload();
}
function show(x) {
  if (x < 10 && x >= 0) {
    return "0" + x;
  } else {
    return x;
  }
}
