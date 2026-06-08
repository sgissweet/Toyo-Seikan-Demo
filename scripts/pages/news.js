import { news } from "../data/news.js";
import { createNewsCard } from "../components/newsCard.js";
import { getPage } from "../core/layout.js";

function renderNewsCards() {
    const container = document.getElementById("news-cards-container");
    if (!container) return;

    const page = getPage();

    const newsLimitMap = {
        home: 3,
        news: news.length
    };

    const limit = newsLimitMap[page] ?? news.length;

    const newsToShow = news.slice(0, limit);

    container.innerHTML = newsToShow.map(createNewsCard).join("");
}

document.addEventListener("DOMContentLoaded", renderNewsCards);