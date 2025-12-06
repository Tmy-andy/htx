class AboutManager {
    constructor() {
        this.activeTab = 0;
        this.tabs = [
            { id: 'achievements', label: 'Thành tựu Bầu Mây' },
            { id: 'vision', label: 'Tầm nhìn - Sứ mệnh - Giá trị văn hóa' },
            { id: 'founder', label: 'Cha đẻ Tiêu Bầu Mây là Ai' },
            { id: 'pepper', label: 'Giống tiêu Bầu Mây 0945818389 Lâm Ngọc Nhâm' },
            { id: 'duck', label: 'Vịt trời Bầu Mây' },
            // { id: 'yam', label: 'Giống củ Hoài sơn Bầu Mây' },
            // { id: 'ginseng', label: 'Sâm Đinh Lăng' }
        ];
    }

    render() {
        const content = document.getElementById('panelContent');
        
        let html = `
            <div style="width: 100%; max-width: 100%; padding: 0;">
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
                <div class="about-content" style="width: 100%; max-width: 100%; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
        `;

        const activeTabId = this.tabs[this.activeTab].id;

        if (activeTabId === 'achievements') {
            html += `
                <div class="about-section">
                    <h2 style="color: var(--primary-color); margin-bottom: 20px; font-size: 2rem; text-align: center;">Thành tựu Bầu Mây</h2>
                    
                    <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 40px; text-align: center;">
                        Hơn 20 năm phát triển, chăm sóc và năm bắt từng hơi thở cây tiêu Bầu Mây, với bàn tính mạnh dạn đổi mới cách chăm sóc, 
                        đón đầu những công nghệ mới, bàn tính đổi phá, phát huy tinh sáng tạo. Hồ tiêu Bầu Mây trở thành điểm sáng trong nền 
                        Nông nghiệp Việt Nam. Hợp tác xã Nông Nghiệp - Thương Mại - Du Lịch Bầu Mây đã trở thành 1 trong những Hợp tác xã hàng 
                        đầu tại Việt Nam về sản xuất Hồ tiêu, đóng góp lớn vào sự phát triển của nền nông nghiệp nông thôn Việt Nam.
                    </p>

                    <h3 style="color: var(--primary-dark); margin-bottom: 30px; font-size: 1.5rem; text-align: center;">🏆 Giải thưởng & Chứng nhận</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 30px; margin-bottom: 40px; align-items: center;">
                        <img src="https://baumay.com/data/images/Ch%E1%BB%A9ng%20nh%E1%BA%ADn.png" 
                             alt="Chứng nhận" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                        
                        <img src="https://baumay.com/data/images/2.png" 
                             alt="Giải thưởng 2" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                        
                        <img src="https://baumay.com/data/images/1%20ok.png" 
                             alt="Giải thưởng 1" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                        
                        <img src="https://baumay.com/data/images/3.png" 
                             alt="Giải thưởng 3" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                        
                        <img src="https://baumay.com/data/images/6.jpg" 
                             alt="Giải thưởng 6" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                        
                        <img src="https://baumay.com/data/images/5%202.jpg" 
                             alt="Giải thưởng 5" 
                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                    </div>

                    <div class="achievements" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
            `;
            appData.about.achievements.forEach(ach => {
                html += `
                    <div class="achievement-box" style="background: white; padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div class="achievement-number" style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color); margin-bottom: 10px;">${ach.value}</div>
                        <div class="achievement-label" style="color: var(--text-light); font-size: 0.95rem;">${ach.label}</div>
                    </div>
                `;
            });
            html += '</div></div>';
        } else if (activeTabId === 'vision') {
            html += `
            <div class="about-section">
                <h2 style="color: var(--primary-color); font-size: 2rem; margin-bottom: 24px; text-align: center;">Tầm nhìn - Sứ mệnh - Giá trị văn hóa</h2>

                <h3 style="color: var(--primary-dark); font-size: 1.3rem; margin-bottom: 10px;">Tầm nhìn</h3>
                <p style="color: var(--text-dark); line-height: 1.7; margin-bottom: 18px; font-size: 1.08rem;">Kiến tạo cuộc sống thịnh vượng, mang thành công giúp người nông dân trở thành ông chủ lớn thông qua hành trình Nông nghiệp hữu cơ tự nhiên.</p>

                <h3 style="color: var(--primary-dark); font-size: 1.15rem; margin-bottom: 10px;">Mục tiêu</h3>
                <p style="color: var(--text-dark); line-height: 1.7; margin-bottom: 18px; font-size: 1.08rem;">Xây dựng Mô hình Bầu Mây vùng nguyên liệu tiêu Bầu Mây cộng sinh củ Hoài Sơn bền vững - Tấc đất tấc vàng nhà nông thu ngay bạc tỷ, từ đó tạo ra sản phẩm cao cấp phục vụ người tiêu dùng trong nước và quốc tế.</p>

                <h3 style="color: var(--primary-dark); font-size: 1.15rem; margin-bottom: 10px;">Sứ mệnh</h3>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 18px; font-size: 1.08rem; padding-left: 22px;">
                    <li>Cam kết giúp người nông dân trở thành ông chủ lớn thông qua hành trình Nông nghiệp theo phương pháp hữu cơ gia truyền.</li>
                    <li>Xây dựng cộng đồng doanh nghiệp cùng nhà nông cung cấp nguyên liệu cao cấp, tuân thủ quy trình chất lượng quốc tế đến mọi bàn ăn "Farm to table".</li>
                    <li>Mang đến những trải nghiệm được sử dụng sản phẩm giá trị cao, sáng tạo, khác biệt, thơm ngon, tuyệt vời nhất và dịch vụ khách hàng 5 sao đến người tiêu dùng trên khắp thế giới.</li>
                    <li>Truyền tình yêu cây nông nghiệp đến mọi người.</li>
                    <li><b>Slogan:</b> Ước mơ của Bạn - Hạnh phúc Bầu Mây</li>
                </ul>

                <h3 style="color: var(--primary-dark); font-size: 1.15rem; margin-bottom: 10px;">Giá trị văn hóa: 14 Giá trị văn hóa của Bầu Mây</h3>
                <ol style="color: var(--text-dark); line-height: 1.7; margin-bottom: 18px; font-size: 1.08rem; padding-left: 22px;">
                    <li>Cam Kết</li>
                    <li>Chính Trực</li>
                    <li>Làm Chủ</li>
                    <li>Đào Tạo</li>
                    <li>Kiên Trì</li>
                    <li>Xuất Sắc</li>
                    <li>Thịnh Vượng</li>
                    <li>Biết Ơn</li>
                    <li>Đam Mê</li>
                    <li>Yêu Thương</li>
                    <li>Kỷ Luật</li>
                    <li>Kế Thừa</li>
                    <li>Chia Sẻ</li>
                    <li>Trách Nhiệm</li>
                </ol>

                <div style="color: var(--primary-color); font-weight: 600; text-align: center; font-size: 1.1rem; margin-top: 30px;">Đến với Bầu Mây Bạn có thể LÀM ĐƯỢC: ƯỚC MƠ CỦA BẠN – HẠNH PHÚC BẦU MÂY</div>
            </div>
            `;
        } else if (activeTabId === 'founder') {
            html += `
            <div class="about-section">
                <h2 style="color: var(--primary-color); font-size: 2rem; margin-bottom: 24px; text-align: center;">CHA ĐẺ TIÊU BẦU MÂY LÀ AI</h2>
                
                <h3 style="color: var(--primary-dark); font-size: 1.4rem; margin-bottom: 16px; text-align: center;">LÀ TÔI, LÂM NGỌC NHÂM VÀ HÌNH ẢNH VỀ TÔI</h3>
                
                <img src="https://baumay.com/data/images/1.1%20HINH%20WEB%201.jpg" 
                     alt="Lâm Ngọc Nhâm - Cha đẻ Tiêu Bầu Mây" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Bạn có thể làm mọi cái nếu bạn luôn nghĩ mình có khả năng. Thích cái bạn làm và làm cái bạn thích là liều thuốc tiên để thành công. Tôi có sự đam mê, khát vọng, kiên trì và nắm bắt từng hơi thở của cây tiêu Bầu Mây, tôi có niềm tin các sản phẩm tạo ra từ tiêu Bầu Mây sẽ mang lại rất nhiều giá trị cộng đồng cho mọi người, từ đó làm cho người Nông dân có cuộc sống thịnh vượng hơn, đưa thương hiệu Bầu Mây trở thành thương hiệu quốc gia nông sản sạch của Việt Nam giá trị toàn cầu.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify; font-style: italic;">
                    Đây là câu chuyện về sự ra đời, hình thành và phát triển đưa tôi trở thành "Cha đẻ của giống tiêu Bầu Mây tại Việt Nam".
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Tôi là một nông dân được sinh ra ở Tuyên Quang. Sau đó gia đình tôi chuyển vào Ấp Phú Lộc, xã Hòa Hiệp, huyện Xuyên Mộc, tỉnh Bà Rịa - Vũng Tàu sinh sống.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Khởi nghiệp từ đây cùng gia đình. Tôi trải qua quá trình trồng trọt và chăn nuôi bao khó khăn, vất vả, thất bại và thành công đan xen, nhưng với niềm tin khát vọng cháy bỏng của sự đam mê trong công việc cùng ý chí kiên trì. Tôi đã trải nghiệm với các loại cây trồng như: Cafe, Điều, Chôm chôm, Sầu riêng, Nhãn, Mít, Hồ tiêu,... Tôi nhận thấy đối với người nông dân thì cứ được mùa mất giá, được giá mất mùa, trồng rồi lại chặt, chặt rồi lại trồng, quy trình trồng trọt và chăm sóc cây trồng mạnh ai nấy làm,... Khiến tôi trăn trở và suy nghĩ phải làm một điều gì đó cho người nông dân và tìm ra loại cây trồng để phát triển ổn định cho bản thân gia đình và cộng đồng.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Bà Rịa - Vũng Tàu là nơi trời ban cho khí hậu ổn định và đất đai thổ nhưỡng phù hợp với các loại cây trồng, trong đó có cây Hồ Tiêu. Tôi quyết định trồng cây hồ tiêu trong vườn nhà mình với nhiều loại giống khác nhau... Tôi may mắn phát hiện chọn lọc được 1 dây tiêu khác thường trong vườn năm nào cũng cho năng suất cao, khỏe mạnh.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Tôi bèn cắt toàn bộ dây này ra nhân giống và theo dõi quá trình phát triển thấy rất khác biệt so với các giống khác. Cây tiêu có bộ rễ cái rất to khỏe gấp 10 lần giống khác, cắt dây giống ở đâu ra rễ ở đó, tiêu trưởng thành phân bổ mầm đều, chịu được hạn, kháng bệnh tốt, năng suất rất cao từ 10 đến 12 tấn/ha, ổn định qua các năm. Sau hơn 20 năm thực nghiệm, nghiên cứu tìm tòi, sáng tạo. Tôi đặt tên cho cây tiêu là Tiêu Bầu Mây và đăng ký bảo hộ nhãn hiệu Tiêu Bầu Mây tại Cục sở hữu trí tuệ.
                </p>
                
                <img src="https://baumay.com/data/images/1.2%20HINH%20WEB%202.jpg" 
                     alt="Giống tiêu Bầu Mây" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                <p style="text-align: center; color: var(--text-light); font-style: italic; margin-top: 8px; margin-bottom: 20px;">Giống tiêu Bầu Mây</p>
                               
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Hàng năm, Tôi chủ động vùng nguyên liệu bền vững nhân giống và mở rộng diện tích Tiêu bầu Mây. Tôi trở thành nhà khoa học nông dân của chính vườn nhà mình xây dựng quy trình kiểm soát chặt chẽ trồng và chăm sóc riêng của Tiêu Bầu Mây hướng hữu cơ, nghiên cứu chăm sóc, thí nghiệm và đưa ra sử dụng phân bón hữu cơ tự chế từ Phôi trứng + Cua để bón cho cây tiêu. Sáng chế ra Nhà Màng Phơi Sấy tiêu hoàn toàn tự nhiên bằng ánh sáng mặt trời sau khi thu hoạch đem lại giá trị hàm lượng dinh dưỡng cao nhất đối với hạt tiêu thành phẩm.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Tôi khởi đầu từ nông dân trồng trọt nhỏ lẻ sau đó trở thành Hộ kinh doanh thành công mô hình Trang Trại Bầu Mây, khi đó Trang Trại Bầu Mây trồng trọt có Tiêu Bầu Mây và Chăn nuôi có: Vịt trời Bầu Mây - Tôi cũng là người đầu tiên của Việt Nam huấn luyện vịt trời bằng tập thể dục thể thao và nghe nhạc, duyệt binh xếp hình bản đồ Việt Nam.
                </p>
                
                <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin: 20px 0 12px 0;">* Năm 2014:</h4>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem; padding-left: 30px;">
                    <li>Tiêu Bầu Mây chính thức được chứng nhận Sản phẩm Nông nghiệp Tiêu Biểu toàn quốc năm 2014.</li>
                    <li>Tôi được nhận Bằng khen của Bộ Nông Nghiệp & phát triển Nông Thôn tặng đã có thành tích xuất sắc đóng góp vào sự nghiệp phát triển nông nghiệp, nông thôn năm 2014.</li>
                    <li>Vinh dự được Thứ trưởng Lê Quốc Doanh và đoàn Trung Ương Hội Nông Dân Việt Nam thăm quan trực tiếp vườn Tiêu Bầu Mây.</li>
                    <li>Các đoàn Viện Khoa Học Miền Nam, Sở, ban nghành, Hội nông dân các tỉnh thành địa phương khác đến thăm quan trực tiếp mô hình Tiêu Bầu Mây.</li>
                </ul>
                
                <img src="https://baumay.com/data/images/1%20A%20Nh%C3%A2m%20nh%E1%BA%ADn%20b%E1%BA%B1ng%20khen%20h%C3%ACnh%20n%E1%BB%81n%20web%20%C4%91i%E1%BB%81u%20ch%E1%BB%89nh.JPG" 
                     alt="Chứng nhận Sản phẩm Nông nghiệp Tiêu Biểu toàn quốc năm 2014" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                <p style="text-align: center; color: var(--text-light); font-style: italic; margin-top: 8px; margin-bottom: 20px;">Chứng nhận Sản phẩm Nông nghiệp Tiêu Biểu toàn quốc năm 2014.</p>
                
                <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin: 20px 0 12px 0;">* Năm 2015:</h4>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem; padding-left: 30px;">
                    <li>Tiêu Bầu Mây tiếp tục được chứng nhận Sản phẩm Nông nghiệp Tiêu Biểu toàn quốc năm 2015.</li>
                    <li>Tôi được nhận Giấy khen của Sở Khoa Học và Công Nghệ tỉnh Bà Rịa - Vũng Tàu, năm 2015 Cuộc thì Ý tưởng khoa học và công nghệ với 2 ý tưởng đạt giải: Tiêu Bầu Mây và Huấn luyện Vịt trời Bầu Mây luyện tập thể dục thể thao.</li>
                    <li>Bằng khen của Chủ tịch Ủy Ban Nhân Dân tỉnh Bà Rịa - Vũng Tàu tặng Nông dân thi đua sản xuất kinh doanh giỏi - đoàn kết giúp nhau làm giàu và giảm nghèo bền vững giai đoạn 2011 - 2015.</li>
                    <li>Năm 2015 Tôi thành lập Hợp tác xã Nông Nghiệp - Thương Mại - Du Lịch Bầu Mây trở thành Chủ tịch hội đồng quản trị HTX, được đồng thuận và ủng hộ nhiệt tình của xã viên và Ban Quản Trị HTX đã đồng lòng đoàn kết thực hiện trồng tiêu Bầu Mây theo đúng quy định đặt chuẩn quốc tế GlobalG.A.P. hướng hữu cơ với mục tiêu Bầu Mây trở thành thương hiệu Hồ tiêu Việt Chất Lượng Quốc tế.</li>
                    <li>Trong năm 2015 tôi được đoàn cố vấn của chính phủ Campuchia đến thăm quan mô hình Tiêu Bầu Mây và sau đó mời tôi sang chia sẻ về mô hình cho trường Đại Học Nông Lâm Hoàng Gia Campuchia và các tỷ phủ tại Campuchia đã mời tôi cố vấn cho trang trại của họ tại nước bạn.</li>
                    <li>Đoàn Hiệp hội hồ tiêu Việt Nam cũng đến thăm quan mô hình vườn tiêu Bầu Mây trực tiếp.</li>
                    <li>Chương trình Một ngày làm nông dân cùng người nổi tiếng do Quyền linh và Diễn viên Lan Phương quay trực tiếp tại vườn tiêu Bầu Mây.</li>
                </ul>
                
                <img src="https://baumay.com/data/images/6%20A%20Nh%C3%A2m%20nh%E1%BA%ADn%20b%E1%BA%B1ng%20khen%20s%E1%BB%9F%20khoa%20h%E1%BB%8Dc%20c%C3%B4ng%20ngh%E1%BB%87.jpg" 
                     alt="Cuộc thi Ý tưởng khoa học và công nghệ" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                <p style="text-align: center; color: var(--text-light); font-style: italic; margin-top: 8px; margin-bottom: 20px;">Cuộc thi Ý tưởng khoa học và công nghệ</p>
                
                <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin: 20px 0 12px 0;">* Năm 2016:</h4>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem; padding-left: 30px;">
                    <li>Tiêu Bầu Mây tiếp tục được chứng nhận Sản Phẩm Nông Nghiệp Tiêu Biểu toàn quốc năm 2016.</li>
                    <li>Cúp Sao Thần Nông cho Mùa bội thu năm 2016.</li>
                    <li>Tôi được nhận Bằng khen của Bộ Nông Nghiệp & Phát Triển Nông Thôn tặng đã có thành tích xuất sắc góp phần phát triển nông nghiệp, nông thôn 2016.</li>
                    <li>Diễn viên Quang Thắng đại sứ của chương trình Sao Thần Nông đã đến trực tiếp quay chương trình tại vườn tiêu Bầu Mây.</li>
                    <li>Trong năm 2016 tiếp đón các đoàn khách quốc tế thăm quan mô hình trang trại Bầu Mây đến từ các nước: Nhật Bản, Mỹ, Úc, Singapore, Trung Quốc,...</li>
                </ul>
                
                <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin: 20px 0 12px 0;">* Năm 2017:</h4>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem; padding-left: 30px;">
                    <li>Chứng nhận Sản Phẩm Nông Nghiệp Tiêu Biểu & Chương trình Festival Nông Nghiệp - Ngư Nghiệp 2017 tại Kiên Giang.</li>
                    <li>Tôi được nhận Bằng khen Trang trại tiêu biểu do hiệp hội Trang Trại Việt Nam trao tặng năm 2017.</li>
                    <li>Giấy khen của Sở Khoa học & Công nghệ trong cuộc thi Khởi nghiệp đổi mới sáng tạo năm 2017 với Dự án: Trồng Hồ tiêu ra hoa theo ý muốn.</li>
                    <li>Giấy khen của Sở Khoa học & Công nghệ trong cuộc thi Khởi nghiệp đổi mới sáng tạo năm 2017 với Dự án: Tấc đất tấc vàng nhà nông thu ngay bạc tỷ.</li>
                    <li>Giấy khen của Ủy Ban Nhân Dân xã Hòa Hiệp - Nông dân sản xuất giỏi.</li>
                    <li>Hồ tiêu Bầu Mây của HTX là đơn vị đầu tiên của nghành hồ tiêu Việt Nam chính thức được cấp chứng nhận đạt chuẩn Quốc tế số chứng nhận GGN: 4059883334760 hướng tới hữu cơ trong nông nghiệp từ ngày 29/12/2017 đến hiện nay hằng năm đều tái chứng nhận và duy trì vùng nguyên liệu hồ tiêu đạt chuẩn quốc tế.</li>
                    <li>Bằng khen của Liên Minh Hợp tác xã Việt Nam đã được thành tích hoàn thành xuất sắc nhiệm vụ năm 2017.</li>
                    <li>Trong năm 2017 tôi tiếp đón liên tục các đoàn quốc tế đến với mô hình Tiêu Bầu Mây và đặc biệt đối tác từ Nhật Bản quay trở lại làm việc trong năm này về các sản phẩm của Tiêu Bầu Mây, cùng với các đối tác xuất khẩu nước ngoài đến làm việc trực tiếp tại Bầu Mây: Nhật Bản, Mỹ, Úc, Singapore, Đài Loan, HongKong.</li>
                </ul>
                
                <img src="https://baumay.com/data/images/10.jpg" 
                     alt="Giấy khen của Sở Khoa học & Công nghệ trong cuộc thi Khởi nghiệp đổi mới sáng tạo năm 2017" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                <p style="text-align: center; color: var(--text-light); font-style: italic; margin-top: 8px; margin-bottom: 20px;">Giấy khen của Sở Khoa học & Công nghệ trong cuộc thi Khởi nghiệp đổi mới sáng tạo năm 2017</p>
                
                <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin: 20px 0 12px 0;">* Năm 2018:</h4>
                <ul style="color: var(--text-dark); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem; padding-left: 30px;">
                    <li>Vinh dự đạt chứng nhận Sản Phẩm Công Nghiệp Nông Thôn tiêu biểu cấp khu vực năm 2018 do Cục trưởng Cục công thương cấp.</li>
                    <li>Tôi thành lập Công ty Cổ Phần Nông Nghiệp Thương Mại Du Lịch Bầu Mây. Tôi cũng là Giám đốc công ty phân phối và phát triển sản phẩm chế biến công nghiệp từ Tiêu Bầu Mây. Đưa chuỗi giá trị Thương hiệu Bầu Mây từ trồng trọt sản xuất gắn liền với chế biến và tiêu thụ sản phẩm bằng Hệ thống truy xuất nguồn gốc điện tử trên nhận diện thương hiệu Bầu Mây để phục vụ người tiêu dùng trong nước và quốc tế các sản phẩm chất lượng, an toàn và đảm bảo. Hồ tiêu sạch được kiểm soát nguồn gốc chặt chẽ trong tất cả các quy trình An toàn vệ sinh thực phẩm.</li>
                    <li>Bầu Mây là thành viên của Hiệp hội hồ tiêu Việt Nam (VPA).</li>
                    <li>Tôi tự hào là nhà cung cấp Tiêu Bầu Mây số 1 của Việt Nam cho các thị trường khó tính và yêu cầu cao về chất lượng như: Nhật Bản, Dubai, Mỹ, Anh...</li>
                    <li>Tôi triển khai Mô hình Dự án: Tấc đất tấc vàng nhà nông thu ngay bạc tỷ. "Cộng sinh củ Hoài Sơn Bầu Mây trên diện tích vườn Tiêu Bầu Mây" đạt chuẩn quốc tế hướng hữu cơ từ năm 2018 trên diện rộng. Mô hình siêu lợi nhuận mang đến sự thịnh vượng cho người nông dân.</li>
                    <li>Bộ sản phẩm thương hiệu Bầu Mây cung cấp đến người tiêu dùng hiện nay: Nước Chấm Bầu Mây, Tiêu Xanh Muối, Tiêu Không Hạt Bầu Mây, Tiêu Đỏ Bầu Mây, Tiêu Đỏ Xay Bầu Mây, Tiêu Đen Bầu Mây, Tiêu Đen Xay Bầu Mây, Tiêu Xanh Bầu Mây, Củ Hoài Sơn Bầu Mây...</li>
                    <li>Bên cạnh đó tôi tích cực đưa Thương hiệu Bầu Mây tham gia các Hội chợ, Festival trong nước và Quốc tế đưa các sản phẩm Tiêu Bầu Mây đến với khách hàng. An toàn cho người sản xuất - An tâm cho người tiêu dùng. Tôi phổ biến chia sẻ kinh nghiệm sản xuất đưa giống Tiêu Bầu Mây phát triển nhân giống trên toàn quốc, chủ động vùng nguyên liệu vững bền, hiện tại đã được 1.000 ha tiêu Bầu Mây toàn quốc, tạo một hướng đi mới cho nông dân trồng hồ tiêu bền vững. Từ đó nhân rộng xây dựng và phát triển mô hình này với khẩu hiệu: Trang Trại ở đâu - Bầu Mây ở đó.</li>
                </ul>
                
                <img src="https://baumay.com/data/images/28.jpg" 
                     alt="Sản phẩm Bầu Mây tham gia Festival, Hội chợ" 
                     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin: 20px 0;">
                <p style="text-align: center; color: var(--text-light); font-style: italic; margin-top: 8px; margin-bottom: 20px;">Sản phẩm Bầu Mây tham gia Festival, Hội chợ</p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin: 24px 0 16px 0; font-size: 1.05rem; text-align: justify;">
                    Là một người nông dân Tôi ở đây để giúp bạn thay đổi. Chúng ta sẽ làm việc với nhau cùng chia sẻ kinh nghiệm, Tôi hướng dẫn bạn về Mô hình Tiêu Bầu Mây cộng sinh Củ Hoài Sơn đạt chuẩn Quốc tế và dành cho bạn cảm nhận, trải nghiệm lợi ích của từng sản phẩm đặc sản Bầu Mây. Chúng ta cùng nhau đưa Hồ tiêu Việt Nam trở lại là cây tỷ đô, giá trị cây tiêu lên một tầm cao mới.
                </p>
                
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 16px; font-size: 1.05rem; text-align: justify;">
                    Bạn có thể liên hệ với tôi, chúng ta cùng nói về ước mơ của bạn và tôi cũng như Bầu Mây làm thế nào để giúp gì được cho bạn. Bạn có thể gọi <strong style="color: var(--primary-color);">0945 818 389</strong> gặp tôi Lâm Ngọc Nhâm trực tiếp để được hỗ trợ và chia sẻ, tư vấn MIỄN PHÍ về Mô hình Tiêu Bầu Mây cộng sinh Củ Hoài Sơn đem lại giá trị toàn cầu này.
                </p>
                
                <div style="color: var(--primary-color); font-weight: 600; text-align: center; font-size: 1.2rem; margin-top: 30px;">ƯỚC MƠ CỦA BẠN - HẠNH PHÚC BẦU MÂY</div>
            </div>
            `;
        } else if (activeTabId === 'pepper') {
            html += `
            <div class="about-section">
                <h2 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 20px; font-weight: 700; text-transform: uppercase;">Giống Tiêu Bầu Mây 0945818389 Lâm Ngọc Nhâm</h2>
                
                <h3 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 12px; font-weight: 700; text-transform: uppercase;">
                    Cung cấp tiêu giống Bầu Mây duy nhất tại Việt Nam - Hướng dẫn Trồng - Chăm sóc - Thu hoạch
                </h3>
                
                <p style="color: var(--text-dark); font-size: 1rem; margin-bottom: 20px; font-weight: 600;">
                    LIÊN HỆ: A. NHÂM <span style="color: #d32f2f;">0945 818 389 – 0962 152257</span>
                </p>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► Giống tiêu Bầu Mây có bộ rễ cái to <strong style="color: var(--primary-color);">gấp 7 đến 10 lần</strong> so với các giống tiêu khác.
                    </p>
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► Tiêu giống Bầu Mây năng suất cao ổn định và bền vững qua các năm, <strong style="color: var(--primary-color);">bình quân từ 9 tấn đến 15 tấn/ha.</strong>
                    </p>
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► Giống tiêu Bầu Mây <strong style="color: var(--primary-color);">kháng bệnh tốt, sinh trưởng mạnh</strong>, có sự khác biệt so với các giống tiêu khác.
                    </p>
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► Giống tiêu Bầu Mây cất hoàn toàn tự nhiên, <strong style="color: var(--primary-color);">cắt ở đầu ra rễ ở đó</strong>.
                    </p>
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► Giống tiêu Bầu Mây là <strong style="color: var(--primary-color);">Hồ tiêu đầu tiên đạt chuẩn hữu cơ xuất khẩu Quốc tế</strong> tại Việt Nam
                    </p>
                </div>
                
                <h3 style="color: var(--primary-color); font-size: 1.1rem; margin: 20px 0 12px 0; font-weight: 700;">
                    Với nguồn giống chất lượng và năng suất vượt bậc:
                </h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► <strong>Tiêu Bầu Mây</strong> đạt liên tiếp 4 năm liền <strong style="color: var(--primary-color);">sản phẩm Nông nghiệp tiêu biểu toàn quốc</strong> 2014, 2015, 2016, 2017.
                    </p>
                    <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                        ► <strong>Tiêu Bầu Mây</strong> đã được <strong style="color: var(--primary-color);">xuất khẩu đi Nhật, Mỹ, Úc, Dubai,...</strong> chất lượng tiêu hữu cơ theo chuẩn quốc tế với các sản phẩm: Tiêu Đen Bầu Mây, Tiêu xanh Bầu Mây, Tiêu Đỏ Bầu Mây, Tiêu sọ Bầu Mây, Tiêu không hạt Bầu Mây, Muối tiêu Bầu Mây, Tiêu xanh giòn Bầu Mây, Tiêu Một Nắng Bầu Mây, Tiêu xanh muối Bầu Mây, tiêu xay bột Bầu Mây, Nước ngậm răng miệng Bầu Mây...
                    </p>
                </div>
                
                <h3 style="color: var(--primary-color); font-size: 1.1rem; margin: 20px 0 12px 0; font-weight: 700;">
                    Không chỉ là cung cấp giống
                </h3>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 8px;">
                    Chúng tôi còn đồng hành cùng bạn: Hướng dẫn trồng trọt chi tiết, tư vấn chăm sóc cây tiêu, hỗ trợ kỹ thuật thu hoạch, chia sẻ kinh nghiệm thực tế từ 20+ năm.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; margin: 30px 0 12px 0; font-weight: 600;">
                    Liên hệ ngay để được tư vấn chi tiết: <span style="color: #d32f2f; font-size: 1.1rem; font-weight: 700;">0945 818 389 • 0962 152 257</span>
                </p>
                
                <p style="color: var(--text-light); font-size: 0.95rem; font-style: italic; margin-bottom: 20px;">
                    Anh Lâm Ngọc Nhâm - Cha đẻ Giống Tiêu Bầu Mây
                </p>
                
                <p style="color: var(--primary-color); font-weight: 700; text-align: center; font-size: 1.1rem; margin-top: 30px; text-transform: uppercase;">
                    Ước Mơ Của Bạn – Hạnh Phúc Bầu Mây
                </p>
            </div>
            `;
        } else if (activeTabId === 'duck') {
            html += `
            <div class="about-section">
                <h2 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 20px; font-weight: 700; text-transform: uppercase;">Vịt Trời Bầu Mây</h2>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Nói đến chuyện nuôi vịt trời, chắc ai cũng nghĩ là điều không thể. Tuy nhiên anh Lâm Ngọc Nhâm ngụ tại ấp Phú Lộc, xã Hòa Hiệp (huyện Xuyên Mộc) đã biến chuyện không thể này thành chuyện có thể, đó là nuôi hàng chục ngàn con vịt trời với tên gọi <strong style="color: var(--primary-color);">"Vịt trời Bầu Mây"</strong>, trở thành một "thương hiệu" nổi tiếng cung cấp cho thị trường trên cả nước.
                </p>
                
                <img src="https://www.baobariavungtau.com.vn/dataimages/201503/original/images1143830_adgdag.jpg" 
                     alt="Anh Lâm Ngọc Nhâm với đàn vịt trời tại trang trại" 
                     style="max-width: 100%; height: auto; margin: 20px 0; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
                
                <p style="color: var(--text-light); font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px; font-style: italic; text-align: center;">
                    Vịt trời bay rất giỏi nhưng được thuần dưỡng từ nhỏ nên không con nào bỏ đi. Trong ảnh: Anh Lâm Ngọc Nhâm với đàn vịt trời tại trang trại.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Trang trại Vịt trời Bầu Mây của anh Nhâm nằm trên một khu đất trống với những hồ nước nhỏ bao quanh, thuộc địa phận thôn Suối Bang, xã Thắng Hải, huyện Hàm Tân (tỉnh Bình Thuận). Đến trang trại vịt nhưng tuyệt nhiên không nghe thấy một tiếng vịt kêu mà thay vào đó là âm thanh du dương của những bản nhạc giao hưởng phát ra từ chiếc loa thùng nhỏ được đặt ngay sát chuồng. Thấy chúng tôi tỏ vẻ ngạc nhiên, anh Nhâm cười, ví von: <strong style="color: var(--primary-color);">"Giống như con người, vịt trời cũng cần được thư giãn. Chỉ cần được nghe nhạc giao hưởng hay tiếng sáo trúc là chúng ngoan, không kêu nữa"</strong>. Hàng ngày, cứ 6 giờ tối, sau khi nghe hiệu lệnh phát ra từ chiếc trống đặt cách hồ khoảng 100m, hàng ngàn con vịt trời lại rục rịch kéo nhau về chuồng. Anh Nhâm cho chúng tôi xem lại đoạn video quay cảnh gọi vịt về chuồng bằng kèn tây. Người đi đến đâu cả đàn vịt theo sau đến đó. Vịt trời bay rất giỏi nhưng ngay từ nhỏ anh Nhâm đã huấn luyện và thuần dưỡng nên chưa có con nào bỏ đi.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Quê gốc Tuyên Quang, năm 1988 anh Nhâm theo gia đình vào sinh sống và lập nghiệp ở BR-VT. Với tính cần cù, chịu thương, chịu khó, anh cùng gia đình làm nhiều nghề, từ trồng các loại cây ăn quả như sầu riêng, chôm chôm đến mở trang trại chăn nuôi heo, gà, tuy nhiên hiệu quả kinh tế không được như mong muốn. Năm 2007, sau khi được những người thợ rừng mời thưởng thức món thịt vịt trời nướng thơm lừng, béo ngậy, anh quyết định đặt mua 15 con vịt trời lớn, nhỏ về nuôi với giá 200.000 - 600.000 đồng/con và nhân giống thành công. Từ đó anh cũng lấy luôn tên địa danh nơi mình sinh sống làm thương hiệu là <strong style="color: var(--primary-color);">"Vịt trời Bầu Mây"</strong>.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Hiện tại, trang trại của anh Nhâm nuôi <strong style="color: var(--primary-color);">6.000 con vịt bố mẹ</strong> gồm hai loại: mỏ vàng, chân đỏ và một loại vịt đầu xanh, trong đó có 5.000 con vịt mái và 1.000 con vịt trống. Mỗi ngày anh Nhâm thu khoảng 2.500 trứng, ấp ra được 2.000-2.250 con vịt giống. Quan sát trang trại nuôi vịt trời chúng tôi thấy, mỗi chuồng được chia làm nhiều ô, mỗi ô rộng khoảng 15m2, chứa khoảng 30-50 con. "Trong mỗi ô đều có một bồn nước nhỏ và được thay nước thường xuyên để vịt không bị mắc bệnh. Ngay từ lúc vịt còn nằm trong trứng, tôi đã tập cho chúng nghe những bản nhạc không lời nhẹ nhàng. Sau khi vịt con được một tháng tuổi, lại được tập chạy bộ, xuống nước để quen dần với môi trường mới", anh Nhâm cho biết thêm.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Để thịt vịt trời được thơm ngon, anh tận dụng phần đất trống dưới tán những gốc tiêu, cao su để trồng đinh lăng, các cây họ sâm, sau đó chế biến thành thức ăn cho vịt. Anh Nhâm chia sẻ: <strong style="color: var(--primary-color);">"Vịt trời được ăn những loại hương liệu này thịt sẽ thơm, săn chắc, bổ dưỡng, kết hợp với đi bộ 2 lần/ngày để cho con vịt khỏe hơn, không bị bệnh tật"</strong>.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    Mô hình chăn nuôi vịt trời của anh Nhâm được nhiều người biết đến bởi cách chăm sóc, huấn luyện độc đáo, chất lượng thịt thơm ngon. Hiện sản phẩm vịt trời Bầu Mây được khách hàng ở nhiều tỉnh, thành trong cả nước biết đến. Từ năm 2008 đến nay, mỗi tháng anh Nhâm xuất đi TP. Hồ Chí Minh, Hà Nội, Đồng Nai, Tây Ninh, Quy Nhơn, Đà Nẵng… hàng chục ngàn con vịt trời lấy thịt. Sản phẩm vịt trời Bầu Mây còn được đặt chi nhánh tại TP. Đà Nẵng và tỉnh Ninh Bình. Ngoài ra, nhiều nhà hàng, khách sạn tại Vũng Tàu cũng đặt mua.
                </p>
                
                <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.8; margin-bottom: 16px;">
                    <strong style="color: var(--primary-color);">Vịt giống được bán từ 100.000-120.000 đồng/con, vịt xuất bán lấy thịt có giá 300.000 đồng/con.</strong> Trừ tất cả chi phí, mỗi tháng anh Nhâm thu khoảng <strong style="color: var(--primary-color);">3-3,5 tỷ đồng</strong> từ bán vịt giống và vịt lấy thịt. "Những năm trước đây tôi nuôi gà, heo thường xuyên bị dịch bệnh mà giá cả lên xuống thất thường. Từ ngày chuyển sang nuôi vịt trời ổn định hơn, được khách hàng ưa chuộng, đời sống kinh tế cũng khấm khá hơn" - anh Nhâm cho biết.
                </p>
                
                <p style="color: var(--primary-color); font-weight: 700; text-align: center; font-size: 1.1rem; margin-top: 30px; text-transform: uppercase;">
                    Ước Mơ Của Bạn – Hạnh Phúc Bầu Mây
                </p>
            </div>
            `;
        } else if (activeTabId === 'yam') {
            html += '<div class="about-section"><h2>Giống Củ Hoài Sơn Bầu Mây</h2><p>Hoài sơn Bầu Mây được chứng nhận đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam. Được trồng theo phương pháp hữu cơ gia truyền qua hơn 16 năm, hoài sơn Bầu Mây giàu dinh dưỡng, tốt cho sức khỏe và được bảo quản tốt.</p></div>';
        } else if (activeTabId === 'ginseng') {
            html += '<div class="about-section"><h2>Sâm Đinh Lăng</h2><p>Sâm Đinh Lăng được trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ. Sâm Đinh Lăng là thảo dược quý, có tác dụng bổ khí, tăng sức đề kháng và tốt cho sức khỏe nói chung.</p></div>';
        }

        html += '</div></div>';
        content.innerHTML = html;
    }

    switchTab(idx) {
        this.activeTab = idx;
        this.render();
    }
}

const aboutManager = new AboutManager();