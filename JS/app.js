window.onscroll = function() {
  scroll() };

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("go-to-top").classList.add("active");
  } else {
    document.getElementById("go-to-top").classList.remove("active");
  }
}

function menuOC() {
  var menu = document.getElementById("menu");
  var hamb = document.getElementById("hamburger");
  var footer = document.getElementById("footer");
  
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    hamb.classList.add('close');
    footer.classList.add('above');
    document.body.classList.add('remove-scroll');
  } else {
    menu.classList.remove('active');
    hamb.classList.remove('close');
    footer.classList.remove('above');
    document.body.classList.remove('remove-scroll');
  }
}