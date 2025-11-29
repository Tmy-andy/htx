class NavigationManager {
    constructor() {
        this.currentPage = 'products';
        this.managers = {
            products: productsManager,
            videos: videosManager,
            news: newsManager,
            promotions: promotionsManager,
            about: aboutManager,
            contact: contactManager
        };
        this.pageTitles = {
            products: '🌿 Sản phẩm',
            videos: '🎬 Video',
            news: '📰 Tin tức',
            promotions: '🎁 Khuyến mãi',
            about: 'ℹ️ Về chúng tôi',
            contact: '📞 Liên hệ'
        };
        this.init();
    }

    init() {
        const navItems = document.querySelectorAll('.nav-item');
        const closeBtn = document.getElementById('closePanel');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                this.navigateTo(page);
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closePanel();
            });
        }
    }

    navigateTo(page) {
        if (!this.managers[page]) return;

        const contentPanel = document.getElementById('contentPanel');
        const panelTitle = document.getElementById('panelTitle');

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        panelTitle.textContent = this.pageTitles[page];
        this.managers[page].render();
        contentPanel.classList.add('active');
        this.currentPage = page;

        const modal = document.getElementById('productModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }

    closePanel() {
        const contentPanel = document.getElementById('contentPanel');
        contentPanel.classList.remove('active');

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
}

const navigationManager = new NavigationManager();