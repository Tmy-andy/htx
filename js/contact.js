class ContactManager {
    render() {
        const content = document.getElementById('panelContent');
        const info = appData.info;

        content.innerHTML = `
            <div class="contact-container" style="width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 20px;">
                <!-- 2 cột chính: Thông tin liên hệ + Form gửi tin -->
                <div class="contact-grid" style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 30px; margin-bottom: 30px;">
                    
                    <!-- Cột trái: Thông tin liên hệ và Đội hỗ trợ -->
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <!-- Card thông tin liên hệ -->
                        <div style="background: white; border-radius: 16px; box-shadow: 0 4px 30px rgba(0,0,0,0.1); padding: 30px; transition: transform 0.3s ease, box-shadow 0.3s ease;"
                            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 40px rgba(0,0,0,0.15)'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 30px rgba(0,0,0,0.1)'">
                            
                            <div style="display: flex; gap: 18px; margin-bottom: 28px;">
                                <div style="width: 55px; height: 55px; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(42, 139, 111, 0.3); flex-shrink: 0;">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.05rem; font-weight: 600;">Địa Chỉ</h4>
                                    <p style="margin: 0; color: var(--text-light); line-height: 1.7; font-size: 0.95rem;">${info.address}</p>
                                </div>
                            </div>

                            <div style="display: flex; gap: 18px; margin-bottom: 28px;">
                                <div style="width: 55px; height: 55px; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(42, 139, 111, 0.3); flex-shrink: 0;">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.05rem; font-weight: 600;">Hotline</h4>
                                    <p style="margin: 0; color: var(--primary-color); font-weight: 700; font-size: 1.15rem; letter-spacing: 0.5px;">${info.phone}</p>
                                </div>
                            </div>

                            <div style="display: flex; gap: 18px;">
                                <div style="width: 55px; height: 55px; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(42, 139, 111, 0.3); flex-shrink: 0;">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                                    <h4 style="margin: 0 0 8px 0; color: var(--text-dark); font-size: 1.05rem; font-weight: 600;">Email</h4>
                                    <p style="margin: 0;"><a href="mailto:${info.email}" style="color: var(--primary-color); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${info.email}</a></p>
                                </div>
                            </div>
                        </div>

                        <!-- Card đội hỗ trợ -->
                        <div style="background: white; border-radius: 12px; box-shadow: 0 2px 15px rgba(0,0,0,0.08); padding: 25px;">
                            <h4 style="color: var(--text-dark); font-size: 1.05rem; font-weight: 600; margin-bottom: 18px; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-headset" style="color: var(--primary-color); font-size: 1.1rem;"></i>
                                Đội Hỗ Trợ
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                ${appData.contact.map(person => `
                                    <div style="padding: 12px 15px; background: linear-gradient(135deg, rgba(42, 139, 111, 0.05), rgba(42, 139, 111, 0.02)); border-radius: 8px; border-left: 3px solid var(--primary-color); transition: all 0.3s ease;">
                                        <p style="margin: 0 0 3px 0; font-weight: 600; color: var(--text-dark); font-size: 0.95rem;">${person.name}</p>
                                        <p style="margin: 0 0 6px 0; font-size: 0.8rem; color: var(--text-light); font-style: italic;">${person.role}</p>
                                        <p style="margin: 0; color: var(--primary-color); font-weight: 600; font-size: 0.92rem;">
                                            <i class="fas fa-phone-alt" style="font-size: 0.8rem; margin-right: 6px;"></i>${person.phone}
                                        </p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Cột phải: Form gửi tin nhắn -->
                    <!-- Cột phải: Form gửi tin nhắn -->
                    <div style="background: linear-gradient(135deg, rgba(42, 139, 111, 0.02), rgba(255, 255, 255, 0.95)); border-radius: 12px; box-shadow: 0 2px 15px rgba(0,0,0,0.08); padding: 30px;">
                        <h3 style="color: var(--text-dark); font-size: 1.4rem; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-paper-plane" style="color: var(--primary-color);"></i>
                            Gửi Tin Nhắn
                        </h3>
                        <p style="margin: 0 0 25px 0; color: var(--text-light); font-size: 0.9rem;">Chúng tôi sẽ phản hồi trong vòng 24h</p>
                        
                        <form id="contactForm" style="display: flex; flex-direction: column; gap: 18px;">
                            <div>
                                <label style="display: block; margin-bottom: 8px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Họ và tên *</label>
                                <input type="text" id="contactName" placeholder="Nhập họ tên của bạn" required
                                    style="width: 100%; padding: 12px 14px; border: 2px solid #e8e8e8; border-radius: 8px; font-size: 0.95rem; transition: all 0.3s ease; box-sizing: border-box; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.1)'"
                                    onblur="this.style.borderColor='#e8e8e8'; this.style.boxShadow='none'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 8px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Email *</label>
                                <input type="email" id="contactEmail" placeholder="your@email.com" required
                                    style="width: 100%; padding: 12px 14px; border: 2px solid #e8e8e8; border-radius: 8px; font-size: 0.95rem; transition: all 0.3s ease; box-sizing: border-box; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.1)'"
                                    onblur="this.style.borderColor='#e8e8e8'; this.style.boxShadow='none'">
                            </div>

                            <div>
                                <label style="display: block; margin-bottom: 8px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Điện thoại *</label>
                                <input type="tel" id="contactPhone" placeholder="0912 345 678" required
                                    style="width: 100%; padding: 12px 14px; border: 2px solid #e8e8e8; border-radius: 8px; font-size: 0.95rem; transition: all 0.3s ease; box-sizing: border-box; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.1)'"
                                    onblur="this.style.borderColor='#e8e8e8'; this.style.boxShadow='none'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 8px; color: var(--text-dark); font-weight: 500; font-size: 0.9rem;">Nội dung *</label>
                                <textarea id="contactMessage" placeholder="Hãy chia sẻ nội dung bạn muốn liên hệ..." rows="6" required
                                    style="width: 100%; padding: 12px 14px; border: 2px solid #e8e8e8; border-radius: 8px; font-size: 0.95rem; font-family: inherit; resize: vertical; transition: all 0.3s ease; box-sizing: border-box; background: white;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px rgba(42, 139, 111, 0.1)'"
                                    onblur="this.style.borderColor='#e8e8e8'; this.style.boxShadow='none'"></textarea>
                            </div>
                            
                            <button type="button" onclick="contactManager.submit()"
                                style="padding: 14px; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(42, 139, 111, 0.3);"
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(42, 139, 111, 0.4)'"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(42, 139, 111, 0.3)'">
                                <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Gửi Tin Nhắn
                            </button>
                        </form>

                        <div id="successMessage" style="display: none; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white; padding: 16px; border-radius: 8px; text-align: center; margin-top: 20px; font-size: 0.95rem; box-shadow: 0 4px 15px rgba(42, 139, 111, 0.3);">
                            <i class="fas fa-check-circle" style="margin-right: 8px; font-size: 1.1rem;"></i>
                            Cảm ơn bạn! Chúng tôi đã nhận được tin nhắn và sẽ liên hệ lại sớm nhất.
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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Vui lòng nhập email hợp lệ!');
            return;
        }

        form.style.display = 'none';
        successMsg.style.display = 'block';

        setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            successMsg.style.display = 'none';
        }, 3000);
    }
}

const contactManager = new ContactManager();
