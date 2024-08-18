let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Gulir ke bawah
    navbar.style.top = "-80px"; // Menyembunyikan navbar (atur sesuai dengan tinggi navbar Anda)
  } else {
    // Gulir ke atas
    navbar.style.top = "0";
  }

  lastScrollTop = currentScrollTop;
});
// Fungsi untuk menyembunyikan dropdown saat scroll
function hideDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-menu.show");
  dropdowns.forEach(function (dropdown) {
    dropdown.classList.remove("show");
  });
}

// Event listener untuk scroll
window.addEventListener("scroll", function () {
  hideDropdowns();
});
$(document).ready(function () {
  // Menutup navbar ketika tautan di klik
  $(".navbar-nav .nav-link")
    .not(".dropdown-toggle")
    .on("click", function () {
      $(".navbar-toggler").click(); // Simulasi klik pada tombol toggler
    });

  // Menutup navbar ketika tautan di dalam dropdown menu diklik
  $(".dropdown-menu .dropdown-item").on("click", function () {
    $(".navbar-toggler").click(); // Simulasi klik pada tombol toggler
  });

  // Menutup navbar ketika area di luar navbar diklik
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".navbar, .navbar-toggler").length) {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-toggler").click(); // Simulasi klik pada tombol toggler
      }
    }
  });
});
