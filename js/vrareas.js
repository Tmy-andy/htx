class VRAreasManager {
    constructor(areaKey) {
        this.areaKey = areaKey;
        this.areaData = appData.vrAreas[areaKey];
    }

    render() {
        const content = document.getElementById('panelContent');
        
        content.innerHTML = `
            <div style="width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 20px;">
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--text-dark); font-size: 1.8rem; font-weight: 700; margin-bottom: 10px;">
                        ${this.areaData.title}
                    </h2>
                    <p style="color: var(--text-light); font-size: 1rem;">Khám phá các không gian 360° của khu vực</p>
                </div>

                ${this.areaData.categories.map(category => `
                    <div style="margin-bottom: 40px;">
                        <h3 style="color: white; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); padding: 12px 20px; border-radius: 8px; font-size: 1.2rem; font-weight: 600; margin-bottom: 20px; display: inline-block;">
                            ${category.name}
                        </h3>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
                            ${category.items.map(item => `
                                <div class="vr-card" onclick="vrAreasManager_${this.areaKey}.openVR('${item.id}')" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 15px rgba(0,0,0,0.1); cursor: pointer; transition: all 0.3s ease;">
                                    <div style="position: relative; height: 180px; background: linear-gradient(135deg, rgba(42, 139, 111, 0.1), rgba(42, 139, 111, 0.05)); display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-vr-cardboard" style="font-size: 3rem; color: var(--primary-color); opacity: 0.6;"></i>
                                        <div style="position: absolute; bottom: 10px; right: 10px; background: var(--primary-color); color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">
                                            <i class="fas fa-expand-arrows-alt" style="margin-right: 5px;"></i>360°
                                        </div>
                                    </div>
                                    <div style="padding: 15px;">
                                        <h4 style="color: var(--text-dark); font-size: 1rem; font-weight: 600; margin: 0;">
                                            ${item.name}
                                        </h4>
                                        <p style="color: var(--text-light); font-size: 0.85rem; margin: 8px 0 0 0;">
                                            <i class="fas fa-play-circle" style="margin-right: 5px;"></i>Xem tour 360°
                                        </p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- VR360 Modal -->
            <div id="vrModal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); z-index: 1000; opacity: 0; transition: opacity 0.3s ease;">
                <button onclick="vrAreasManager_${this.areaKey}.closeVR()" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.2); border: 2px solid white; color: white; font-size: 1.5rem; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; z-index: 1001; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                    <i class="fas fa-times"></i>
                </button>
                <div id="vrViewer" style="width: 100%; height: 100%;"></div>
            </div>
        `;

        // Add hover effects
        this.addCardHoverEffects();
    }

    addCardHoverEffects() {
        setTimeout(() => {
            const cards = document.querySelectorAll('.vr-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                });
            });
        }, 100);
    }

    openVR(vrId) {
        console.log('=== openVR called ===');
        console.log('vrId:', vrId);
        console.log('areaKey:', this.areaKey);
        
        let vrItem = null;
        for (const category of this.areaData.categories) {
            vrItem = category.items.find(item => item.id === vrId);
            if (vrItem) break;
        }

        console.log('vrItem found:', vrItem);
        if (!vrItem) {
            console.error('VR item not found!');
            return;
        }

        console.log('VR URL:', vrItem.url);

        // Đóng panel ngay lập tức
        const panel = document.getElementById('contentPanel');
        console.log('Panel element:', panel);
        if (panel && panel.classList.contains('active')) {
            panel.classList.remove('active');
            console.log('Panel closed');
            // Remove active state from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
        }

        // Đổi panorama của VR background chính
        console.log('mainVRViewer exists?', !!window.mainVRViewer);
        if (window.mainVRViewer) {
            try {
                console.log('Destroying old viewer and creating new one with:', vrItem.url);
                // Destroy viewer cũ
                window.mainVRViewer.destroy();
                
                // Tạo viewer mới với panorama mới
                window.mainVRViewer = pannellum.viewer('panorama', {
                    type: 'equirectangular',
                    panorama: vrItem.url,
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
                console.log('✓ Panorama changed to:', vrItem.url);
            } catch (error) {
                console.error('❌ Error changing panorama:', error);
            }
        } else {
            console.error('❌ mainVRViewer not found in window!');
        }

        const modal = document.getElementById('vrModal');
        console.log('Modal element:', modal);
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);

        // Initialize VR viewer
        try {
            console.log('Initializing modal VR viewer...');
            pannellum.viewer('vrViewer', {
                type: 'equirectangular',
                panorama: vrItem.url,
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
            console.log('✓ Modal VR viewer initialized');
        } catch (error) {
            console.error('❌ Error loading modal VR:', error);
        }
    }

    closeVR() {
        const modal = document.getElementById('vrModal');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.getElementById('vrViewer').innerHTML = '';
        }, 300);
    }
}

// Create instances for each area
const vrAreasManager_sanxuat = new VRAreasManager('sanxuat');
const vrAreasManager_chebiendong = new VRAreasManager('chebiendong');
const vrAreasManager_trungbay = new VRAreasManager('trungbay');
const vrAreasManager_dieuhanh = new VRAreasManager('dieuhanh');
