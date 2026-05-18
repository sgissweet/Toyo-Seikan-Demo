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

  if (!isHome()) {
    fetch("../components/report.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("report").innerHTML = html;
      });
  }

  fetch("../components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;

      renderFooter();
    });
    


});

