const Art = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Nghệ Thuật và Văn Hóa An Giang</h1>

      {/* Hàng 1: Video trái - Nội dung phải */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: "40px" }}>
        {/* Video bên trái */}
        <div style={{ flex: 1 }}>
          <video width="100%" height="315" controls>
            <source src="./images/video.mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

        {/* Nội dung bên phải */}
        <div style={{ flex: 1 }}>
          <p>
            An Giang không chỉ nổi tiếng với thiên nhiên kỳ vĩ mà còn là nơi lưu giữ nhiều giá trị nghệ thuật,
            từ các làng nghề truyền thống cho đến các loại hình nghệ thuật biểu diễn đặc sắc.
          </p>
          <p>
            Một trong những nét đẹp nghệ thuật đặc trưng của An Giang là các làng nghề thủ công mỹ nghệ,
            như làng gốm Châu Giang, nơi sản xuất các sản phẩm gốm sứ nổi tiếng của vùng Đồng bằng sông Cửu Long.
            Ngoài ra, An Giang còn nổi bật với các loại hình nghệ thuật dân gian như hát bội, tuồng, cải lương và các điệu hò,
            lý Nam Bộ rất được yêu thích.
          </p>
        </div>
      </div>

      {/* Hàng 2: Nội dung trái - Video phải */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {/* Nội dung bên trái */}
        <div style={{ flex: 1 }}>
          <p>
            Bên cạnh đó, các lễ hội truyền thống như lễ hội Bà Chúa Xứ Núi Sam, lễ hội đua ghe ngo, hay các cuộc thi
            nghệ thuật dân gian tại An Giang là dịp để người dân nơi đây thể hiện tình yêu và niềm tự hào với văn hóa của mình.
          </p>
          <p>
            Ngoài nghệ thuật dân gian, An Giang còn là nơi thu hút các nghệ sĩ đương đại, với các triển lãm nghệ thuật,
            hội họa và các hoạt động sáng tạo trong các lĩnh vực như nhiếp ảnh, âm nhạc và nghệ thuật thị giác.
          </p>
        </div>

        {/* Video bên phải */}
        <div style={{ flex: 1 }}>
          <video width="100%" height="315" controls>
            <source src=".\images\video1.mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Art;
