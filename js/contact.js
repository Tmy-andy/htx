class ContactManager {
    render() {
        const content = document.getElementById('panelContent');
        const info = appData.info;

        content.innerHTML = `
            <div style="width: 100%; padding: 0 30px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;">
                    <!-- Left Column: Contact Info -->
                    <div>
                        <!-- Address Section -->
                        <div style="margin-bottom: 35px;">
                            <div style="display: flex; align-items: flex-start; gap: 15px;">
                                <div style="width: 50px; height: 50px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0;">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.1rem; font-weight: 600;">Địa Chỉ</h4>
                                    <p style="margin: 0; color: var(--text-light); line-height: 1.7; font-size: 0.95rem;">${info.address}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Phone Section -->
                        <div style="margin-bottom: 35px;">
                            <div style="display: flex; align-items: flex-start; gap: 15px;">
                                <div style="width: 50px; height: 50px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0;">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.1rem; font-weight: 600;">Hotline</h4>
                                    <p style="margin: 0; color: var(--primary-color); font-weight: 700; font-size: 1.15rem;">${info.phone}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Email Section -->
                        <div style="margin-bottom: 35px;">
                            <div style="display: flex; align-items: flex-start; gap: 15px;">
                                <div style="width: 50px; height: 50px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0;">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.1rem; font-weight: 600;">Email</h4>
                                    <p style="margin: 0; color: var(--text-light);"><a href="mailto:${info.email}" style="color: var(--primary-color); text-decoration: none; font-weight: 500;">${info.email}</a></p>
                                </div>
                            </div>
                        </div>

                        <!-- Support Team Section -->
                        <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #f0f0f0;">
                            <h4 style="color: var(--text-dark); font-size: 1.1rem; font-weight: 600; margin-bottom: 20px;">
                                <i class="fas fa-headset" style="color: var(--primary-color); margin-right: 8px;"></i>Đội Hỗ Trợ
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                ${appData.contact.map(person => `
                                    <div style="padding: 12px; background: #f9f9f9; border-radius: 6px; border-left: 4px solid var(--primary-color);">
                                        <p style="margin: 0 0 4px 0; font-weight: 600; color: var(--text-dark); font-size: 0.95rem;">${person.name}</p>
                                        <p style="margin: 0 0 6px 0; font-size: 0.8rem; color: var(--text-light);">${person.role}</p>
                                        <p style="margin: 0; color: var(--primary-color); font-weight: 600; font-size: 0.9rem;">${person.phone}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Form -->
                    <div style="background: #f9f9f9; padding: 40px; border-radius: 8px;">
                        <h3 style="color: var(--text-dark); font-size: 1.3rem; font-weight: 600; margin-bottom: 25px;">Gửi Tin Nhắn</h3>
                        
                        <form id="contactForm" style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                            <div>
                                <label style="display: block; margin-bottom: 6px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Họ tên</label>
                                <input type="text" id="contactName" placeholder="Nhập họ tên" required
                                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; transition: all 0.3s ease; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.08)'"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 6px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Email</label>
                                <input type="email" id="contactEmail" placeholder="your@email.com" required
                                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; transition: all 0.3s ease; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.08)'"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 6px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Điện thoại</label>
                                <input type="tel" id="contactPhone" placeholder="0912 345 678" required
                                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; transition: all 0.3s ease; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.08)'"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 6px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Nội dung</label>
                                <textarea id="contactMessage" placeholder="Hãy chia sẻ nội dung cần liên hệ..." rows="5" required
                                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; font-family: inherit; resize: vertical; transition: all 0.3s ease; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.08)'"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none'"></textarea>
                            </div>
                            
                            <button type="button" onclick="contactManager.submit()"
                                style="padding: 14px; background: var(--primary-color); color: white; border: none; border-radius: 6px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin-top: 10px;"
                                onmouseover="this.style.background='var(--primary-dark)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(42, 139, 111, 0.3)'"
                                onmouseout="this.style.background='var(--primary-color)'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                                Gửi Tin Nhắn
                            </button>
                        </form>

                        <!-- Success Message -->
                        <div id="successMessage" style="display: none; background: var(--primary-color); color: white; padding: 15px; border-radius: 6px; text-align: center; margin-top: 15px; font-size: 0.95rem;">
                            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    submit() {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMessage');

        if (!name || !email || !phone || !message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Vui lòng nhập email hợp lệ!');
            return;
        }

        // Show success message
        form.style.display = 'none';
        successMsg.style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'grid';
            successMsg.style.display = 'none';
        }, 3000);
    }
}

const contactManager = new ContactManager();