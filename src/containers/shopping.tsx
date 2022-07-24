import { lazy, Suspense, useRef } from "react";
import { Item, PurchasedtItem } from "../models/Item";
import './index.css'

const Card = lazy(() => import("../components/Card"));
const ItemsTable = lazy(() => import("../components/ItemsTable"));

type ShoppingProps = {
  addItem: (arg0: Item) => void;
  availableItems: any[];
  shoppingList: PurchasedtItem[];
  removeItem: (arg0: string) => void;
  onCheckout: () => void;
};

const Shopping = ({
  addItem,
  availableItems,
  shoppingList,
  removeItem,
  onCheckout,
}: ShoppingProps) => {
  const tableRef = useRef<any>(null);
  console.log("tableRef: , ", tableRef);
  const renderTable = (items: PurchasedtItem[]) => {
    return (
      <Suspense>
        <div>
          <ItemsTable data={items} removeItem={removeItem} onCheckout={onCheckout} />
        </div>
      </Suspense>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px",
        }}
      >
        <div>
          <button className="button purchaseButton" disabled={shoppingList?.length <= 0} onClick={onCheckout}>
            Purchase
          </button>
        </div>
        <div>
          <button className="button cartButton" onClick={() => tableRef.current.focus()}> Cart </button>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "0 100px",
        }}
      >
        <Suspense fallback={<div>Loading ...</div>}>
          {availableItems?.map(item => (
            <Card item={item} key={item?.name} addItem={addItem} />
          ))}
        </Suspense>
      </section>
      {shoppingList.length > 0 ? renderTable(shoppingList) : null}
    </div>
  );
};

export default Shopping;
