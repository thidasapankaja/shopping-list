import Card from "../components/Card";
import ItemsTable from "../components/ItemsTable";
import { Item } from "../models/Item";

type ShoppingProps = {
  addItem: (arg0: Item) => void;
  availableItems: any[];
  items: Item[];
  removeItem: (arg0: string) => void;
  onCheckout: () => void;
};

const Shopping = ({
  addItem,
  availableItems,
  items,
  removeItem,
  onCheckout,
}: ShoppingProps) => (
  <div>
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "40px 100px",
      }}
    >
      {availableItems?.map(item => (
        <Card item={item} key={item?.name} addItem={addItem} />
      ))}
    </section>
    <div>
      {items.length && <ItemsTable data={items} removeItem={removeItem} />}
    </div>
    {items.length && (
      <div>
        <button onClick={onCheckout} > CHECKOUT </button>
      </div>
    )}
  </div>
);

export default Shopping;
