document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-address").innerHTML =
        DATA.contact.address.join("<br>");
    document.getElementById("contact-email").textContent = DATA.contact.email;
    document.getElementById("contact-tel").textContent = DATA.contact.tel;
    document.getElementById("contact-map").innerHTML = `
        <div class="map-responsive">
            <iframe
                src="${DATA.contact.mapsrc}"
                width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `;
});

