let tepa = document.querySelector(".top");
let menubtn = document.querySelector(".menu-btn");
let menus = document.querySelector(".menu");
let insta = document.querySelector(".insta");
let mnbtn = document.querySelector(".menu-btn");
let logo = document.querySelector(".logo");
let morebox = document.querySelector(".more-box");
let x = document.querySelector(".remove");
let ov1 = document.querySelector(".ov1");
let ov2 = document.querySelector(".ov2");



menubtn.addEventListener('click' , function() {
    morebox.classList.toggle("more-box-add");
})
x.addEventListener('click' , function() {
    morebox.classList.remove("more-box-add");
})
logo.addEventListener('click' , function(){
    insta.classList.toggle("btn-remove");
    mnbtn.classList.toggle("btn-remove");
    tepa.classList.toggle("top-cn");
    ov1.classList.toggle("ovh1");
    ov2.classList.toggle("ovh2");
    logo.classList.toggle("logo2");
})