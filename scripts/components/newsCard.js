export function createNewsCard(news) {
    return `
        <div class="news-zone">
            <div class="card news-card mb-4">
                <img src="${news.image}" class="news-card-img" alt="${news.title}">
                <div class="p-2">
                    <p class="text-truncate">${news.title}</p>
                    <small class="text-muted"><i class="bi bi-calendar me-2"></i>${news.date}</small>
                    <a href="#" class="d-block text-end mt-2">อ่านเพิ่มเติม...</a>
                </div>
            </div>
        </div>
    `;
}