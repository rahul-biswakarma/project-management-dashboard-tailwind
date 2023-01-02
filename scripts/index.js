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
    document.getElementById("sidenav-controller").style.transform =
      "rotate(180deg)";
    sideNavExpanded = false;
  } else {
    document.querySelector("body").style.gridTemplateColumns = "250px auto";
    document.querySelectorAll(".sidenav-text").forEach((element) => {
      element.style.display = "block";
    });
    document.querySelectorAll(".nav-item").forEach((element) => {
      element.style.padding = "0.5rem 2rem";
      element.style.justifyContent = "flex-start";
    });
    document.getElementById("sidenav-controller").style.transform =
      "rotate(0deg)";
    sideNavExpanded = true;
  }
}
