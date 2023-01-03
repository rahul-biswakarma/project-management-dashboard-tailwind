var sideNavExpanded = true;

function collapseSideNav() {
  if (sideNavExpanded) {
    document.querySelector("body").style.gridTemplateColumns = "100px auto";
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
    document.querySelector("body").style.gridTemplateColumns = "250px auto";
    document.querySelectorAll(".sidenav-text").forEach((element) => {
      element.style.display = "block";
    });
    document.querySelectorAll(".nav-item").forEach((element) => {
      element.style.padding = "0.5rem 2rem";
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

function openSideNav() {
  document.getElementById("sidenav-container").style.left = "0px";
}

function closeSideNav() {
  document.getElementById("sidenav-container").style.left = "-100%";
}
