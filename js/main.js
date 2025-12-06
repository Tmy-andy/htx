document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        init();
    }, 500);
});

function init() {
    setupVRBackground();
    setupModalHandlers();
    
    console.log('✓ HTX Nông nghiệp Xanh initialized');
}

function setupVRBackground() {
    try {
        const viewer = pannellum.viewer('panorama', {
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
        console.log('✓ VR Panorama initialized');
    } catch (error) {
        console.error('Error initializing VR viewer:', error);
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