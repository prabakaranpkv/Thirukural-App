//validation for input number
function get() {
  let num = document.getElementById("input").value;
  let error = document.getElementById("err");
  if (!num) {
    error.innerText = "Enter only Number";
    document.getElementById("content").classList.add("content");
    return false;
  } else if (num < 1 || num > 1330) {
    error.innerText = "Enter a Number between 1 to 1330";
    document.getElementById("content").classList.add("content");
    return false;
  } else {
    error.innerText = " ";
    fetc(num);
    document.getElementById("content").classList.remove("content");
  }
  return true;
}

//fetching Api
function fetc(num) {
  fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
    .then((res) => res.json())
    .then((res) => data(res))
    .catch((err) => console.log("sometnig went wrong", err));
}
// function for print data
function data(res) {
  if (document.querySelector("#tamil").checked === true) {
    document.getElementById("number").innerHTML =
      "<span>Number</span>" + "</br>" + res.number;
    document.getElementById("chap_tam").innerHTML =
      "<span>Chapter</span>" + "</br>" + res.chap_tam;
    document.getElementById("chapgrp_tam").innerHTML =
      "<span>Chapter Group</span>" + "</br>" + res.chapgrp_tam;
    document.getElementById("sect_tam").innerHTML =
      "<span>Section</span>" + "</br>" + res.sect_tam;
    document.getElementById("kural").innerHTML = "<span id='hed'>Kural</span>";
    document.getElementById("line1").innerHTML =
      res.line1 + "</br>" + res.line2;
    document.getElementById("exp").innerHTML =
      "<span id='hed'>Explanation</span>";
    document.getElementById("tam_exp").innerHTML = res.tam_exp;
  } else {
    document.getElementById("number").innerHTML =
      "<span>Number</span>" + "</br>" + res.number;
    document.getElementById("chap_tam").innerHTML =
      "<span>Chapter</span>" + "</br>" + res.chap_eng;
    document.getElementById("chapgrp_tam").innerHTML =
      "<span>Chapter Group</span>" + "</br>" + res.chapgrp_eng;
    document.getElementById("sect_tam").innerHTML =
      "<span>Section</span>" + "</br>" + res.sect_eng;
    document.getElementById("kural").innerHTML = "<span id='hed'>Kural</span>";
    document.getElementById("line1").innerHTML = res.eng;
    document.getElementById("exp").innerHTML =
      "<span id='hed'>Explanation</span>";
    document.getElementById("tam_exp").innerHTML = res.eng_exp;
  }
}
