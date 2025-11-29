class CartManager {
    constructor() {
        this.cart = [];
        this.loadCart();
    }

    addProduct(productId) {
        const product = appData.products.find(p => p.id === productId);
        if (!product) return;

        const existing = this.cart.find(p => p.id === productId);
        if (existing) {
            existing.quantity++;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateBadge();
        alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
    }

    removeProduct(productId) {
        this.cart = this.cart.filter(p => p.id !== productId);
        this.saveCart();
        this.updateBadge();
        this.renderCart();
    }

    updateBadge() {
        const badge = document.getElementById('cartBadge');
        if (badge) {
            badge.textContent = this.cart.length;
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    loadCart() {
        const saved = localStorage.getItem('cart');
        if (saved) {
            this.cart = JSON.parse(saved);
        }
        this.updateBadge();
    }

    renderCart() {
        const cartBody = document.getElementById('cartBody');
        
        if (this.cart.length === 0) {
            cartBody.innerHTML = '<div class="cart-empty">Giỏ hàng trống</div>';
            return;
        }

        let html = '';
        let total = 0;

        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price.toLocaleString('vi-VN')} VND x ${item.quantity}</div>
                    </div>
                    <button class="cart-item-remove" onclick="cartManager.removeProduct('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });

        html += `<div class="cart-total">Tổng: ${total.toLocaleString('vi-VN')} VND</div>`;
        html += `
            <button onclick="cartManager.checkout()" 
                style="width: 100%; padding: 12px; margin-top: 15px; background: var(--primary-color); color: white; border: none; font-weight: bold; cursor: pointer;">
                📦 Đặt hàng
            </button>
        `;
        cartBody.innerHTML = html;
    }

    openCart() {
        this.renderCart();
        const modal = document.getElementById('cartModal');
        modal.classList.add('active');
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Giỏ hàng trống!');
            return;
        }
        
        const modal = document.getElementById('cartModal');
        const cartBody = document.getElementById('cartBody');
        const cartTotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderID = 'BM' + new Date().getTime();

        cartBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 15px;">Chi tiết sản phẩm</h4>
                    ${this.cart.map(item => `
                        <div style="padding: 10px; border-bottom: 1px solid #ecf0f1; display: flex; justify-content: space-between;">
                            <div>
                                <p style="margin: 0; font-weight: bold;">${item.name}</p>
                                <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 0.9rem;">x${item.quantity}</p>
                            </div>
                            <p style="margin: 0; font-weight: bold; color: var(--primary-color);">
                                ${(item.price * item.quantity).toLocaleString('vi-VN')} VND
                            </p>
                        </div>
                    `).join('')}
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid var(--primary-color);">
                        <p style="font-size: 1.1rem; color: var(--primary-color); font-weight: bold;">
                            Tổng: ${cartTotal.toLocaleString('vi-VN')} VND
                        </p>
                        <p style="color: #7f8c8d; font-size: 0.85rem;">*(Chưa bao gồm phí ship)</p>
                    </div>
                </div>

                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 15px;">Thông tin giao hàng</h4>
                    <form id="checkoutForm" style="display: flex; flex-direction: column; gap: 12px;">
                        <input type="text" id="orderID" value="${orderID}" readonly 
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem; background: #f8f9fa;">
                        <input type="text" id="customerName" placeholder="Họ tên" required
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem;">
                        <input type="text" id="customerAddress" placeholder="Địa chỉ" required
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem;">
                        <input type="tel" id="customerPhone" placeholder="Điện thoại" required
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem;">
                        <input type="email" id="customerEmail" placeholder="Email"
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem;">
                        <textarea id="customerNote" placeholder="Ghi chú" rows="4"
                            style="padding: 10px; border: 1px solid #ecf0f1; font-size: 0.85rem; font-family: inherit;"></textarea>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <button type="button" onclick="cartManager.openCart()"
                                style="padding: 10px; border: 1px solid var(--primary-color); background: white; color: var(--primary-color); cursor: pointer; font-weight: bold;">Quay lại</button>
                            <button type="button" onclick="cartManager.submitOrder()"
                                style="padding: 10px; background: var(--primary-color); color: white; cursor: pointer; font-weight: bold;">Đặt hàng</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    submitOrder() {
        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const address = document.getElementById('customerAddress').value.trim();

        if (!name || !phone || !address) {
            alert('Vui lòng điền đầy đủ Họ tên, Điện thoại, Địa chỉ!');
            return;
        }

        const orderID = document.getElementById('orderID').value;
        alert(`Đặt hàng thành công!\nMã đơn: ${orderID}\nCảm ơn bạn đã mua hàng!`);
        
        this.cart = [];
        this.saveCart();
        this.updateBadge();
        
        const modal = document.getElementById('cartModal');
        modal.classList.remove('active');
    }
}

const cartManager = new CartManager();

// Setup cart button
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    const cartModalClose = document.getElementById('cartModalClose');
    const cartModal = document.getElementById('cartModal');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartManager.openCart();
        });
    }

    if (cartModalClose) {
        cartModalClose.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }
});