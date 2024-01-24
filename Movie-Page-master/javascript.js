// swiper slide

var swiper = new Swiper(".mySwiper", {
  zoom: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("load", function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
});

var SiteBody = document.body;
var SiteHeaderCon = document.querySelector(".site-header-con");

var SiteName = document.querySelector(".site-name");

function minZoomFunction(minWidth990) {
  if (minWidth990.matches) {
    headerColor();
    SiteName.src = "./images/sitename.png";
  } else {
    SiteName.src = "./images/SiteIcon/siteicon.jpg";
  }
}

var minWidth990 = window.matchMedia("(min-width: 991px)");
minZoomFunction(minWidth990);
minWidth990.addListener(minZoomFunction);

function headerColor() {
  window.addEventListener("scroll", function () {
    callsearch.style.color = "#f1f2f6";
    searchcon.style.display = "none";

    if (SiteBody.scrollTop == 0) {
      SiteHeaderCon.style.backgroundColor = "rgba(15, 25, 32, 0.4)";
    } else {
      SiteHeaderCon.style.backgroundColor = "rgba(15, 25, 32, 1)";
    }
  });
}

var callsearch = document.querySelector(".call-search");
var searchcon = document.querySelector(".search-con");

searchcon.style.display = "none";

callsearch.addEventListener("click", function () {
  searchShowHide();
});

function searchShowHide() {
  if (searchcon.style.display == "none") {
    searchcon.style.display = "flex";
    callsearch.style.color = "rgb(227, 35, 62)";
  } else {
    searchcon.style.display = "none";
    callsearch.style.color = "#f1f2f6";
  }
}

var mobileVerBut = document.querySelector(".mobile-ver-close-but");
var mobileNavBar = document.querySelector(".header-right-con");

mobileVerBut.addEventListener("click", function () {
  closeAndOpenNavBar();
});

function closeAndOpenNavBar() {
  SiteHeaderCon.classList.toggle("active-header-con");
}

var boxImgSelect = $(".play-img-select");
var boxImgButton = $(".img-play-but");

boxImgSelect.mouseover(function () {
  $(this).closest("a").children("svg").css("opacity", "1");
});

boxImgSelect.mouseout(function () {
  $(this).closest("a").children("svg").css("opacity", "0");
});

var DaysI = document.querySelector(".days");
var HoursI = document.querySelector(".hours");
var MinsI = document.querySelector(".minutes");
var SecsI = document.querySelector(".seconds");

var countDownDate = new Date("May 1, 2026 15:37:25").getTime();

var HotMovieTimer = setInterval(TimeDecrease, 1000);

function TimeDecrease() {
  var TimeNow = new Date().getTime();

  var TimeDistance = countDownDate - TimeNow;

  var DayNum = Math.floor(TimeDistance / (1000 * 60 * 60 * 24));
  var HoursNum = Math.floor(
    (TimeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var MinsNum = Math.floor((TimeDistance % (1000 * 60 * 60)) / (1000 * 60));
  var SecsNum = Math.floor((TimeDistance % (1000 * 60)) / 1000);

  DaysI.innerHTML = DayNum;
  HoursI.innerHTML = HoursNum;
  MinsI.innerHTML = MinsNum;
  SecsI.innerHTML = SecsNum;

  if (TimeDistance < 0) {
    clearInterval(HotMovieTimer);
  }
}

const slideCon = $(".cast-slide-display");

var slideItems = $(".cast-slide");

const leftBtn = $(".cast-left-but");
const rightBtn = $(".cast-right-but");

var tranlateX = 0;
leftBtn.click(function () {
  if (tranlateX < 0) {
    tranlateX += 170;
    slideItems.css("transform", "translateX(" + tranlateX + "px)");
  }
  if (tranlateX >= 0) {
    tranlateX = 0;
    slideItems.css("transform", "translateX(" + tranlateX + "px)");
  }
});

rightBtn.click(function () {
  if (tranlateX > slideCon.innerWidth() - slideItems.length * 170) {
    tranlateX -= 170;
    slideItems.css("transform", "translateX(" + tranlateX + "px)");
  }
  if (slideItems.length * 170 - slideCon.innerWidth() + tranlateX < 0) {
    tranlateX -= slideItems.length * 170 - slideCon.innerWidth() + tranlateX;
    slideItems.css("transform", "translateX(" + tranlateX + "px)");
  }
});

function slideFix() {
  if (slideItems.length * 170 - slideCon.innerWidth() + tranlateX < 0) {
    tranlateX -= slideItems.length * 170 - slideCon.innerWidth() + tranlateX;
    slideItems.css("transform", "translateX(" + tranlateX + "px)");
  }
}

$(window).resize(function () {
  slideFix();
});

var castName = $(".cast-name");

castName.mouseover(function () {
  $(this).attr("title", $(this).text());
});
