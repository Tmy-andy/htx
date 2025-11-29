class ContactManager {
    render() {
        const content = document.getElementById('panelContent');
        const info = appData.info;

        content.innerHTML = `
            <div style="max-width: 900px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                    <div>
                        <h3 style="color: var(--primary-color); margin-bottom: 20px; font-size: 1.2rem;">THÔNG TIN CÔNG TY</h3>
                        <div style="background: #f8f9fa; padding: 20px;">
                            <div style="margin-bottom: 20px;">
                                <p style="color: #7f8c8d; margin-bottom: 5px;"><strong>Tên công ty:</strong></p>
                                <p style="margin: 0;">${info.name}</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #7f8c8d; margin-bottom: 5px;"><strong>Địa chỉ:</strong></p>
                                <p style="margin: 0;">${info.address}</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #7f8c8d; margin-bottom: 5px;"><strong>Hotline:</strong></p>
                                <p style="margin: 0; color: var(--primary-color); font-weight: bold;">${info.hotline}</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #7f8c8d; margin-bottom: 5px;"><strong>Email:</strong></p>
                                <p style="margin: 0;">${info.email}</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p style="color: #7f8c8d; margin-bottom: 5px;"><strong>Website:</strong></p>
                                <p style="margin: 0;"><a href="${info.website}" target="_blank" style="color: var(--primary-color); text-decoration: none;">${info.website}</a></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 style="color: var(--primary-color); margin-bottom: 20px; font-size: 1.2rem;">HỖ TRỢ TRỰC TUYẾN</h3>
                        <div style="background: #f8f9fa; padding: 20px;">
                            ${appData.contact.map(person => `
                                <div style="margin-bottom: 20px; padding: 15px; background: white;">
                                    <p style="margin: 0 0 8px 0; font-weight: bold; color: var(--primary-color);">${person.name}</p>
                                    <p style="margin: 0 0 8px 0; color: #7f8c8d;">${person.role}</p>
                                    <p style="margin: 0; font-weight: bold;">📞 ${person.phone}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style="color: var(--primary-color); margin-bottom: 20px; font-size: 1.2rem;">GỬI LỜI NHẮN</h3>
                    <form id="contactForm" style="display: flex; flex-direction: column; gap: 15px; max-width: 600px;">
                        <input type="text" id="contactName" placeholder="Họ tên" required
                            style="padding: 12px; border: 1px solid #ecf0f1; font-size: 0.9rem;">
                        <input type="email" id="contactEmail" placeholder="Email" required
                            style="padding: 12px; border: 1px solid #ecf0f1; font-size: 0.9rem;">
                        <input type="tel" id="contactPhone" placeholder="Điện thoại" required
                            style="padding: 12px; border: 1px solid #ecf0f1; font-size: 0.9rem;">
                        <textarea id="contactMessage" placeholder="Nội dung" rows="6" required
                            style="padding: 12px; border: 1px solid #ecf0f1; font-size: 0.9rem; font-family: inherit; resize: vertical;"></textarea>
                        <button type="button" class="btn-add-cart" onclick="contactManager.submit()"
                            style="padding: 12px; cursor: pointer; width: fit-content;">Gửi</button>
                    </form>
                </div>
            </div>
        `;
    }

    submit() {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !phone || !message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        alert(`Cảm ơn ${name}!\nChúng tôi đã nhận được tin nhắn của bạn.\nChúng tôi sẽ liên hệ với bạn sớm nhất!`);
        document.getElementById('contactForm').reset();
    }
}

const contactManager = new ContactManager();