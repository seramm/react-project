export default function Input({ value, placeholder, size }) {
  return (
    <div style={{ margin: "1rem", display: "flex", width: "100%" }}>
      <input
        placeholder={placeholder}
        size={size}
        value={value}
        style={{
          display: "flex",
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px  solid #000",
        }}
      />
    </div>
  );
}
