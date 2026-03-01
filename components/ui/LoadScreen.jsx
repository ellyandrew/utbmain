"use client";

export default function TableLoader({ text = "Loading..." }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "2.5rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid var(--color-primary)",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          animation: "spin 0.9s linear infinite",
          marginBottom: "0.75rem",
        }}
      />

      <p style={{ color: "#666", fontSize: "0.95rem", fontWeight: 500 }}>
        {text}
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}