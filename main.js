// JavaScript to trigger animations on scroll
window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(
    ".about, .curriculum, .testimonials, .cta"
  );
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  elements.forEach(function (element) {
    if (scrollTop + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("reveal");
    }
  });
});

//insert icons on all li

const ulBenefitsList = document.querySelector(".benefits");
ulBenefitsList.querySelectorAll("li").forEach((li, i) => {
  const img = document.createElement("img");
  img.src = "assets/icons/checkmark.svg";
  img.alt = "Checkmark";
  li.appendChild(img);
});
