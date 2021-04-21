const currentSpring = document.querySelector(".current-season");
const currentSummer = document.querySelector(".current-season");
const currentFall = document.querySelector(".current-season");
const currentWinter = document.querySelector(".current-season");
const bgChange = document.querySelector(".container");

// Season dates:
const springStart = "1 March 2021";
const springEnd = "31 May 2021";
const springStartDate = new Date(springStart);
const spring = new Date(springEnd);

const summerStart = "1 June 2021";
const summerEnd = "31 August 2021";
const summerStartDate = new Date(summerStart);
const summer = new Date(summerEnd);

const fallStart = "1 September 2021";
const fallEnd = "30 November 2021";
const fallStartDate = new Date(fallStart);
const fall = new Date(fallEnd);

const winterStart = "1 December 2021";
const winterEnd = "28 February 2022";
const winterStartDate = new Date(winterStart);
const winter = new Date(winterEnd);

function countdown() {
  const currentDate = new Date();
  // Date difference
  let dateDifference;

  if (currentDate >= springStartDate && currentDate <= spring) {
    clearInterval(countdown);
    dateDifference = spring - currentDate;
    currentSpring.innerHTML = "(Spring)";
    currentSpring.style.color = "#5e8d5a";
    document.querySelector(".days").style.color = "#5e8d5a";
    document.querySelector(".hours").style.color = "#5e8d5a";
    document.querySelector(".minutes").style.color = "#5e8d5a";
    document.querySelector(".seconds").style.color = "#5e8d5a";
    bgChange.style.backgroundImage = `url(/img/spring-1.jpg)`;
  } else if (currentDate >= summerStartDate && currentDate <= summer) {
    clearInterval(countdown);
    dateDifference = summer - currentDate;
    currentSummer.innerHTML = "(Summer)";
    document.querySelector("h1").style.color = "white";
    currentSummer.style.color = "#ffd700";
    document.querySelector(".days").style.color = "#ffd700";
    document.querySelector(".hours").style.color = "#ffd700";
    document.querySelector(".minutes").style.color = "#ffd700";
    document.querySelector(".seconds").style.color = "#ffd700";
    bgChange.style.backgroundImage = `url(/img/summer-1.jpg)`;
  } else if (currentDate >= fallStartDate && currentDate <= fall) {
    clearInterval(countdown);
    dateDifference = fall - currentDate;
    currentFall.innerHTML = "(Fall)";
    currentFall.style.color = "#B34233";
    document.querySelector(".days").style.color = "#B34233";
    document.querySelector(".hours").style.color = "#B34233";
    document.querySelector(".minutes").style.color = "#B34233";
    document.querySelector(".seconds").style.color = "#B34233";
    bgChange.style.backgroundImage = `url(/img/fall-3.jpg)`;
  } else if (currentDate >= winterStartDate && currentDate <= winter) {
    clearInterval(countdown);
    dateDifference = winter - currentDate;
    currentWinter.innerHTML = "(Winter)";
    currentWinter.style.color = "#1CB3D2";
    document.querySelector(".days").style.color = "#1CB3D2";
    document.querySelector(".hours").style.color = "#1CB3D2";
    document.querySelector(".minutes").style.color = "#1CB3D2";
    document.querySelector(".seconds").style.color = "#1CB3D2";
    bgChange.style.backgroundImage = `url(/img/winter-5.jpg)`;
  }

  //   Milliseconds to days, hours, etc.
  let milliDays = 1000 * 60 * 60 * 24;
  let milliHours = 1000 * 60 * 60;
  let milliMinutes = 1000 * 60;
  let milliSeconds = 1000;

  //   Converting above to days, hours, etc.
  let getDays = Math.floor(dateDifference / milliDays) % 365;
  let getHours = Math.floor(dateDifference / milliHours) % 24;
  let getMinutes = Math.floor(dateDifference / milliMinutes) % 60;
  let getSeconds = Math.floor(dateDifference / milliSeconds) % 60;

  //   Final results
  let days = (document.querySelector(".days").innerHTML = getDays);
  let hours = (document.querySelector(".hours").innerHTML = getHours);
  let minutes = (document.querySelector(".minutes").innerHTML = getMinutes);
  let seconds = (document.querySelector(".seconds").innerHTML = getSeconds);
}

setInterval(countdown, 1000);
