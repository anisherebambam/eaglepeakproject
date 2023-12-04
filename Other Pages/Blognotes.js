// SIDEBAR TOGGLE ON AND OFF

const sidebarToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sideBar");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});



$('#blogdirectionlink a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
