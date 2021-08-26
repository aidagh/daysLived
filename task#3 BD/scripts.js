"use strict";

//DEFINE VARIABLES FOR CURRENT DATE
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

//DEFINE AN EVENT HANDLER FOR CALCULATE BUTTON
document.querySelector(".calculate").addEventListener("click", function () {
  //GET AN STRING FROM INPUT AND DEVIDE IT TO YEARS,MONTHS AND DAYS
  const birthday = document.querySelector(".date").value;
  const birthYear = Number(birthday.slice(0, 4));
  const birthMonth = Number(birthday.slice(5, 7));
  const birthDate = Number(birthday.slice(8, 10));

  //DEFINE AN ELEMENT FOR THE NUMBER OF LEAP YEARS
  const leapYear = Math.trunc((year - birthYear) / 4);

  //CALCULATING THE DAYS WE HAVE LIVED
  const diff =
    (year - birthYear) * 31536000000 +
    (month - birthMonth) * 2628000000 +
    (day - birthDate) * 86400000;
  const x = Math.trunc(diff / (24 * 3600 * 1000)) + leapYear;

  //PUSH THE RESULT TO HTML FILE
  document.querySelector(".message").textContent = `You are ${x} days old! `;
});
