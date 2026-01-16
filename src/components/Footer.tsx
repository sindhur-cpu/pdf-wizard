export default function Footer() {
  return (
    <footer style={{ padding: "20px", borderTop: "1px solid #eee" }}>
      <p style={{ margin: 0, color: "#666" }}>
        © {new Date().getFullYear()} PDF Wizard
      </p>
    </footer>
  );
}
