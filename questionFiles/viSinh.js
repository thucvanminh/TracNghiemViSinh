const questions = [
    {
        "id": 1,
        "question": "Trứng Ascaris lumbricoides khi ra khỏi cơ thể người:",
        "A": "Có thể lây nhiễm sau vài giờ.",
        "B": "Có sức đề kháng không cao với ngoại cảnh (lạnh nơi đất ẩm, xốp mát).",
        "C": "Chỉ lây khi có ấu trùng trong trứng.",
        "D": "Đã có phôi.",
        "answer": "C"
    },
    {
        "id": 2,
        "question": "Thành phần nào giúp vi khuẩn có hình dạng nhất định?",
        "A": "Nhân.",
        "B": "Tế bào chất.",
        "C": "Vách tế bào.",
        "D": "Màng tế bào.",
        "answer": "C"
    },
    {
        "id": 3,
        "question": "Thành phần nào của vi khuẩn thực hiện nhiệm vụ thẩm thấu chọn lọc?",
        "A": "Nhân.",
        "B": "Tế bào chất.",
        "C": "Màng tế bào.",
        "D": "Vỏ.",
        "answer": "C"
    },
    {
        "id": 4,
        "question": "Thành phần nào của vi khuẩn gây cho ta khó khăn trong công tác tiệt khuẩn?",
        "A": "Nhân.",
        "B": "Tế bào chất.",
        "C": "Màng tế bào.",
        "D": "Bào tử.",
        "answer": "D"
    },
    {
        "id": 5,
        "question": "Vách tế bào vi khuẩn gram dương chứa khoảng:",
        "A": "10 % peptidoglycan.",
        "B": "30 % peptidoglycan.",
        "C": "60 % peptidoglycan.",
        "D": "90 % peptidoglycan.",
        "answer": "D"
    },
    {
        "id": 6,
        "question": "Loại bệnh phẩm nào không dùng cho chẩn đoán tụ cầu nhưng chẩn đoán bệnh do liên cầu:",
        "A": "Mủ.",
        "B": "Huyết thanh.",
        "C": "Chất ngoáy họng.",
        "D": "Dịch não tủy.",
        "answer": "B"
    },
    {
        "id": 7,
        "question": "Vách tế bào vi khuẩn gram âm chứa khoảng:",
        "A": "10 % peptidoglycan.",
        "B": "30 % peptidoglycan.",
        "C": "50 % peptidoglycan.",
        "D": "90 % peptidoglycan.",
        "answer": "A"
    },
    {
        "id": 8,
        "question": "Vi khuẩn gram dương sau khi nhuộm gram sẽ bắt màu:",
        "A": "Tím.",
        "B": "Xanh.",
        "C": "Đỏ.",
        "D": "Hồng.",
        "answer": "A"
    },
    {
        "id": 9,
        "question": "Pili có cấu tạo giống:",
        "A": "Lông.",
        "B": "Vách tế bào.",
        "C": "Màng tế bào.",
        "D": "Nha bào.",
        "answer": "A"
    },
    {
        "id": 10,
        "question": "Vi khuẩn có đời sống như thế nào?",
        "A": "Ký sinh.",
        "B": "Cộng sinh.",
        "C": "Hoại sinh.",
        "D": "Tùy theo loại vi khuẩn.",
        "answer": "D"
    },
    {
        "id": 11,
        "question": "Vi khuẩn có thể không có thành phần nào?",
        "A": "Tế bào chất, nhân, bào tử.",
        "B": "Lông, bào tử, vách tế bào.",
        "C": "Vỏ, nhân, màng tế bào.",
        "D": "Lông, vỏ, bào tử.",
        "answer": "D"
    },
    {
        "id": 12,
        "question": "Khi gặp điều kiện bất lợi của môi trường sống thành phần nào của vi khuẩn tồn tại lâu nhất?",
        "A": "Nhân.",
        "B": "Tế bào chất.",
        "C": "Màng tế bào.",
        "D": "Bào tử.",
        "answer": "D"
    },
    {
        "id": 13,
        "question": "Vi khuẩn hiếu khí, kỵ khí tùy ý có đặc điểm nào?",
        "A": "Không cần oxy dù ở bất cứ dạng nào.",
        "B": "Không cần oxy trong các hợp chất.",
        "C": "Sử dụng được các dạng oxy.",
        "D": "Không sử dụng được oxy tự do.",
        "answer": "C"
    },
    {
        "id": 14,
        "question": "Yếu tố quan trọng nhất ảnh hưởng đến sự tồn tại và phát triển của vi khuẩn là gì?",
        "A": "Ánh sáng.",
        "B": "Nhiệt độ.",
        "C": "Tia cực tím.",
        "D": "Độ ẩm.",
        "answer": "B"
    },
    {
        "id": 15,
        "question": "Nhiệt độ thích hợp nhất đối với đa số vi khuẩn là:",
        "A": "35°C.",
        "B": "37°C.",
        "C": "39°C.",
        "D": "41°C.",
        "answer": "B"
    },
    {
        "id": 16,
        "question": "Thành phần cấu tạo chính của vi khuẩn gồm?",
        "A": "Vỏ, bào tử, màng tế bào, tế bào chất.",
        "B": "Nhân, bào tử, vách tế bào, tế bào chất.",
        "C": "Vỏ, lông, màng tế bào, tế bào chất.",
        "D": "Nhân, tế bào chất, màng tế bào, vách tế bào.",
        "answer": "D"
    },
    {
        "id": 17,
        "question": "Sử dụng thị kính có độ phóng đại 10X, vật kính 40X thì hình ảnh của vật phóng đại bao nhiêu lần?",
        "A": "10 lần.",
        "B": "40 lần.",
        "C": "50 lần.",
        "D": "400 lần.",
        "answer": "D"
    },
    {
        "id": 18,
        "question": "Loại vi khuẩn nào sau đây di động?",
        "A": "Cầu khuẩn.",
        "B": "Trực khuẩn.",
        "C": "Vi khuẩn gram âm.",
        "D": "Xoắn khuẩn.",
        "answer": "D"
    },
    {
        "id": 19,
        "question": "Vi khuẩn được phân thành 2 loại Gram dương hay âm là do:",
        "A": "Sự khác biệt thành phần cấu tạo hóa học của tế bào chất.",
        "B": "Sự khác biệt thành phần cấu tạo hóa học của vách tế bào.",
        "C": "Sự khác biệt thành phần cấu tạo hóa học của màng tế bào.",
        "D": "Sự khác biệt thành phần cấu tạo hóa học nhân.",
        "answer": "B"
    },
    {
        "id": 20,
        "question": "Vi khuẩn tự dưỡng:",
        "A": "Sử dụng N từ NH3, C từ CO2.",
        "B": "Sử dụng N từ chất đạm, C từ đường.",
        "C": "Sử dụng N từ NH3, C từ đường.",
        "D": "Sử dụng N từ chất đạm, C từ CO2.",
        "answer": "A"
    },
    {
        "id": 21,
        "question": "Vi khuẩn dị dưỡng:",
        "A": "Sử dụng N từ NH3, C từ CO2.",
        "B": "Sử dụng N từ chất đạm, C từ đường.",
        "C": "Sử dụng N từ NH3, C từ đường.",
        "D": "Sử dụng N từ chất đạm, C từ CO2.",
        "answer": "B"
    },
    {
        "id": 22,
        "question": "Tế bào của mọi vi khuẩn đều không có:",
        "A": "Vách.",
        "B": "Lông.",
        "C": "Lưới nội bào.",
        "D": "Màng bào tương.",
        "answer": "C"
    },
    {
        "id": 23,
        "question": "Bình thường tế bào vi khuẩn đều có:",
        "A": "Bộ máy phân bào.",
        "B": "Ribosom.",
        "C": "Lưới nội bào.",
        "D": "Ty thể.",
        "answer": "B"
    },
    {
        "id": 24,
        "question": "Giải quyết tốt khâu “xử lý phân hợp vệ sinh” là ta có thể dự phòng các ký sinh trùng sau, trừ:",
        "A": "Ascaris lumbricoides.",
        "B": "Entamoeba histolytica.",
        "C": "Enterobius vermicularis.",
        "D": "Trichuris trichiura.",
        "answer": "C"
    },
    {
        "id": 25,
        "question": "Một trong những chức năng của lông vi khuẩn là giúp cho vi khuẩn:",
        "A": "Gây bệnh.",
        "B": "Bám vào tế bào.",
        "C": "Di động.",
        "D": "Tăng độc lực.",
        "answer": "C"
    },
    {
        "id": 26,
        "question": "Nha bào được hình thành khi vi khuẩn:",
        "A": "Có đầy đủ chất dinh dưỡng.",
        "B": "Gặp điều kiện không thuận lợi, mất nước ở bào tương.",
        "C": "Gặp nhiệt độ cao quá.",
        "D": "Gặp nhiệt độ thấp quá.",
        "answer": "B"
    },
    {
        "id": 27,
        "question": "Ở môi trường lỏng, vi khuẩn phát triển làm cho môi trường:",
        "A": "Có váng.",
        "B": "Đục.",
        "C": "Lắng cặn.",
        "D": "Có váng, đục hoặc lắng cặn.",
        "answer": "D"
    },
    {
        "id": 28,
        "question": "Vi khuẩn kỵ khí có đặc điểm nào?",
        "A": "Không cần oxy dù ở bất cứ dạng nào.",
        "B": "Không cần oxy trong các hợp chất.",
        "C": "Sử dụng được các dạng oxy.",
        "D": "Không sử dụng được oxy tự do.",
        "answer": "D"
    },
    {
        "id": 29,
        "question": "Loại tiêu huyết nào của liên cầu có sự tiêu huyết hoàn toàn trên môi trường thạch máu?",
        "A": "Anpha.",
        "B": "Beta.",
        "C": "Gamma.",
        "D": "Delta.",
        "answer": "B"
    },
    {
        "id": 30,
        "question": "Staphylococci là tên khoa học của vi khuẩn nào?",
        "A": "Liên cầu.",
        "B": "Tụ cầu.",
        "C": "Uốn ván.",
        "D": "Lao.",
        "answer": "B"
    },
    {
        "id": 31,
        "question": "Muốn nhìn rõ hình ảnh của vi khuẩn khi quan sát trong kính hiển vi ta sử dụng vật kính nào?",
        "A": "Vật kính 10X.",
        "B": "Vật kính 20X.",
        "C": "Vật kính 40X.",
        "D": "Vật kính 100X.",
        "answer": "D"
    },
    {
        "id": 32,
        "question": "Streptolysine O do vi khuẩn nào tạo ra?",
        "A": "Thương hàn.",
        "B": "Tụ cầu.",
        "C": "Lỵ.",
        "D": "Liên cầu.",
        "answer": "D"
    },
    {
        "id": 33,
        "question": "Loại tiêu huyết nào của liên cầu không tiêu huyết trên môi trường thạch máu?",
        "A": "Anpha.",
        "B": "Beta.",
        "C": "Gamma.",
        "D": "Delta.",
        "answer": "C"
    },
    {
        "id": 34,
        "question": "Độc tố ruột Enterotoxin của Tụ cầu vàng:",
        "A": "Gây sốc.",
        "B": "Gây ngộ độc thức ăn.",
        "C": "Gây tróc lở da.",
        "D": "Sinh mủ.",
        "answer": "B"
    },
    {
        "id": 35,
        "question": "Lancefield đã dựa vào thành phần nào của vi khuẩn để phân loại liên cầu:",
        "A": "Carbohydrate C.",
        "B": "Protein M.",
        "C": "Protein T.",
        "D": "Nucleoprotein.",
        "answer": "A"
    },
    {
        "id": 36,
        "question": "Tụ cầu vàng có liên quan đến:",
        "A": "Khó mọc được trên môi trường thông thường.",
        "B": "Sống được trong điều kiện có 7,5% Nacl.",
        "C": "Catalase âm tính.",
        "D": "Thuộc nhóm tiêu huyết α.",
        "answer": "B"
    },
    {
        "id": 37,
        "question": "Liên cầu khuẩn có liên quan đến:",
        "A": "Mọc được trên môi trường thông thường (ít chất dinh dưỡng).",
        "B": "Phát triển được trong môi trường muối mật.",
        "C": "Catalase dương tính.",
        "D": "Thuộc loại hiếu khí.",
        "answer": "B"
    },
    {
        "id": 38,
        "question": "Loại men nào do tụ cầu tiết ra làm đông được huyết tương?",
        "A": "Catalase.",
        "B": "Coagulase.",
        "C": "Fibrinolyzin.",
        "D": "Hyaluronidase.",
        "answer": "B"
    },
    {
        "id": 39,
        "question": "Dựa vào cách sắp xếp cầu khuẩn được chia thành:",
        "A": "Cầu khuẩn, trực khuẩn, xoắn khuẩn.",
        "B": "Tụ cầu, liên cầu, song cầu.",
        "C": "Tự dưỡng, dị dưỡng.",
        "D": "Hiếu khí, kỵ khí.",
        "answer": "B"
    },
    {
        "id": 40,
        "question": "Streptococci có đặc điểm:",
        "A": "Gram dương, không di động.",
        "B": "Gram dương, di động.",
        "C": "Gram âm, không di động.",
        "D": "Gram âm, di động.",
        "answer": "A"
    },
    {
        "id": 41,
        "question": "Salmonella là tên khoa học của vi khuẩn nào?",
        "A": "Tả.",
        "B": "Lỵ.",
        "C": "Thương hàn.",
        "D": "Giang mai.",
        "answer": "C"
    },
    {
        "id": 42,
        "question": "Đặc điểm nào để phân biệt hình thể của liên cầu khuẩn với tụ cầu khuẩn trên tiêu bản nhuộm Gram:",
        "A": "Kích thước.",
        "B": "Tính chất bắt màu.",
        "C": "Cách sắp xếp.",
        "D": "Có vỏ.",
        "answer": "C"
    },
    {
        "id": 43,
        "question": "Salmonella typhi gây bệnh sốt thương hàn do:",
        "A": "Nội độc tố.",
        "B": "Ngoại độc tố.",
        "C": "Giải độc tố.",
        "D": "Kháng độc tố.",
        "answer": "A"
    },
    {
        "id": 44,
        "question": "T.A.B là vacxin ngừa bệnh nào?",
        "A": "Lao.",
        "B": "Uốn ván.",
        "C": "Thương hàn.",
        "D": "Bạch hầu.",
        "answer": "C"
    },
    {
        "id": 45,
        "question": "Thử nghiệm widal để chẩn đoán bệnh gì?",
        "A": "Tả.",
        "B": "Giang mai.",
        "C": "Thương hàn.",
        "D": "Dịch hạch.",
        "answer": "C"
    },
    {
        "id": 46,
        "question": "Shigella dysenteriae thuộc nhóm nào?",
        "A": "Nhóm A.",
        "B": "Nhóm B.",
        "C": "Nhóm C.",
        "D": "Nhóm D.",
        "answer": "A"
    },
    {
        "id": 47,
        "question": "Shigella gây bệnh nặng ở người thuộc nhóm nào?",
        "A": "Nhóm A.",
        "B": "Nhóm B.",
        "C": "Nhóm C.",
        "D": "Nhóm D.",
        "answer": "A"
    },
    {
        "id": 48,
        "question": "Shigella là tên khoa học vi khuẩn nào?",
        "A": "Lao.",
        "B": "Lỵ.",
        "C": "Thương hàn.",
        "D": "Uốn ván.",
        "answer": "B"
    },
    {
        "id": 49,
        "question": "Tính chất sau đây là của vi trùng đường ruột:",
        "A": "Khử nitrate thành nitrite.",
        "B": "Không lên men đường glucose.",
        "C": "Luôn luôn di động.",
        "D": "Oxydase dương tính.",
        "answer": "A"
    },
    {
        "id": 50,
        "question": "Nội độc tố của vi trùng đường ruột là:",
        "A": "Lipopolysaccharide.",
        "B": "Protein.",
        "C": "Lipoprotein.",
        "D": "Carbohydrate.",
        "answer": "A"
    },
    {
        "id": 51,
        "question": "Vi trùng đường ruột có ngoại độc tố gây bệnh là:",
        "A": "Salmonella.",
        "B": "Escherichia coli.",
        "C": "Proteus.",
        "D": "Enterobacter.",
        "answer": "B"
    },
    {
        "id": 52,
        "question": "Bệnh phẩm dùng để xét nghiệm chẩn đoán Escherichia coli là:",
        "A": "Nước súc họng.",
        "B": "Mủ.",
        "C": "Nước não tuỷ.",
        "D": "Máu.",
        "answer": "D"
    },
    {
        "id": 53,
        "question": "Bệnh phẩm dùng để chẩn đoán Salmonella là:",
        "A": "Chất chọc hạch.",
        "B": "Mủ.",
        "C": "Nước não tuỷ.",
        "D": "Phân.",
        "answer": "D"
    },
    {
        "id": 54,
        "question": "Bệnh phẩm dùng để chẩn đoán Shigella là:",
        "A": "Chất chọc hạch.",
        "B": "Mủ.",
        "C": "Nước não tuỷ.",
        "D": "Phân.",
        "answer": "D"
    },
    {
        "id": 55,
        "question": "Shigella boydii thuộc nhóm nào?",
        "A": "Nhóm A.",
        "B": "Nhóm B.",
        "C": "Nhóm C.",
        "D": "Nhóm D.",
        "answer": "C"
    },
    {
        "id": 56,
        "question": "Chủng Escherichia coli nào sau đây thường gây bệnh cho trẻ em dưới 2 tuổi?",
        "A": "EPEC.",
        "B": "ETEC.",
        "C": "EIEC.",
        "D": "VTEC.",
        "answer": "A"
    },
    {
        "id": 57,
        "question": "Chủng Escherichia coli nào sau đây thường gây bệnh cho du khách?",
        "A": "EPEC.",
        "B": "ETEC.",
        "C": "EIEC.",
        "D": "VTEC.",
        "answer": "B"
    },
    {
        "id": 58,
        "question": "EIEC gây bệnh giống:",
        "A": "Hội chứng lỵ.",
        "B": "Tiêu chảy mất nước.",
        "C": "Viêm màng não.",
        "D": "Nhiễm trùng đường tiểu.",
        "answer": "A"
    },
    {
        "id": 59,
        "question": "Phản ứng Widal bắt đầu làm ở thời gian nào của bệnh?",
        "A": "Tuần thứ 1.",
        "B": "Tuần thứ 2.",
        "C": "Tuần thứ 3.",
        "D": "Tuần thứ 4.",
        "answer": "B"
    },
    {
        "id": 60,
        "question": "Vi trùng nào sau đây thuộc vi trùng đường ruột?",
        "A": "Staphylococci.",
        "B": "Escherichia.",
        "C": "Streptococci.",
        "D": "Pneumococci.",
        "answer": "B"
    },
    {
        "id": 61,
        "question": "SAT là huyết thanh kháng để ngừa bệnh do vi khuẩn nào?",
        "A": "Tả.",
        "B": "Uốn ván.",
        "C": "Lao.",
        "D": "Liên cầu.",
        "answer": "B"
    },
    {
        "id": 62,
        "question": "Tế bào vi khuẩn lao có nhiều chất gì?",
        "A": "Độc tố.",
        "B": "Men.",
        "C": "Protein.",
        "D": "Lipid.",
        "answer": "D"
    },
    {
        "id": 63,
        "question": "Vi khuẩn nào khó nhuộm gram?",
        "A": "Tả.",
        "B": "Lao.",
        "C": "Thương hàn.",
        "D": "Bạch hầu.",
        "answer": "B"
    },
    {
        "id": 64,
        "question": "Vi khuẩn Helicobacter pylori thường lây truyền theo đường nào?",
        "A": "Máu.",
        "B": "Hô hấp.",
        "C": "Dịch tiết.",
        "D": "Phân-miệng.",
        "answer": "D"
    },
    {
        "id": 65,
        "question": "Vi khuẩn nào có thời gian tăng trưởng trong môi trường nhân tạo chậm?",
        "A": "Bạch hầu.",
        "B": "Uốn ván.",
        "C": "Lao.",
        "D": "Thương hàn.",
        "answer": "C"
    },
    {
        "id": 66,
        "question": "Vi khuẩn nào thường gặp trong bệnh viêm loét dạ dày?",
        "A": "Staphylococcus aureus.",
        "B": "Shigella dysenteriae.",
        "C": "Helicobacter pylori.",
        "D": "Salmonella typhi.",
        "answer": "C"
    },
    {
        "id": 67,
        "question": "Vi khuẩn uốn ván lây truyền chủ yếu qua:",
        "A": "Vết thương.",
        "B": "Ăn uống.",
        "C": "Hô hấp.",
        "D": "Truyền máu.",
        "answer": "A"
    },
    {
        "id": 68,
        "question": "Muốn phòng bệnh uốn ván, cách tốt nhất là:",
        "A": "Vệ sinh môi trường sạch sẽ.",
        "B": "Ăn chín uống sôi.",
        "C": "Tiêm vacxin cho những người bị vết thương.",
        "D": "Tiêm vacxin cho tất cả mọi người.",
        "answer": "D"
    },
    {
        "id": 69,
        "question": "Bệnh phẩm thường dùng để chẩn đoán lao phổi là:",
        "A": "Chất chọc hạch.",
        "B": "Đàm.",
        "C": "Nước não tuỷ.",
        "D": "Phân.",
        "answer": "B"
    },
    {
        "id": 70,
        "question": "Điều nào sau đây đúng khi nói về Helicobacter pylori :",
        "A": "Mọc sau 2-3 ngày trong điều kiện kỵ khí.",
        "B": "Có thể chẩn đoán bằng nghiệm pháp hơi thở.",
        "C": "Không cần trị liệu bằng kháng sinh vì bệnh tự giới hạn.",
        "D": "Không gây bệnh khi tiết ra urease.",
        "answer": "B"
    },
    {
        "id": 71,
        "question": "Tính chất sinh hóa của vi khuẩn Helicobacter pylori là:",
        "A": "Catalase (+), oxidase (-).",
        "B": "Catalase (-), oxidase (+).",
        "C": "Catalase (+), oxidase (+).",
        "D": "Catalase (-), oxidase (-).",
        "answer": "C"
    },
    {
        "id": 72,
        "question": "Vi khuẩn nào sau đây bắt màu Gram(+)?",
        "A": "Lao.",
        "B": "Helicobacter pylori.",
        "C": "Uốn ván.",
        "D": "Haemophilus influenzae.",
        "answer": "C"
    },
    {
        "id": 73,
        "question": "Helicobacter pylori sống được ở dạ dày là nhờ tiết ra men gì?",
        "A": "Urease.",
        "B": "Lipase.",
        "C": "Catalase.",
        "D": "Glycoproteinase.",
        "answer": "A"
    },
    {
        "id": 74,
        "question": "Hiện nay, thử nghiệm tuberculin được thử nghiệm ở:",
        "A": "Kết mạc.",
        "B": "Trong da.",
        "C": "Dưới da.",
        "D": "Trong cơ bắp.",
        "answer": "B"
    },
    {
        "id": 75,
        "question": "Tác nhân nào không diệt được virus?",
        "A": "Nhiệt.",
        "B": "Ánh sáng.",
        "C": "Tia cực tím.",
        "D": "Kháng sinh.",
        "answer": "D"
    },
    {
        "id": 76,
        "question": "Đặc điểm nào của virus vừa có lợi và khó khăn trong công tác phòng bệnh?",
        "A": "Tạo vỏ.",
        "B": "Tạo bào tử.",
        "C": "Chống thực bào.",
        "D": "Biến chủng.",
        "answer": "D"
    },
    {
        "id": 77,
        "question": "Vỏ virus có nhiệm vụ gì?",
        "A": "Chống thực bào.",
        "B": "Tạo bào tử.",
        "C": "Tạo ADN.",
        "D": "Che chở nhân.",
        "answer": "D"
    },
    {
        "id": 78,
        "question": "Virus có hình dạng nhất định nhờ vào gì?",
        "A": "ADN.",
        "B": "Màng tế bào.",
        "C": "Vách tế bào.",
        "D": "Vỏ.",
        "answer": "D"
    },
    {
        "id": 79,
        "question": "Virus có đời sống như thế nào?",
        "A": "Ký sinh.",
        "B": "Cộng sinh.",
        "C": "Hoại sinh.",
        "D": "Ký sinh và hoại sinh.",
        "answer": "A"
    },
    {
        "id": 80,
        "question": "Virus được phân nhóm dựa theo:",
        "A": "Tính chất nhuộm.",
        "B": "Gram âm, gram dương.",
        "C": "Hình dạng.",
        "D": "Cấu trúc nhân.",
        "answer": "D"
    },
    {
        "id": 81,
        "question": "Virus kháng được tác nhân nào?",
        "A": "Chất hóa học.",
        "B": "Ánh sáng.",
        "C": "Xà phòng.",
        "D": "Kháng sinh.",
        "answer": "D"
    },
    {
        "id": 82,
        "question": "Virus không sống được ở đâu?",
        "A": "Trong cơ thể sinh vật.",
        "B": "Trong tế bào sống.",
        "C": "Trong môi trường nhân tạo.",
        "D": "Trong các loài thực vật.",
        "answer": "C"
    },
    {
        "id": 83,
        "question": "Các đơn vị capsid được gọi là gì?",
        "A": "Envelop.",
        "B": "Capsomer.",
        "C": "Carbohydrat.",
        "D": "Acid nucleic.",
        "answer": "B"
    },
    {
        "id": 84,
        "question": "Acid nucleic có chức năng:",
        "A": "Mang tính kháng nguyên đặc hiệu của virus.",
        "B": "Mang tính bán kháng nguyên đặc hiệu của virus.",
        "C": "Giữ cho hình thái và kích thước của virus luôn ổn định.",
        "D": "Tham gia vào giai đoạn lắp ráp và giải phóng virus ra khỏi tế bào.",
        "answer": "B"
    },
    {
        "id": 85,
        "question": "Virus cúm có đặc điểm nào sau đây?",
        "A": "Nhân ARN.",
        "B": "Tạo miễn dịch bền vững sau bệnh.",
        "C": "Vào cơ thể bằng đường tiêu hóa.",
        "D": "Bệnh không thể tạo thành dịch.",
        "answer": "A"
    },
    {
        "id": 86,
        "question": "Virus cúm thường gây bệnh ở đối tượng nào?",
        "A": "Mọi đối tượng.",
        "B": "Người trưởng thành.",
        "C": "Trẻ em.",
        "D": "Thiếu niên.",
        "answer": "C"
    },
    {
        "id": 87,
        "question": "Dùng bệnh phẩm gì để phân lập virus Cúm:",
        "A": "Phân.",
        "B": "Nước rửa cổ họng.",
        "C": "Dịch mụn nước.",
        "D": "Máu.",
        "answer": "B"
    },
    {
        "id": 88,
        "question": "Tế bào đích của virus Cúm là:",
        "A": "Tế bào máu.",
        "B": "Tế bào biểu mô đường hô hấp.",
        "C": "Tế bào thần kinh.",
        "D": "Tế bào niêm mạc ruột.",
        "answer": "B"
    },
    {
        "id": 89,
        "question": "Virus cúm vào cơ thể chủ yếu theo đường nào?",
        "A": "Máu.",
        "B": "Hô hấp.",
        "C": "Tiêu hóa.",
        "D": "Tình dục.",
        "answer": "B"
    },
    {
        "id": 90,
        "question": "Sự biến đổi kháng nguyên thường gặp nhất ở virus nào?",
        "A": "Virus đậu mùa.",
        "B": "Virus Cúm.",
        "C": "Virus Quai bị.",
        "D": "Virus Sởi.",
        "answer": "B"
    },
    {
        "id": 91,
        "question": "Virus viêm gan B thường vào cơ thể bằng đường nào?",
        "A": "Máu.",
        "B": "Tiêu hóa.",
        "C": "Hô hấp.",
        "D": "Giao tiếp.",
        "answer": "A"
    },
    {
        "id": 92,
        "question": "Trên vỏ capsid của HBV có:",
        "A": "Kháng nguyên HBsAg, HBcAg.",
        "B": "Kháng nguyên HBcAg, HBeAg.",
        "C": "Kháng nguyên HBeAg, HBsAg.",
        "D": "Không có kháng nguyên.",
        "answer": "C"
    },
    {
        "id": 93,
        "question": "HBcAg tồn tại ở:",
        "A": "Tế bào máu.",
        "B": "Tế bào phổi.",
        "C": "Tế bào gan.",
        "D": "Tế bào tim.",
        "answer": "C"
    },
    {
        "id": 94,
        "question": "Điều nào sau đây nói đúng về HBsAg?",
        "A": "Không tìm được trong máu người nhiễm HBV.",
        "B": "HBsAg ở -20ºC không tồn tại được.",
        "C": "Giúp cho virus bám vào tế bào gan.",
        "D": "Chỉ tồn tại trong tế bào gan.",
        "answer": "C"
    },
    {
        "id": 95,
        "question": "HBV thường gây bệnh cho những đối tượng nào?",
        "A": "Trẻ em.",
        "B": "Người lớn tuổi.",
        "C": "Phụ nữ mang thai.",
        "D": "Mọi lứa tuổi.",
        "answer": "D"
    },
    {
        "id": 96,
        "question": "Điều nào sau đây đúng khi nói về HBV?",
        "A": "Mang ADN 1 sợi.",
        "B": "Mang ADN 2 sợi.",
        "C": "Mang ARN 1 sợi.",
        "D": "Mang ARN 2 sợi.",
        "answer": "B"
    },
    {
        "id": 97,
        "question": "Đặc điểm nào tạo sự khác biệt của tính chất gây bệnh của ký sinh vật?",
        "A": "Chiếm sinh chất khác nhau.",
        "B": "Sinh sản khác nhau.",
        "C": "Đời sống khác nhau.",
        "D": "Kích thước khác nhau.",
        "answer": "A"
    },
    {
        "id": 98,
        "question": "Ký sinh vật đa ký có đặc điểm nào?",
        "A": "Đời sống ngắn.",
        "B": "Sống trên nhiều loại ký chủ.",
        "C": "Chu kỳ đơn giản.",
        "D": "Không có giai đoạn sống trong ngoại cảnh.",
        "answer": "B"
    },
    {
        "id": 99,
        "question": "Ký sinh vật là sinh vật trong quá trình sống:",
        "A": "Nhờ ký chủ.",
        "B": "Trong ký chủ.",
        "C": "Chiếm sinh chất ký chủ.",
        "D": "Cùng sống với ký chủ.",
        "answer": "C"
    },
    {
        "id": 100,
        "question": "Sinh vật sống trên một loại ký chủ gọi là ký sinh vật gì?",
        "A": "Đơn giản.",
        "B": "Đơn bào.",
        "C": "Đơn ký.",
        "D": "Đơn tính.",
        "answer": "C"
    },
    {
        "id": 101,
        "question": "Hình thức sinh sản đa phôi là:",
        "A": "Trên một cá thể có cả cơ quan sinh dục đực và cái.",
        "B": "Hình thức đơn giản nhất.",
        "C": "Hình thức thường gặp nhất.",
        "D": "Từ một trứng có thể nở thành nhiều ấu trùng.",
        "answer": "D"
    },
    {
        "id": 102,
        "question": "Hình thức sinh sản phôi tử sinh thường gặp ở:",
        "A": "Sán lá.",
        "B": "Sán dải.",
        "C": "Giun lươn.",
        "D": "Giun đũa.",
        "answer": "C"
    },
    {
        "id": 103,
        "question": "Điều nào sau đây đúng khi nói về vật chủ:",
        "A": "Luôn là trung gian truyền bệnh.",
        "B": "Vật chủ là những sinh vật sống ký sinh trên sinh vật khác.",
        "C": "Chỉ có thể là vật chủ cho một loại ký sinh trùng.",
        "D": "Vật chủ là những sinh vật bị các sinh vật khác sống ký sinh.",
        "answer": "D"
    },
    {
        "id": 104,
        "question": "Ký sinh trùng thuộc chu kỳ trực tiếp, ngắn:",
        "A": "Giun móc.",
        "B": "Giun tóc.",
        "C": "Giun kim.",
        "D": "Giun đũa.",
        "answer": "C"
    },
    {
        "id": 105,
        "question": "Ký sinh trùng thuộc chu kỳ trực tiếp, dài:",
        "A": "Sán dải heo, bò.",
        "B": "Sán lá gan nhỏ.",
        "C": "Trùng roi.",
        "D": "Giun đũa.",
        "answer": "D"
    },
    {
        "id": 106,
        "question": "Ở Việt Nam, đa số ký sinh trùng xâm nhập vào người qua đường:",
        "A": "Tiêu hóa.",
        "B": "Da.",
        "C": "Máu.",
        "D": "Sinh dục.",
        "answer": "A"
    },
    {
        "id": 107,
        "question": "Trong các loại bệnh phẩm, mầm bệnh ký sinh trùng thường hay gặp hơn cả ở:",
        "A": "Phân.",
        "B": "Máu.",
        "C": "Đàm.",
        "D": "Nước tiểu.",
        "answer": "A"
    },
    {
        "id": 108,
        "question": "Ký sinh trùng bắt buộc phải qua môi trường mới lây nhiễm cho người là:",
        "A": "Amíp.",
        "B": "Giun tóc.",
        "C": "Giun kim.",
        "D": "Trùng roi.",
        "answer": "B"
    },
    {
        "id": 109,
        "question": "Giải pháp hiệu quả nhất để phòng chống các bệnh ký sinh trùng nhiễm qua đường tiêu hoá là:",
        "A": "Tuyên truyền – giáo dục sức khoẻ về phòng bệnh.",
        "B": "Vệ sinh ăn uống.",
        "C": "Quản lý và xử lý phân tốt.",
        "D": "Kiểm tra sát sinh chặt chẽ.",
        "answer": "A"
    },
    {
        "id": 110,
        "question": "Đời sống của giun đũa khoảng bao lâu?",
        "A": "2 tháng.",
        "B": "6 tháng.",
        "C": "13 tháng.",
        "D": "12 năm.",
        "answer": "C"
    },
    {
        "id": 111,
        "question": "Thời gian hoàn thành chu kỳ phát triển của giun đũa khoảng bao lâu?",
        "A": "2 tháng.",
        "B": "4 tháng.",
        "C": "6 tháng.",
        "D": "8 tháng.",
        "answer": "A"
    },
    {
        "id": 112,
        "question": "Đời sống của giun kim khoảng bao lâu?",
        "A": "2 tháng.",
        "B": "6 tháng.",
        "C": "12 tháng.",
        "D": "2 năm.",
        "answer": "A"
    },
    {
        "id": 113,
        "question": "Giun nào có đầu nhỏ và dài cắm sâu trong niêm mạc ruột?",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun tóc.",
        "D": "Giun kim.",
        "answer": "C"
    },
    {
        "id": 114,
        "question": "Giun kim đực trưởng thành có kích thước khoảng bao nhiêu?",
        "A": "5 mm.",
        "B": "5 cm.",
        "C": "10 µm.",
        "D": "10 mm.",
        "answer": "A"
    },
    {
        "id": 115,
        "question": "Giun kim thường đẻ trứng vào thời điểm nào?",
        "A": "Ban đêm.",
        "B": "Buổi sáng.",
        "C": "Buổi trưa.",
        "D": "Buổi chiều.",
        "answer": "A"
    },
    {
        "id": 116,
        "question": "Giun móc có khả năng lây nhiễm khi nào?",
        "A": "Khi ấu trùng ra khỏi vỏ trứng phát triển thành ấu trùng giai đoạn 3.",
        "B": "Khi đến phổi.",
        "C": "Nhiệt độ 37oC.",
        "D": "Sau khi ra khỏi cơ thể 6 giờ.",
        "answer": "A"
    },
    {
        "id": 117,
        "question": "Trong phòng chống bệnh Ascaris lumbricoides, biện pháp không thực hiện là:",
        "A": "Giáo dục sử dụng hố xí hợp vệ sinh.",
        "B": "Điều trị hàng loạt, đồng thời cho những người nhiễm giun.",
        "C": "Ăn uống đúng vệ sinh.",
        "D": "Dùng thuốc diệt giai đoạn ấu trùng trong cơ thể.",
        "answer": "D"
    },
    {
        "id": 118,
        "question": "Khi nhiễm giun nào bệnh nhân đau bụng giống như trong hội chứng lỵ?",
        "A": "Giun kim.",
        "B": "Giun đũa.",
        "C": "Giun tóc.",
        "D": "Giun móc.",
        "answer": "C"
    },
    {
        "id": 119,
        "question": "Khi nhiễm nhiều giun nào có thể gây biến chứng tắc ruột?",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "B"
    },
    {
        "id": 120,
        "question": "Kích thước của giun móc khoảng bao nhiêu?",
        "A": "10 mm.",
        "B": "30 mm.",
        "C": "10 cm.",
        "D": "30 cm.",
        "answer": "A"
    },
    {
        "id": 121,
        "question": "Giun đũa thường đẻ trứng ở đâu?",
        "A": "Phổi.",
        "B": "Ruột non.",
        "C": "Ruột già.",
        "D": "Rìa hậu môn.",
        "answer": "B"
    },
    {
        "id": 122,
        "question": "Ký sinh trùng nào thường di chuyển nhiều làm ruột bị kích thích?",
        "A": "Amíp.",
        "B": "Giun tóc.",
        "C": "Giun móc.",
        "D": "Giun kim.",
        "answer": "B"
    },
    {
        "id": 123,
        "question": "Ký sinh vật nào có chu kỳ đơn giản?",
        "A": "Giun móc.",
        "B": "Sán dải heo.",
        "C": "Sán lá gan nhỏ.",
        "D": "Ký sinh trùng sốt rét.",
        "answer": "A"
    },
    {
        "id": 124,
        "question": "Mỗi ngày giun đũa đẻ trung bình khoảng bao nhiêu trứng?",
        "A": "2.000.",
        "B": "20.000.",
        "C": "30.000.",
        "D": "200.000.",
        "answer": "D"
    },
    {
        "id": 125,
        "question": "Một số ấu trùng có khả năng sinh sản gọi là hình thức sinh sản gì?",
        "A": "Đơn tính.",
        "B": "Hữu tính.",
        "C": "Lưỡng tính.",
        "D": "Phôi tử sinh.",
        "answer": "D"
    },
    {
        "id": 126,
        "question": "Những biện pháp nào sau đây phòng bệnh giun móc hữu hiệu nhất?",
        "A": "Vệ sinh ăn uống.",
        "B": "Mang giày dép.",
        "C": "Không ăn rau sống.",
        "D": "Cắt ngắn móng tay.",
        "answer": "B"
    },
    {
        "id": 127,
        "question": "Tại sao người bị nhiễm giun móc?",
        "A": "Ăn phải trứng thụ tinh.",
        "B": "Ăn phải trứng mất vỏ ngoài cùng.",
        "C": "Ăn phải trứng có ấu trùng.",
        "D": "Ấu trùng chui qua da.",
        "answer": "D"
    },
    {
        "id": 128,
        "question": "Thời gian hoàn thành chu kỳ phát triển của giun móc khoảng bao lâu?",
        "A": "1,5 tháng.",
        "B": "3 tháng.",
        "C": "6 tháng.",
        "D": "9 tháng.",
        "answer": "A"
    },
    {
        "id": 129,
        "question": "Trứng giun đũa thụ tinh có khả năng lây nhiễm khi nào?",
        "A": "Khi ấu trùng ra khỏi vỏ trứng.",
        "B": "Nhiệt độ 37oC.",
        "C": "Sau khi phát triển thành trứng có chứa ấu trùng.",
        "D": "Khi đến phổi.",
        "answer": "C"
    },
    {
        "id": 130,
        "question": "Trứng giun kim có khả năng lây nhiễm khi nào?",
        "A": "Khi ấu trùng ra khỏi vỏ trứng.",
        "B": "Nhiệt độ 37oC.",
        "C": "Khi ở ngoại cảnh một thời gian.",
        "D": "Sau khi đẻ 6-8 giờ.",
        "answer": "D"
    },
    {
        "id": 131,
        "question": "Trứng giun nào có nhiều hình dạng khác nhau nhất?",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "B"
    },
    {
        "id": 132,
        "question": "Giun kim thường đẻ trứng ở đâu?",
        "A": "Gan.",
        "B": "Ruột non.",
        "C": "Ruột già.",
        "D": "Rìa hậu môn.",
        "answer": "D"
    },
    {
        "id": 133,
        "question": "Đặc điểm của trứng giun tóc là:",
        "A": "Hình bầu dục, hơi lép 1 bên.",
        "B": "2 đầu trứng có 2 nút nhầy rất chiết quang.",
        "C": "Có lớp Albumin dầy.",
        "D": "Hình bầu dục, vỏ mỏng trong suốt.",
        "answer": "B"
    },
    {
        "id": 134,
        "question": "Nghề nghiệp có nguy cơ nhiễm giun móc cao hơn là:",
        "A": "Công nhân cạo mủ cao su.",
        "B": "Nông dân nuôi thủy sản.",
        "C": "Nông dân trồng lúa nước",
        "D": "Thợ may.",
        "answer": "A"
    },
    {
        "id": 135,
        "question": "Sử dụng phương pháp Graham để chẩn đoán:",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "C"
    },
    {
        "id": 136,
        "question": "Trong những loại giun sau đây, giun đực nào có đuôi xòe?",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "A"
    },
    {
        "id": 137,
        "question": "Giun trưởng thành nào sau đây có kích thước lớn nhất?",
        "A": "Giun móc.",
        "B": "Giun đũa.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "B"
    },
    {
        "id": 138,
        "question": "Enterobius vermicularis là tên khoa học của ký sinh trùng nào?",
        "A": "Giun kim.",
        "B": "Giun đũa.",
        "C": "Giun móc.",
        "D": "Giun tóc.",
        "answer": "A"
    },
    {
        "id": 139,
        "question": "Ascaris lumbricoides là tên khoa học của ký sinh trùng nào?",
        "A": "Giun kim.",
        "B": "Giun đũa.",
        "C": "Giun móc.",
        "D": "Giun tóc.",
        "answer": "B"
    },
    {
        "id": 140,
        "question": "Trichuris trichiura là tên khoa học của ký sinh trùng nào?",
        "A": "Giun tóc.",
        "B": "Giun đũa.",
        "C": "Giun móc.",
        "D": "Giun kim.",
        "answer": "A"
    },
    {
        "id": 141,
        "question": "Giun kim thường ký sinh ở đâu?",
        "A": "Cuối ruột non, đầu ruột già.",
        "B": "Chỉ ký sinh ở ruột non.",
        "C": "Đầu ruột non, cuối ruột già.",
        "D": "Chỉ ký sinh ở ruột già.",
        "answer": "A"
    },
    {
        "id": 142,
        "question": "Giun móc thường ký sinh ở đâu?",
        "A": "Đại tràng.",
        "B": "Tá tràng.",
        "C": "Trực tràng.",
        "D": "Ruột thừa.",
        "answer": "B"
    },
    {
        "id": 143,
        "question": "Tác hại của giun móc thường gây ra là:",
        "A": "Suy dinh dưỡng.",
        "B": "Thiếu máu.",
        "C": "Rối loạn tiêu hóa.",
        "D": "Sa trực tràng.",
        "answer": "B"
    },
    {
        "id": 144,
        "question": "Giun đũa thường gây tác hại gì?",
        "A": "Suy dinh dưỡng.",
        "B": "Thiếu máu.",
        "C": "Phù voi.",
        "D": "Sa trực tràng.",
        "answer": "A"
    },
    {
        "id": 145,
        "question": "Ấu trùng giun đũa đến đâu có thể sẽ gây ra hội chứng Loeffler :",
        "A": "Gan.",
        "B": "Phổi.",
        "C": "Ruột già.",
        "D": "Ruột non.",
        "answer": "B"
    },
    {
        "id": 146,
        "question": "Clonorchis sinensis là tên khoa học của ký sinh trùng nào?",
        "A": "Sán dải heo.",
        "B": "Giun tóc.",
        "C": "Giun kim.",
        "D": "Sán lá gan nhỏ.",
        "answer": "D"
    },
    {
        "id": 147,
        "question": "Đốt sán dải heo sinh sản bằng cách nảy chồi từ đốt nào?",
        "A": "Già.",
        "B": "Trung gian.",
        "C": "Cuối.",
        "D": "Cổ.",
        "answer": "D"
    },
    {
        "id": 148,
        "question": "Kén sán dải heo có hình gì?",
        "A": "Que.",
        "B": "Hạt gạo.",
        "C": "Hình dạng luôn thay đổi.",
        "D": "Hạt đậu.",
        "answer": "B"
    },
    {
        "id": 149,
        "question": "Ký sinh vật nào có chu kỳ phức tạp?",
        "A": "Sán lá.",
        "B": "Giun đũa.",
        "C": "Amíp.",
        "D": "Trùng roi.",
        "answer": "A"
    },
    {
        "id": 150,
        "question": "Ký sinh vật nào sinh sản đa phôi?",
        "A": "Giun.",
        "B": "Sán dải.",
        "C": "Sán lá.",
        "D": "Ký sinh trùng sốt rét.",
        "answer": "C"
    },
    {
        "id": 151,
        "question": "Trong chu trình phát triển của sán lá gan nhỏ, giai đoạn ấu trùng lông ký sinh ở:",
        "A": "Cá nước ngọt.",
        "B": "Cá biển.",
        "C": "Ốc.",
        "D": "Heo.",
        "answer": "C"
    },
    {
        "id": 152,
        "question": "Ký sinh vật nào sinh sản lưỡng tính?",
        "A": "Giun.",
        "B": "Sán dải.",
        "C": "Sán lá.",
        "D": "Ký sinh trùng sốt rét.",
        "answer": "B"
    },
    {
        "id": 153,
        "question": "Tại sao người mắc bệnh kén (ấu trùng) sán dải heo?",
        "A": "Do nhiễm kén sán.",
        "B": "Do nhiễm trứng sán.",
        "C": "Do nhiễm bào nang.",
        "D": "Do ấu trùng qua da.",
        "answer": "B"
    },
    {
        "id": 154,
        "question": "Trung gian truyền bệnh sán lá gan nhỏ là gì?",
        "A": "Muỗi.",
        "B": "Cá nước ngọt.",
        "C": "Heo.",
        "D": "Bò.",
        "answer": "B"
    },
    {
        "id": 155,
        "question": "Biện pháp phòng ngừa bệnh sán dải heo là gì?",
        "A": "Mang giày dép.",
        "B": "Không ăn thịt heo chưa nấu chín.",
        "C": "Vệ sinh ăn uống.",
        "D": "Vệ sinh môi trường.",
        "answer": "B"
    },
    {
        "id": 156,
        "question": "Kích thước sán lá gan nhỏ khi trưởng thành thường là bao nhiêu?",
        "A": "1mm X 3-5mm.",
        "B": "1cm X 3-5cm.",
        "C": "1mm X 3-5cm.",
        "D": "1cm X 3-5mm.",
        "answer": "D"
    },
    {
        "id": 157,
        "question": "Taenia solium là tên khoa học của ký sinh trùng nào?",
        "A": "Sán dải heo.",
        "B": "Sán dải bò.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "A"
    },
    {
        "id": 158,
        "question": "Taenia saginata là tên khoa học của ký sinh trùng nào?",
        "A": "Sán lá ruột.",
        "B": "Sán dải bò.",
        "C": "Giun kim.",
        "D": "Giun tóc.",
        "answer": "B"
    },
    {
        "id": 159,
        "question": "Người có thể mắc bệnh sán dải heo trưởng thành do ăn:",
        "A": "Thịt bò tái.",
        "B": "Tiết canh heo.",
        "C": "Gỏi cá.",
        "D": "Thịt heo tái.",
        "answer": "D"
    },
    {
        "id": 160,
        "question": "Người có thể mắc bệnh sán dải bò trưởng thành do ăn:",
        "A": "Thịt heo tái.",
        "B": "Thịt bò tái.",
        "C": "Rau, quả tươi không sạch.",
        "D": "Tôm, cua sống.",
        "answer": "B"
    },
    {
        "id": 161,
        "question": "Sử dụng phương pháp Graham có thể tìm thấy trứng:",
        "A": "Sán lá gan nhỏ.",
        "B": "Giun móc.",
        "C": "Sán dải bò.",
        "D": "Giun tóc.",
        "answer": "C"
    },
    {
        "id": 162,
        "question": "Đường xâm nhập của sán lá vào cơ thể người là:",
        "A": "Tiêu hóa.",
        "B": "Máu.",
        "C": "Hô hấp.",
        "D": "Da.",
        "answer": "A"
    },
    {
        "id": 163,
        "question": "Kích thước của sán dải heo có thể dài bao nhiêu?",
        "A": "8 mm.",
        "B": "8 cm.",
        "C": "80 cm.",
        "D": "8 m.",
        "answer": "D"
    },
    {
        "id": 164,
        "question": "Sán lá gan trưởng thành thường ký sinh ở:",
        "A": "Ống mật.",
        "B": "Gan.",
        "C": "Lách.",
        "D": "Phổi.",
        "answer": "A"
    },
    {
        "id": 165,
        "question": "Sán dải heo, sán dải bò thường ký sinh ở:",
        "A": "Ruột non.",
        "B": "Ruột già.",
        "C": "Ruột thừa.",
        "D": "Ống mật.",
        "answer": "A"
    },
    {
        "id": 166,
        "question": "Chu kỳ không sinh bệnh của Entamoeba histolytica xảy ra ở đâu?",
        "A": "Gan.",
        "B": "Môi trường bên ngoài.",
        "C": "Vách ruột.",
        "D": "Lòng ruột.",
        "answer": "D"
    },
    {
        "id": 167,
        "question": "Chu kỳ sinh bệnh của Entamoeba histolytica xảy ra ở đâu?",
        "A": "Trong ký chủ.",
        "B": "Môi trường bên ngoài.",
        "C": "Vách ruột.",
        "D": "Lòng ruột.",
        "answer": "C"
    },
    {
        "id": 168,
        "question": "Ký sinh vật nào có hình dạng hay thay đổi?",
        "A": "Thể hoạt động của trùng roi.",
        "B": "Thể bào nang của amip.",
        "C": "Thể hoạt động của amip.",
        "D": "Thể bào nang của trùng roi.",
        "answer": "C"
    },
    {
        "id": 169,
        "question": "Trùng roi thường ký sinh ở đâu?",
        "A": "Ruột non.",
        "B": "Dạ dày.",
        "C": "Âm đạo.",
        "D": "Đại tràng.",
        "answer": "C"
    },
    {
        "id": 170,
        "question": "Bệnh phẩm thường sử dụng để chẩn đoán bệnh lỵ amíp ở ruột là:",
        "A": "Máu.",
        "B": "Đàm.",
        "C": "Phân.",
        "D": "Nước tiểu.",
        "answer": "C"
    },
    {
        "id": 171,
        "question": "Bệnh phẩm thường sử dụng để chẩn đoán bệnh lỵ amíp ngoài ruột là:",
        "A": "Máu.",
        "B": "Đàm.",
        "C": "Phân.",
        "D": "Nước tiểu.",
        "answer": "A"
    },
    {
        "id": 172,
        "question": "Thể hoạt động của amíp tồn tại bao lâu khi rời khỏi ký chủ?",
        "A": "2 giờ.",
        "B": "4 giờ.",
        "C": "6 giờ.",
        "D": "8 giờ.",
        "answer": "A"
    },
    {
        "id": 173,
        "question": "Trùng roi thường gây bệnh ở đối tượng nào?",
        "A": "Trẻ dậy thì.",
        "B": "Phụ nữ tuổi sinh đẻ.",
        "C": "Trẻ em.",
        "D": "Nam.",
        "answer": "B"
    },
    {
        "id": 174,
        "question": "Trichomonas vaginalis thích hợp với môi trường có độ pH bao nhiêu?",
        "A": "4 - 4,5.",
        "B": "5 - 5,5.",
        "C": "6 - 6,5.",
        "D": "7 - 7,5.",
        "answer": "C"
    },
    {
        "id": 175,
        "question": "Ở thể nào amíp dễ lây nhiễm?",
        "A": "Thể hoạt động.",
        "B": "Thể hoạt động nhỏ.",
        "C": "Thể hoạt động lớn.",
        "D": "Bào nang.",
        "answer": "D"
    },
    {
        "id": 176,
        "question": "Trichomonas vaginalis là tên khoa học của ký sinh trùng nào?",
        "A": "Trùng roi.",
        "B": "Trùng lông.",
        "C": "Trùng bào tử.",
        "D": "Amíp.",
        "answer": "A"
    },
    {
        "id": 177,
        "question": "Trichomonas vaginalis thường lây truyền qua đường nào?",
        "A": "Quan hệ tình dục.",
        "B": "Qua đường máu.",
        "C": "Qua ăn uống.",
        "D": "Qua hô hấp.",
        "answer": "A"
    },
    {
        "id": 178,
        "question": "Thể Bào nang Entamoeba histolytica nhiễm vào người:",
        "A": "Qua đường tiêu hóa.",
        "B": "Qua đường hô hấp.",
        "C": "Qua da.",
        "D": "Do côn trùng truyền.",
        "answer": "A"
    },
    {
        "id": 179,
        "question": "Thể Entamoeba histolytica thường gây áp xe ở:",
        "A": "Ruột non.",
        "B": "Não.",
        "C": "Gan.",
        "D": "Lách.",
        "answer": "C"
    },
    {
        "id": 180,
        "question": "Thể hoạt động lớn của Entamoeba histolytica:",
        "A": "Không gây bệnh.",
        "B": "Thường gây bệnh cấp, có khả năng trở thành mãn tính hoặc có biến chứng.",
        "C": "Luôn luôn có biến chứng.",
        "D": "Gây bệnh hàng loạt.",
        "answer": "B"
    },
    {
        "id": 181,
        "question": "Hình dạng của trichomonas giống:",
        "A": "Hình quả lê.",
        "B": "Hình trụ.",
        "C": "Hình hạt gạo.",
        "D": "Hình liềm.",
        "answer": "A"
    },
    {
        "id": 182,
        "question": "Entamoeba histolytica ở thể nào gây bệnh cho người?",
        "A": "Thể hoạt động.",
        "B": "Thể hoạt động nhỏ.",
        "C": "Thể hoạt động lớn.",
        "D": "Bào nang.",
        "answer": "C"
    },
    {
        "id": 183,
        "question": "Amíp ở thể nào có sức đề kháng cao nhất?",
        "A": "Thể hoạt động.",
        "B": "Thể hoạt động nhỏ.",
        "C": "Thể hoạt động lớn.",
        "D": "Bào nang.",
        "answer": "D"
    },
    {
        "id": 184,
        "question": "Khi vào cơ thể muỗi, thể nào của ký sinh trùng sốt rét phát triển thành giao tử?",
        "A": "Tất cả các thể.",
        "B": "Phân liệt.",
        "C": "Thoa trùng.",
        "D": "Giao bào.",
        "answer": "D"
    },
    {
        "id": 185,
        "question": "Ký sinh trùng sốt rét sinh sản hữu tính ở đâu?",
        "A": "Muỗi.",
        "B": "Máu.",
        "C": "Cơ thể người.",
        "D": "Ngoại cảnh.",
        "answer": "A"
    },
    {
        "id": 186,
        "question": "Ký sinh trùng sốt rét sinh sản vô tính ở đâu?",
        "A": "Muỗi.",
        "B": "Hồng cầu.",
        "C": "Bọ gậy.",
        "D": "Bạch cầu.",
        "answer": "B"
    },
    {
        "id": 187,
        "question": "Ký sinh trùng sốt rét từ muỗi vào người ở dạng nào?",
        "A": "Thoa trùng.",
        "B": "Tư dưỡng.",
        "C": "Giao bào.",
        "D": "Mảnh trùng.",
        "answer": "A"
    },
    {
        "id": 188,
        "question": "Ký sinh trùng sốt rét từ người vào muỗi ở thể nào tiếp tục phát triển?",
        "A": "Thoa trùng.",
        "B": "Tư dưỡng.",
        "C": "Giao bào.",
        "D": "Mảnh trùng.",
        "answer": "C"
    },
    {
        "id": 189,
        "question": "Loại ký sinh trùng sốt rét nào thường thấy ở Việt Nam?",
        "A": "P. malariae, P. ovale.",
        "B": "P. ovale, P. vivax.",
        "C": "P. falciparum, P. vivax.",
        "D": "P. malariae, P. vivax.",
        "answer": "C"
    },
    {
        "id": 190,
        "question": "Thể nào của ký sinh trùng sốt rét có hình nhẫn?",
        "A": "Thể tư dưỡng non.",
        "B": "Thể tư dưỡng già.",
        "C": "Thể phân liệt.",
        "D": "Thể giao bào.",
        "answer": "A"
    },
    {
        "id": 191,
        "question": "Nếu không vào cơ thể muỗi thì bao lâu giao bào sẽ bị tiêu hủy?",
        "A": "3 ngày.",
        "B": "3 tuần.",
        "C": "3 tháng.",
        "D": "3 năm.",
        "answer": "C"
    },
    {
        "id": 192,
        "question": "Ký sinh trùng sốt rét cần bao nhiêu ký chủ?",
        "A": "2 ký chủ.",
        "B": "3 ký chủ.",
        "C": "4 ký chủ.",
        "D": "5 ký chủ.",
        "answer": "A"
    },
    {
        "id": 193,
        "question": "Tại sao Plasmodium falciparum không gây tái phát xa?",
        "A": "Vì không có chu trình hồng cầu.",
        "B": "Vì thể giao bào phát triển sau chu trình hồng cầu.",
        "C": "Vì sau chu trình tiền hồng cầu, không còn ký sinh trùng trong gan.",
        "D": "Vì toàn bộ thoa trùng đến gan.",
        "answer": "C"
    },
    {
        "id": 194,
        "question": "Khi nào xuất hiện đủ các thể của Plasmodium falciparum trong máu ngoại vi?",
        "A": "Sau khi ký sinh trùng vào máu 30 phút.",
        "B": "Sau khi ký sinh trùng đến gan 30 phút.",
        "C": "Trong trường hợp bệnh rất nặng.",
        "D": "Khi nhiễm bệnh đã lâu ngày.",
        "answer": "C"
    },
    {
        "id": 195,
        "question": "Hình thức sinh sản của ký sinh trùng sốt rét là:",
        "A": "Vô tính, hữu tính.",
        "B": "Hữu tính, đa phôi.",
        "C": "Đa phôi, phôi tử sinh.",
        "D": "Phôi tử sinh, vô tính.",
        "answer": "A"
    },
    {
        "id": 196,
        "question": "Người có thể bị nhiễm ký sinh trùng sốt rét do:",
        "A": "Muỗi truyền, quan hệ tình dục.",
        "B": "Muỗi truyền, truyền máu.",
        "C": "Quan hệ tình dục, truyền qua nhau thai.",
        "D": "Ăn uống, truyền qua nhau thai.",
        "answer": "B"
    },
    {
        "id": 197,
        "question": "Cơn sốt rét điển hình trải qua 3 giai đoạn theo thứ tự từ:",
        "A": "Rét run, đổ mồ hôi, sốt.",
        "B": "Rét run, sốt, đổ mồ hôi.",
        "C": "Sốt, rét run, đổ mồ hôi.",
        "D": "Sốt, đổ mồ hôi, rét run.",
        "answer": "B"
    },
    {
        "id": 198,
        "question": "Chu trình phát triển của ký sinh trùng sốt rét ở muỗi tùy thuộc vào:",
        "A": "Số lượng giao bào được muỗi hút vào dạ dày.",
        "B": "Nhiệt độ của môi trường bên ngoài.",
        "C": "Độ ẩm của không khí.",
        "D": "Bệnh nhân đã được điều trị hay chưa.",
        "answer": "B"
    },
    {
        "id": 199,
        "question": "Thể tư dưỡng của ký sinh trùng sốt rét ở người có đặc điểm:",
        "A": "Gây nhiễm cho muỗi.",
        "B": "Phát triển thành thể phân liệt.",
        "C": "Luôn luôn phá hủy hồng cầu ký chủ.",
        "D": "Luôn chứa sắc tố sốt rét.",
        "answer": "B"
    },
    {
        "id": 200,
        "question": "Thị kính của kính hiển vi thường có độ phóng đại là:",
        "A": "10X.",
        "B": "20X.",
        "C": "30X.",
        "D": "40X.",
        "answer": "A"
    },
    {
        "id": 201,
        "question": "Vật kính nào sau đây còn gọi là vật kính dầu?",
        "A": "Vật kính 10X.",
        "B": "Vật kính 20X.",
        "C": "Vật kính 40X.",
        "D": "Vật kính 100X.",
        "answer": "D"
    },
    {
        "id": 202,
        "question": "Sử dụng thị kính có độ phóng đại 10X, vật kính 10X thì hình ảnh của vật phóng đại bao nhiêu lần?",
        "A": "10 lần.",
        "B": "20 lần.",
        "C": "100 lần.",
        "D": "1000 lần.",
        "answer": "C"
    },
    {
        "id": 203,
        "question": "Kính tụ quang trong kính hiển vi là gì?",
        "A": "Là một thấu kính hội tụ.",
        "B": "Là một thấu kính phân kì.",
        "C": "Là một hệ thống thấu kính hội tụ.",
        "D": "Là một hệ thống thấu kính phân kì.",
        "answer": "C"
    },
    {
        "id": 204,
        "question": "Vật kính 100X có độ phóng đại bao nhiêu?",
        "A": "10 lần.",
        "B": "50 lần.",
        "C": "100 lần.",
        "D": "1000 lần.",
        "answer": "C"
    },
    {
        "id": 205,
        "question": "Về phương diện phân loại vi khuẩn được xếp vào:",
        "A": "Giới protista.",
        "B": "Giới động vật.",
        "C": "Giới vi nấm.",
        "D": "Giới tiền hạt.",
        "answer": "D"
    },
    {
        "id": 206,
        "question": "Đơn vị thường dùng để đo kích thước của vi khuẩn là:",
        "A": "Picomet (pm).",
        "B": "Nanomet (nm).",
        "C": "Micromet (µm).",
        "D": "Milimet (mm).",
        "answer": "C"
    },
    {
        "id": 207,
        "question": "Thành phần hóa học chiếm nhiều nhất của màng tế bào của vi khuẩn là:",
        "A": "Protein.",
        "B": "Lipid.",
        "C": "Phospholipid.",
        "D": "Glucid.",
        "answer": "A"
    },
    {
        "id": 208,
        "question": "Yếu tố quyết định tính kháng nguyên thân của tế bào vi khuẩn là:",
        "A": "Màng tế bào.",
        "B": "Vách tế bào.",
        "C": "Vỏ.",
        "D": "Nguyên sinh chất.",
        "answer": "B"
    },
    {
        "id": 209,
        "question": "Lông của tế bào vi khuẩn được phân bố ở :",
        "A": "Xung quanh thân.",
        "B": "Một đầu vi khuẩn.",
        "C": "Hai đầu vi khuẩn.",
        "D": "Tùy theo từng loại.",
        "answer": "D"
    },
    {
        "id": 210,
        "question": "Nha bào của vi khuẩn trở về trạng thái hoạt động khi:",
        "A": "Vào cơ thể người.",
        "B": "Trên môi trường nuôi cấy thích hợp.",
        "C": "Điều kiện khô hanh.",
        "D": "Nhiệt độ cao.",
        "answer": "A"
    },
    {
        "id": 211,
        "question": "Thành phần nào sau đây giúp vi khuẩn chống lại hiện tượng thực bào:",
        "A": "Lông.",
        "B": "Vỏ.",
        "C": "Vách.",
        "D": "Pili.",
        "answer": "B"
    },
    {
        "id": 212,
        "question": "Hầu hết vi khuẩn có thể phát triển được ở nhiệt độ:",
        "A": "5 - 20˚C.",
        "B": "15 - 35˚C.",
        "C": "20 - 42˚C.",
        "D": "30 - 50˚C.",
        "answer": "C"
    },
    {
        "id": 213,
        "question": "Ngoại độc tố của vi khuẩn có tính chất sau:",
        "A": "Được tiết ra ngoài khi vi khuẩn sống.",
        "B": "Ít độc.",
        "C": "Là một glycoprotein.",
        "D": "Không dùng sản xuất vaccin.",
        "answer": "A"
    },
    {
        "id": 214,
        "question": "Staphylococcus aureus gây bệnh do:",
        "A": "Tiết enterotoxin (độc tố ruột).",
        "B": "Tiết enzym Coagulase.",
        "C": "Tiết enzym Staphylokinase.",
        "D": "Khả năng xâm lấn, đồng thời tiết enzym và độc tố.",
        "answer": "D"
    },
    {
        "id": 215,
        "question": "Sưng yết hầu do Streptococci, bệnh phẩm gửi đến phòng xét nghiệm có thể là:",
        "A": "Quệt yết hầu.",
        "B": "Đàm.",
        "C": "Máu.",
        "D": "Quệt yết hầu hoặc đàm.",
        "answer": "D"
    },
    {
        "id": 216,
        "question": "Các loại cầu khuẩn có tính chất nào sau đây:",
        "A": "Không di động.",
        "B": "Bắt màu Gram dương.",
        "C": "Bắt màu Gram âm.",
        "D": "Có vỏ.",
        "answer": "B"
    },
    {
        "id": 217,
        "question": "Tính chất sau không phải tiêu chuẩn chẩn đoán tụ cầu:",
        "A": "Lên men đường mannit.",
        "B": "Cầu khuẩn tụ lại thành đám.",
        "C": "Catalase âm tính.",
        "D": "Đông huyết tương.",
        "answer": "C"
    },
    {
        "id": 218,
        "question": "Tụ cầu vàng có tính chất sau:",
        "A": "Phát triển dễ dàng ở môi trường thạch thường.",
        "B": "Thích hợp ở nhiệt độ 25 - 30˚C.",
        "C": "Khí trường phải có 10% CO2 mới phát triển.",
        "D": "Không sinh sắc tố.",
        "answer": "A"
    },
    {
        "id": 219,
        "question": "Loại men sau làm cho tụ cầu lan tràn dễ dàng trong tổ chức của cơ thể:",
        "A": "Coagulase.",
        "B": "Hyaluronidase.",
        "C": "Catalase.",
        "D": "Fibrinolyzin.",
        "answer": "B"
    },
    {
        "id": 220,
        "question": "Đặc điểm sinh vật học để phân biệt tụ cầu vàng với liên cầu là:",
        "A": "Tan máu.",
        "B": "Di động.",
        "C": "Men catalase.",
        "D": "Sinh nha bào.",
        "answer": "C"
    },
    {
        "id": 221,
        "question": "Biện pháp phòng bệnh nào sau đây không có hiệu quả đối với tụ cầu vàng:",
        "A": "Vệ sinh ăn uống.",
        "B": "Dùng vacxin.",
        "C": "Vệ sinh cá nhân.",
        "D": "Vệ sinh môi trường.",
        "answer": "B"
    },
    {
        "id": 222,
        "question": "Tính chất nào sau đây không có ở liên cầu khuẩn:",
        "A": "Catalase âm tính.",
        "B": "Có thể không tan máu.",
        "C": "Khuẩn lạc nhỏ, trong.",
        "D": "Chỉ có nhóm A mới gây bệnh.",
        "answer": "D"
    },
    {
        "id": 223,
        "question": "Phản ứng ASO để tìm kháng thể chống lại loại men nào của liên cầu khuẩn:",
        "A": "Streptolysin O.",
        "B": "Streptolysin S.",
        "C": "Streptolysin K.",
        "D": "Streptokinase.",
        "answer": "A"
    },
    {
        "id": 224,
        "question": "Vi khuẩn đường ruột Escherichia coli có thể gây ra :",
        "A": "Sốt hậu sản.",
        "B": "Viêm xoang.",
        "C": "Sốt thấp khớp.",
        "D": "Viêm đường tiểu.",
        "answer": "D"
    },
    {
        "id": 225,
        "question": "EIEC ( Enteroinvasive Escherichia coli ) gây :",
        "A": "Tiêu chảy phân có đàm máu.",
        "B": "Tiêu chảy mất nước.",
        "C": "Hội chứng tan máu – urê huyết.",
        "D": "Suy thận cấp.",
        "answer": "A"
    },
    {
        "id": 226,
        "question": "Thời gian giun móc có thể sống trong cơ thể người là:",
        "A": "1 - 2 tháng.",
        "B": "3 - 6 tháng.",
        "C": "1 - 2 năm.",
        "D": "5 - 6 năm.",
        "answer": "D"
    },
    {
        "id": 227,
        "question": "Trichuris trichiura ký sinh ở :",
        "A": "Cơ vân, gây liệt.",
        "B": "Ruột non, gây lỵ.",
        "C": "Ruột già, gây ngứa hậu môn.",
        "D": "Ruột già, gây lỵ.",
        "answer": "D"
    },
    {
        "id": 228,
        "question": "Biện pháp quan trọng nhất đề phòng chống bệnh giun tóc:",
        "A": "Phát hiện và điều trị cho người bệnh.",
        "B": "Không dùng phân tươi để bón ruộng.",
        "C": "Tránh đi chân đất hoặc tiếp xúc với đất.",
        "D": "Ăn sạch, uống sạch.",
        "answer": "D"
    },
    {
        "id": 229,
        "question": "Kháng nguyên Vi còn gọi là :",
        "A": "Kháng nguyên O.",
        "B": "Kháng nguyên H.",
        "C": "Kháng nguyên K.",
        "D": "Kháng nguyên streptolysin O.",
        "answer": "C"
    },
    {
        "id": 230,
        "question": "Vào thời kỳ ủ bệnh của Thương hàn, Salmonella tăng sinh ở :",
        "A": "Ruột non.",
        "B": "Ruột già.",
        "C": "Túi mật.",
        "D": "Hạch lympho.",
        "answer": "D"
    },
    {
        "id": 231,
        "question": "Bệnh phẩm dùng để xét nghiệm chẩn đoán bệnh sốt thương hàn do Salmonella typhi là :",
        "A": "Máu.",
        "B": "Phân.",
        "C": "Nước tiểu.",
        "D": "Tùy giai đoạn của bệnh.",
        "answer": "D"
    },
    {
        "id": 232,
        "question": "Bệnh phẩm dùng để xét nghiệm chẩn đoán Escherichia coli là :",
        "A": "Nước tiểu.",
        "B": "Mủ.",
        "C": "Quệt yết hầu.",
        "D": "Đàm.",
        "answer": "A"
    },
    {
        "id": 233,
        "question": "Vi khuẩn gây bệnh uốn ván là :",
        "A": "Clostridium botulinum.",
        "B": "Clostridium tetani.",
        "C": "Clostridium perfringens.",
        "D": "Clostridium difficile.",
        "answer": "B"
    },
    {
        "id": 234,
        "question": "Bào tử của vi khuẩn Clostridium tetani bị diệt bởi :",
        "A": "Kháng sinh Penicillin liều cao.",
        "B": "Nhiệt độ 120ºC/ 30p.",
        "C": "Ngâm 5 giờ trong phenol 5%.",
        "D": "Ngâm 10 giờ trong dung dịch formalin 3%.",
        "answer": "B"
    },
    {
        "id": 235,
        "question": "Vi khuẩn Uốn ván tiết ra độc tố Tetanospamin là :",
        "A": "Một độc tố thần kinh mạnh, làm tan hồng cầu.",
        "B": "Một độc tố chịu được nhiệt, dịch vị của dạ dày.",
        "C": "Một độc tố ảnh hưởng thần kinh rất mạnh và có tính kháng nguyên cao.",
        "D": "Một độc tố chỉ gây những vết hoại tử nhỏ.",
        "answer": "C"
    },
    {
        "id": 236,
        "question": "Hình dạng của vi khuẩn Lao :",
        "A": "Que ngắn.",
        "B": "Xoắn, có thể có dạng hơi cong.",
        "C": "Que dài, mảnh dẻ, đôi khi hơi cong.",
        "D": "Cầu trực khuẩn.",
        "answer": "C"
    },
    {
        "id": 237,
        "question": "Thử nghiệm tuberculin dương tính ở người khi :",
        "A": "Chỗ chích sưng đỏ, và đường kính trên 1cm.",
        "B": "Chỗ chích sưng đỏ, và đường kính trên 2cm.",
        "C": "Chỗ chích sưng đỏ, sờ thấy cứng và đường kính trên 1cm.",
        "D": "Chỗ chích sưng đỏ, sờ thấy cứng và đường kính trên 2 cm.",
        "answer": "C"
    },
    {
        "id": 238,
        "question": "Bệnh phẩm dùng để xét nghiệm chẩn đoán bệnh Lao là :",
        "A": "Nước rửa bao tử.",
        "B": "Đàm.",
        "C": "Nước tiểu.",
        "D": "Tùy theo từng bệnh.",
        "answer": "B"
    },
    {
        "id": 239,
        "question": "Trực khuẩn lao không có tính chất sau :",
        "A": "Kháng cồn và acid.",
        "B": "Hiếu khí.",
        "C": "Bắt màu đỏ khi nhuộm Gram.",
        "D": "Phát triển chậm.",
        "answer": "C"
    },
    {
        "id": 240,
        "question": "Vaccin BCG được dùng tốt nhất cho:",
        "A": "Trẻ sơ sinh.",
        "B": "Trẻ 9 – 11 tháng.",
        "C": "Tất cả mọi người.",
        "D": "Người tiếp xúc với bệnh nhân lao.",
        "answer": "A"
    },
    {
        "id": 241,
        "question": "Helicobacter pylori rất di động nhờ vào :",
        "A": "Đơn mao ở một đầu.",
        "B": "Đơn mao ở hai đầu.",
        "C": "Nhiều chiên mao ở một đầu.",
        "D": "Chu mao quanh thân.",
        "answer": "C"
    },
    {
        "id": 242,
        "question": "Helicobacter pylori có đặc điểm nào dưới đây?",
        "A": "Vi khuẩn gram dương có dạng cánh chim hải âu.",
        "B": "Catalase (-), Oxidase (-).",
        "C": "Urease (+).",
        "D": "Kỵ khí tùy nghi.",
        "answer": "C"
    },
    {
        "id": 243,
        "question": "Các loại virus đều có đặc điểm sau:",
        "A": "Kích thước vài µm.",
        "B": "Có vỏ envelop.",
        "C": "Bị tiêu diệt bởi kháng sinh.",
        "D": "Nhân lên trong tế bào sống.",
        "answer": "D"
    },
    {
        "id": 244,
        "question": "Những bệnh nhân bị HBV không triệu chứng thì trong huyết thanh:",
        "A": "HBsAg (+).",
        "B": "HBeAg (+).",
        "C": "Anti - HBe (+).",
        "D": "Anti - HBs (+).",
        "answer": "A"
    },
    {
        "id": 245,
        "question": "Đáp ứng với vacxin viêm gan B khi :",
        "A": "HBsAg (-); Anti-HBs (-) ; HBcAb (+).",
        "B": "HBsAg (-); Anti-HBs (+), HBcAb (-).",
        "C": "HBsAg (-); Anti-HBs (+) ; HBcAb (+).",
        "D": "HBsAg (+); Anti-HBs (+) ; HBcAb (+).",
        "answer": "B"
    },
    {
        "id": 246,
        "question": "Kháng nguyên HBsAg tạo ra kháng thể tương ứng là :",
        "A": "Anti-HBs.",
        "B": "Anti-HBe.",
        "C": "Anti-HBc.",
        "D": "Anti-HCV.",
        "answer": "A"
    },
    {
        "id": 247,
        "question": "Bệnh Cúm thường gây biến chứng nào :",
        "A": "Viêm gan.",
        "B": "Viêm tai giữa.",
        "C": "Viêm phổi.",
        "D": "Viêm cơ tim.",
        "answer": "C"
    },
    {
        "id": 248,
        "question": "Bệnh ký sinh trùng phổ biến nhất ở Việt Nam hiện nay :",
        "A": "Bệnh sốt rét.",
        "B": "Các bệnh giun sán.",
        "C": "Bệnh amip.",
        "D": "Bệnh trùng roi.",
        "answer": "B"
    },
    {
        "id": 249,
        "question": "Yếu tố nguy cơ quan trọng nhất trong dịch tễ học ký sinh trùng ở Việt Nam hiện nay là:",
        "A": "Môi trường nóng ẩm.",
        "B": "Đa số dân còn nghèo.",
        "C": "Các hành vi dễ nhiễm ký sinh trùng.",
        "D": "Dân trí thấp.",
        "answer": "D"
    },
    {
        "id": 250,
        "question": "Tác hại hay gặp nhất do ký sinh trùng gây ra :",
        "A": "Thiếu máu.",
        "B": "Đau bụng.",
        "C": "Mất sinh chất.",
        "D": "Biến chứng nội khoa.",
        "answer": "C"
    },
    {
        "id": 251,
        "question": "Loại bệnh ký sinh trùng chỉ cần phòng bệnh thật tốt thì có thể hết bệnh trong một thời gian ngắn:",
        "A": "Giun tóc.",
        "B": "Sốt rét.",
        "C": "Sán lá gan.",
        "D": "Giun kim.",
        "answer": "D"
    },
    {
        "id": 252,
        "question": "Người bị nhiễm giun đũa có thể do:",
        "A": "Ăn gỏi cá.",
        "B": "Ăn tôm, cua sống.",
        "C": "Ăn rau, quả tươi không sạch.",
        "D": "Ăn thịt heo tái.",
        "answer": "C"
    },
    {
        "id": 253,
        "question": "Muốn chẩn đoán xác định bệnh giun đũa thường phải làm xét nghiệm:",
        "A": "Dịch tá tràng.",
        "B": "Phân.",
        "C": "Đàm.",
        "D": "Máu.",
        "answer": "B"
    },
    {
        "id": 254,
        "question": "Trứng giun đũa cần các điều kiện sau đây để phát triển trừ:",
        "A": "Nhiệt độ (24 – 25˚C).",
        "B": "Môi trường nước.",
        "C": "Ẩm độ cao.",
        "D": "Oxy.",
        "answer": "B"
    },
    {
        "id": 255,
        "question": "Người nhiễm Enterobius vermicularis do:",
        "A": "Nuốt trứng vào miệng.",
        "B": "Ăn thịt heo bị gạo.",
        "C": "Ấu trùng chui qua da.",
        "D": "Ăn rau sống.",
        "answer": "A"
    },
    {
        "id": 256,
        "question": "Để chẩn đoán bệnh giun kim, ta tiến hành phương pháp Graham vào:",
        "A": "Bất kỳ lúc nào thuận tiện.",
        "B": "Buổi sáng khi trẻ vừa thức dậy.",
        "C": "Buổi trưa.",
        "D": "Buổi chiều.",
        "answer": "B"
    },
    {
        "id": 257,
        "question": "Người có thể bị nhiễm giun kim do:",
        "A": "Ăn phải trứng giun có ấu trùng.",
        "B": "Ăn rau sống.",
        "C": "Uống nước lã.",
        "D": "Đi chân đất hoặc tiếp xúc với đất.",
        "answer": "A"
    },
    {
        "id": 258,
        "question": "Tác hại chính của giun kim:",
        "A": "Gây thiếu máu.",
        "B": "Chiếm chất dinh dưỡng.",
        "C": "Rối loạn tiêu hoá.",
        "D": "Rối loạn thần kinh.",
        "answer": "D"
    },
    {
        "id": 259,
        "question": "Trẻ em nhiễm giun kim chủ yếu do:",
        "A": "Ăn rau sống.",
        "B": "Ăn nem chua.",
        "C": "Mút tay.",
        "D": "Ấu trùng chui qua da.",
        "answer": "C"
    },
    {
        "id": 260,
        "question": "Phương pháp chẩn đoán lỵ amip tốt nhất là:",
        "A": "Tìm bào nang trong đàm.",
        "B": "Tìm thể hoạt động trong nước tiểu.",
        "C": "Tìm thể hoạt động trong phân.",
        "D": "Tìm Bào nang trong phân.",
        "answer": "C"
    }
];
