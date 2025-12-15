class SeedsManager {
    render() {
        const content = document.getElementById('panelContent');
        content.innerHTML = `
            <div style="margin-bottom: 20px;">
                <input type="text" id="seedSearch" placeholder="Tìm giống..." 
                    style="width: 100%; padding: 10px 12px; border: 1px solid #ecf0f1; border-radius: 6px; font-size: 0.95rem;">
            </div>
            <div class="products-grid" id="seedsGrid"></div>
        `;

        this.renderSeeds();
        this.setupSearch();
    }

    setupSearch() {
        const searchInput = document.getElementById('seedSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterAndRender(e.target.value);
            });
        }
    }

    filterAndRender(searchTerm) {
        const filtered = appData.seeds.filter(s => 
            s.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderGrid(filtered);
    }

    renderSeeds() {
        this.renderGrid(appData.seeds);
    }

    renderGrid(seeds) {
        const grid = document.getElementById('seedsGrid');
        grid.innerHTML = seeds.map(s => `
            <div class="product-card" onclick="seedsManager.showDetail('${s.id}')">
                <img src="${s.image}" alt="${s.name}" class="product-image" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                <div class="product-body">
                    <div class="product-category">${s.category}</div>
                    <h3 class="product-name">${s.name}</h3>
                    <div class="product-unit" style="font-size: 0.85rem; color: #7f8c8d; margin-bottom: 8px;">📦 ${s.unit}</div>
                    <div class="product-price">${s.price.toLocaleString('vi-VN')} VND</div>
                    <p style="color: #7f8c8d; font-size: 0.85rem; flex: 1;">${s.description}</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <button class="btn-view-detail" onclick="event.stopPropagation(); seedsManager.showDetail('${s.id}')">Chi tiết</button>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); cartManager.addSeed('${s.id}')"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    showDetail(seedId) {
        const seed = appData.seeds.find(s => s.id === seedId);
        if (!seed) return;

        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');

        let detailsHTML = '';
        if (seed.details) {
            // Gallery ảnh nếu có
            let galleryHTML = '';
            if (seed.details.images && seed.details.images.length > 0) {
                galleryHTML = `
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px; font-size: 1rem;">Hình Ảnh Sản Phẩm</h4>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                            ${seed.details.images.map(img => `
                                <div style="overflow: hidden;">
                                    <img src="${img}" alt="Hình ảnh sản phẩm" style="width: 100%; cursor: pointer;" onclick="window.open('${img}', '_blank')">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            detailsHTML = `
                <div style="background: #f8f9fa; padding: 20px; margin-top: 20px; border-radius: 0;">
                    ${galleryHTML}
                    
                    ${seed.details.description ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Mô Tả Chi Tiết</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.description}</p>
                    ` : ''}
                    
                    ${seed.details.aboutBauMay ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Về Bầu Mây</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.aboutBauMay}</p>
                    ` : ''}

                    ${seed.details.about ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thông Tin</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.about}</p>
                    ` : ''}

                    ${seed.details.otherNames ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Tên Gọi Khác</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.otherNames}</p>
                    ` : ''}

                    ${seed.details.harvesting ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thu Hoạch & Chế Biến</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.harvesting}</p>
                    ` : ''}
                    
                    ${seed.details.quality ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Cam Kết Chất Lượng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.quality}</p>
                    ` : ''}
                    
                    ${seed.details.awards ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Danh Hiệu & Chứng Chỉ</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.awards}</p>
                    ` : ''}
                    
                    ${seed.details.ingredients ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thành Phần</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>${seed.details.ingredients}</strong></p>
                    ` : ''}
                    
                    ${seed.details.usage ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hướng Dẫn Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.usage}</p>
                    ` : ''}

                    ${seed.details.cooking ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Cách Chế Biến</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.cooking}</p>
                    ` : ''}

                    ${seed.details.production ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Sản Xuất</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.production}</p>
                    ` : ''}
                    
                    ${seed.details.expiryDate ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hạn Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>${seed.details.expiryDate}</strong></p>
                    ` : ''}
                    
                    ${seed.details.pepperinBenefits ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thành Phần & Công Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.pepperinBenefits}</p>
                    ` : ''}
                    
                    ${seed.details.benefits_detail && seed.details.benefits_detail.length > 0 ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Lợi Ích Sức Khỏe</h4>
                        <ul style="margin-bottom: 15px; padding-left: 20px;">
                            ${seed.details.benefits_detail.map(benefit => `<li style="margin-bottom: 8px; line-height: 1.6;">${benefit}</li>`).join('')}
                        </ul>
                    ` : ''}
                    
                    ${seed.details.advantages && seed.details.advantages.length > 0 ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Ưu Điểm Nổi Bật</h4>
                        <ul style="margin-bottom: 15px; padding-left: 20px;">
                            ${seed.details.advantages.map(advantage => `<li style="margin-bottom: 8px; line-height: 1.6;">${advantage}</li>`).join('')}
                        </ul>
                    ` : ''}

                    ${seed.details.storage ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hướng Dẫn Bảo Quản</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.storage}</p>
                    ` : ''}

                    ${seed.details.packaging ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Đóng Gói</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.packaging}</p>
                    ` : ''}

                    ${seed.details.certifications ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Chứng Chỉ</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${seed.details.certifications}</p>
                    ` : ''}

                    ${seed.details.slogan ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;"><strong>${seed.details.slogan}</strong></h4>
                    ` : ''}
                    
                    ${seed.details.notes ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Lưu Ý Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><em>${seed.details.notes}</em></p>
                    ` : ''}

                    ${seed.details.special ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Đặc Biệt</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><em>${seed.details.special}</em></p>
                    ` : ''}

                    ${seed.details.warning ? `
                        <h4 style="color: #e74c3c; margin-bottom: 10px; font-size: 1rem;">⚠️ Cảnh Báo An Toàn</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6; color: #c0392b;">${seed.details.warning}</p>
                    ` : ''}
                </div>
            `;
        }

        let specialtyHTML = '';
        if (seed.details && seed.details.specialty) {
            specialtyHTML = `<p style="color: #000; font-size: 0.95rem; margin-top: 8px; font-weight: bold;">${seed.details.specialty}</p>`;
        }

        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <img src="${seed.image}" alt="${seed.name}" class="detail-image" style="width: 100%; height: auto; margin-bottom: 15px;">
                </div>
                <div>
                    <h2 class="detail-title" style="margin-bottom: 15px;">${seed.name}</h2>
                    <div class="detail-price" style="font-size: 1.3rem; color: var(--primary-color); margin-bottom: 8px;">
                        <strong>Giá bán: ${seed.price.toLocaleString('vi-VN')} VND</strong>
                    </div>
                    ${specialtyHTML}
                    <div class="detail-meta" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ecf0f1; margin-top: 15px;">
                        <p style="margin: 8px 0;"><strong>Danh mục:</strong> ${seed.category}</p>
                        <p style="margin: 8px 0;"><strong>Đơn vị:</strong> ${seed.unit}</p>
                    </div>
                    <p class="detail-description" style="margin-bottom: 15px; line-height: 1.6;">
                        <strong>Mô tả:</strong><br>${seed.description}
                    </p>
                    <button class="btn-add-cart" onclick="cartManager.addSeed('${seed.id}'); event.stopPropagation();" 
                        style="width: 100%; padding: 12px; font-size: 1rem; cursor: pointer;">
                        <i class="fas fa-shopping-cart"></i> Mua hàng
                    </button>
                </div>
            </div>
            ${detailsHTML}
        `;

        modal.classList.add('active');
    }
}

const seedsManager = new SeedsManager();
