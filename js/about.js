class AboutManager {
    constructor() {
        this.activeTab = 0;
        this.tabs = [
            { id: 'achievements', label: 'Thành tựu Bầu Mây' },
            { id: 'vision', label: 'Tầm nhìn - Sứ mệnh - Giá trị văn hóa' },
            { id: 'founder', label: 'Cha đẻ Tiêu Bầu Mây là Ai' },
            { id: 'pepper', label: 'Giống tiêu Bầu Mây 0945818389 Lâm Ngọc Nhâm' },
            { id: 'duck', label: 'Vịt trời Bầu Mây' },
            { id: 'yam', label: 'Giống củ Hoài sơn Bầu Mây' },
            { id: 'ginseng', label: 'Sâm Đinh Lăng' }
        ];
    }

    render() {
        const content = document.getElementById('panelContent');
        
        let html = `
            <div class="about-tabs-container" style="display: flex; gap: 10px; margin-bottom: 20px; overflow-x: auto; overflow-y: hidden; white-space: nowrap; padding-bottom: 10px;">
        `;

        this.tabs.forEach((tab, idx) => {
            const isActive = this.activeTab === idx;
            html += `
                <button onclick="aboutManager.switchTab(${idx})" 
                    style="padding: 10px 12px; background: ${isActive ? 'var(--primary-color)' : '#ecf0f1'}; color: ${isActive ? 'white' : '#2c3e50'}; border: none; cursor: pointer; font-weight: 600; border-radius: 4px 4px 0 0; white-space: nowrap; font-size: 0.9rem; flex-shrink: 0;">
                    ${tab.label}
                </button>
            `;
        });

        html += `
            </div>
            <div class="about-content">
        `;

        const activeTabId = this.tabs[this.activeTab].id;

        if (activeTabId === 'achievements') {
            html += '<div class="about-section"><h2>Thành tựu Bầu Mây</h2><div class="achievements">';
            appData.about.achievements.forEach(ach => {
                html += `
                    <div class="achievement-box">
                        <div class="achievement-number">${ach.value}</div>
                        <div class="achievement-label">${ach.label}</div>
                    </div>
                `;
            });
            html += '</div></div>';
        } else if (activeTabId === 'vision') {
            appData.about.sections.forEach((section, idx) => {
                if (idx >= 1 && idx <= 3) {
                    html += `<div class="about-section"><h2>${section.title}</h2><p>${section.content}</p></div>`;
                }
            });
        } else if (activeTabId === 'founder') {
            html += '<div class="about-section"><h2>Cha đẻ Tiêu Bầu Mây là Ai</h2><p>Ông Lâm Ngọc Nhâm - Nhà khoa học nông nghiệp, người sáng lập và phát triển giống tiêu Bầu Mây hữu cơ qua hơn 16 năm nghiên cứu và trồng thử nghiệm. Ông đã tạo ra một giống tiêu xuất sắc, được chứng nhận hữu cơ và đạt tiêu chuẩn quốc tế ISO 22000:2018.</p></div>';
        } else if (activeTabId === 'pepper') {
            html += '<div class="about-section"><h2>Giống Tiêu Bầu Mây</h2><p>Giống tiêu Bầu Mây là kết quả của hơn 16 năm nghiên cứu và phát triển. Đây là giống tiêu hữu cơ được chứng nhận, không chứa hóa chất bảo vệ thực vật, giữ nguyên vị cay đậm đà và hương thơm tự nhiên. Liên hệ: 0945818389 - Lâm Ngọc Nhâm</p></div>';
        } else if (activeTabId === 'duck') {
            html += '<div class="about-section"><h2>Vịt Trời Bầu Mây</h2><p>Vịt trời được nuôi tại những vùng sinh thái sạch của Bầu Mây. Sản phẩm vịt thịt chất lượng cao, được nuôi theo cách truyền thống và hữu cơ, an toàn cho sức khỏe người tiêu dùng.</p></div>';
        } else if (activeTabId === 'yam') {
            html += '<div class="about-section"><h2>Giống Củ Hoài Sơn Bầu Mây</h2><p>Hoài sơn Bầu Mây được chứng nhận đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam. Được trồng theo phương pháp hữu cơ gia truyền qua hơn 16 năm, hoài sơn Bầu Mây giàu dinh dưỡng, tốt cho sức khỏe và được bảo quản tốt.</p></div>';
        } else if (activeTabId === 'ginseng') {
            html += '<div class="about-section"><h2>Sâm Đinh Lăng</h2><p>Sâm Đinh Lăng được trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ. Sâm Đinh Lăng là thảo dược quý, có tác dụng bổ khí, tăng sức đề kháng và tốt cho sức khỏe nói chung.</p></div>';
        }

        html += '</div>';
        content.innerHTML = html;
    }

    switchTab(idx) {
        this.activeTab = idx;
        this.render();
    }
}

const aboutManager = new AboutManager();