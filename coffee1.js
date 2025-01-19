let navbar = document.querySelector(".navbar");
let menuBtn = document.getElementById("menu-btn");
let searchform = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
let cartBtn = document.getElementById("cart-btn");
let cartItem = document.querySelector(".cart-items-cpntainer");

//TOGGLE MENUE BUTTON
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchform.classList.remove("active");
});

//TOGGLE SEARCH BUTTON
searchBtn.addEventListener("click", () => {
  searchform.classList.toggle("active");
});

//TOGGLE CART BUTTON
cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
});

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };
