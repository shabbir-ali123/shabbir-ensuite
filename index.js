function openTab(tabName) {
  var i, tabcontent, menuitem;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  menuitem = document.getElementsByClassName("menu-item");
  for (i = 0; i < menuitem.length; i++) {
    menuitem[i].className = menuitem[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Set default tab
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("menu-item")[0].click();
});
