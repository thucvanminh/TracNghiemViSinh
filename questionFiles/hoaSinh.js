const questions = [
    {
        "id": 1,
        "question": "Lipid là những hợp chất có chứa các nguyên tố chính nào sau đây?",
        "A": "Carbon, hydro, nitơ",
        "B": "Hydro, oxy, nitơ",
        "C": "Carbon, oxy, nitơ",
        "D": "Carbon, hydro, oxy",
        "answer": "D"
    },
    {
        "id": 2,
        "question": "Chọn các nguyên tố chính cấu tạo nên cơ thể người?",
        "A": "Carbon, hydro, oxy, nitơ, calci",
        "B": "Carbon, hydro, oxy, nitơ, kali",
        "C": "Carbon, hydro, oxy, sắt, calci",
        "D": "Carbon, hydro, clo, nitơ, calci",
        "answer": "A"
    },
    {
        "id": 3,
        "question": "Hóa sinh là môn khoa học tổng hợp của các môn học nào sau đây?",
        "A": "Sinh học và hóa học hữu cơ",
        "B": "Sinh học và hóa học vô cơ",
        "C": "Sinh học và hóa học phân tích",
        "D": "Sinh học và hóa học định lượng",
        "answer": "A"
    },
    {
        "id": 4,
        "question": "Hầu hết dược phẩm đều được chuyển hóa trong cơ thể người bởi các phản ứng được xúc tác bằng chất nào sau đây?",
        "A": "Enzym",
        "B": "Vitamin",
        "C": "Chất vô cơ",
        "D": "Chất hóa học",
        "answer": "A"
    },
    {
        "id": 5,
        "question": "Chọn tên tác giả đề ra thuyết Ổ khóa và chìa khóa để giải thích tính đặc hiệu tuyệt đối của enzym đối với cơ chất?",
        "A": "E.Fischer",
        "B": "F.Sanger",
        "C": "P.Pauling",
        "D": "G.Cori",
        "answer": "A"
    },
    {
        "id": 6,
        "question": "Quá trình đồng hóa diễn ra trong cơ thể người được xúc tác bằng chất nào sau đây?",
        "A": "Enzym đặc hiệu",
        "B": "Cơ chất đặc hiệu",
        "C": "Vitamin",
        "D": "Các chất hoạt hóa",
        "answer": "A"
    },
    {
        "id": 7,
        "question": "Khi thủy phân cắt liên kết phosphate giàu năng lượng sẽ cho khoảng năng lượng bao nhiêu calo?",
        "A": "4000-8000 calo",
        "B": "8000-16000 calo",
        "C": "16000-24000 calo",
        "D": "24000-32000 calo",
        "answer": "B"
    },
    {
        "id": 8,
        "question": "Chu trình Krebs xảy ra trong đâu của các tế bào nhân thật?",
        "A": "Ty thể",
        "B": "Lạp thể",
        "C": "Bào tương",
        "D": "Mạng lưới nội chất",
        "answer": "A"
    },
    {
        "id": 9,
        "question": "Một vòng của chu trình Krebs sẽ cung cấp năng lượng dự trữ tương đương bao nhiêu ATP?",
        "A": "8 ATP",
        "B": "10 ATP",
        "C": "12 ATP",
        "D": "14 ATP",
        "answer": "C"
    },
    {
        "id": 10,
        "question": "Hô hấp tế bào là quá trình như thế nào?",
        "A": "Hấp thu CO2, thải oxy",
        "B": "Hấp thu oxy, thải CO2",
        "C": "Hấp thu CO2 và oxy",
        "D": "Thải CO2 và oxy",
        "answer": "B"
    },
    {
        "id": 11,
        "question": "Quá trình biến các phân tử hữu cơ có nguồn gốc khác nhau thành những phân tử hữu cơ riêng của cơ thể gọi là gì?",
        "A": "Đồng hóa",
        "B": "Dị hóa",
        "C": "Trao đổi chất",
        "D": "Hô hấp tế bào",
        "answer": "A"
    },
    {
        "id": 12,
        "question": "Sự phân giải các chất hữu cơ thành sản phẩm cuối cùng, đồng thời đào thải các chất cặn bã ra ngoài gọi là quá trình gì?",
        "A": "Đồng hóa",
        "B": "Dị hóa",
        "C": "Trao đổi chất",
        "D": "Hô hấp tế bào",
        "answer": "B"
    },
    {
        "id": 13,
        "question": "Quá trình nào là đặc trưng của sự sống sinh vật?",
        "A": "Chuyển hóa chất",
        "B": "Hấp thu",
        "C": "Tiêu hóa",
        "D": "Đào thải",
        "answer": "A"
    },
    {
        "id": 14,
        "question": "Quá trình đồng hóa lần lượt trải qua các giai đoạn nào sau đây?",
        "A": "Tiêu hóa --> hấp thu --> tổng hợp",
        "B": "Hấp thu --> tiêu hóa --> tổng hợp",
        "C": "Tổng hợp --> tiêu hóa --> hấp thu",
        "D": "Tổng hợp --> hấp thu --> tiêu hóa",
        "answer": "A"
    },
    {
        "id": 15,
        "question": "Sự hô hấp tế bào gồm các quá trình nào sau đây?",
        "A": "Tạo CO2 vận chuyển hydro tới oxy tạo nước",
        "B": "Tạo CO3 vận chuyển hydro tới oxy tạo nước",
        "C": "Tạo N2 vận chuyển hydro tới oxy tạo nước",
        "D": "Tạo NH3 vận chuyển hydro tới oxy tạo nước",
        "answer": "A"
    },
    {
        "id": 16,
        "question": "Chọn chất có liên kết phosphat giàu năng lượng nhất trong cơ thể?",
        "A": "ATP",
        "B": "ADP",
        "C": "AMP",
        "D": "H3PO4",
        "answer": "A"
    },
    {
        "id": 17,
        "question": "Đối với cơ thể người không thay đổi trong lượng, quá trình đồng hóa và dị hóa diễn ra như thế nào?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "A"
    },
    {
        "id": 18,
        "question": "Đối với cơ thể người đang lớn, quá trình đồng hóa và dị hóa diễn ra như thế nào?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "B"
    },
    {
        "id": 19,
        "question": "So sánh quá trình đồng hóa và dị hóa khi cơ thể người đang phục hồi sau bệnh?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "B"
    },
    {
        "id": 20,
        "question": "So sánh quá trình đồng hóa và dị hóa khi cơ thể người đang đói?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "C"
    },
    {
        "id": 21,
        "question": "So sánh quá trình đồng hóa và dị hóa khi cơ thể người về già?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "C"
    },
    {
        "id": 22,
        "question": "Đối với cơ thể người đang sút cân, quá trình đồng hóa và dị hóa diễn ra như thế nào?",
        "A": "Đồng hóa = Dị hóa",
        "B": "Đồng hóa > Dị hóa",
        "C": "Đồng hóa < Dị hóa",
        "D": "Đồng hóa ≥ Dị hóa",
        "answer": "C"
    },
    {
        "id": 23,
        "question": "Khi thủy phân cắt liên kết ATP (Adenosin Triphosphat) trong cơ thể người sẽ cho mức năng lượng bao nhiêu calo?",
        "A": "12 000 calo",
        "B": "10 000 calo",
        "C": "8 000 calo",
        "D": "6 000 calo",
        "answer": "A"
    },
    {
        "id": 24,
        "question": "Khi thủy phân hoàn toàn tinh bột sẽ tạo ra chất nào sau đây?",
        "A": "Galactose",
        "B": "Fructose",
        "C": "Saccarose",
        "D": "Glucose",
        "answer": "D"
    },
    {
        "id": 25,
        "question": "Tinh bột thuộc chất nào sau đây?",
        "A": "Monosaccarid",
        "B": "Oligosaccarid",
        "C": "Polysaccarid thuần",
        "D": "Polysaccarid tạp",
        "answer": "C"
    },
    {
        "id": 26,
        "question": "Vai trò chính của glucid là gì?",
        "A": "Tạo năng, tạo hình",
        "B": "Tạo năng, cung cấp chất dinh dưỡng",
        "C": "Tạo hình, tạo khung tế bào",
        "D": "Cung cấp chất dinh dưỡng, tạo hình",
        "answer": "A"
    },
    {
        "id": 27,
        "question": "Chọn monosaccarid hay gặp nhất?",
        "A": "Triose",
        "B": "Pentose",
        "C": "Hexose",
        "D": "Tetrose",
        "answer": "C"
    },
    {
        "id": 28,
        "question": "Trong điều kiện hiếu khí, oxy hóa hoàn toàn 1 phân tử glucose tự do theo chu trình Hexose diphosphat sẽ sinh ra bao nhiêu ATP?",
        "A": "12 ATP",
        "B": "20 ATP",
        "C": "38 ATP",
        "D": "45 ATP",
        "answer": "C"
    },
    {
        "id": 29,
        "question": "Chọn chất điều khiển chính các quá trình chuyển hóa glucid?",
        "A": "Hormon",
        "B": "Enzym",
        "C": "Lipid",
        "D": "Protid",
        "answer": "A"
    },
    {
        "id": 30,
        "question": "Chọn chất cung cấp năng lượng chủ yếu cho cơ thể người?",
        "A": "Protid",
        "B": "Glucid",
        "C": "Lipid",
        "D": "Vitamin",
        "answer": "B"
    },
    {
        "id": 31,
        "question": "Chọn hormon làm hạ glucose máu?",
        "A": "Insulin",
        "B": "Glucagon",
        "C": "Adrenalin",
        "D": "Thyroxin",
        "answer": "A"
    },
    {
        "id": 32,
        "question": "Quá trình tiêu hóa glucid xảy ra mạnh và hoàn toàn ở vị trí nào của đường tiêu hóa?",
        "A": "Ruột non",
        "B": "Dạ dày",
        "C": "Ruột già",
        "D": "Tá tràng",
        "answer": "A"
    },
    {
        "id": 33,
        "question": "Chọn dạng glucid dự trữ của người và động vật?",
        "A": "Glycogen",
        "B": "Cellulose",
        "C": "Glucosepolysaccarid",
        "D": "Glucose",
        "answer": "A"
    },
    {
        "id": 34,
        "question": "Chọn chất cung cấp năng lượng cho cơ thể sinh vật nhiều nhất?",
        "A": "Lipid",
        "B": "Glucid",
        "C": "Protid",
        "D": "Sorbitol",
        "answer": "A"
    },
    {
        "id": 35,
        "question": "Thoái hoái cholesterol ở gan sẽ tạo ra chất nào sau đây?",
        "A": "Testosterol",
        "B": "Acid mật",
        "C": "Kích thích tố",
        "D": "Progesterol",
        "answer": "B"
    },
    {
        "id": 36,
        "question": "Lipid cung cấp năng lượng gấp bao nhiêu lần so với glucid?",
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5",
        "answer": "A"
    },
    {
        "id": 37,
        "question": "Trong máu, lipid ở dưới dạng nào sau đây?",
        "A": "Phức lipo-protein",
        "B": "Lipid tự do",
        "C": "Phức lipid-glucid",
        "D": "Kết hợp với huyết cầu",
        "answer": "A"
    },
    {
        "id": 38,
        "question": "Thoái hoái cholesterol ở tinh hoàn sẽ tạo ra chất nào sau đây?",
        "A": "Testosterol",
        "B": "Acid mật",
        "C": "Kích thích tố",
        "D": "Progesterol",
        "answer": "A"
    },
    {
        "id": 39,
        "question": "Thoái hoái cholesterol ở buồng trứng sẽ tạo ra chất nào sau đây?",
        "A": "Testosterol",
        "B": "Acid mật",
        "C": "Kích thích tố",
        "D": "Progesterol",
        "answer": "D"
    },
    {
        "id": 40,
        "question": "Chọn lipo-protein có kích thước lớn nhất và hàm lượng triglycerid cao?",
        "A": "Chylomycron",
        "B": "Lipo-protein tỷ trọng thấp",
        "C": "Lipo-protein tỷ trọng trung gian",
        "D": "Lipo-protein tỷ trọng cao",
        "answer": "A"
    },
    {
        "id": 41,
        "question": "Cholesterol nào sau đây được coi là cholesterol xấu?",
        "A": "Chylomycron",
        "B": "Lipo-protein tỷ trọng thấp",
        "C": "Lipo-protein tỷ trọng trung gian",
        "D": "Lipo-protein tỷ trọng cao",
        "answer": "B"
    },
    {
        "id": 42,
        "question": "Cholesterol trong chất nào sau đây được coi là cholesterol tốt?",
        "A": "Chylomycron",
        "B": "Lipo-protein tỷ trọng thấp",
        "C": "Lipo-protein tỷ trọng trung gian",
        "D": "Lipo-protein tỷ trọng cao",
        "answer": "D"
    },
    {
        "id": 43,
        "question": "Chất nào sau đây trong cơ thể người giữ vai trò chính giúp hòa tan các vitamin tan trong dầu?",
        "A": "Lipid",
        "B": "Glucid",
        "C": "Protid",
        "D": "Enzym",
        "answer": "A"
    },
    {
        "id": 44,
        "question": "Chất nào sau đây trong cơ thể người giữ vai trò chính cách nhiệt, giúp cơ thể chống rét?",
        "A": "Lipid",
        "B": "Glucid",
        "C": "Protid",
        "D": "Enzym",
        "answer": "A"
    },
    {
        "id": 45,
        "question": "Chất nào sau đây trong cơ thể người có vai trò bảo vệ, tránh các sự va chạm từ bên ngoài?",
        "A": "Lipid",
        "B": "Glucid",
        "C": "Protid",
        "D": "Enzym",
        "answer": "A"
    },
    {
        "id": 46,
        "question": "Sterol quan trọng nhất trong cơ thể người là gì?",
        "A": "Sterid",
        "B": "Cholesterol",
        "C": "Alcol vòng",
        "D": "Alcol",
        "answer": "B"
    },
    {
        "id": 47,
        "question": "Vai trò của cholesterol là tham gia cấu tạo gì cho cơ thể?",
        "A": "Nhân tế bào",
        "B": "Màng tế bào",
        "C": "Ty thể",
        "D": "Ty lạp thể",
        "answer": "B"
    },
    {
        "id": 48,
        "question": "Một phân tử Hemoglobin kết hợp và vận chuyển được bao nhiêu phân tử O2?",
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4",
        "answer": "D"
    },
    {
        "id": 49,
        "question": "Cơ quan tạo ra nhiều hem nhất?",
        "A": "Gan, thận",
        "B": "Tủy xương, thận",
        "C": "Gan, tủy xương",
        "D": "Tủy xương, lách",
        "answer": "C"
    },
    {
        "id": 50,
        "question": "Khi có rối loạn chuyển hóa hemoglobin và bilirubin sẽ gây triệu chứng nào sau đây?",
        "A": "Vàng da",
        "B": "Xuất huyết",
        "C": "Loãng xương",
        "D": "Chậm phát triển chiều cao",
        "answer": "A"
    },
    {
        "id": 51,
        "question": "Chọn protid có vai trò tham gia các quá trình bảo vệ cơ thể?",
        "A": "Insulin",
        "B": "Lipase",
        "C": "Các kháng thể",
        "D": "Hemoglobin",
        "answer": "C"
    },
    {
        "id": 52,
        "question": "Vasopressin có tác dụng gì?",
        "A": "Tăng huyết áp, giảm tiểu tiện",
        "B": "Hạ huyết áp, giảm tiểu tiện",
        "C": "Tăng huyết áp, tăng tiểu tiện",
        "D": "Hạ huyết áp, tăng tiểu tiện",
        "answer": "A"
    },
    {
        "id": 53,
        "question": "Cấu tạo của protid gồm 4 nguyên tố chính nào sau đây?",
        "A": "H, C, O, N",
        "B": "H, C, O, S",
        "C": "Fe, C, O, N",
        "D": "H, C, S, Fe",
        "answer": "A"
    },
    {
        "id": 54,
        "question": "Enzym thường bị mất hoạt tính ở khoảng nhiệt độ nào sau đây?",
        "A": "30-40oC",
        "B": "40-50oC",
        "C": "50-60oC",
        "D": "60-70oC",
        "answer": "D"
    },
    {
        "id": 55,
        "question": "Trong phản ứng có sự xúc tác của enzym, khi tăng nhiệt độ lên 10oC, tốc độ phản ứng tăng khoảng bao nhiêu lần?",
        "A": "02 lần",
        "B": "03 lần",
        "C": "04 lần",
        "D": "05 lần",
        "answer": "A"
    },
    {
        "id": 56,
        "question": "Chọn nhiệt độ thích hợp cho hoạt động của đa số enzym?",
        "A": "30oC",
        "B": "35oC",
        "C": "40oC",
        "D": "45oC",
        "answer": "C"
    },
    {
        "id": 57,
        "question": "Chọn pH thích hợp cho hoạt động của đa số enzym?",
        "A": "Acid",
        "B": "Trung tính",
        "C": "Kiềm",
        "D": "Trung tính và kiềm",
        "answer": "B"
    },
    {
        "id": 58,
        "question": "Theo phân loại quốc tế, enzym được chia làm bao nhiêu nhóm?",
        "A": "06 nhóm",
        "B": "02 nhóm",
        "C": "04 nhóm",
        "D": "08 nhóm",
        "answer": "A"
    },
    {
        "id": 59,
        "question": "Những enzym cùng xúc tác một phản ứng hóa học gần giống nhau được gọi là gì?",
        "A": "Multienzym",
        "B": "Proenzym",
        "C": "Zymogen",
        "D": "Isozym",
        "answer": "D"
    },
    {
        "id": 60,
        "question": "Enzym là chất xúc tác sinh vật học có bản chất là gì?",
        "A": "Protid",
        "B": "Glucid",
        "C": "Lipid",
        "D": "Lipoprotein",
        "answer": "A"
    },
    {
        "id": 61,
        "question": "Phương pháp thường dùng để tinh chế enzyme là gì?",
        "A": "Kết tủa, sắc ký",
        "B": "Điện di, lọc",
        "C": "Lọc, sắc ký",
        "D": "Ly tâm, lọc",
        "answer": "A"
    },
    {
        "id": 62,
        "question": "Vitamin nào sau đây là chất chống oxy hóa tự nhiên quan trọng nhất?",
        "A": "Vitamin A",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin B1",
        "answer": "B"
    },
    {
        "id": 63,
        "question": "Thiếu vitamin nào sau đây thì cơ quan sinh sản và quá trình tạo phôi có thể bị ảnh hưởng?",
        "A": "Vitamin A",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin B1",
        "answer": "B"
    },
    {
        "id": 64,
        "question": "Chọn vitamin có tác dụng làm tăng hấp thu calci và phospho ở ruột?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin B1",
        "answer": "C"
    },
    {
        "id": 65,
        "question": "Thiếu vitamin nào sau đây sẽ gây bệnh còi xương ở trẻ em?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "C"
    },
    {
        "id": 66,
        "question": "Thiếu vitamin nào sau đây thì biểu mô dễ bị xơ chai và bị vi khuẩn xâm lấn?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "D"
    },
    {
        "id": 67,
        "question": "Chọn vitamin có chức năng duy trì tính nhạy cảm của mắt đối với việc thu nhận ánh sáng?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "D"
    },
    {
        "id": 68,
        "question": "Bệnh quáng gà là biểu hiện sớm của sự thiếu vitamin nào sau đây?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "D"
    },
    {
        "id": 69,
        "question": "Chọn vitamin tác động lên sự tổng hợp kháng thể, làm tăng sức đề kháng của cơ thể?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "A"
    },
    {
        "id": 70,
        "question": "Vitamin nào sau đây có chức năng tổng hợp thành phần mô liên kết (collagen) giúp lành sẹo, liền xương?",
        "A": "Vitamin C",
        "B": "Vitamin E",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "A"
    },
    {
        "id": 71,
        "question": "Vitamin nào sau đây có chức năng chống oxy hóa, chống gốc tự do?",
        "A": "Vitamin C",
        "B": "Vitamin B1",
        "C": "Vitamin D",
        "D": "Vitamin A",
        "answer": "A"
    }
];
