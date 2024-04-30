const Card2 = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card2;
