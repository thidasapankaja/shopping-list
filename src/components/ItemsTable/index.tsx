import { Item } from "../../models/Item";

type ItemsTableProps = {
  data: Item[];
  isHistory?: boolean;
  removeItem?: (arg0: string) => void;
};

const columns = ["Item", "Quantity", "Item price", "Price", "Remove"];
const historyColumns = ["Item", "Quantity", "Item price", "Price"];

const ItemsTable = ({ data, isHistory, removeItem }: ItemsTableProps) => {
  const renderingColumns = isHistory ? historyColumns : columns;
  return (
    <table>
      <thead>
        <tr>
          {renderingColumns?.map((column: string) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map(cell => {
          return (
            <tr>
              <td>{cell?.name}</td>
              <td>{cell?.quantity}</td>
              <td>{cell?.price}</td>
              <td>{cell?.quantity && cell?.price &&  cell?.quantity * parseFloat(cell?.price)}</td>
              {!isHistory && removeItem && (
                <td>
                  <button onClick={() => removeItem(cell?.id)}></button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ItemsTable;
