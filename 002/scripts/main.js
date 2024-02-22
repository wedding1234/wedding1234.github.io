// 引入其他JS
document.write( '<script src=\"scripts/backtop.js\"></script>');
document.write( '<script src=\"scripts/swiper-bundle.min.js\"></script>');
document.write( '<script src=\"scripts/supahScroll.js\"></script>');


// 🟠bgImg-set 
const bgSet = document.querySelectorAll("[data-bgImg]");
for (let i = 0; i < bgSet.length; i++) {
  let url = bgSet[i].getAttribute('data-bgImg');
  bgSet[i].style.backgroundImage="url('" + url + "')";
}

// 🟠bgColor-set 
const bgColor = document.querySelectorAll("[data-bgColor]");
// const hex = num.toString(16);
for (let i = 0; i < bgColor.length; i++) {
  let hex = bgColor[i].getAttribute('data-bgColor');  
  bgColor[i].style.backgroundColor= "#" + hex ;
}

// 🟠fontColor-set 
const fontColor = document.querySelectorAll("[data-fontColor]");
// const hex = num.toString(16);
for (let i = 0; i < fontColor.length; i++) {
  let fontClr = fontColor[i].getAttribute('data-fontColor');  
  fontColor[i].style.color= "#" + fontClr ;
}

// 🟢 Scroll with Item Show
const boxes = document.querySelectorAll("div,section,img,a,article,.item"); 
const checkBoxes = () => {  
  const triggerBottom = (window.innerHeight) ;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes();



// 🟠Copyright
var d = new Date();
document.getElementById("getyear").innerHTML = d.getFullYear();



// 🟢safari-vh 
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {  
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});