import { lazy, Suspense, useRef } from "react";
import Loading from "../components/Loading";
import { Item, PurchasedtItem } from "../models/Item";
import "./index.css";

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
  const renderTable = (items: PurchasedtItem[]) => {
    return (
      <Suspense fallback={<Loading />}>
        <div>
          <ItemsTable
            data={items}
            removeItem={removeItem}
            onCheckout={onCheckout}
          />
        </div>
      </Suspense>
    );
  };

  return (
    <div style={{ backgroundColor: "#a6ceff", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <button
            disabled={shoppingList?.length <= 0}
            className="button purchaseButton"
            onClick={onCheckout}
          >
            Purchase
          </button>
        </div>
        <div>
          <button
            className="button cartButton"
            onClick={() => tableRef.current.focus()}
          >
            Cart
          </button>
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
        <Suspense fallback={<Loading />}>
          {availableItems?.map(item => (
            <Card item={item} key={item?.name} addItem={addItem} />
          ))}
        </Suspense>
      </section>
      <div style={{marginTop:'50px'}}>
        {shoppingList.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "0 230px",
            }}
          >
            <button
              style={{ textAlign: "center" }}
              ref={tableRef}
              disabled={shoppingList?.length <= 0}
              className="button purchaseButton"
              onClick={onCheckout}
            >
              Purchase
            </button>
          </div>
        )}
        {shoppingList.length > 0 ? renderTable(shoppingList) : null}
      </div>
    </div>
  );
};

export default Shopping;
