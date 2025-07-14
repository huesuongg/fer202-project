import "../../styles/landing/hero-section.css";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Lưu lại điều truyền cảm hứng.
            <br />
            Tạo nên điều mang dấu ấn riêng.
          </h1>
          <p>
            Khám phá kho ý tưởng không giới hạn – từ trang trí nhà cửa, thời
            trang, ẩm thực đến nhiếp ảnh – tất cả đều được chia sẻ bởi những
            người cùng đam mê như bạn.
          </p>
          <div className="hero-buttons">
            <button className="btn banner-btn primary">Tìm dịch vụ</button>
            <button className="btn banner-btn secondary">
              Sản phẩm cửa hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
