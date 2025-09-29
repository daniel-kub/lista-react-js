export const Product = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textDecoration: props.bought ? "line-through" : "none" }}>
        {props.productName}
      </h2>
      <button onClick={() => props.toggleBought(props.id)}>
        {props.bought ? "Kupione" : "Kup"}
      </button>
      <button onClick={() => props.deleteProduct(props.id)}>Usuń</button>
    </div>
  );
};
