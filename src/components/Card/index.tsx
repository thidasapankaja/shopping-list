import { Item } from "../../models/Item";
import "./card.css";

type CardProps = {
  item: Item;
  key?: string;
  addItem: (arg0: Item) => void;
};

const Card = ({ item, addItem }: CardProps) => {
  const { name, image, store, price } = item;

  return (
    <div className="card">
      <img style={{ maxWidth: "350px" }} src={image} alt={name} />
      <div className="content">
        <div className="description">
          <div style={{ textAlign: "start" }}>
            <div style={{ fontWeight: "600" }}>{name}</div>
            <div style={{ fontSize: "14px" }}>{store}</div>
          </div>
          <div style={{ fontWeight: "800" }}>{price} $</div>
        </div>
        <div>
          <button className="addButton" onClick={() => addItem(item)}>
            {" "}
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
