class NavigationManager {
    constructor() {
        this.currentPage = 'products';
        this.managers = {
            products: productsManager,
            seeds: seedsManager,
            videos: videosManager,
            news: newsManager,
            about: aboutManager,
            contact: contactManager,
            vr_sanxuat: vrAreasManager_sanxuat,
            vr_chebiendong: vrAreasManager_chebiendong,
            vr_trungbay: vrAreasManager_trungbay,
            vr_dieuhanh: vrAreasManager_dieuhanh
        };
        this.pageTitles = {
            products: 'Sản phẩm',
            seeds: 'Giống tiêu - Củ hoài sơn',
            videos: 'Video',
            news: 'Tin tức',
            about: 'Về chúng tôi',
            contact: 'Liên hệ',
            vr_sanxuat: 'Khu Sản Xuất',
            vr_chebiendong: 'Khu Chế Biến & Đóng Gói',
            vr_trungbay: 'Khu Trưng Bày',
            vr_dieuhanh: 'Khu Điều Hành'
        };
        this.init();
    }

    init() {
        const navItems = document.querySelectorAll('.nav-item');
        const closeBtn = document.getElementById('closePanel');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navMenu = document.getElementById('navMenu');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                this.navigateTo(page);
                // Đóng menu mobile sau khi click
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (hamburgerBtn) {
                        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                if (navMenu.classList.contains('active')) {
                    hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closePanel();
            });
        }
        
        // Setup dropdown menu
        this.setupDropdown();
    }

    setupDropdown() {
        const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
        const dropdownMenu = document.querySelector('.nav-dropdown-menu');
        
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdownMenu.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('active');
                }
            });
        }
    }

    navigateTo(page) {
        if (!this.managers[page]) return;

        const contentPanel = document.getElementById('contentPanel');
        const panelTitle = document.getElementById('panelTitle');

        // Nếu click cùng trang đang mở → toggle ẩn/hiện
        if (this.currentPage === page && contentPanel.classList.contains('active')) {
            this.closePanel();
            return;
        }

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        panelTitle.textContent = this.pageTitles[page];
        
        // Xử lý async render cho videos
        const manager = this.managers[page];
        if (page === 'videos' && typeof manager.render === 'function') {
            // Videos có async render
            manager.render();
        } else {
            // Các trang khác render bình thường
            manager.render();
        }
        
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