class ProductsManager {
    render() {
        const content = document.getElementById('panelContent');
        content.innerHTML = `
            <div style="margin-bottom: 20px;">
                <input type="text" id="productSearch" placeholder="Tìm sản phẩm..." 
                    style="width: 100%; padding: 10px 12px; border: 1px solid #ecf0f1; border-radius: 6px; font-size: 0.95rem;">
            </div>
            <div class="products-grid" id="productsGrid"></div>
        `;

        this.renderProducts();
        this.setupSearch();
    }

    setupSearch() {
        const searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterAndRender(e.target.value);
            });
        }
    }

    filterAndRender(searchTerm) {
        const filtered = appData.products.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderGrid(filtered);
    }

    renderProducts() {
        this.renderGrid(appData.products);
    }

    renderGrid(products) {
        const grid = document.getElementById('productsGrid');
        grid.innerHTML = products.map(p => `
            <div class="product-card" onclick="productsManager.showDetail('${p.id}')">
                <img src="${p.image}" alt="${p.name}" class="product-image" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                <div class="product-body">
                    <div class="product-category">${p.category}</div>
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-unit" style="font-size: 0.85rem; color: #7f8c8d; margin-bottom: 8px;">📦 ${p.unit}</div>
                    <div class="product-price">${p.price.toLocaleString('vi-VN')} VND</div>
                    <p style="color: #7f8c8d; font-size: 0.85rem; flex: 1;">${p.description}</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <button class="btn-view-detail" onclick="event.stopPropagation(); productsManager.showDetail('${p.id}')">Chi tiết</button>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); cartManager.addProduct('${p.id}')"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    showDetail(productId) {
        const product = appData.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');

        let detailsHTML = '';
        if (product.details) {
            // Gallery ảnh nếu có
            let galleryHTML = '';
            if (product.details.images && product.details.images.length > 0) {
                galleryHTML = `
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px; font-size: 1rem;">Hình Ảnh Sản Phẩm</h4>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                            ${product.details.images.map(img => `
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
                    
                    ${product.details.description ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Mô Tả Chi Tiết</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.description}</p>
                    ` : ''}
                    
                    ${product.details.aboutBauMay ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Về Bầu Mây</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.aboutBauMay}</p>
                    ` : ''}

                    ${product.details.about ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thông Tin</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.about}</p>
                    ` : ''}

                    ${product.details.otherNames ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Tên Gọi Khác</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.otherNames}</p>
                    ` : ''}

                    ${product.details.harvesting ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thu Hoạch & Chế Biến</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.harvesting}</p>
                    ` : ''}
                    
                    ${product.details.quality ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Cam Kết Chất Lượng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.quality}</p>
                    ` : ''}
                    
                    ${product.details.awards ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Danh Hiệu & Chứng Chỉ</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.awards}</p>
                    ` : ''}
                    
                    ${product.details.ingredients ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thành Phần</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>${product.details.ingredients}</strong></p>
                    ` : ''}
                    
                    ${product.details.usage ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hướng Dẫn Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.usage}</p>
                    ` : ''}

                    ${product.details.cooking ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Cách Chế Biến</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.cooking}</p>
                    ` : ''}

                    ${product.details.production ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Sản Xuất</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.production}</p>
                    ` : ''}
                    
                    ${product.details.expiryDate ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hạn Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>${product.details.expiryDate}</strong></p>
                    ` : ''}
                    
                    ${product.details.pepperinBenefits ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Thành Phần & Công Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.pepperinBenefits}</p>
                    ` : ''}
                    
                    ${product.details.benefits_detail && product.details.benefits_detail.length > 0 ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Lợi Ích Sức Khỏe</h4>
                        <ul style="margin-bottom: 15px; padding-left: 20px;">
                            ${product.details.benefits_detail.map(benefit => `<li style="margin-bottom: 8px; line-height: 1.6;">${benefit}</li>`).join('')}
                        </ul>
                    ` : ''}
                    
                    ${product.details.advantages && product.details.advantages.length > 0 ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Ưu Điểm Nổi Bật</h4>
                        <ul style="margin-bottom: 15px; padding-left: 20px;">
                            ${product.details.advantages.map(advantage => `<li style="margin-bottom: 8px; line-height: 1.6;">${advantage}</li>`).join('')}
                        </ul>
                    ` : ''}

                    ${product.details.storage ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Hướng Dẫn Bảo Quản</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.storage}</p>
                    ` : ''}

                    ${product.details.packaging ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Đóng Gói</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.packaging}</p>
                    ` : ''}

                    ${product.details.certifications ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Chứng Chỉ</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;">${product.details.certifications}</p>
                    ` : ''}

                    ${product.details.slogan ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;"><strong>${product.details.slogan}</strong></h4>
                    ` : ''}
                    
                    ${product.details.notes ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Lưu Ý Sử Dụng</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><em>${product.details.notes}</em></p>
                    ` : ''}

                    ${product.details.special ? `
                        <h4 style="color: var(--primary-color); margin-bottom: 10px; font-size: 1rem;">Đặc Biệt</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><em>${product.details.special}</em></p>
                    ` : ''}

                    ${product.details.warning ? `
                        <h4 style="color: #e74c3c; margin-bottom: 10px; font-size: 1rem;">⚠️ Cảnh Báo An Toàn</h4>
                        <p style="margin-bottom: 15px; line-height: 1.6; color: #c0392b;">${product.details.warning}</p>
                    ` : ''}
                </div>
            `;
        }

        let specialtyHTML = '';
        if (product.details && product.details.specialty) {
            specialtyHTML = `<p style="color: #000; font-size: 0.95rem; margin-top: 8px; font-weight: bold;">${product.details.specialty}</p>`;
        }

        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="detail-image" style="width: 100%; height: auto; margin-bottom: 15px;">
                </div>
                <div>
                    <h2 class="detail-title" style="margin-bottom: 15px;">${product.name}</h2>
                    <div class="detail-price" style="font-size: 1.3rem; color: var(--primary-color); margin-bottom: 8px;">
                        <strong>Giá bán: ${product.price.toLocaleString('vi-VN')} VND</strong>
                    </div>
                    ${specialtyHTML}
                    <div class="detail-meta" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ecf0f1; margin-top: 15px;">
                        <p style="margin: 8px 0;"><strong>Danh mục:</strong> ${product.category}</p>
                        <p style="margin: 8px 0;"><strong>Đơn vị:</strong> ${product.unit}</p>
                    </div>
                    <p class="detail-description" style="margin-bottom: 15px; line-height: 1.6;">
                        <strong>Mô tả:</strong><br>${product.description}
                    </p>
                    <button class="btn-add-cart" onclick="cartManager.addProduct('${product.id}'); event.stopPropagation();" 
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

const productsManager = new ProductsManager();