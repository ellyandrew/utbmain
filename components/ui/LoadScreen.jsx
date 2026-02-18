"use client";


export default function LoadingScreen({ text = "Loading..." }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      flexDirection: "column",
    }}>
      <div className="loader" style={{
        border: "6px solid #f3f3f3",
        borderTop: "6px solid var(--color-primary)",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        animation: "spin 1s linear infinite",
        marginBottom: "1rem"
      }} />
      <p style={{ color: "#555", fontSize: "1rem", fontWeight: 500 }}>{text}</p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  )
}