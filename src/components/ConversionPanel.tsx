export default function ConversionPanel() {
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          border: "2px dashed #ccc",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2>Upload a file</h2>
        <p style={{ color: "#666" }}>
          (This is a basic demo UI. File-to-PDF conversion needs extra code/API.)
        </p>

        <input type="file" />
      </div>
    </div>
  );
}
