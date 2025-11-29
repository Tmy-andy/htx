class NewsManager {
    render() {
        const content = document.getElementById('panelContent');
        content.innerHTML = `<div class="news-grid" id="newsGrid"></div>`;
        
        const grid = document.getElementById('newsGrid');
        grid.innerHTML = appData.news.map(n => `
            <div class="news-card" onclick="newsManager.showDetail('${n.id}')">
                <img src="${n.image}" alt="${n.title}" class="news-image">
                <div class="news-body">
                    <div class="news-date"><i class="fas fa-calendar-alt"></i> ${new Date(n.date).toLocaleDateString('vi-VN')}</div>
                    <h3 class="news-title">${n.title}</h3>
                    <p class="news-excerpt">${n.excerpt}</p>
                </div>
            </div>
        `).join('');
    }

    showDetail(newsId) {
        const news = appData.news.find(n => n.id === newsId);
        if (!news) return;

        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');

        modalBody.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="detail-image">
            <div style="color: #7f8c8d; margin-bottom: 10px; font-size: 0.9rem;">
                <i class="fas fa-calendar-alt"></i> ${new Date(news.date).toLocaleDateString('vi-VN')}
            </div>
            <h2 class="detail-title">${news.title}</h2>
            <p class="detail-description">${news.content}</p>
        `;

        modal.classList.add('active');
    }
}

const newsManager = new NewsManager();