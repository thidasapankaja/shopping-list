import moment from "moment";
import { Suspense, useState } from "react";
import ItemsTable from "../components/ItemsTable";
import { CompletedPurchase } from "../models/Item";

type HistoryProps = {
  completedPurchases: CompletedPurchase[];
};

const History = ({ completedPurchases }: HistoryProps) => {
  const [selectedPurchase, setSeleactedPurchase] =
    useState<CompletedPurchase>();

  const renderTable = (selectedPurchase: CompletedPurchase) => {
    return (
      <Suspense>
        <div>
          <h3>
            Purchase on{" "}
            {moment(selectedPurchase?.completedOn).format(
              "dddd, MMMM, Do, YYYY, h:mm"
            )}
          </h3>
        </div>
        <div>
          <ItemsTable data={selectedPurchase.items} isHistory />
        </div>
      </Suspense>
    );
  };
  return (
    <div style={{ height: "100vh", margin: "50px" }}>
      <div>
        <h3>Your Purchase History</h3>
      </div>
      <ul>
        {completedPurchases?.map(purchase => (
          <li style={{ fontSize: "20px", margin: "10px 0" }}>
            {moment(purchase.completedOn).format("dddd, MMMM, Do, YYYY, h:mm")}{" "}
            {purchase.total} $
            <button
              className="button purchaseButton"
              onClick={() => setSeleactedPurchase(purchase)}
            >
              Show List
            </button>
          </li>
        ))}
      </ul>
      {selectedPurchase && renderTable(selectedPurchase)}
    </div>
  );
};

export default History;
