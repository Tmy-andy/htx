const appData = {
    info: {
        name: "CÔNG TY CỔ PHẦN NÔNG NGHIỆP THƯƠNG MẠI DU LỊCH BẦU MÂY",
        slogan: "Ước mơ của bạn - Hạnh phúc Bầu Mây",
        tagline: "Your dream BauMay's Well-being",
        phone: "0903 788 761",
        email: "contact@baumay.com",
        address: "Tỉnh Bà Rịa - Vũng Tàu, Việt Nam",
        website: "https://baumay.com",
        hotline: "0903 788 761"
    },

    contact: [
        { name: "Mrs. Hằng", phone: "0932 428 562", role: "Hỗ trợ trực tuyến" },
        { name: "Mr Nhâm", phone: "0945 910 589", role: "Hỗ trợ trực tuyến" }
    ],

    products: [
        { 
            id: "p1", 
            name: "Combo Quà Tặng 3 Sản Phẩm Tiêu Thần Kỳ Bầu Mây", 
            category: "Combo", 
            image: "https://baumay.com/data/product/500/combo-3-san-pham-bau-may.jpg", 
            price: 490000, 
            unit: "combo", 
            description: "Combo 3 loại tiêu hữu cơ nguyên hạt chất lượng cao", 
            benefits: "Bộ ba tiêu chất lượng cao, tiện dùng",
            details: {
                specialty: "Hạt tiêu ăn liền từng hạt, không cần nấu, không cần xay",
                description: "Combo quà tặng 3 sản phẩm Tiêu Thần Kỳ Bầu Mây hữu cơ được sản xuất từ 100% hạt tiêu nguyên chất trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ, đảm bảo tiêu chí 'Không Màu Tổng Hợp, Không Chất Bảo Quản, Không Tạp Chất'",
                about: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Đặc biệt piperin chống oxy hóa, bảo vệ gan, chống viêm, chống ung thư, trầm cảm, giảm đau. Việc ăn liền từng hạt tiêu mà không cần giã, không cần rang, không cần xay, khi ăn liền cùng thức ăn giúp ăn ngon hơn, kích thích việc ăn uống, tiêu hóa tốt, tăng cường sức đề kháng, thải độc tố, kháng khuẩn.",
                usage: "Hạt tiêu ăn liền từng hạt, không cần nấu, không cần xay dùng kèm với tất cả các món ăn, đặc biệt thích hợp với các món ăn có nước",
                benefits_detail: [
                    "Kích thích hệ tiêu hóa, giảm tình trạng chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm thiểu các vấn đề về răng lợi",
                    "Duy trì vóc dáng: vỏ hạt tiêu giúp cơ thể giảm lượng calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giúp giảm các bệnh về khớp",
                    "Gia vị khử đi mùi tanh, giúp món ăn dậy mùi",
                    "Không buồn ngủ, giúp tỉnh táo khi làm việc và lái xe"
                ],
                advantages: [
                    "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018.",
                    "Sản phẩm cam kết không chứa dư lượng thuốc bảo vệ thực vật. Mỗi hạt tiêu đều được người nông dân chọn lựa kỹ lưỡng nhằm mang đến sản phẩm có chất lượng tốt nhất tới tay người sử dụng."
                ]
            }
        },
        { 
            id: "p2", 
            name: "Bún Tươi Hoài Sơn 200g", 
            category: "Bun", 
            image: "https://baumay.com/data/product/500/bun-tuoi-hoai-son-200-gr.jpg", 
            price: 52500, 
            unit: "200g", 
            description: "Bún hoài sơn tươi hữu cơ ăn liền", 
            benefits: "Không cần chế biến, tiện lợi, bổ dưỡng",
            details: {
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây và Củ Hoài Sơn Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ Việt Nam theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA của Hoa Kỳ.",
                description: "Bún tươi Hoài sơn hữu cơ được sản xuất từ 100% nguyên liệu trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ, đảm bảo tiêu chí 'Không phụ gia, Không chất bảo quản, Không phẩm màu'. Cùng công nghệ sản xuất bún gạo dựa trên dây chuyền khép kín hiện đại, hạn chế sự tiếp xúc của con người, đảm bảo sản phẩm hợp vệ sinh theo tiêu chuẩn quốc tế.",
                usage: "Ăn liền Bún tươi bằng cách cho bún vào nước sôi và nấu khoảng 6 phút khi ăn rất thơm, ngon, dai mềm. Nấu các món nước bằng cách cho bún vào nước dùng và nấu sôi khoảng 6 phút sợi bún dẻo dai, thơm ngon. Nấu món xào và chế biến món khác: Chần nước sôi 3 phút, sau đó làm mát bằng nước lạnh khoảng 1 phút trước khi xào, nấu món ăn theo khẩu vị.",
                cooking: "Bún hoài sơn hữu cơ dễ sử dụng và có thể chế biến nhiều món ăn khác nhau. Từ món nước như lẩu cho đến món khô như bún xào. Đặc biệt phù hợp cho mọi đối tượng, bạn có thể sử dụng trong các món mặn, món chay tùy thích. Món nước: Kết hợp với nước dùng từ thịt gà, xương heo hoặc hải sản, thêm bún và các loại rau, thịt theo sở thích. Hoặc dùng để thay thế bún tươi, mì trứng hoặc mì gói khi ăn cùng với các món lẩu. Món bún khô: Nấu chín bún và dùng trực tiếp với các nguyên liệu đã được nấu chín.",
                benefits_detail: [
                    "Bổ ngũ tạng và mạnh gân xương trong đông y",
                    "Là một trong những thảo dược quý cho bệnh nhân tiểu đường",
                    "Tốt cho những người mới ốm dậy, người suy nhược cơ thể",
                    "Giàu dinh dưỡng hơn nhiều so với bún thường, bổ sung vi chất và vitamin B1",
                    "Thích hợp với người ăn chay, giảm cân, dưỡng sinh, ăn kiêng",
                    "Phù hợp với những người bệnh tiểu đường, bệnh gút, giúp thanh lọc gan, giảm béo, đẹp da",
                    "Rất tốt cho người thấp khớp, ngăn ngừa bệnh ung thư",
                    "Giúp ổn định đường huyết cho người bệnh tiểu đương, người suy thận",
                    "Giúp mau lành vết thương cho những người sau phẫu thuật mổ",
                    "Phù hợp với người ăn eat clean, tốt cho sức khỏe và ít chất béo"
                ],
                storage: "Bảo quản nơi khô ráo, thoáng mát, đậy kín sau khi mở bao",
                advantages: [
                    "Sản phẩm hữu cơ được chứng nhận tại Việt Nam",
                    "Công nghệ sản xuất dây chuyền khép kín hiện đại, hạn chế tiếp xúc con người",
                    "Đảm bảo vệ sinh theo tiêu chuẩn quốc tế"
                ]
            }
        },
        { 
            id: "p3", 
            name: "Hoài Sơn Sấy Lát Hữu Cơ 200g", 
            category: "Hoài Sơn", 
            image: "https://baumay.com/data/product/200/hoai-son-say-lat-huu-co-200-gr.jpg", 
            price: 55000, 
            unit: "200g", 
            description: "Hoài sơn sấy khô, bảo quản tốt", 
            benefits: "Dễ bảo quản, giữ nguyên dưỡng chất",
            details: {
                about: "Củ Hoài Sơn Bầu Mây được chứng nhận đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam, do ông Lâm Ngọc Nhâm nhà khoa học của nhà nông nghiên cứu trực tiếp qua hơn 16 năm trồng theo phương pháp hữu cơ gia truyền và theo tiêu chuẩn ISO 22000:2018.",
                otherNames: "Hoài Sơn còn có tên gọi khác là Sơn dược, khoai mài, củ mài, chính hoài",
                harvesting: "Hoài sơn tươi Bầu Mây được trồng và thu hoạch sau 7–12 tháng. Hiện tại thời điểm thu hoạch quanh năm để cung ứng củ tươi ra thị trường cũng như chế biến thành phẩm dạng sấy lát bằng điện, nhiệt độ sấy là 65 độ, thời gian sấy là 12–14 tiếng.",
                usage: "Cần ngâm nước trước cho tươi lại rồi mới nấu thành các món ăn khác nhau. Có thể nấu với xương hoặc nấu canh, nấu cháo với thịt sẽ tạo nên những món ăn ngon miệng và bổ dưỡng. Có thể hấp ăn, củ rất bở, thơm ngon, béo ngậy.",
                ingredients: "100% Hoài sơn sấy hữu cơ",
                benefits_detail: [
                    "Bổ ngũ tạng và mạnh gân xương trong đông y",
                    "Là một trong những thảo dược quý cho bệnh nhân tiểu đường",
                    "Tốt cho những người mới ốm dậy, người suy nhược cơ thể",
                    "Đặc biệt tốt cho người gầy yếu, suy nhược cơ thể",
                    "Không lo béo, giúp ổn định đường huyết cho người bệnh tiểu đường",
                    "Tăng cường sức khỏe cho người suy thận",
                    "Giúp mau lành vết thương cho những người sau phẫu thuật mổ",
                    "Rất tốt cho xương khớp, ngăn ngừa bệnh ung thư",
                    "Giúp ăn ngon miệng cho những người bệnh cần chăm sóc"
                ],
                storage: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, đậy kín túi sau khi mở. Nên sử dụng sản phẩm trong vòng 30 ngày từ khi mở nắp.",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Sản phẩm hữu cơ được chứng nhận đầu tiên tại Việt Nam",
                    "Hoài sơn sấy lát không chứa lưu huỳnh",
                    "Được nghiên cứu và trồng theo phương pháp hữu cơ gia truyền hơn 16 năm"
                ],
                warning: "Không sử dụng sản phẩm khi đã hết hạn sử dụng hoặc có dấu hiệu bất thường"
            }
        },
        { 
            id: "p4", 
            name: "Nước Ngậm Răng Miệng Bầu Mây 120ml", 
            category: "Nước", 
            image: "https://baumay.com/data/product/500/nuoc-ngam-rang-mieng-bau-may-120-ml.jpg", 
            price: 79000, 
            unit: "120ml", 
            description: "Nước ngậm từ gia vị Bầu Mây", 
            benefits: "Tốt cho sức khỏe miệng",
            details: {
                highlights: [
                    "Diệt khuẩn",
                    "Hỗ trợ trị sâu răng và viêm răng lợi",
                    "Sạch thơm sau 5 phút ngậm"
                ],
                ingredients: "Tiêu Bầu Mây, nhụy tiêu, Hoài sơn Bầu Mây, rượu Hoài sơn Bầu Mây, cam thảo nam",
                benefits_detail: [
                    "Làm sạch miệng, khử mùi hôi miệng",
                    "Giúp kháng khuẩn, góp phần hỗ trợ giảm viêm, trị sâu răng, đau nhức răng",
                    "Giảm mảng bám cao răng, viêm nướu (lợi), viêm quanh răng",
                    "Hỗ trợ nhiệt miệng, chảy máu chân răng, giúp răng chắc khỏe",
                    "Làm dịu khoang miệng, giảm triệu chứng sưng đỏ, loét miệng",
                    "Giảm viêm lợi, chảy máu chân răng"
                ],
                usage: "Ngày súc miệng 1-3 lần. Mỗi lần 5-10 ml. Ngậm súc miệng khoảng 10-15 phút giúp diệt khuẩn, hỗ trợ trị viêm nhiễm răng lợi và thơm miệng sạch sẽ",
                special_usage: [
                    "SÂU RĂNG: ngày ngậm 2-3 lần, mỗi lần từ 20-30 phút",
                    "VIÊM HỌNG: Kết hợp ngậm - khò nhiều lần rồi nhổ bỏ. Không nên súc miệng lại bằng nước sau khi nhổ"
                ],
                storage: "Nơi khô mát, tránh ánh nắng trực tiếp",
                expiryDate: "5 năm kể từ ngày sản xuất",
                warning: "Sản phẩm không thích hợp cho người dị ứng với rượu",
                special: "Nước súc miệng thích hợp cho những người hút thuốc lá và viêm răng miệng, sử dụng mỗi ngày sạch thơm miệng hết viêm"
            }
        },
        { 
            id: "p5", 
            name: "Tiêu Xanh Giòn Hữu Cơ 20g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-xanh-gion-huu-co-25g.jpg", 
            price: 139000, 
            unit: "20g", 
            description: "Tiêu xanh tươi, cay nhẹ", 
            benefits: "Giữ màu xanh, mùi thơm tươi",
            details: {
                specialty: "Cay cấp độ 6 với độ cay bùng nổ, ăn liền giòn tan cay sảng khoái",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Đặc biệt piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau. Việc ăn liền từng hạt tiêu mà không cần giã, không cần rang, không cần xay, khi ăn liền cùng thức ăn giúp ăn ngon hơn, kích thích việc ăn uống, tiêu hóa tốt, tăng cường sức đề kháng, thải độc tố, kháng khuẩn.",
                ingredients: "Tiêu, muối, chanh",
                usage: "Tiêu ăn liền từng hạt không cần xay, dùng ăn kèm món ăn, là món khai vị. Đây là một cách ăn mới giữ nguyên vị ngon tinh túy nhất của hạt tiêu.",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm tình trạng chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm thiểu các vấn đề về răng lợi",
                    "Duy trì vóc dáng: vỏ hạt tiêu giúp cơ thể giảm lượng calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giúp giảm các bệnh về khớp",
                    "Không buồn ngủ, giúp tỉnh táo khi làm việc và lái xe"
                ],
                expiryDate: "24 tháng kể từ ngày sản xuất",
                notes: "Tiêu xanh giòn có muối nên khi nhìn vào có màu trắng của bào tử muối, giúp Tiêu Bầu Mây thơm ngon hơn",
                advantages: [
                    "Chứng nhận Nông Nghiệp Hữu Cơ Việt Nam",
                    "Không chứa dư lượng thuốc bảo vệ thực vật",
                    "Mỗi hạt tiêu được chọn lựa kỹ lưỡng"
                ]
            }
        },
        { 
            id: "p6", 
            name: "Tiêu Đen Hữu Cơ Hạt 50g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-den-huu-co-hat-50gr.jpg", 
            price: 40000, 
            unit: "50g", 
            description: "Tiêu đen nguyên hạt cao cấp", 
            benefits: "Mùi thơm đậm đà, vị cay đủ",
            details: {
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                usage: "Xem chi tiết trên bao bì sản phẩm",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Chứng nhận Nông Nghiệp Hữu Cơ Việt Nam",
                    "Không chứa dư lượng thuốc bảo vệ thực vật",
                    "Mỗi hạt tiêu được chọn lựa kỹ lưỡng"
                ]
            }
        },
        { 
            id: "p7", 
            name: "Tiêu Đỏ Hữu Cơ Hạt 50g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-do-huu-co-hat-50gr.jpg", 
            price: 55000, 
            unit: "50g", 
            description: "Tiêu đỏ chín hoàn toàn", 
            benefits: "Vị cay mạnh, hương thơm đặc biệt",
            details: {
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                usage: "Xem chi tiết trên bao bì sản phẩm",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Chứng nhận Nông Nghiệp Hữu Cơ Việt Nam",
                    "Không chứa dư lượng thuốc bảo vệ thực vật",
                    "Mỗi hạt tiêu được chọn lựa kỹ lưỡng"
                ]
            }
        },
        { 
            id: "p8", 
            name: "Combo Quà Tặng 5 Sản Phẩm Tiêu Thần Kỳ Bầu Mây", 
            category: "Combo", 
            image: "https://baumay.com/data/product/500/combo-5-san-pham-bau-may.jpg", 
            price: 900000, 
            unit: "combo", 
            description: "Combo 5 loại tiêu hữu cơ nguyên hạt chất lượng cao", 
            benefits: "Bộ sưu tập tiêu đầy đủ",
            details: {
                description: "Combo quà tặng 5 sản phẩm Tiêu Thần Kỳ Bầu Mây hữu cơ được sản xuất từ 100% hạt tiêu nguyên chất trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ, đảm bảo tiêu chí 'Không Màu Tổng Hợp, Không Chất Bảo Quản, Không Tạp Chất'",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Đặc biệt piperin chống oxy hóa, bảo vệ gan, chống viêm, chống ung thư, trầm cảm, giảm đau. Việc ăn liền từng hạt tiêu mà không cần giã, không cần rang, không cần xay, khi ăn liền cùng thức ăn giúp ăn ngon hơn, kích thích việc ăn uống, tiêu hóa tốt, tăng cường sức đề kháng, thải độc tố, kháng khuẩn.",
                usage: "Hạt tiêu ăn liền từng hạt, không cần nấu, không cần xay dùng kèm với tất cả các món ăn, đặc biệt thích hợp với các món ăn có nước",
                expiryDate: "18 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Kích thích hệ tiêu hóa, giảm tình trạng chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm thiểu các vấn đề về răng lợi",
                    "Duy trì vóc dáng: vỏ hạt tiêu giúp cơ thể giảm lượng calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giúp giảm các bệnh về khớp",
                    "Gia vị khử đi mùi tanh, giúp món ăn dậy mùi",
                    "Không buồn ngủ, giúp tỉnh táo khi làm việc và lái xe"
                ],
                advantages: [
                    "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018.",
                    "Sản phẩm cam kết không chứa dư lượng thuốc bảo vệ thực vật. Mỗi hạt tiêu được chọn lựa kỹ lưỡng nhằm mang đến sản phẩm có chất lượng tốt nhất"
                ]
            }
        },
        { 
            id: "p9", 
            name: "Tiêu Sọ Hữu Cơ 50g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-so-huu-co-hat-50gr.jpg", 
            price: 50000, 
            unit: "50g", 
            description: "Tiêu sọ tuyển lựa", 
            benefits: "Chất lượng cao, giá tốt",
            details: {
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                usage: "Xem chi tiết trên bao bì sản phẩm",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Chứng nhận Nông Nghiệp Hữu Cơ Việt Nam",
                    "Không chứa dư lượng thuốc bảo vệ thực vật",
                    "Mỗi hạt tiêu được chọn lựa kỹ lưỡng"
                ]
            }
        },
        { 
            id: "p10", 
            name: "Bún Hoài Sơn Gạo Lứt 200g", 
            category: "Bún", 
            image: "https://baumay.com/data/product/500/bun-hoai-son-gao-lut-200g.jpg", 
            price: 75000, 
            unit: "200g", 
            description: "Bún hoài sơn từ gạo lứt hữu cơ", 
            benefits: "Giàu chất xơ, bổ dưỡng",
            details: {
                description: "Bún Hoài sơn gạo lứt hữu cơ được sản xuất từ 100% nguyên liệu trồng tại vùng nguyên liệu Bầu Mây theo tiêu chuẩn hữu cơ, đảm bảo tiêu chí 'Không phụ gia, Không chất bảo quản, Không phẩm màu'. Cùng công nghệ sản xuất bún dựa trên dây chuyền khép kín hiện đại.",
                ingredients: "Hoài sơn, gạo lứt",
                benefits_detail: [
                    "Chứa nhiều chất dinh dưỡng: chứa nhiều chất xơ, protein, vitamin và khoáng chất hơn so với bún gạo trắng",
                    "Chứa khoáng chất tốt như: Mangan, Selen, Magie",
                    "Giảm Cholesterol",
                    "Giảm thiểu nguy cơ mắc tiểu đường Tuýp 2",
                    "Góp phần bảo vệ trẻ em hạn chế bệnh hen suyễn",
                    "Giảm nguy cơ bệnh tim mạch do chứa nhiều chất xơ và protein",
                    "Giảm cân dễ dàng",
                    "Tăng cường sức khỏe",
                    "Phù hợp với người bệnh tiểu đường, bệnh gút, thanh lọc gan, giảm béo, đẹp da",
                    "Phù hợp ăn eat clean, tốt cho sức khỏe"
                ],
                usage: "Ăn liền bằng cách cho bún vào nước sôi và nấu khoảng 6 phút. Nấu các món nước bằng cách cho bún vào nước dùng và nấu sôi khoảng 6 phút. Nấu món xào: Chần nước sôi 3 phút, làm mát bằng nước lạnh 1 phút trước khi xào",
                cooking: "Bún dễ sử dụng và có thể chế biến nhiều món ăn khác nhau. Từ món nước như lẩu cho đến món khô như bún xào. Món nước: Kết hợp với nước dùng từ thịt gà, xương heo hoặc hải sản. Món bún khô: Nấu chín bún và dùng trực tiếp với các nguyên liệu đã được nấu chín như bún thịt nướng, bún thịt xào.",
                storage: "Nơi khô ráo, thoáng mát, đậy kín sau khi mở bao"
            }
        },
        { 
            id: "p11", 
            name: "Bột Hoài Sơn Hữu Cơ 200g", 
            category: "Bột", 
            image: "https://baumay.com/data/product/500/bot-hoai-son-huu-co-200-g.jpg", 
            price: 180000, 
            unit: "200g", 
            description: "Hoài sơn xay thành bột mịn", 
            benefits: "Dễ sử dụng, nấu ăn tiện lợi",
            details: {
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây và Củ Hoài Sơn Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ Việt Nam theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018.",
                ingredients: "100% Bột Hoài sơn hữu cơ",
                benefits_detail: [
                    "Dùng bổ ngũ tạng, mạch gân xương",
                    "Tốt cho người suy nhược cơ thể, trẻ em suy dinh dưỡng",
                    "Tốt cho phụ nữ mang thai và sau khi sinh",
                    "Tốt cho người lớn tuổi, người mới ốm dậy",
                    "Tốt cho người bệnh tiêu đường",
                    "Dùng cho trẻ ăn dặm",
                    "Phụ nữ dùng làm mặt nạ giúp da trắng hồng tự nhiên",
                    "Thích hợp cho người dùng chay"
                ],
                usage: "Cách pha uống: 3 muỗng (khoảng 20g) vào 150ml nước đun sôi để nguội, thêm 1 muỗng đường hoặc mật ong, khuấy đều hòa tan. Cho thêm đá nếu uống lạnh.",
                storage: "Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, đậy kín túi sau khi mở",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Sản phẩm hữu cơ chứng nhận",
                    "Sữa thực vật 100% không chứa sữa bò"
                ],
                warning: "Không sử dụng sản phẩm khi đã hết hạn sử dụng, nên sử dụng trong vòng 30 ngày từ khi mở túi"
            }
        },
        { 
            id: "p12", 
            name: "Tiêu Không Hạt Hữu Cơ 15g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-khong-hat-huu-co.jpg", 
            price: 70000, 
            unit: "15g", 
            description: "Tiêu không hạt, cay cấp độ 5", 
            benefits: "Sạch sẽ, dùng tiện lợi",
            details: {
                specialty: "Cay cấp độ 5 với độ cay giòn đặc biệt sảng khoái",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                awards: "Sản phẩm đạt chứng nhận sản phẩm công nghiệp nông thôn tiêu biểu cấp huyện năm 2020; Cấp tỉnh năm 2020, 2022; Cấp khu vực năm 2020, 2022; Cấp Quốc gia năm 2023. Top 100 'Hàng hóa, dịch vụ người tiêu dùng tin cậy năm 2022'.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau.",
                ingredients: "Tiêu, muối",
                usage: "Thưởng thức trực tiếp từng hạt tiêu không cần xay, như món khai vị tinh tế. Ngậm hoặc nhai trực tiếp giúp khơi mở vị giác, cảm giác sảng khoái, tỉnh táo. Rắc vài hạt vào ly bia hoặc rượu tạo trải nghiệm thưởng thức độc đáo. Dùng ăn kèm các món ăn cao cấp để tăng chiều sâu hương vị.",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm vấn đề về răng lợi",
                    "Duy trì vóc dáng: giảm calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giảm các bệnh về khớp",
                    "Không buồn ngủ, tỉnh táo khi làm việc và lái xe"
                ],
                notes: "Tiêu không hạt có muối tự nhiên nên có màu trắng của bào tử muối, giúp thơm ngon hơn"
            }
        },
        { 
            id: "p13", 
            name: "Tiêu Xanh Muối Hữu Cơ 35g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-xanh-muoi-huu-co-50g.jpg", 
            price: 49500, 
            unit: "35g", 
            description: "Tiêu xanh tẩm muối, cay cấp độ 3", 
            benefits: "Ăn liền, tiện lợi",
            details: {
                specialty: "Cay cấp độ 3 với độ cay nồng nàn, cay dẻo vị chanh tươi vị ngon truyền thống",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau.",
                ingredients: "Tiêu, muối, chanh",
                usage: "Tiêu ăn liền từng hạt không cần xay, dùng ăn kèm món ăn, là món khai vị",
                expiryDate: "18 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm vấn đề về răng lợi",
                    "Duy trì vóc dáng: giảm calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giảm các bệnh về khớp",
                    "Không buồn ngủ, tỉnh táo khi làm việc"
                ],
                notes: "Tiêu xanh muối có muối tự nhiên nên có màu trắng của bào tử muối, có thể bảo quản lạnh sau khi mở nắp"
            }
        },
        { 
            id: "p14", 
            name: "Tiêu Tươi Muối Hữu Cơ 35g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-tuoi-muoi-huu-co-50g.jpg", 
            price: 55000, 
            unit: "35g", 
            description: "Tiêu tươi muối, cay cấp độ 2", 
            benefits: "Vị tiêu tươi, lạ miệng",
            details: {
                specialty: "Cay cấp độ 2 với độ cay nhẹ nhàng, tươi giòn, cay mềm, tự nhiên",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau.",
                ingredients: "Tiêu, muối",
                usage: "Tiêu ăn liền từng hạt không cần xay, dùng ăn kèm món ăn, là món khai vị",
                expiryDate: "18 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm vấn đề về răng lợi",
                    "Duy trì vóc dáng: giảm calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giảm các bệnh về khớp",
                    "Không buồn ngủ, tỉnh táo khi làm việc"
                ],
                notes: "Tiêu tươi muối có muối tự nhiên nên có màu trắng của bào tử muối, có thể bảo quản lạnh sau khi mở nắp"
            }
        },
        { 
            id: "p15", 
            name: "Tiêu Sữa Hữu Cơ 35g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-sua-huu-co-50g.jpg", 
            price: 97800, 
            unit: "35g", 
            description: "Tiêu sữa, cay cấp độ 1", 
            benefits: "Vị tiêu mới lạ, béo mềm",
            details: {
                specialty: "Cay cấp độ 1 với độ cay dịu dàng, tươi non, giòn mềm, đậm đà",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                awards: "Sản phẩm đạt chứng nhận sản phẩm công nghiệp nông thôn tiêu biểu cấp huyện năm 2020; Cấp tỉnh năm 2020, 2022; Cấp khu vực năm 2020, 2022; Cấp Quốc gia năm 2023. Top 100 'Hàng hóa, dịch vụ người tiêu dùng tin cậy năm 2022'.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau.",
                ingredients: "Tiêu, muối",
                usage: "Tiêu ăn liền từng hạt không cần xay, dùng ăn kèm món ăn, là món khai vị",
                expiryDate: "18 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm vấn đề về răng lợi",
                    "Duy trì vóc dáng: giảm calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giảm các bệnh về khớp",
                    "Không buồn ngủ, tỉnh táo khi làm việc"
                ],
                notes: "Tiêu sữa có muối tự nhiên nên có màu trắng của bào tử muối, có thể bảo quản lạnh sau khi mở nắp"
            }
        },
        { 
            id: "p16", 
            name: "Tiêu Một Nắng Hữu Cơ 35g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-mot-nang-huu-co-50g.jpg", 
            price: 89000, 
            unit: "35g", 
            description: "Tiêu một nắng, cay cấp độ 4", 
            benefits: "Ngọt ngào, cay vừa phải",
            details: {
                specialty: "Cay cấp độ 4 với độ cay đậm đà, tươi dẻo, cay mềm, món khai vị đậm đà tự nhiên",
                about: "Bầu Mây là đơn vị đầu tiên và duy nhất tại Việt Nam chủ động vùng nguyên liệu, Tiêu Bầu Mây được chứng nhận Nông Nghiệp Hữu Cơ theo phương pháp hữu cơ gia truyền. Chế biến theo tiêu chuẩn an toàn thực phẩm ISO 22000:2018, chứng nhận tiêu chuẩn FDA.",
                awards: "Sản phẩm đạt chứng nhận sản phẩm công nghiệp nông thôn tiêu biểu cấp huyện năm 2020; Cấp tỉnh năm 2020, 2022; Cấp khu vực năm 2020, 2022; Cấp Quốc gia năm 2023. Top 100 'Hàng hóa, dịch vụ người tiêu dùng tin cậy năm 2022'.",
                pepperinBenefits: "Tiêu là vua của gia vị, trong tiêu có nhiều thành phần như Vitamin, tinh dầu, piperin, chất béo, tinh bột, chanvixin. Piperin hạn chế oxy hóa, bảo vệ gan, hạn chế viêm, hạn chế ung thư, trầm cảm, giảm đau.",
                ingredients: "Tiêu, muối",
                usage: "Tiêu ăn liền từng hạt không cần xay, dùng ăn kèm món ăn, là món khai vị",
                expiryDate: "18 tháng kể từ ngày sản xuất",
                benefits_detail: [
                    "Tốt hệ tiêu hóa, giảm chướng bụng, đầy hơi, khó chịu dạ dày",
                    "Tốt cho hệ hô hấp, giảm vấn đề về răng lợi",
                    "Duy trì vóc dáng: giảm calo dư thừa, tăng bài tiết mồ hôi",
                    "Giúp giảm đau, giảm ho, trừ đàm",
                    "Giảm các bệnh về khớp",
                    "Không buồn ngủ, tỉnh táo khi làm việc"
                ],
                notes: "Tiêu một nắng có muối tự nhiên nên có màu trắng của bào tử muối, có thể bảo quản lạnh sau khi mở nắp"
            }
        },
        { 
            id: "p17", 
            name: "Hoài Sơn Sấy Lát Hữu Cơ 500g", 
            category: "Hoài Sơn", 
            image: "https://baumay.com/data/product/500/hoai-son-say-lat-huu-co-500g.jpg", 
            price: 237500, 
            unit: "500g", 
            description: "Hoài sơn sấy lát loại lớn 500g", 
            benefits: "Bảo quản lâu, dinh dưỡng đầy đủ",
            details: {
                about: "Củ Hoài Sơn Bầu Mây được chứng nhận đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam, do ông Lâm Ngọc Nhâm nhà khoa học nghiên cứu trực tiếp qua hơn 16 năm trồng theo phương pháp hữu cơ gia truyền và theo tiêu chuẩn ISO 22000:2018.",
                otherNames: "Hoài Sơn còn có tên gọi khác là Sơn dược, khoai mài, củ mài, chính hoài",
                harvesting: "Hoài sơn tươi Bầu Mây được trồng và thu hoạch sau 7–12 tháng. Hiện tại thời điểm thu hoạch quanh năm, chế biến thành phẩm dạng sấy lát bằng điện, nhiệt độ sấy là 65 độ, thời gian sấy là 12–14 tiếng.",
                ingredients: "100% Hoài sơn sấy hữu cơ",
                usage: "Cần ngâm nước trước cho tươi lại rồi mới nấu thành các món ăn khác nhau. Có thể nấu với xương hoặc nấu canh, nấu cháo với thịt sẽ tạo nên những món ăn ngon miệng và bổ dưỡng. Có thể hấp ăn, củ rất bở, thơm ngon, béo ngậy.",
                benefits_detail: [
                    "Bổ ngũ tạng và mạnh gân xương trong đông y",
                    "Là một trong những thảo dược quý cho bệnh nhân tiểu đường",
                    "Tốt cho những người mới ốm dậy, suy nhược cơ thể",
                    "Không lo béo, giúp ổn định đường huyết",
                    "Tăng cường sức khỏe cho người suy thận",
                    "Giúp mau lành vết thương cho những người sau phẫu thuật",
                    "Rất tốt cho xương khớp, ngăn ngừa bệnh ung thư",
                    "Giúp ăn ngon miệng cho những người bệnh"
                ],
                storage: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, đậy kín túi sau khi mở",
                expiryDate: "24 tháng kể từ ngày sản xuất",
                advantages: [
                    "Sản phẩm hữu cơ được chứng nhận đầu tiên tại Việt Nam",
                    "Hoài sơn sấy lát không chứa lưu huỳnh",
                    "Được nghiên cứu và trồng hơn 16 năm"
                ],
                warning: "Không sử dụng khi đã hết hạn, nên sử dụng trong vòng 30 ngày từ khi mở nắp"
            }
        },
        { 
            id: "p18", 
            name: "Tiêu Xanh Bầu Mây", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/tieu-xanh-bau-may.png", 
            price: "-", 
            unit: "liên hệ", 
            description: "Tiêu xanh tươi từ vườn", 
            benefits: "Mùi thơm tự nhiên, cay nhẹ",
            details: {
                ingredients: "100% Tiêu xanh Bầu Mây",
                expiryDate: "30 ngày kể từ ngày sản xuất",
                description: "Được hái chọn lọc từ những chùm tiêu tốt nhất trên cây tiêu Bầu Mây. Chứa rất nhiều chất tốt, kích thích ăn uống và tốt cho tiêu hóa. Màu sắc xanh và hương vị cay hoàn toàn tự nhiên.",
                production: "Diện tích: 10 ha, Sản lượng: 820 tấn/năm",
                packaging: "Đóng gói an toàn: Gói 200g, túi dùng cho máy hút chân không",
                certifications: "ISO 22000:2005, GlobalG.A.P. số GGN: 4059883334760",
                images: [
                    "https://baumay.com/data/images/BAUMAY_CN%20Up%20Web-08%285%29.jpg",
                    "https://baumay.com/data/images/BAUMAY_CN%20Up%20Web_Ti%C3%AAu%20Xanh%20B%E1%BA%A7u%20M%C3%A2y.jpg"
                ],
                notes: "Sản phẩm tươi, cần liên hệ để đặt hàng"
            }
        },
        { 
            id: "p19", 
            name: "Muối Tiêu 100g", 
            category: "Tiêu", 
            image: "https://baumay.com/data/product/500/muoi-tieu-100-gr.jpg", 
            price: 29000, 
            unit: "100g", 
            description: "Hỗn hợp muối tiêu Bầu Mây", 
            benefits: "Tiện dùng, hương vị cân bằng",
            details: {
                slogan: "SẢN PHẨM ĐẶC SẢN BẦU MÂY: TỰ HÀO THƯƠNG HIỆU VIỆT NAM - CHẤT LƯỢNG QUỐC TẾ",
                packaging: "Hũ 100 gram",
                ingredients: "Tiêu xanh hữu cơ, muối, chanh",
                usage: "Dùng trực tiếp, ăn với cơm, bún, phở, lẩu. Sử dụng tốt cho sức khỏe, kích thích ăn uống và cải thiện hệ tiêu hóa.",
                storage: "Nơi thoáng mát, tránh ánh nắng trực tiếp. Bảo quản lạnh sau khi mở nắp"
            }
        }
    ],

    news: [
        { 
            id: "n1", 
            title: "HƯỚNG DẪN SỬ DỤNG HOÀI SƠN, TIÊU BẦU MÂY, CHẾ BIẾN MÓN ĂN", 
            date: "2024-03-15", 
            image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400", 
            excerpt: "Hướng dẫn chi tiết cách sử dụng hoài sơn, tiêu Bầu Mây và các cách chế biến món ăn",
            content: "Hoài sơn và tiêu Bầu Mây là những sản phẩm đa năng có thể sử dụng trong nhiều món ăn khác nhau.\n\n1. CỦ HOÀI SƠN:\n- Ăn tươi: Rửa sạch, có thể ăn sống hoặc chế biến thành các món như gỏi, xào, nấu canh\n- Lợi ích: Giàu vitamin C, chất xơ, khoáng chất\n- Cách bảo quản: Để trong tủ lạnh, có thể bảo quản được 2-3 tuần\n\n2. TIÊU BẦU MÂY:\n- Tiêu đen: Dùng để nêm nước sốt, thịt nướng, các món xào\n- Tiêu xanh: Vị cay nhẹ, thơm, dùng cho các món ăn nhẹ\n- Tiêu trắng: Dùng cho các món canh, sushi, dessert"
        },
        { 
            id: "n2", 
            title: "Chương Trình Khuyến Mãi Mã Dự Thưởng", 
            date: "2024-03-10", 
            image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=400", 
            excerpt: "Mã dự thưởng cho mỗi đơn hàng 5kg hoài sơn tươi Bầu Mây",
            content: "Bầu Mây khởi động chương trình khuyến mãi hấp dẫn dành cho khách hàng thân thiết:\n\n✓ Mua 5kg hoài sơn tươi: Tặng kèm mã dự thưởng\n✓ Chương trình diễn ra từ 20/03 - 10/04/2024\n✓ Mã dự thưởng có thể tích lũy để đổi quà\n\nQUÀ TẶNG:\n- Tiêu nguyên hạt (100g)\n- Voucher giảm giá cho lần mua tiếp theo\n- Các sản phẩm Bầu Mây khác"
        },
        { 
            id: "n3", 
            title: "Phó Chủ Tịch Nước Tặng Hoa Lâm Ngọc Nhâm", 
            date: "2024-02-28", 
            image: "https://images.unsplash.com/photo-1488459716781-6f3ee1e28e00?w=400", 
            excerpt: "Ghi nhận thành tích của Hợp tác xã Bầu Mây",
            content: "Phó Chủ Tịch Nước Đặng Thị Ngọc Thịnh đã tặng hoa ông Lâm Ngọc Nhâm - Chủ tịch HĐQT Hợp tác xã Nông nghiệp - Thương mại Dịch vụ Bầu Mây, ghi nhận sự nỗ lực và công lao của ông trong:\n\n• Phát triển nông nghiệp bền vững\n• Tạo việc làm cho cộng đồng địa phương\n• Nâng cao chất lượng sản phẩm nông sản\n• Đóng góp cho kinh tế địa phương\n\nBầu Mây là gương điển hình tiên tiến của tỉnh Bà Rịa - Vũng Tàu"
        },
        { 
            id: "n4", 
            title: "Thành Tựu Bầu Mây", 
            date: "2024-02-20", 
            image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400", 
            excerpt: "Những thành tựu nổi bật của Bầu Mây trong những năm qua",
            content: "Từ năm thành lập đến nay, Bầu Mây đã đạt được nhiều thành tựu nổi bật:\n\n✓ 20+ năm hoạt động trong lĩnh vực nông nghiệp\n✓ Sản phẩm được bán tại 100+ thị trường\n✓ 500+ nhân viên làm việc tại công ty\n✓ 10+ sản phẩm chính được phát triển\n✓ Chứng chỉ hữu cơ quốc tế\n✓ Tiêu chuẩn chất lượng ISO 22000:2018\n\nTầm nhìn: Trở thành thương hiệu nông sản được tin cậy hàng đầu tại Việt Nam"
        },
        { 
            id: "n5", 
            title: "Chương Trình Từ Thiện: Khám Bệnh & Phát Thuốc Miễn Phí", 
            date: "2024-02-15", 
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", 
            excerpt: "Bầu Mây tổ chức khám bệnh và phát thuốc miễn phí cho cộng đồng",
            content: "Bầu Mây tiếp tục duy trì các hoạt động từ thiện xã hội:\n\n🏥 Khám bệnh miễn phí:\n- Các bệnh thường gặp\n- Tư vấn sức khỏe từ các bác sĩ chuyên khoa\n- Dành cho người có hoàn cảnh khó khăn\n\n💊 Phát thuốc miễn phí:\n- Thuốc hạ sốt, thuốc tiêu hóa, vitamin bổ sung\n- Các loại thuốc cơ bản khác\n\n🎯 Mục đích: Hỗ trợ cộng đồng địa phương, nâng cao sức khỏe"
        }
    ],

    promotions: [
        { 
            id: "promo1", 
            title: "Giảm 15% Tiêu Bầu Mây", 
            discount: "15%", 
            description: "Giảm 15% cho tất cả sản phẩm tiêu (tiêu đen, trắng, xanh)", 
            period: "15/03 - 31/03/2024",
            details: "Áp dụng cho:\n- Tiêu nguyên hạt\n- Tiêu xay\n- Các sản phẩm tiêu khác"
        },
        { 
            id: "promo2", 
            title: "Mua Hoài Sơn, Tặng Tiêu", 
            discount: "Tặng quà", 
            description: "Mua 5kg hoài sơn tươi tặng 100g tiêu nguyên hạt", 
            period: "20/03 - 10/04/2024",
            details: "Điều kiện:\n- Mua từ 5kg hoài sơn trở lên\n- Tặng 100g tiêu đen nguyên hạt\n- Áp dụng cho tất cả khách hàng"
        },
        { 
            id: "promo3", 
            title: "Ưu Đãi Mua Sỉ", 
            discount: "20%", 
            description: "Giảm 20% cho đơn hàng từ 50kg sản phẩm", 
            period: "18/03 - 05/04/2024",
            details: "Điều kiện mua sỉ:\n- Đơn hàng từ 50kg trở lên\n- Giảm giá 20%\n- Hỗ trợ vận chuyển\n- Liên hệ: 0903 788 761"
        },
        { 
            id: "promo4", 
            title: "Combo Tiêu + Hoài Sơn", 
            discount: "12%", 
            description: "Mua combo tiêu + hoài sơn, giảm 12%", 
            period: "15/03 - 30/04/2024",
            details: "Combo gồm:\n- 1 gói tiêu (chọn loại)\n- 1 gói hoài sơn\n- Giảm giá 12%\n- Giá combo: chỉ từ 150.000 VND"
        }
    ],

    seeds: [
        {
            id: "s1",
            name: "Giống Tiêu Bầu Mây",
            category: "Giống Tiêu",
            image: "https://baumay.com/data/images/1.2%20HINH%20WEB%202.jpg",
            price: 120000,
            unit: "cây",
            description: "Giống tiêu Bầu Mây có bộ rễ cái to gấp 7-10 lần so với các giống tiêu khác, năng suất cao ổn định 9-15 tấn/ha",
            benefits: "Giống tiêu chất lượng cao, kháng bệnh tốt",
            details: {
                specialty: "Giống tiêu duy nhất đạt chuẩn hữu cơ xuất khẩu Quốc tế tại Việt Nam",
                description: "Giống tiêu Bầu Mây là kết quả hơn 20 năm nghiên cứu và chọn lọc của anh Lâm Ngọc Nhâm. Được chứng nhận đạt chuẩn Quốc tế GlobalG.A.P số GGN: 4059883334760",
                about: "Cây tiêu có bộ rễ cái rất to khỏe gấp 10 lần giống khác, cắt dây giống ở đâu ra rễ ở đó, tiêu trưởng thành phân bổ mầm đều, chịu được hạn, kháng bệnh tốt, năng suất rất cao từ 10 đến 12 tấn/ha, ổn định qua các năm.",
                advantages: [
                    "Bộ rễ cái to gấp 7-10 lần so với các giống tiêu khác",
                    "Năng suất cao ổn định 9-15 tấn/ha, bền vững qua các năm",
                    "Kháng bệnh tốt, sinh trưởng mạnh, khác biệt vượt trội",
                    "Cắt ở đầu ra rễ ở đó - hoàn toàn tự nhiên",
                    "Hồ tiêu đầu tiên đạt chuẩn hữu cơ xuất khẩu Quốc tế tại Việt Nam"
                ],
                awards: "Tiêu Bầu Mây đạt liên tiếp 4 năm liền sản phẩm Nông nghiệp tiêu biểu toàn quốc 2014, 2015, 2016, 2017. Xuất khẩu đi Nhật, Mỹ, Úc, Dubai.",
                usage: "Liên hệ: 0945 818 389 - 0962 152 257 (Anh Lâm Ngọc Nhâm) để được tư vấn chi tiết về kỹ thuật trồng và chăm sóc",
                slogan: "Ước Mơ Của Bạn – Hạnh Phúc Bầu Mây"
            }
        },
        {
            id: "s2",
            name: "Củ Hoài Sơn Bầu Mây",
            category: "Củ Hoài Sơn",
            image: "https://baumay.com/data/product/500/cu-hoai-son-tuoi-bau-may.jpg",
            price: 150000,
            unit: "kg",
            description: "Củ Hoài Sơn Bầu Mây được trồng cộng sinh trên diện tích vườn Tiêu Bầu Mây đạt chuẩn quốc tế hướng hữu cơ",
            benefits: "Củ hoài sơn hữu cơ, giàu dinh dưỡng",
            details: {
                specialty: "Củ Hoài Sơn được chứng nhận đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam",
                description: "Mô hình Dự án: Tấc đất tấc vàng nhà nông thu ngay bạc tỷ. Cộng sinh củ Hoài Sơn Bầu Mây trên diện tích vườn Tiêu Bầu Mây đạt chuẩn quốc tế hướng hữu cơ. Mô hình siêu lợi nhuận mang đến sự thịnh vượng cho người nông dân.",
                about: "Hoài sơn Bầu Mây được trồng theo phương pháp hữu cơ gia truyền qua hơn 16 năm, giàu dinh dưỡng, tốt cho sức khỏe và được bảo quản tốt.",
                advantages: [
                    "Trồng cộng sinh với tiêu Bầu Mây đạt chuẩn GlobalG.A.P",
                    "Đạt chuẩn hữu cơ đầu tiên và duy nhất tại Việt Nam",
                    "Giàu dinh dưỡng, tốt cho sức khỏe",
                    "Được trồng theo phương pháp hữu cơ gia truyền"
                ],
                certifications: "Chứng nhận đạt chuẩn Quốc tế GlobalG.A.P hướng hữu cơ",
                usage: "Liên hệ: 0945 818 389 - 0962 152 257 để được tư vấn về kỹ thuật trồng cộng sinh củ Hoài Sơn với Tiêu Bầu Mây",
                slogan: "Tấc đất tấc vàng nhà nông thu ngay bạc tỷ"
            }
        }
    ],

    about: {
        sections: [
            { 
                title: "Về Bầu Mây", 
                content: "CÔNG TY CỔ PHẦN NÔNG NGHIỆP THƯƠNG MẠI DU LỊCH BẦU MÂY là một doanh nghiệp tiên phong trong lĩnh vực sản xuất và kinh doanh cây Tiêu (giống Bầu Mây) và các sản phẩm nông sản chất lượng cao. Chúng tôi cam kết cung cấp những sản phẩm tốt nhất cho người tiêu dùng Việt Nam và thế giới, đồng thời xây dựng một nền nông nghiệp bền vững." 
            },
            { 
                title: "Tầm Nhìn", 
                content: "Trở thành thương hiệu nông sản hữu cơ được tin cậy hàng đầu tại Việt Nam, góp phần nâng cao chất lượng cuộc sống của cộng đồng và bảo vệ môi trường." 
            },
            { 
                title: "Sứ Mệnh", 
                content: "Phát triển nông nghiệp bền vững, cung cấp sản phẩm chất lượng cao, tạo việc làm ổn định cho cộng đồng địa phương, và góp phần phát triển kinh tế - xã hội của tỉnh Bà Rịa - Vũng Tàu." 
            },
            { 
                title: "Giá Trị Cốt Lõi", 
                content: "Chất lượng, Trung thực, Bền vững, Trao quyền cho cộng đồng" 
            }
        ],
        achievements: [
            { label: "Năm hoạt động", value: "20+" },
            { label: "Sản phẩm", value: "10+" },
            { label: "Thị trường", value: "100+" },
            { label: "Nhân viên", value: "500+" }
        ]
    },

    videos: [
        { 
            id: "v1", 
            url: "https://www.youtube.com/watch?v=Ajsvp1jyaws"
        },
        { 
            id: "v2", 
            url: "https://www.youtube.com/watch?v=ph6u3yJrpyM"
        },
        { 
            id: "v3", 
            url: "https://www.youtube.com/watch?v=3UskcX5DtR4"
        },
        { 
            id: "v4", 
            url: "https://www.youtube.com/watch?v=x_Vw6kUYOV0"
        },
        { 
            id: "v5", 
            url: "https://www.youtube.com/watch?v=VaOOjcYz-Ng"
        },
        {
            id: "v6",
            url: "https://www.youtube.com/watch?v=6r96DCyR8zs"
        }
    ],

    // Dữ liệu VR360 cho các khu vực
    vrAreas: {
        // KHU SẢN XUẤT
        sanxuat: {
            title: "KHU VỰC SẢN XUẤT",
            color: "#2a8b6f",
            categories: [
                {
                    name: "KHU TRỒNG TRỌT",
                    items: [
                        { id: "vr1", name: "Trồng Hoa Màu", url: "https://pannellum.org/images/bma-1.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr2", name: "Trồng Dược Liệu", url: "https://pannellum.org/images/cerro-toco-0.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                },
                {
                    name: "KHU CHĂN NUÔI",
                    items: [
                        { id: "vr3", name: "Khu Gia Súc", url: "https://pannellum.org/images/jfk.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr4", name: "Khu Gia Cầm", url: "https://pannellum.org/images/alma.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                },
                {
                    name: "KHU THỦY SẢN",
                    items: [
                        { id: "vr5", name: "Hồ Nuôi Tôm", url: "https://pannellum.org/images/from-tree.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr6", name: "Hồ Nuôi Cá Tầm", url: "https://pannellum.org/images/bma-0.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                }
            ]
        },

        // KHU CHẾ BIẾN & ĐÓNG GÓI
        chebiendong: {
            title: "CHẾ BIẾN & ĐÓNG GÓI",
            color: "#2a8b6f",
            categories: [
                {
                    name: "KHU CHẾ BIẾN",
                    items: [
                        { id: "vr7", name: "Chế Biến Hoa Màu", url: "https://pannellum.org/images/picnic-1.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr8", name: "Chế Biến Dược Liệu", url: "https://pannellum.org/images/cerro-toco-1.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                },
                {
                    name: "KHU ĐÓNG GÓI",
                    items: [
                        { id: "vr9", name: "Đóng Gói Nông Sản", url: "https://pannellum.org/images/picnic-2.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr10", name: "Đóng Gói Dược Liệu", url: "https://pannellum.org/images/picnic-3.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                }
            ]
        },

        // KHU TRƯNG BÀY
        trungbay: {
            title: "KHU VỰC TRƯNG BÀY",
            color: "#2a8b6f",
            categories: [
                {
                    name: "NÔNG SẢN",
                    items: [
                        { id: "vr11", name: "Nông Sản Đóng Gói", url: "https://pannellum.org/images/bma-2.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr12", name: "Dược Liệu Đóng Gói", url: "https://pannellum.org/images/bma-3.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                },
                {
                    name: "THỰC PHẨM",
                    items: [
                        { id: "vr13", name: "Thực Phẩm Đóng Gói", url: "https://pannellum.org/images/bma-4.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr14", name: "Thực Phẩm Đông Hộp", url: "https://pannellum.org/images/bma-5.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                }
            ]
        },

        // KHU ĐIỀU HÀNH
        dieuhanh: {
            title: "KHU ĐIỀU HÀNH",
            color: "#2a8b6f",
            categories: [
                {
                    name: "KHU KỸ THUẬT",
                    items: [
                        { id: "vr15", name: "Kỹ Thuật Nông Nghiệp", url: "https://pannellum.org/images/bma-6.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr16", name: "Máy Móc Thiết Bị", url: "https://pannellum.org/images/bma-7.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                },
                {
                    name: "KHU VĂN PHÒNG",
                    items: [
                        { id: "vr17", name: "Hành Chính & Kế Toán", url: "https://pannellum.org/images/picnic-4.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" },
                        { id: "vr18", name: "Marketing & Bán Hàng", url: "https://pannellum.org/images/alma.jpg", thumbnail: "https://baumay.com/templates/images/logo.png" }
                    ]
                }
            ]
        }
    }
};
