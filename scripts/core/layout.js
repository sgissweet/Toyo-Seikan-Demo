export function getPage() {
  return document.body.dataset.page;
}

function loadComponent(selector, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.querySelector(selector);
      if (!el) return;

      el.innerHTML = data;

      if (callback) callback(el);
    });
}

const isHome = () => getPage() === "home";

// Navbar
loadComponent("#navbar-placeholder", "../components/navbar.html", (el) => {
  if (isHome()) {
    const icon = el.querySelector(".navbar-icon");
    if (icon) icon.src = "../assets/icons/home2.png";
  }
  const header = document.querySelector(".site-header");

    if (!header) return;

    
});

// Footer
const footerFile = isHome()
  ? "../components/footer.html"
  : "../components/footer2.html";

loadComponent("#footer", footerFile);

