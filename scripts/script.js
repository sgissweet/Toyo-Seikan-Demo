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
        <div class="user-box d-flex align-items-center gap-2">
            <img src="assets/images/profile.jpg" class="avatar">
            <div>
                <div class="user-role">${DATA.user.position}</div>
                <div class="user-name">${DATA.user.name}</div>
            </div>
        </div>
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

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Render all sections
    renderSite();
    renderUser();
    renderNav();
    renderFooter();
});
