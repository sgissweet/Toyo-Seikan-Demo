async function loadLayout() {
  // เก็บ content เดิมไว้ก่อน
  const originalContent = document.body.innerHTML;

  // โหลด layout
  const res = await fetch("../layout/layout.html");
  document.body.innerHTML = await res.text();

  // โหลด navbar
  const nav = await fetch("../components/navbar.html");
  document.getElementById("navbar").innerHTML = await nav.text();
  
  // ใส่ content กลับเข้าไป
  document.getElementById("content").innerHTML = originalContent;

  // โหลด footer
  const footer = await fetch("../components/footer.html");
  document.getElementById("footer").innerHTML = await footer.text();
}

function setActiveNav() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}