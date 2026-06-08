export function createNewsCard(news) {
    return `
        <div class="news-zone">
            <a href="../pages/news-detail.html" class="news-card-link">
      
                <div class="card news-card mb-4">
                    <img src="${news.image}" class="news-card-img" alt="${news.title}">
                    <div class="p-2">
                        <p class="text-truncate">${news.title}</p>
                        <small class="text-muted"><i class="bi bi-calendar me-2"></i>${news.date}</small>
                        <div class="text-end mt-2">
                            <span class="read-more">อ่านเพิ่มเติม...</span>
                        </div>                    
                    </div>
                </div>
            </a>
        </div>
    `;
}