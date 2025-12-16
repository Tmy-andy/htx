document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        init();
    }, 500);
});

function init() {
    setupVRBackground();
    setupModalHandlers();
    setupNavbarToggle();
    setupFullscreen();
    
    console.log('✓ HTX Nông nghiệp Xanh initialized');
}

function setupFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                // Enter fullscreen
                document.documentElement.requestFullscreen().then(() => {
                    fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
                    fullscreenBtn.title = 'Thoát toàn màn hình';
                }).catch(err => {
                    console.error('Error attempting to enable fullscreen:', err);
                });
            } else {
                // Exit fullscreen
                document.exitFullscreen().then(() => {
                    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
                    fullscreenBtn.title = 'Toàn màn hình';
                }).catch(err => {
                    console.error('Error attempting to exit fullscreen:', err);
                });
            }
        });

        // Listen for fullscreen change events (e.g., ESC key)
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
                fullscreenBtn.title = 'Toàn màn hình';
            }
        });
    }
}

function setupNavbarToggle() {
    const navbar = document.querySelector('.top-nav');
    const toggleBtn = document.getElementById('navToggleBtn');
    const floatingBtn = document.getElementById('navToggleFloating');
    const mobileCollapseBtn = document.getElementById('mobileCollapseBtn');
    const mobileExpandBtn = document.getElementById('mobileExpandBtn');
    const contentPanel = document.getElementById('contentPanel');
    const navLogo = document.querySelector('.nav-logo');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    let previousPanelState = null;
    let previousActivePage = null;

    // Desktop collapse button
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Ẩn tất cả UI với animation
            navbar.classList.add('collapsed');
            if (navLogo) navLogo.classList.add('hidden');
            if (fullscreenBtn) fullscreenBtn.classList.add('hidden');
            toggleBtn.classList.add('hidden');
            
            // Hiện nút floating
            setTimeout(() => {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.pointerEvents = 'auto';
            }, 200);
            
            // Lưu trạng thái panel trước khi đóng
            if (contentPanel && contentPanel.classList.contains('active')) {
                previousPanelState = true;
                const activeNavItem = document.querySelector('.nav-item.active');
                if (activeNavItem) {
                    previousActivePage = activeNavItem.getAttribute('data-page');
                }
                contentPanel.classList.remove('active');
                // Reset trạng thái active của nav items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
            } else {
                previousPanelState = false;
            }
        });
    }

    // Desktop expand button
    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            // Hiện lại tất cả UI với animation
            navbar.classList.remove('collapsed');
            if (navLogo) navLogo.classList.remove('hidden');
            if (fullscreenBtn) fullscreenBtn.classList.remove('hidden');
            if (toggleBtn) toggleBtn.classList.remove('hidden');
            
            // Ẩn nút floating
            floatingBtn.style.opacity = '0';
            floatingBtn.style.pointerEvents = 'none';
            
            // Khôi phục panel nếu trước đó đang mở
            if (previousPanelState && previousActivePage && navigationManager) {
                setTimeout(() => {
                    navigationManager.navigateTo(previousActivePage);
                }, 100);
            }
        });
    }

    // Mobile collapse button
    if (mobileCollapseBtn) {
        mobileCollapseBtn.addEventListener('click', () => {
            // Ẩn logo và hamburger trên mobile
            if (navLogo) navLogo.classList.add('hidden');
            if (hamburgerBtn) hamburgerBtn.classList.add('hidden');
            
            // Ẩn nút collapse, hiện nút expand
            mobileCollapseBtn.style.opacity = '0';
            mobileCollapseBtn.style.pointerEvents = 'none';
            setTimeout(() => {
                mobileExpandBtn.classList.add('active');
            }, 200);
            
            // Đóng panel nếu đang mở
            if (contentPanel && contentPanel.classList.contains('active')) {
                previousPanelState = true;
                const activeNavItem = document.querySelector('.nav-item.active');
                if (activeNavItem) {
                    previousActivePage = activeNavItem.getAttribute('data-page');
                }
                contentPanel.classList.remove('active');
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
            } else {
                previousPanelState = false;
            }
        });
    }

    // Mobile expand button
    if (mobileExpandBtn) {
        mobileExpandBtn.addEventListener('click', () => {
            // Hiện lại logo và hamburger
            if (navLogo) navLogo.classList.remove('hidden');
            if (hamburgerBtn) hamburgerBtn.classList.remove('hidden');
            
            // Ẩn nút expand, hiện nút collapse
            mobileExpandBtn.classList.remove('active');
            setTimeout(() => {
                mobileCollapseBtn.style.opacity = '1';
                mobileCollapseBtn.style.pointerEvents = 'auto';
            }, 200);
            
            // Khôi phục panel nếu trước đó đang mở
            if (previousPanelState && previousActivePage && navigationManager) {
                setTimeout(() => {
                    navigationManager.navigateTo(previousActivePage);
                }, 100);
            }
        });
    }
}

// Biến global để lưu VR viewer
let mainVRViewer = null;

function setupVRBackground() {
    try {
        console.log('=== Setting up main VR viewer ===');
        mainVRViewer = pannellum.viewer('panorama', {
            type: 'equirectangular',
            panorama: 'https://pannellum.org/images/alma.jpg',
            autoLoad: true,
            autoRotate: -2,
            showControls: true,
            showFullscreenCtrl: true,
            showZoomCtrl: true,
            mouseZoom: true,
            compass: false,
            hfov: 100,
            pitch: 0,
            yaw: 0,
            minHfov: 50,
            maxHfov: 120
        });
        window.mainVRViewer = mainVRViewer; // Export to window
        console.log('✓ VR Panorama initialized');
        console.log('✓ mainVRViewer assigned to window:', !!window.mainVRViewer);
    } catch (error) {
        console.error('❌ Error initializing VR viewer:', error);
    }
}

function setupModalHandlers() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalClose');
    const contentPanel = document.getElementById('contentPanel');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
            } else if (contentPanel && contentPanel.classList.contains('active')) {
                if (navigationManager) {
                    navigationManager.closePanel();
                }
            }
        }
    });
}