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

    addSeed(seedId) {
        const seed = appData.seeds.find(s => s.id === seedId);
        if (!seed) return;

        const existing = this.cart.find(s => s.id === seedId);
        if (existing) {
            existing.quantity++;
        } else {
            this.cart.push({
                id: seed.id,
                name: seed.name,
                price: seed.price,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateBadge();
        alert(`Đã thêm "${seed.name}" vào giỏ hàng!`);
    }

    removeProduct(productId) {
        this.cart = this.cart.filter(p => p.id !== productId);
        this.saveCart();
        this.updateBadge();
        
        if (this.cart.length === 0) {
            const cartBody = document.getElementById('cartBody');
            cartBody.innerHTML = `
                <div style="padding: 60px 40px; text-align: center;">
                    <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #bdc3c7; margin-bottom: 20px;"></i>
                    <h3 style="color: #7f8c8d; margin-bottom: 10px;">Giỏ hàng trống</h3>
                    <p style="color: #95a5a6;">Hãy thêm sản phẩm vào giỏ hàng</p>
                </div>
            `;
        } else {
            this.checkout();
        }
    }

    increaseQuantity(productId) {
        const item = this.cart.find(p => p.id === productId);
        if (item) {
            item.quantity++;
            this.saveCart();
            this.checkout();
        }
    }

    decreaseQuantity(productId) {
        const item = this.cart.find(p => p.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity--;
                this.saveCart();
                this.checkout();
            } else {
                this.removeProduct(productId);
            }
        }
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

    openCart() {
        if (this.cart.length === 0) {
            const modal = document.getElementById('cartModal');
            const cartBody = document.getElementById('cartBody');
            cartBody.innerHTML = `
                <div style="padding: 60px 40px; text-align: center;">
                    <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #bdc3c7; margin-bottom: 20px;"></i>
                    <h3 style="color: #7f8c8d; margin-bottom: 10px;">Giỏ hàng trống</h3>
                    <p style="color: #95a5a6;">Hãy thêm sản phẩm vào giỏ hàng</p>
                </div>
            `;
            modal.classList.add('active');
            return;
        }
        this.checkout();
        const modal = document.getElementById('cartModal');
        modal.classList.add('active');
    }

    generateOrderID() {
        const now = new Date();
        const year = now.getFullYear().toString().slice(-2);
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return year + month + date + hours + minutes + seconds;
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Giỏ hàng trống!');
            return;
        }
        
        const modal = document.getElementById('cartModal');
        const cartBody = document.getElementById('cartBody');
        const cartTotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderID = this.generateOrderID();

        cartBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 15px; text-transform: uppercase; font-weight: 700; font-size: 0.95rem;">THÔNG TIN GIỎ HÀNG</h4>
                    ${this.cart.map(item => `
                        <div style="padding: 10px; border-bottom: 1px solid #ecf0f1; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                            <div style="flex: 1;">
                                <p style="margin: 0; font-weight: bold;">${item.name}</p>
                                <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                                    <button onclick="cartManager.decreaseQuantity('${item.id}')" 
                                        style="background: #95a5a6; color: white; border: none; padding: 4px 10px; cursor: pointer; border-radius: 3px; font-size: 0.9rem; font-weight: bold;">-</button>
                                    <span style="color: #7f8c8d; font-size: 0.9rem; min-width: 30px; text-align: center; font-weight: bold;">${item.quantity}</span>
                                    <button onclick="cartManager.increaseQuantity('${item.id}')" 
                                        style="background: var(--primary-color); color: white; border: none; padding: 4px 10px; cursor: pointer; border-radius: 3px; font-size: 0.9rem; font-weight: bold;">+</button>
                                </div>
                            </div>
                            <p style="margin: 0; font-weight: bold; color: var(--primary-color);">
                                ${(item.price * item.quantity).toLocaleString('vi-VN')} VND
                            </p>
                            <button onclick="cartManager.removeProduct('${item.id}')" 
                                style="background: #e74c3c; color: white; border: none; padding: 6px 10px; cursor: pointer; border-radius: 4px; font-size: 0.8rem;">
                                <i class="fas fa-times"></i> Xóa
                            </button>
                        </div>
                    `).join('')}
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid var(--primary-color);">
                        <p style="font-size: 1.1rem; color: var(--primary-color); font-weight: bold;">
                            Tổng đơn hàng: ${cartTotal.toLocaleString('vi-VN')} VND
                        </p>
                        <p style="color: #7f8c8d; font-size: 0.85rem;">*(Giá này chưa bao gồm phí ship)</p>
                    </div>
                </div>

                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 15px; text-transform: uppercase; font-weight: 700; font-size: 0.95rem;">THÔNG TIN KHÁCH HÀNG</h4>
                    <form id="checkoutForm" style="display: flex; flex-direction: column; gap: 12px;">
                        <input type="text" id="orderID" value="${orderID}" readonly 
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem; color: var(--primary-color); font-weight: bold; background: #f8f9fa; cursor: default;">
                        <input type="text" id="customerName" placeholder="Họ tên" required
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem;">
                        <input type="text" id="customerAddress" placeholder="Địa chỉ" required
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem;">
                        <input type="tel" id="customerPhone" placeholder="Điện thoại" required
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem;">
                        <input type="email" id="customerEmail" placeholder="Email"
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem;">
                        <textarea id="customerNote" placeholder="Ghi chú" rows="6"
                            style="padding: 10px; border: 1px solid #ccc; font-size: 0.9rem; font-family: inherit; resize: none;"></textarea>
                        
                        <button type="button" onclick="cartManager.submitOrder()"
                            style="padding: 12px; background: var(--primary-color); color: white; cursor: pointer; font-weight: bold; margin-top: 10px; border: none; font-size: 0.95rem;">Đặt hàng</button>
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