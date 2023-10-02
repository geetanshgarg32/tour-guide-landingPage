function myFunction() {
    
    var elms1 = document.getElementsByClassName("nav-search");
    if (elms1[0].style.display === "block") {
      elms1[0].style.display = "none";
    } else {
      elms1[0].style.display = "block";
    }
    var elms = document.getElementsByClassName("navbar-menu");
    if (elms[0].style.display === "block") {
      elms[0].style.display = "none";
    } else {
      elms[0].style.display = "block";
    }
    var elem = document.getElementsByClassName("navbarr");
    Array.from(elem).forEach((h) => {
      if(h.style.height==="40vh"){
        h.style.height = "11vh";
      }else{
        h.style.height = "40vh";
      }
    })
}
