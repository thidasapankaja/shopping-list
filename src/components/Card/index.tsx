import { Item } from "../../models/Item";

type CardProps = {
  item: Item;
  key?: string;
  addItem: (arg0: Item) => void;
};

const Card = ({ item, addItem }: CardProps) => {
  const { name, image, price } = item;
  return (
    <div
      style={{
        flex: "0 1 24%",
      }}
    >
      <img style={{ maxWidth: "350px" }} src={image} alt={name} />
      <div style={{ display: "flex" }}>
        <div>{name}</div>
        <div>{price}</div>
        <div>
          <button onClick={() => addItem(item)}> +</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
