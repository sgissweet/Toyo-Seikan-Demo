// ========================================
// RENDER FUNCTIONS
// ========================================

function renderSite() {
    setText('companyName', DATA.site.companyName);
    setText('heroTitle', DATA.site.heroTitle);
    setText('heroSubtitle', DATA.site.heroSubtitle);
    setText('copyrightLeft', DATA.site.copyright);
    setText('copyrightRight', DATA.site.copyright);
}


function renderUser() {
    setHTML('userProfile', `
        <a href="../pages/profile.html" class="text-decoration-none">
            <div class="user-box d-flex align-items-center gap-2">
                <img src="../assets/images/profile.jpg" class="avatar">
                <div>
                    <div class="user-role">${DATA.user.position}</div>
                    <div class="user-name">${DATA.user.name}</div>
                </div>
            </div>
        </a>
    `);
}

function renderNav() {
    setHTML('navMenu', DATA.navItems.map(item => `
        <li class="nav-item">
            <a class="nav-link" href="${item.href}">
                ${item.icon ? `<i class="bi ${item.icon}"></i>` : item.label}
            </a>
        </li>
    `).join(''));
}

function renderFooter() {
    setText('footerLeft', DATA.site.footer);
    setText('footerRight', DATA.site.footer);
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}
function renderContact() {
    setHTML('contactLinks', DATA.contactLinks.map(link =>
        `<li><span>${link.label}</span></li>`
    ).join(''));

    setHTML('contactInfo', `
        <h5 class="contact-title">${DATA.contact.title}</h5>
        <p class="mb-2"><strong>${DATA.contact.office}</strong></p>
        <p class="mb-1">${DATA.contact.address.join('<br>')}</p>
        <p class="mt-3 mb-1"><strong>Tel:</strong> ${DATA.contact.tel}</p>
        <p><strong>Email:</strong> ${DATA.contact.email}</p>
    `);

    setHTML('contactMap', `
        <div class="map-responsive">
                        <iframe
                            src="${DATA.contact.mapsrc}"
                            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
    `);
}

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Render all sections
    renderSite();
    renderUser();
    renderNav();
    renderFooter();
    renderContact();
});

