document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        init();
    }, 500);
});

function init() {
    setupVRBackground();
    setupModalHandlers();
    setupNavbarToggle();
    
    console.log('✓ HTX Nông nghiệp Xanh initialized');
}

function setupNavbarToggle() {
    const navbar = document.querySelector('.top-nav');
    const toggleBtn = document.getElementById('navToggleBtn');
    const floatingBtn = document.getElementById('navToggleFloating');
    const contentPanel = document.getElementById('contentPanel');
    let previousPanelState = null;
    let previousActivePage = null;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navbar.classList.add('collapsed');
            floatingBtn.style.opacity = '1';
            floatingBtn.style.pointerEvents = 'auto';
            
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

    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            navbar.classList.remove('collapsed');
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