// PROBLEM - 1

// let box = document.querySelector('.box');
// console.log(box)
// console.log(box.getBoundingClientRect())
// let center = Math.floor(box.getBoundingClientRect().x+(box.getBoundingClientRect().width)/2);

// box.addEventListener('mousemove',(e)=>{
//     // console.log(e.clientX)
//     if(e.clientX<center){
//         // console.log(Math.floor(center - box.getBoundingClientRect().left));
//         let left = Math.floor(center - box.getBoundingClientRect().left);
//         let leftX = Math.floor(((center-e.clientX)*255)/left);
//         box.style.backgroundColor = `rgb(${leftX},0,0)`;
//     }
//     else{
//         // console.log('Right');
//         let right = Math.floor(box.getBoundingClientRect().right - center);
//         let rightX = Math.floor(((e.clientX-center)*255)/right);
//         box.style.backgroundColor = `rgb(0,0,${rightX})`;
//     }
// })

// PROBLEM -2 :

// let box = document.querySelector('.box');
// let container = document.querySelector('.container');

// container.addEventListener('mousemove',function(e){
//     let xValue = gsap.utils.mapRange(0,window.innerWidth,100+box.getBoundingClientRect().width/2,window.innerWidth-100,e.clientX)
//     // console.log(e.clientX);
//     gsap.to(".box",{
//         left : xValue,
//         ease : Power3
//     })
// })

// PROBLEM 3 : PICTURE POPING IN-OUT

let centerDiv = document.querySelector("#center");

function throttle(fn, delay) {
  let isThr = false;

  return function (...args) {
    if (!isThr) {
      fn.apply(this, args);
      isThr = true;

      setTimeout(() => {
        isThr = false;
      }, delay);
    }
  };
}

centerDiv.addEventListener(
  "mousemove",
  throttle((e) => {
    console.log("Scroll event triggered!");
    let div = document.createElement("div");
    div.classList.add("imageDiv");
    // console.log(e.clientX)
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    let image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://plus.unsplash.com/premium_photo-1689962253303-df6f8fd16069?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    div.appendChild(image);
    document.body.appendChild(div);

    gsap.to(image, {
      duration: 1,
      ease: "expo.out",
      y: 0,
    });
    // gsap.to(image, {
    //   y: "100%",
    //   ease: Power2,
    //   delay: 0.5,
    // });
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400)
);
