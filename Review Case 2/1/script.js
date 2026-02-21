// take class & id into variable
let title = document.querySelector("#title");
let desc = document.querySelector(".description");
const button = document.querySelector("#btn");

// change the value
title.textContent = "Selamat Datang, Ways!"
desc.textContent = "DOM sudah mulai balik nih!"
button.addEventListener("click", function(){
    console.log("Tombol di klik!");
});