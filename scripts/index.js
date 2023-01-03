var sideNavExpanded = true;
var headerButtonConatinerExpanded = false;

function collapseSideNav() {
  if (sideNavExpanded) {
    document.querySelectorAll(".sidenav-text").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll(".nav-item").forEach((element) => {
      element.style.padding = "10px";
      element.style.justifyContent = "center";
    });
    document.getElementById("sidenav-header").style.padding = "1.5rem";
    document.getElementById("sidenav-controller").style.transform =
      "rotate(180deg)";
    sideNavExpanded = false;
  } else {
    if (window.innerWidth <= 650) {
      document.getElementById("sidenav-container").style.position = "fixed";
    }
    document.querySelectorAll(".sidenav-text").forEach((element) => {
      element.style.display = "block";
    });
    document.querySelectorAll(".nav-item").forEach((element) => {
      element.style.padding = "0.5rem 4rem 0.5rem 2rem";
      element.style.justifyContent = "flex-start";
    });
    document.getElementById("sidenav-header").style.padding = "1.5rem";
    document.getElementById("sidenav-controller").style.transform =
      "rotate(0deg)";
    sideNavExpanded = true;
  }
}

// window.onresize = function () {
//   if (window.innerWidth <= 850 && sideNavExpanded) {
//     collapseSideNav();
//   } else if (window.innerWidth > 850 && !sideNavExpanded) {
//     collapseSideNav();
//   }
// };

function toogleHeaderButtonContainer() {
  if (headerButtonConatinerExpanded) {
    document.getElementById("header-button-container").style.display = "none";
    headerButtonConatinerExpanded = false;
  } else {
    document.getElementById("header-button-container").style.display = "flex";
    headerButtonConatinerExpanded = true;
  }
}

function openSideNav() {
  document.getElementById("sidenav-container").style.left = "0px";
}

function closeSideNav() {
  document.getElementById("sidenav-container").style.left = "-100%";
}

function closeSearchDiv() {
  document.getElementById("search-div").style.top = "-100%";
}

function openSearchDiv() {
  document.getElementById("search-div").style.top = "0px";
}
