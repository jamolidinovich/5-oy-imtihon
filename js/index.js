// Malumotlarni jsga chaqirish
let all;
let creatMain = document.getElementById("creatMain");
let moreInfo = document.querySelector(".moreInfo");
let hero = document.querySelector(".hero");
let search = document.getElementById("serachInput");
let regin = document.querySelectorAll(".dropdown-item");
let regionAll = document.querySelector(".regionAll");
let mooude = document.querySelector(".mooude");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const loader = document.getElementById("loader");

// Dark mode uchun defolt sitillat
container.style.display = "none";
function loaderCallback() {
  loader.style.display = "none";
  container.style.display = "block";
}
mooude.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
// API-dan kelgan davlatlar
window.addEventListener("DOMContentLoaded", function () {
  fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
    .then((respons) => respons.json())
    .then((data) => {
      all = data.data;
      loaderCallback();
      all.forEach((el) => {
        creatMain.innerHTML += `
        <div class="colum" id="${el.name.slug}">
            <img src="${el.flags.png}" alt="${el.flags.alt}" >
            <div class="tex">
               <p>${el.name.common}</p>
               <p>Population:${el.population}</p>
               <p class="Region" id="${el.region}">Region: ${el.region}</p>
               <p>Capital ${el.capital}</p>
           </div>
           </div>
      `;
      });
      // Davlatlar qaysi qitaga doirligi
      regin.forEach((el) => {
        el.addEventListener("click", function () {
          all.forEach((elem) => {
            if (elem.region == el.textContent) {
              creatMain.style.display = "none";
              regionAll.innerHTML += `
                <div class="colum" id="${elem.name.slug}">
                    <img src="${elem.flags.png}" alt="${elem.flags.alt}" >
                    <div class="tex">
                       <p>Name:${elem.name.common}</p>
                       <p>Population:${elem.population}</p>
                       <p class="Region" id="${elem.region}">Region: ${elem.region}</p>
                       <p>Capital ${elem.capital}</p>
                   </div>
                   </div>
              `;
            }
          });
        });

        el.addEventListener("click", function () {
          regionAll.innerHTML = "";
          all.forEach((elem) => {
            if (elem.region == el.textContent) {
              creatMain.style.display = "none";
              regionAll.innerHTML += `
                <div class="colum" id="${elem.name.slug}">
                    <img src="${elem.flags.png}" alt="${elem.flags.alt}" >
                    <div class="tex">
                       <p>Name:${elem.name.common}</p>
                       <p>Population:${elem.population}</p>
                       <p class="Region" id="${elem.region}">Region: ${elem.region}</p>
                       <p>Capital ${elem.capital}</p>
                   </div>
                   </div>
              `;
            }
          });
        });
        // qitallar tanlanganda ruy beradigan hodisalar
        el.addEventListener("click", function () {
          if (el.textContent == "All") {
            regionAll.style.display = "none";
            creatMain.style.display = "block";
            creatMain.style.display = "flex";
          }
        });
        regionAll.addEventListener("click", function () {
          all.forEach((element) => {
            if (regionAll.id == element.name.slug) {
              creatMain.style.display = "none";
              hero.style.display = "none";
              moreInfo.innerHTML = `
                      <div class="img id="btnRef">    
                      <button id="btnRef">Back</button>;          
                                          <img src="${element.flags.png}" alt="${element.flags.alt}" />
                    </div>
                    <div class="cardText">
                      <div class="leftTex">
                        <p>Nativ name: ${element.name.nativeName}</p>
                        <p>Population: ${element.population}</p>
                        <p>Region: ${element.region}</p>
                        <p>Sub region: ${element.subregion}</p>
                        <p>Capital: ${element.capital}</p>
                      </div>
                      <div class="rightTex">
                        <p>Top level Domain:.be lorem...</p>
                        <p>Currencies :${element.currencies}</p>
                        <p>Languages:${element.languages}</p>                    
                      </div>
                    </div>
                      `;

              let btn = document.getElementById("btnRef");
              btn.addEventListener("click", function () {
                creatMain.style.display = "block";
                creatMain.style.display = "flex";
                hero.style.display = "none";
                hero.style.display = "flex";
                moreInfo.innerHTML = "";
              });
            }
          });
        });
      });

      // Bita davlatni uzi haqida malumoti
      let allCard = document.querySelectorAll(".colum");
      allCard.forEach((el) => {
        el.addEventListener("click", function () {
          all.forEach((element) => {
            if (el.id == element.name.slug) {
              creatMain.style.display = "none";
              hero.style.display = "none";
              moreInfo.innerHTML = `
                      <div class="img">
                      <button id="btnRef">Back</button>
                      <img src="${element.flags.png}" alt="${element.flags.alt}" />
                    </div>
                    <div class="cardText">
                      <div class="leftTex">
                        <p>Nativ name: ${element.name.nativeName}</p>
                        <p>Population: ${element.population}</p>
                        <p>Region: ${element.region}</p>
                        <p>Sub region: ${element.subregion}</p>
                        <p>Capital: ${element.capital}</p>
                      </div>
                      <div class="rightTex">
                        <p>Top level Domain: .be lorem...</p>
                        <p>Currencies :${element.currencies}</p>
                        <p>Languages:${element.languages}</p>
                      </div>
                    </div>
                      `;

              let btn = document.getElementById("btnRef");
              btn.addEventListener("click", function () {
                creatMain.style.display = "block";
                creatMain.style.display = "flex";
                hero.style.display = "none";
                hero.style.display = "flex";
                moreInfo.innerHTML = "";
              });
            }
          });
        });
      });
    });
  // Davlatlarni qidirish
  search.addEventListener("keyup", function () {
    let value = search.value;
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${value}`
    )
      .then((data) => data.json())
      .then((data) => {
        creatMain.innerHTML = "";
        data.data.forEach((el) => {
          let card = `
        <div class="colum" id="${el.name.slug}">
            <img src="${el.flags.png}" alt="${el.flags.alt}" >
            <div class="tex">
               <p>Name:${el.name.common}</p>
               <p>Population:${el.population}</p>
               <p class="Region" id="${el.region}">Region: ${el.region}</p>
               <p>Capital ${el.capital}</p>
           </div>
           </div>
      `;
          creatMain.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
