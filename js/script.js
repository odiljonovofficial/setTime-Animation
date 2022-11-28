"use strict";

const btn = document.querySelector("#btn");

function myAnimation() {
  const car = document.querySelector(".car");
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      car.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// const btn = document.querySelector("#btn");
// let timerId;
// let i = 0;

// btn.addEventListener("click", () => {
//   // const timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("set time out");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello log");
//   id = setTimeout(log, 500);
// }, 500);

// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);
