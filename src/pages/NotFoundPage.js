import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Không tìm thấy trang</h1>
      <p style={styles.subtitle}>Oops! Có vẻ trang bạn tìm không có dữ liệu.</p>
      <Link to="/" style={styles.link}>
        Trở về trang chủ
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    color: "#333",
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#F43F5E",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
  },
};

export default NotFoundPage;
