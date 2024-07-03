document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".medoM");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      var content = this.nextElementSibling;
      if (content.classList.contains("show")) {
        content.classList.remove("show");
      } else {
        var allContents = document.querySelectorAll(".content");
        allContents.forEach(function (cont) {
          cont.classList.remove("show");
        });
        content.classList.add("show");
      }
    });
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".medoM")) {
      var dropdowns = document.querySelectorAll(".content");
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("show");
      });
    }
  });
});
