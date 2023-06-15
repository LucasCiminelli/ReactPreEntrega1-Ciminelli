import "./components.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="main-container">
      <h2 className="bienvenida"> {greeting} </h2>
    </div>
  );
};
