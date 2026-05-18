export function getPage() {
  return document.body.dataset.page;
}



const isHome = () => getPage() === "home";

document.addEventListener("DOMContentLoaded", () => {

  fetch("../components/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      renderUser();
      renderNav();
    });

  fetch("../components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;

      renderFooter();
    });

});

