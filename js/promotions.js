class PromotionsManager {
    render() {
        const content = document.getElementById('panelContent');
        content.innerHTML = `<div class="promotions-list" id="promotionsList"></div>`;
        
        const list = document.getElementById('promotionsList');
        list.innerHTML = appData.promotions.map(p => `
            <div class="promotion-card">
                <div class="promotion-icon">
                    <i class="${p.icon}"></i>
                </div>
                <div class="promotion-header">
                    <h3 class="promotion-title">${p.title}</h3>
                    <div class="promotion-discount">${p.discount}</div>
                </div>
                <p class="promotion-description">${p.description}</p>
                <div class="promotion-period">
                    <i class="fas fa-clock"></i> ${p.period}
                </div>
            </div>
        `).join('');
    }
}

const promotionsManager = new PromotionsManager();