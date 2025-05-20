import { motion } from 'framer-motion';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
const Heritage = () => {
  return (<>
     <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{ textAlign: 'center', marginTop: '20px' }}
      >
        Di Sản Văn Hóa Tỉnh An Giang
      </motion.h1>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        <div style={{ flex: 1 }}>
        <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
          <img
            src="public\images\mieu-ba-chua-xu-nui-sam-an-giang.jpg"
            alt="Miếu Bà Chúa Xứ"
            style={{ width: '100%', marginBottom: '10px',marginTop: '80px',  borderRadius: '8px' }}
          />
      </motion.div>
   
        </div>
        <div style={{ flex: 1 }}>
        <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
        <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
        1. Khái quát về di sản văn hoá ở An Giang
An Giang có hệ thống di tích lịch sử, văn hoá phong phú với 88 di tích được xếp
hạng, trong đó có 2 di tích cấp quốc gia đặc biệt (Khu lưu niệm Chủ tịch Tôn Đức Thắng và
Khu di tích khảo cổ Óc Eo), 28 di tích cấp quốc gia và 58 di tích cấp tỉnh.59
Bên cạnh đó, An Giang còn có kho tàng di sản văn hoá phi vật thể rất đặc sắc, đa
dạng của cộng đồng các dân tộc với trên 160 lễ hội truyền thống, chứa đựng những giá
trị khoa học, lịch sử, văn hoá,... tạo thành nét độc đáo, đặc sắc riêng của mỗi dân tộc, tiêu
biểu như: Lễ hội Vía Bà Chúa Xứ núi Sam (là Di sản văn hoá phi vật thể quốc gia) và Lễ hội
đua bò Bảy Núi (vào dịp Tết Sen Dolta của người Khmer Nam bộ) được cộng đồng cư dân
hưởng ứng mạnh mẽ, tạo nên nét đẹp văn hoá và là điểm du lịch nổi tiếng trong khu vực
và cả nước. Đặc biệt, An Giang đang đề nghị công nhận Khu di tích khảo cổ Óc Eo là di sản
thế giới. Đây là nguồn tài nguyên văn hoá vô giá, chứa đựng những giá trị tốt đẹp của các
dân tộc trên vùng đất An Giang nói riêng và Nam bộ nói chung.
        </p>
        </motion.div>
        </div>
       
      </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <div style={{ flex: 1 }}>
      <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                2.Núi Cấm, còn gọi là Thiên Cấm Sơn, nằm ở xã An Hảo, huyện Tịnh Biên, tỉnh An Giang, là ngọn núi cao nhất vùng Thất Sơn với độ cao khoảng 710m. Đây là địa điểm du lịch nổi tiếng, cách Long Xuyên khoảng 90km và Châu Đốc 37km.

Trên đỉnh núi có nhiều công trình tôn giáo nổi bật như tượng Phật Di Lặc, chùa Vạn Linh và Thiền viện Phật Lớn, cùng các điểm tham quan hấp dẫn như suối Thanh Long, hang Ông Hổ, động Thủy Liêm... Núi Cấm từ lâu được coi là vùng đất linh thiêng, thu hút hàng triệu du khách đến chiêm bái mỗi năm.

Theo các tài liệu cổ như Đại Nam nhất thống chí và Gia Định thành thông chí, núi còn có tên là Cấm Sơn hoặc Đoài Tốn, từng được mô tả là nơi cây cối xanh tốt, có trầm hương, tốc hương và cảnh quan trù phú. Với khí hậu mát mẻ và thiên nhiên tươi đẹp, Núi Cấm là điểm đến lý tưởng để du lịch sinh thái, tâm linh và khám phá văn hóa.


        </p>
      </motion.div>
        </div>

      <div style={{ flex: 1 }}>
      <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
   
        <img
          src="public\images\14061_duabobaynui.jpg"
          alt="Lễ hội đua bò Bảy Núi"
          style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }}
        />
        </motion.div>
      </div>
     
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <div style={{ flex: 1 }}>
      <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
     


      <img
          src="public\images\Mia.jpeg"
          alt="Làng Chăm Đa Phước"
          style={{ width: '100%', borderRadius: '8px' }}
        />
     </motion.div>
        </div>

      <div style={{ flex: 1 }}>
      <motion.div style={{ flex: 1 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
      Quy định của Chính phủ về bảo vệ di sản văn hóa: Theo Nghị định 109/2017/NĐ-CP, Nhà nước nghiêm cấm các hành vi làm sai lệch, hủy hoại, lấn chiếm di sản văn hóa; cấm mua bán, vận chuyển trái phép cổ vật, di vật; cấm lợi dụng di sản cho mục đích trái pháp luật.

. Công tác bảo tồn và phát huy di sản tại An Giang:

Thứ nhất: Tỉnh đã tập trung trùng tu, bảo tồn các di tích lịch sử – văn hóa, lập kế hoạch cụ thể và huy động nguồn lực nhân dân, trùng tu hàng chục đình làng.

Thứ hai: Tổ chức nghiên cứu, xếp hạng di tích, bảo tồn văn hóa phi vật thể, duy trì các lễ hội dân tộc (như Vía Bà Chúa Xứ, Kỳ Yên, giỗ Quản cơ Trần Văn Thành…) nhằm lan tỏa giá trị văn hóa truyền thống.

Thứ ba: Đẩy mạnh hợp tác quốc tế, tổ chức các hoạt động giao lưu văn hóa, nghệ thuật trong và ngoài nước, đặc biệt là vùng biên giới, góp phần quảng bá bản sắc văn hóa An Giang.

Thứ tư: Khai thác các di tích, danh lam thắng cảnh nổi bật như Núi Cấm, Núi Sam, chùa Tây An, Miếu Bà Chúa Xứ... để phát triển du lịch văn hóa, tạo việc làm và thúc đẩy phát triển bền vững.

Thứ năm: Đã xây dựng quy hoạch dài hạn về phát triển văn hóa, nghệ thuật, thể thao, như quy hoạch văn hóa đến 2030 và đề án bảo vệ nghệ thuật Đờn ca tài tử.

Với bề dày hơn 300 năm lịch sử, An Giang đang từng bước nâng cao hiệu quả công tác quản lý di sản văn hóa, phát huy truyền thống văn hóa – con người vùng đất Bác Tôn để phát triển quê hương ngày càng giàu đẹp và văn minh.


        </p>
        </motion.div>
      </div>
     
    </div>

    
   </>
  );
};

export default Heritage;
