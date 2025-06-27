const questions = [
    {
        "id": 1,
        "question": "Thời gian NKBV thường xuất hiện sau khi người bệnh nhập viện là:",
        "A": "12 giờ",
        "B": "24 giờ",
        "C": "48 giờ",
        "D": "72 giờ",
        "answer": "C"
    },
    {
        "id": 2,
        "question": "Yếu tố làm tăng nguy cơ nhiễm khuẩn bệnh viện là:",
        "A": "Thiết bị và dụng cụ sử dụng trong sinh hoạt",
        "B": "Điều trị sau phẫu thuật",
        "C": "Sử dụng kháng sinh không thích hợp",
        "D": "Sử dụng các can thiệp khoa học kỹ thuật cao",
        "answer": "C"
    },
    {
        "id": 3,
        "question": "Công tác kiểm soát NKBV là nhiệm vụ của các cán bộ nào sau đây:",
        "A": "Giám đốc bệnh viện",
        "B": "Trưởng khoa",
        "C": "Điều dưỡng trưởng",
        "D": "Nhân viên y tế",
        "answer": "D"
    },
    {
        "id": 4,
        "question": "Nhiễm khuẩn bệnh viện là nhiễm khuẩn mắc phải khi nào?",
        "A": "Trước khi nhập viện",
        "B": "Trong thời gian nằm viện",
        "C": "Sau khi xuất viện",
        "D": "Sau khi hết bệnh",
        "answer": "B"
    },
    {
        "id": 5,
        "question": "NKBV đường hô hấp xảy ra nhiều nhất trên bệnh nhân nào?",
        "A": "Đặt sonde tiểu",
        "B": "Thở máy",
        "C": "Thở oxy",
        "D": "Thở khí dung",
        "answer": "B"
    },
    {
        "id": 6,
        "question": "Bộ Y Tế chính thức đưa công tác Chống nhiễm khuẩn thành một qui chế riêng vào năm nào?",
        "A": "1997",
        "B": "1990",
        "C": "2000",
        "D": "2010",
        "answer": "A"
    },
    {
        "id": 7,
        "question": "Đường lây nhiễm quan trọng và phổ biến nhất trong NKBV là:",
        "A": "Đường không khí",
        "B": "Đường tiếp xúc",
        "C": "Đường qua các giọt bắn trong không khí",
        "D": "Đường giao tiếp",
        "answer": "B"
    },
    {
        "id": 8,
        "question": "Thời điểm nào sau đây KHÔNG nằm trong “5 thời điểm rửa tay” khi chăm sóc bệnh nhân",
        "A": "Trước khi tiếp xúc bệnh nhân",
        "B": "Sau khi tiếp xúc với dịch tiết bệnh nhân",
        "C": "Trước khi tiếp xúc vật dụng xung quanh bệnh nhân",
        "D": "Trước khi thực hiện các thủ thuật chăm sóc vô khuẩn",
        "answer": "C"
    },
    {
        "id": 9,
        "question": "Làm sạch là quá trình loại bỏ các chất ngoại lai ra khỏi dụng cụ bằng nước và:",
        "A": "Cồn 700",
        "B": "Povidone",
        "C": "Ôxy già",
        "D": "Xà phòng",
        "answer": "D"
    },
    {
        "id": 10,
        "question": "Tiệt khuẩn là quá trình tiêu diệt và loại bỏ tất cả các VSV kể cả:",
        "A": "Vi khuẩn",
        "B": "Virut",
        "C": "Bào tử vi khuẩn",
        "D": "Ký sinh trùng",
        "answer": "C"
    },
    {
        "id": 11,
        "question": "Khử khuẩn sơ bộ được định nghĩa là quá trình:",
        "A": "Loại bỏ hoàn toàn các chất ngoại lai ra khỏi dụng cụ",
        "B": "Loại bỏ các vi sinh vật và nha bào khỏi các dụng cụ",
        "C": "Loại bỏ nhiều hoặc tất cả các vi khuẩn gây bệnh trừ nha bào",
        "D": "Loại bỏ hoàn toàn các chất ngoại lai và các vi sinh vật gây bệnh khỏi các dụng cụ",
        "answer": "C"
    },
    {
        "id": 12,
        "question": "Loại bỏ hoàn toàn các chất ngoại lai và các vi sinh vật gây bệnh khỏi các dụng cụ",
        "A": "Uốn ván, viêm gan A",
        "B": "Uốn ván, viêm gan B",
        "C": "Lao, viêm gan B",
        "D": "Lao, viêm gan C",
        "answer": "B"
    },
    {
        "id": 13,
        "question": "Nguyên tắc lựa chọn hoá chất khử khuẩn",
        "A": "Tác dụng chậm và phổ kháng khuẩn rộng",
        "B": "Tác dụng nhanh và phổ kháng khuẩn hẹp",
        "C": "Phổ kháng khuẩn hẹp",
        "D": "Tác dụng nhanh",
        "answer": "D"
    },
    {
        "id": 14,
        "question": "Phương pháp thông thường, thích hợp và được sử dụng rộng rãi nhất để tiệt trùng dụng cụ là:",
        "A": "Hấp ướt",
        "B": "Hấp khô",
        "C": "Tiệt khuẩn nhiệt độ thấp với hydrogen peroxide công nghệ plasma",
        "D": "Tiệt khuẩn bằng Ethylene oxide",
        "answer": "A"
    },
    {
        "id": 15,
        "question": "Dụng cụ có nguy cơ nhiễm khuẩn cao khi:",
        "A": "Tiếp xúc với da nguyên vẹn",
        "B": "Tiếp xúc với niêm mạc",
        "C": "Tiếp xúc da không nguyên vẹn",
        "D": "Vào mô cơ thể vô khuẩn",
        "answer": "D"
    },
    {
        "id": 16,
        "question": "Dụng cụ có nguy cơ nhiễm khuẩn trung bình khi:",
        "A": "Tiếp xúc với da nguyên vẹn",
        "B": "Tiếp xúc với niêm mạc",
        "C": "Vào hệ thống mạch máu",
        "D": "Vào mô cơ thể vô khuẩn",
        "answer": "B"
    },
    {
        "id": 17,
        "question": "Dụng cụ có nguy cơ nhiễm khuẩn thấp khi:",
        "A": "Tiếp xúc với da nguyên vẹn",
        "B": "Tiếp xúc với niêm mạc",
        "C": "Vào hệ thống mạch máu",
        "D": "Vào mô cơ thể vô khuẩn",
        "answer": "A"
    },
    {
        "id": 18,
        "question": "Mục đích của sử dụng găng tay là để:",
        "A": "Hạn chế vật sắc nhọn xuyên vào tay",
        "B": "Hạn chế nguy cơ phơi nhiễm với máu, dịch tiết",
        "C": "Nhân viên y tế dễ thao tác khi thực hành chăm sóc người bệnh",
        "D": "Giữ cho bàn tay NVYT luôn sạch và khô",
        "answer": "B"
    },
    {
        "id": 19,
        "question": "Thời gian sát khuẩn tay bằng dung dịch chứa cồn trung bình là:",
        "A": "5 - 10 giây",
        "B": "10 - 15 giây",
        "C": "15 - 20 giây",
        "D": "45 - 60 giây",
        "answer": "C"
    },
    {
        "id": 20,
        "question": "Theo qui định của Bộ y tế, không cần vệ sinh tay khi nào?",
        "A": "Trước khi mang găng",
        "B": "Trước khi chuẩn bị dụng cụ, thuốc",
        "C": "Trước khi đến khoa buồng",
        "D": "Trước khi chế biến hoặc chia thức ăn",
        "answer": "C"
    },
    {
        "id": 21,
        "question": "NKBV nào gây tử vong hàng đầu trong các loại sau?",
        "A": "Nhiễm khuẩn vết mổ",
        "B": "Nhiễm khuẩn huyết",
        "C": "Nhiễm khuẩn tiểu",
        "D": "Viêm phổi",
        "answer": "D"
    },
    {
        "id": 22,
        "question": "Khoa nào có tỉ lệ nhiễm khuẩn bệnh viện cao nhất?",
        "A": "Nhi",
        "B": "Hồi sức tích cực",
        "C": "Sản",
        "D": "Nội",
        "answer": "B"
    },
    {
        "id": 23,
        "question": "Xử trí nào không nên làm khi bị kim đâm, vết cắt?",
        "A": "Để máu chảy tự nhiên cho đến khi tự cầm",
        "B": "Rửa ngay chỗ kim đâm, vết đứt bằng bằng xà phòng và nước",
        "C": "Dội sạch các vết bắn vào mũi, miệng, mắt hoặc da với nước sạch, nước muối",
        "D": "Dùng thuốc tẩy rửa sạch vết thương",
        "answer": "D"
    },
    {
        "id": 24,
        "question": "Việc nào không nên làm khi dùng xong bơm kim tiêm?",
        "A": "Đầu kim phải đặt xa cơ thể",
        "B": "Đóng nắp kim trước khi thải bỏ",
        "C": "Thải bỏ bơm kim tiêm ngay sau khi sử dụng",
        "D": "Khi cần đóng nắp kim phải dùng kỹ thuật “xúc một tay”",
        "answer": "B"
    },
    {
        "id": 25,
        "question": "Để đề phòng lây nhiễm qua đường máu, nhân viên y tế tế phải cẩn thận khi thao tác trên bệnh nhân nào?",
        "A": "Tất cả mọi bệnh nhân",
        "B": "Bệnh nhân có HIV dương tính",
        "C": "Bệnh nhân có xâm mình",
        "D": "Bệnh nhân nghiện ma túy",
        "answer": "A"
    },
    {
        "id": 26,
        "question": "Nhân viên y tế đã tiêm ngừa viêm gan B, khi bị phơi nhiễm với bệnh nhân mắc viêm gan B phải xử trí ra sao?",
        "A": "Không cần xử trí gì cả",
        "B": "Chỉ cần điều trị nhiễm khuẩn cho vết thương bị cắt đứt",
        "C": "Tiêm ngừa vaccin viêm gan B và HBIg trong vòng 24h nếu nhân viên chưa có kháng thể HBV",
        "D": "Tiêm ngừa HBIg trong vòng 24h sau phơi nhiễm",
        "answer": "C"
    },
    {
        "id": 27,
        "question": "Để phòng chống nhiễm khuẩn tại khoa sơ sinh, người nhà khi vào thăm trẻ phải.",
        "A": "Đi nhẹ, tránh làm ồn",
        "B": "Thay áo choàng",
        "C": "Chỉ thay dép",
        "D": "Đeo khẩu trang",
        "answer": "B"
    },
    {
        "id": 28,
        "question": "Phát biểu nào sau đây đúng khi phòng ngừa và xử trí tai nạn rủi ro nghề nghiệp với HIV, viêm gan B, viêm gan C?",
        "A": "Sau khi phơi nhiễm với máu không nên rửa ngay chỗ kim đâm",
        "B": "Sau khi phơi nhiễm với máu, phải tiến hành ngay",
        "C": "Sau khi bị phơi nhiễm với máu nên dùng chất tẩy rửa để loại hết vết bẩn",
        "D": "Sau phơi nhiễm với máu phải rửa ngay chỗ kim đâm, vết đứt bằng xà phòng và nước",
        "answer": "D"
    },
    {
        "id": 29,
        "question": "Mục đích của rửa tay trong chăm sóc người bệnh nhằm:",
        "A": "Giữ cho bàn tay được vô khuẩn",
        "B": "Loại bỏ ký sinh trùng trên tay của NVYT",
        "C": "Đảm bảo an toàn cho người bệnh, NVYT, cộng đồng",
        "D": "Ngăn ngừa các bệnh lây qua đường máu",
        "answer": "C"
    },
    {
        "id": 30,
        "question": "Việc làm đầu tiên ngay sau khi bị máu hoặc dịch tiết của người bệnh bắn tóe lên mắt là:",
        "A": "Dùng bông thấm và lau sạch máu hoặc dịch tiết bắn vào mắt",
        "B": "Mở mắt và rửa nhẹ nhàng bằng nước sạch hoặc nước muối sinh lý",
        "C": "Nhỏ 2-3 giọt thuốc Cloramphenicol 0,4%",
        "D": "Rút máu người bệnh làm xét nghiệm",
        "answer": "B"
    },
    {
        "id": 31,
        "question": "Để phòng chống nhiễm khuẩn trong phòng mổ, khu phẫu thuật phải được thiết kế :",
        "A": "Lối đi riêng",
        "B": "Nhiều phòng",
        "C": "Nhiều cửa sổ",
        "D": "Khu nghỉ ngơi",
        "answer": "A"
    },
    {
        "id": 32,
        "question": "Chất thải là vật bén nhọn có nguy hại sinh học, được bỏ vào trong hộp cứng màu…",
        "A": "Xanh",
        "B": "Vàng",
        "C": "Đen",
        "D": "Trắng",
        "answer": "B"
    },
    {
        "id": 33,
        "question": "Thông tư nào dưới đây “Qui định về phân loại chất thải y tế”",
        "A": "Thông tư liên tịch 58/2015/TTLT-BYT-BTNMT",
        "B": "QĐ 44/2018",
        "C": "CV 8235/SYT-NVY",
        "D": "CV 1881/SYT/NVY",
        "answer": "A"
    },
    {
        "id": 34,
        "question": "Mẫu bệnh phẩm, ống nghiệm …thuộc nhóm chất thải nào?",
        "A": "CT nguy cơ lây nhiễm cao",
        "B": "CT có giải phẫu",
        "C": "CT thông thường",
        "D": "CT lây nhiễm không sắc nhọn",
        "answer": "D"
    },
    {
        "id": 35,
        "question": "Xác động vật thí nhiệm thuộc nhóm chất thải nào ?",
        "A": "CT lây nhiễm không sắc nhọn",
        "B": "CT nguy cơ lây nhiễm cao",
        "C": "CT có giải phẫu",
        "D": "CT lây nhiễm sắc nhọn",
        "answer": "A"
    },
    {
        "id": 36,
        "question": "Kim tiêm thuộc nhóm chất thải nào dưới đây?",
        "A": "CT lây nhiễm không sắc nhọn",
        "B": "CT nguy cơ lây nhiễm cao",
        "C": "CT có giải phẫu",
        "D": "CT lây nhiễm sắc nhọn",
        "answer": "D"
    },
    {
        "id": 37,
        "question": "Dược phẩm hết hạn sử dụng thuộc nhóm nào dưới đây?",
        "A": "CT lây nhiễm không sắc nhọn",
        "B": "CT nguy hại không lây nhiễm",
        "C": "CT nguy hại lây nhiễm",
        "D": "CT thông thường tái chế",
        "answer": "B"
    },
    {
        "id": 38,
        "question": "Bóng đèn huỳnh quang vỡ, pin, ắc quy thuộc nhóm chất thải nào dưới đây?",
        "A": "CT lây nhiễm không sắc nhọn",
        "B": "CT nguy hại không lây nhiễm",
        "C": "CT nguy hại lây nhiễm",
        "D": "CT thông thường tái chế",
        "answer": "B"
    },
    {
        "id": 39,
        "question": "CT thông thường phục vụ mục đích tái chế được đựng:",
        "A": "Trong túi hoặc thùng có lót túi màu trắng",
        "B": "Trong túi hoặc thùng có lót túi màu xanh",
        "C": "Trong túi hoặc thùng có lót túi màu vàng",
        "D": "Trong túi hoặc thùng có lót túi màu đen",
        "answer": "A"
    },
    {
        "id": 40,
        "question": "CT thông thường không phục vụ mục đích tái chế dạng hữu cơ dễ phân hủy được đựng trong túi:",
        "A": "Đựng trong túi hoặc thùng có lót túi màu xanh",
        "B": "Trong túi hoặc thùng có lót túi màu vàng",
        "C": "Trong túi hoặc thùng có lót túi màu đen",
        "D": "Trong túi hoặc thùng có lót túi màu trắng",
        "answer": "A"
    },
    {
        "id": 41,
        "question": "CT thông thường không phục vụ mục đích tái chế còn lại như túi nilong, bao bì đựng thực phẩm được đựng:",
        "A": "Túi hoặc thùng có lót túi màu xám.",
        "B": "Túi hoặc thùng có lót túi màu xanh",
        "C": "Trong túi hoặc thùng có lót túi màu vàng",
        "D": "Trong túi hoặc thùng có lót túi màu đen",
        "answer": "B"
    },
    {
        "id": 42,
        "question": "CT lây nhiễm sắc nhọn được đựng trong:",
        "A": "Thùng có lót túi màu vàng",
        "B": "Thùng có lót 2 lớp túi màu vàng",
        "C": "Thùng hoặc hộp kháng thủng màu vàng",
        "D": "Dụng cụ có nắp đậy kín",
        "answer": "C"
    },
    {
        "id": 43,
        "question": "CT nguy cơ lây nhiễm cao được đựng trong:",
        "A": "Túi hoặc thùng có lót túi màu xám",
        "B": "Túi hoặc thùng có lót 2 lớp túi màu vàng",
        "C": "Túi hoặc thùng có lót túi màu vàng",
        "D": "Túi hoặc thùng có lót túi màu đen",
        "answer": "C"
    },
    {
        "id": 44,
        "question": "CT có giải phẫu được đựng trong:",
        "A": "Túi hoặc thùng có lót túi màu xám",
        "B": "Túi hoặc thùng có lót 2 lớp túi màu vàng",
        "C": "Túi hoặc thùng có lót túi màu vàng",
        "D": "Túi hoặc thùng có lót túi màu đen",
        "answer": "B"
    },
    {
        "id": 45,
        "question": "Theo WHO, Tiêm An Toàn là một quy trình tiêm",
        "A": "Không gây nguy hại cho người nhận mũi tiêm, người tiêm và cộng đồng",
        "B": "Không gây nguy hại cho người tiêm và nhân viên y tế",
        "C": "Không gây nguy hại cho người bệnh và chăm sóc sức khỏe nghề nghiệp",
        "D": "Không gây nguy hại cho người tiêm và dự phòng phơi nhiễm nghề nghiệp",
        "answer": "A"
    },
    {
        "id": 46,
        "question": "Hành vi tiêm không an toàn có nguy cơ hại cho người bệnh?",
        "A": "Đậy nắp kim sau khi tiêm",
        "B": "Thiếu phương tiện bảo hộ",
        "C": "Xử lý rác không an toàn",
        "D": "Kim và bơm tiêm không vô khuẩn",
        "answer": "D"
    },
    {
        "id": 47,
        "question": "Hành vi tiêm không an toàn có nguy cơ hại cho nhân viên y tế?",
        "A": "Đậy nắp kim sau khi tiêm",
        "B": "Ống thuốc bị nhiễm bẩn",
        "C": "Vệ sinh tay kém",
        "D": "Kim và bơm tiêm không vô khuẩn",
        "answer": "A"
    },
    {
        "id": 48,
        "question": "Không được thực hiện khi thực hành để đảm bảo tiêm an toàn ?",
        "A": "Hỏi tiền sử dị ứng thuốc",
        "B": "Bật nắp và sát khuẩn lọ thuốc bằng cồn",
        "C": "Lưu kim lấy thuốc vào lọ thuốc đa liều",
        "D": "Thực hiện 3 kiểm tra, 5 đối chiếu",
        "answer": "C"
    },
    {
        "id": 49,
        "question": "Không được thực hiện khi thực hành để đảm bảo tiêm an toàn ?",
        "A": "Hỏi tiền sử dị ứng thuốc",
        "B": "Bật nắp và sát khuẩn lọ thuốc bằng cồn",
        "C": "Dùng một bơm, kim tiêm lấy thuốc cho nhiều lọ thuốc đa liều",
        "D": "Thực hiện 3 kiểm tra, 5 đối chiếu",
        "answer": "C"
    },
    {
        "id": 50,
        "question": "Điều nào được làm khi thay đồ vải cho bệnh nhân?",
        "A": "Để đồ vải bẩn xuống sàn nhà",
        "B": "Để đồ vải bẩn sang giường bên cạnh",
        "C": "Cho đồ vải bẩn ngay vào túi như đã qui định",
        "D": "Để đồ vải bẩn trên đầu giường bệnh nhân mới thay",
        "answer": "C"
    },
    {
        "id": 51,
        "question": "Đồ vải bẩn dính máu, chất tiết thì phần bẩn được gói theo nguyên tắc:",
        "A": "Để phần bẩn bên trong",
        "B": "Để phần bẩn ra bên ngoài để dễ thấy",
        "C": "Để phần bẩn bất kỳ nơi nào",
        "D": "Để phần bẩn ở một góc",
        "answer": "A"
    },
    {
        "id": 52,
        "question": "Đối tượng nào có nguy cơ nhiễm khuẩn bệnh viện cao nhất ?",
        "A": "Nhân viên trực tiếp chăm sóc bệnh nhân",
        "B": "Người nhà bệnh nhân",
        "C": "Khách thăm viếng",
        "D": "Bệnh nhân suy giảm miễn dịch",
        "answer": "D"
    },
    {
        "id": 53,
        "question": "Kiểm soát nhiễm khuẩn được các nhà quản lý y tế quan tâm bởi nhiễm khuẩn làm:",
        "A": "Tăng thời gian nằm điều trị và tăng giá thành điều trị",
        "B": "Giảm tỷ lệ biến chứng trên người bệnh",
        "C": "Giảm tỷ lệ tử vong",
        "D": "Giảm sự kháng kháng sinh của vi khuẩn",
        "answer": "A"
    },
    {
        "id": 54,
        "question": "Ngày nay, chương trình kiểm soát nhiễm khuẩn đã được đưa vào thực hành thường quy ở các bệnh viện và được công nhận là yếu tố quan trọng để:",
        "A": "Đảm bảo chất lượng dịch vụ y tế cho người dân",
        "B": "Đảm bảo chất lượng vệ sinh bệnh viện",
        "C": "Đảm bảo nâng cao uy tín của thầy thuốc",
        "D": "Đảm bảo nâng cao uy tín của điều dưỡng",
        "answer": "A"
    },
    {
        "id": 55,
        "question": "Giải pháp ngăn ngừa nhiễm khuẩn bệnh viện:",
        "A": "Thành lập hội đồng kiểm soát chất lượng chuyên môn",
        "B": "Tổ chức giám sát, tập huấn giao tiếp, ứng xử, y đức",
        "C": "Tuyên truyền phòng bệnh, thực hiện tốt cách ly bệnh nhiễm",
        "D": "Tăng cường mở rộng các dịch vụ khám chữa bệnh",
        "answer": "C"
    },
    {
        "id": 56,
        "question": "Nguyên nhân gây nhiễm khuẩn bệnh viện đối với người bệnh",
        "A": "Do y đức và giao tiếp của nhân viên y tế xuống cấp",
        "B": "Do cơ sở vật chất quá hiện đại",
        "C": "Do trình độ nhân viên y tế yếu kém",
        "D": "Do thực hành nhân viên y tế",
        "answer": "D"
    },
    {
        "id": 57,
        "question": "Biện pháp phòng ngừa tổn thương do kim đâm và phơi nhiễm đường máu:",
        "A": "Theo dõi mối nguy hại",
        "B": "Biện pháp kiểm soát vệ sinh bệnh viện",
        "C": "Biện pháp kiểm soát thực hành",
        "D": "Bảo đảm đầy đủ các phương tiện, dụng cụ",
        "answer": "C"
    },
    {
        "id": 58,
        "question": "Giải pháp tăng cường thực hành tiêm an toàn:",
        "A": "Tăng cường mũi tiêm để phát hiện tiêm không an toàn",
        "B": "Bảo đảm đầy đủ các phương tiện, dụng cụ, thuốc cho kỹ thuật tiêm",
        "C": "Tăng cường kiến thức phòng ngừa chuẩn",
        "D": "Phòng ngừa nguy cơ đổ lỗi trách nhiệm cho người tiêm",
        "answer": "B"
    },
    {
        "id": 59,
        "question": "Tiêm không an toàn có thể gây ra những nguy cơ như:",
        "A": "Viêm gan A, sốc nhiễm trùng và HIV cho nhân viên y tế và cộng đồng",
        "B": "Viêm gan B và ung thư gan cho người bệnh cho người bệnh, nhân viên y tế và cộng đồng",
        "C": "Viêm gan A, Viêm gan C cho người bệnh, nhân viên y tế và cộng đồng",
        "D": "Viêm gan B, Viêm gan C và HIV cho người bệnh, nhân viên y tế và cộng đồng",
        "answer": "D"
    },
    {
        "id": 60,
        "question": "Dụng cụ thích hợp, an toàn được sử dụng trong khi tiêm:",
        "A": "Bơm kim tiêm còn hạn dùng, hộp chống sốc, hộp kháng thủng",
        "B": "Kềm vô trùng, găng vô trùng, bồn hạt đậu vô trùng",
        "C": "Găng sạch, kềm vô trùng, bọc chứa rác",
        "D": "Thuốc còn hạn dùng, dung dịch rửa tay, thùng rác có nắp đậy",
        "answer": "A"
    },
    {
        "id": 61,
        "question": "Sát khuẩn da và chuẩn bị vùng da tiêm an toàn:",
        "A": "Không sát khuẩn da sau tiêm chủng",
        "B": "Không sát khuẩn da sau tiêm mạch",
        "C": "Nên đựng bông, gạc thấm cồn trong hộp trong hộp chứa đầy",
        "D": "Sau sát khuẩn tiêm ngay",
        "answer": "D"
    },
    {
        "id": 62,
        "question": "Tiêm là một trong những biện pháp đưa thuốc vào cơ thể nhằm mục đích:",
        "A": "Chẩn đoán, nuôi dưỡng, điều trị",
        "B": "Chẩn đoán, phòng bệnh, nuôi dưỡng",
        "C": "Phòng bệnh, chẩn đoán, điều trị",
        "D": "Điều trị, dự phòng, nuôi dưỡng",
        "answer": "C"
    },
    {
        "id": 63,
        "question": "Túi nylon màu đen được dùng để đựng chất thải dạng:",
        "A": "Các chất thải sinh hoạt",
        "B": "Các chất thải lây nhiễm",
        "C": "Bơm kim tiêm, vật sắc nhọn",
        "D": "Các chất thải hóa học",
        "answer": "D"
    },
    {
        "id": 64,
        "question": "CChất thải hoá học nguy hại là:",
        "A": "Formaldehyd",
        "B": "Xác động vật thí nghiệm",
        "C": "Bông, băng dính máu người bệnh",
        "D": "Lưỡi dao mổ",
        "answer": "A"
    },
    {
        "id": 65,
        "question": "Khi nhân viên y tế bị phơi nhiễm với HIV do kim tiêm đâm, cần điều trị chống phơi nhiễm ngay và chậm nhất không quá:",
        "A": "4 ngày",
        "B": "5 ngày",
        "C": "6 ngày",
        "D": "7 ngày",
        "answer": "A"
    },
    {
        "id": 66,
        "question": "Thời gian rửa tay tối thiểu trong rửa tay thường quy là:",
        "A": "30 giây",
        "B": "40 giây",
        "C": "50 giây",
        "D": "60 giây",
        "answer": "A"
    },
    {
        "id": 67,
        "question": "Khả năng gây bệnh của các tác nhân gây nhiễm khuẩn bệnh viện phụ thuộc vào:",
        "A": "Số lượng và độc tính",
        "B": "Liều lượng",
        "C": "Khối lượng",
        "D": "Lưu lượng",
        "answer": "A"
    },
    {
        "id": 68,
        "question": "Khi vệ sinh bề mặt có máu và dịch cơ thể cần phải:",
        "A": "Mang phương tiện phòng hộ: găng tay, khẩu trang, ủng, kính bảo hộ",
        "B": "Lấy giẻ hoặc giấy thấm để thấm máu và dịch trên bề mặt sàn nhà hoặc đồ vật và cho vào túi rác y tế màu đen",
        "C": "Tưới dung dịch khử khuẩn để trong 30 phút",
        "D": "Bỏ toàn bộ drap và đồ vải dính máu vào thùng rác",
        "answer": "A"
    },
    {
        "id": 69,
        "question": "Mục đích vệ sinh trong các cơ sở y tế:",
        "A": "Tạo uy tín cho nhân viên bệnh viện",
        "B": "T Tạo thẩm mỹ ngoại cảnh bệnh viện",
        "C": "Giảm nguy cơ nhiễm khuẩn bệnh viện",
        "D": "Tăng chất lượng điều trị",
        "answer": "C"
    },
    {
        "id": 70,
        "question": "Thực hiện các kỹ thuật chăm sóc cơ bản trong thực hành chống nhiễm khuẩn bệnh viện là…",
        "A": "Làm đúng quy trình kỹ thuật như tiêm truyền, chăm sóc vết thương …",
        "B": "Đảm bảo an toàn theo cách ly phòng ngừa",
        "C": "Giảm tỉ lệ tử vong, chi phí điều trị",
        "D": "Giáo dục sức khỏe cho người bệnh",
        "answer": "A"
    },
    {
        "id": 71,
        "question": "Quản lý - vận chuyển đúng quy định của bệnh viện là nội dung của…",
        "A": "Thực hiện các kỹ thuật chăm sóc cơ bản",
        "B": "Quản lý chất thải an toàn",
        "C": "Giao nhận dụng cụ với trung tâm cung cấp",
        "D": "Quản lý sức khỏe cho bản thân và đồng nghiệp",
        "answer": "B"
    },
    {
        "id": 72,
        "question": "Trong quản lý tốt sức khỏe cho bản thân và đồng nghiệp thì phải theo dõi sức khỏe ….. và khi đột xuất có tiếp xúc với yếu tố nguy cơ lây nhiễm",
        "A": "Thường xuyên",
        "B": "Tổng quát",
        "C": "Hàng ngày",
        "D": "Định kỳ",
        "answer": "D"
    },
    {
        "id": 73,
        "question": "Các yếu tố gây nhiễm khuẩn bệnh viện có thể hạn chế được ở bệnh nhân:",
        "A": "Tuổi tác",
        "B": "Cơ địa",
        "C": "Tình trạng bệnh tật",
        "D": "Dụng cụ y tế",
        "answer": "D"
    },
    {
        "id": 74,
        "question": "Trong vệ sinh khoa phòng, cần vệ sinh ngay:",
        "A": "Những nơi có nguy cơ lây nhiễm cao",
        "B": "Những nơi ít lây nhiễm",
        "C": "Những nơi không lây nhiễm",
        "D": "Những nơi ít người qua lại",
        "answer": "A"
    },
    {
        "id": 75,
        "question": "Khi làm vệ sinh phải tuân thủ nguyên tắc sau:",
        "A": "Từ ngoài vào trong",
        "B": "Từ dưới lên trên",
        "C": "Từ xa tới gần",
        "D": "Từ sạch đến bẩn",
        "answer": "D"
    },
    {
        "id": 76,
        "question": "Đối với khu vực lây nhiễm, vệ sinh thực hiện 3 lần theo thứ tự sau:",
        "A": "Xà phòng, nước sạch, dung dịch khử khuẩn",
        "B": "Dung dịch khử khuẩn, xà phòng, nước sạch",
        "C": "Xà phòng, dung dịch khử khuẩn, nước sạch",
        "D": "Nước sạch, xà phòng, dung dịch khử khuẩn",
        "answer": "A"
    }
];
