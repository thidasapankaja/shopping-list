import { useState } from "react";
import moment from "moment";
import "./table.css";
import { PurchasedtItem } from "../../models/Item";

type ItemsTableProps = {
  data: PurchasedtItem[];
  isHistory?: boolean;
  removeItem?: (arg0: string) => void;
  onCheckout?: () => void;
};

type filterType = {
  name: string;
  store: string;
  purchasedDate: string;
};

const columns = [
  "Item",
  "Store",
  "Purchase date",
  "Quantity",
  "Item price",
  "Price",
  "Remove",
];
const historyColumns = [
  "Item",
  "Store",
  "Purchase date",
  "Quantity",
  "Item price",
  "Price",
];

const ItemsTable = ({
  data,
  isHistory,
  removeItem,
  onCheckout,
}: ItemsTableProps) => {
  const [filter, setFilter] = useState<filterType>({
    name: "",
    purchasedDate: "",
    store: "",
  });

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.id]: e.target.value });
  };

  const renderFooter = (items: PurchasedtItem[]) => {
    if (items?.length > 0) {
      let totalSoFar = items?.reduce(
        (total, item) => total + parseFloat(item?.price),
        0
      );
      return (
        <tfoot>
          <tr style={{ fontWeight: "600" }}>
            <td />
            <td />
            <td />
            <td />
            <td className="alignCenter">Total</td>
            <td className="alignCenter">{totalSoFar} $</td>
            {!isHistory && (
              <td className="alignCenter">
                <button className="deleteButton" onClick={onCheckout}>
                  Checkout
                </button>
              </td>
            )}
          </tr>
        </tfoot>
      );
    }
    return null;
  };

  const filteredItems = (items: PurchasedtItem[]) => {
    return items?.map(cell => {
      if (
        cell?.name.includes(filter.name) &&
        moment(cell?.purchasedDate)
          .format("dddd, MMMM, Do, YYYY, h:mm")
          ?.includes(filter.purchasedDate) &&
        cell?.store.includes(filter.store)
      ) {
        return (
          <tr>
            <td className="alignCenter">{cell?.name}</td>
            <td className="alignCenter">{cell?.store}</td>
            <td className="alignCenter">
              {moment(cell?.purchasedDate).format("dddd, MMMM, Do, YYYY, h:mm")}
            </td>
            <td className="alignCenter">{cell?.quantity}</td>
            <td className="alignCenter">{cell?.price}</td>
            <td className="alignCenter">
              {cell?.quantity &&
                cell?.price &&
                cell?.quantity * parseFloat(cell?.price)}
            </td>
            {!isHistory && removeItem && (
              <td className="alignCenter">
                <button
                  className="deleteButton"
                  onClick={() => removeItem(cell?.id)}
                >
                  Remove
                </button>
              </td>
            )}
          </tr>
        );
      }
      return null;
    });
  };

  const renderingColumns = isHistory ? historyColumns : columns;
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <input
          onChange={onFilterChange}
          id="name"
          placeholder="name"
          className="filter"
        />
        <input
          onChange={onFilterChange}
          id="purchasedDate"
          placeholder="purchased date"
          className="filter"
        />
        <input
          onChange={onFilterChange}
          id="store"
          placeholder="strore"
          className="filter"
        />
      </div>
      <div>
        <table
          style={{ marginLeft: "auto", marginRight: "auto", width: "70%" }}
        >
          <thead>
            <tr>
              {renderingColumns?.map((column: string) => (
                <th>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>{filteredItems(data)}</tbody>
          {renderFooter(data)}
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;
