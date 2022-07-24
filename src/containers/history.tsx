import moment from "moment";
import { Suspense, useState } from "react";
import ItemsTable from "../components/ItemsTable";
import Loading from "../components/Loading";
import { CompletedPurchase } from "../models/Item";
import './index.css'

type HistoryProps = {
  completedPurchases: CompletedPurchase[];
};

const History = ({ completedPurchases }: HistoryProps) => {
  const [selectedPurchase, setSeleactedPurchase] =
    useState<CompletedPurchase>();

  const renderTable = (selectedPurchase: CompletedPurchase) => {
    return (
      <Suspense fallback={<Loading />}>
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
    <div style={{ padding: "10px" }}>
      <div>
        <h3>Your Purchase History</h3>
      </div>
      <ul>
        {completedPurchases?.map(purchase => (
          <li
            key={purchase?.completedOn}
            style={{ fontSize: "20px", margin: "10px 0" }}
          >
            Purchase on{" "}
            {moment(purchase.completedOn).format("dddd, MMMM, Do, YYYY, h:mm")}{" "}
            ----- <span style={{ fontWeight: "600" }}>{purchase.total} $</span>
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
