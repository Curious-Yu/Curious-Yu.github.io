/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
      document.getElementById("icon").innerHTML = '<i class="fas fa-server" title="menu"></i>';
    } else {
      x.style.display = "flex";
      document.getElementById("icon").innerHTML = '<i class="fa fa-times-circle-o" title="close menu"></i>';
    }
  }