import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Landing from "./containers/landing";
import History from "./containers/history";
import Shopping from "./containers/shopping";
import NavBar from "./components/NavBar";
import { CompletedPurchase, Item, PurchasedtItem } from "./models/Item";

import img1 from "./assets/18769028_40547184.png";
import img2 from "./assets/13158083_38098584.png";
import img3 from "./assets/17616711_36735285.png";
import img4 from "./assets/13159155_34451595.png";
import img5 from "./assets/11912409_34680507.png";
import img6 from "./assets/13158092_35418074.png";
import img7 from "./assets/13158199_35410141.png";
import img8 from "./assets/13159128_34454839.png";
import img9 from "./assets/18495706_39837944.png";
import img10 from "./assets/13159159_34426654.png";
import img11 from "./assets/13245481_34474472.png";
import img12 from "./assets/15087982_27542588.png";

const storeList = [
  {
    id: "0001",
    name: 'AIR FORCE 1',
    image: img1,
    price: "99",
    quantity: 100,
    store: 'Nike Australia',
    storeUrl: 'https://www.nike.com/au/'
  },
  {
    id: "0002",
    name: 'Dunk Low "Georgetown"',
    image: img2,
    price: "92",
    quantity: 30,
    store: 'Nike Australia',
    storeUrl: 'https://www.nike.com/au/'
  },
  {
    id: "0003",
    name: 'AIR MAX 1 ',
    image: img3,
    price: "77",
    quantity: 5,
    store: 'Nike Spain',
    storeUrl: 'https://www.nike.com/es/'
  },
  {
    id: "0004",
    name: 'LOUIS VUITTON AIR',
    image: img4,
    price: "99",
    quantity: 4,
    store: 'Nike Spain',
    storeUrl: 'https://www.nike.com/es/'
  },
  {
    id: "0004",
    name: "Nike Air 1",
    image: img5,
    price: "112",
    quantity: 33,
    store: 'Nike Netherlands',
    storeUrl: 'https://www.nike.com/nl/en/'
  },
  {
    id: "0005",
    name: 'Nike Dunk 32"',
    image: img6,
    price: "62",
    quantity: 12,
    store: 'Nike Luxembourg',
    storeUrl: 'https://www.nike.com/lu/en/'
  },
  {
    id: "0006",
    name: "Best 677",
    image: img7,
    price: "65",
    quantity: 18,
    store: 'Nike Luxembourg',
    storeUrl: 'https://www.nike.com/lu/en/'
  },
  {
    id: "0007",
    name: "Dunk 8",
    image: img8,
    price: "33",
    quantity: 21,
    store: 'Nike Belgium',
    storeUrl: 'https://www.nike.com/be/en/'
  },
  {
    id: "0008",
    name: "AIR FORCE 18",
    image: img9,
    price: "159",
    quantity: 25,
    store: 'Nike Denmark',
    storeUrl: 'https://www.nike.com/dk/en/'
  },
  {
    id: "0009",
    name: "Dremland",
    image: img10,
    price: "52",
    quantity: 33,
    store: 'Nike Denmark',
    storeUrl: 'https://www.nike.com/dk/en/'
  },
  {
    id: "0010",
    name: "Air Min xx1",
    image: img11,
    price: "152",
    quantity: 35,
    store: 'Nike Denmark',
    storeUrl: 'https://www.nike.com/dk/en/'
  },
  {
    id: "0011",
    name: "High 67",
    image: img12,
    price: "82",
    quantity: 55,
    store: 'Nike Denmark',
    storeUrl: 'https://www.nike.com/dk/en/'
  },
];

function App() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<CompletedPurchase[]>([]);
  const [storeItems, setStoreItems] = useState<Item[]>(storeList);
  const [shoppingList, setShoppingList] = useState<PurchasedtItem[]>([]);

  const addItemToList = (item: Item) => {
    let isExisting = shoppingList?.find(listItem => listItem?.id === item.id);
    let updatedItems = [];
    if (isExisting) {
      updatedItems = shoppingList?.map((li: Item) => {
        if (li.id === item.id) {
          return {
            ...li,
            quantity: (li.quantity || 0) + 1,
            purchasedDate: Date.now(),
          };
        }
        return { ...li, purchasedDate: Date.now() };
      });

      setShoppingList(updatedItems);
    } else {
      setShoppingList([
        ...shoppingList,
        { ...item, quantity: 1, purchasedDate: Date.now() },
      ]);
    }

    const storeUpdatedList = storeItems?.map((listItem: Item) => {
      if (item.id === listItem.id) {
        return {
          ...listItem,
          quantity: listItem?.quantity ? listItem?.quantity - 1 : 0,
        };
      }
      return listItem;
    });
    setStoreItems(storeUpdatedList);
  };

  const removeItemFromList = (id: string) => {
    let filtered = shoppingList?.filter(item => item?.id !== id);
    setShoppingList(filtered);
  };

  const onCheckout = () => {
    let total = shoppingList?.reduce(
      (total, item) => total + parseFloat(item?.price),
      0
    );

    const completedPurchase: CompletedPurchase = {
      total,
      completedOn: Date.now(),
      items: shoppingList
    };

    setCompleted([...completed, completedPurchase]);
    setShoppingList([]);
    navigate("/history");
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/history" element={<History completedPurchases={completed} />} />
        <Route
          path="/shopping"
          element={
            <Shopping
              addItem={addItemToList}
              availableItems={storeItems}
              shoppingList={shoppingList}
              removeItem={removeItemFromList}
              onCheckout={onCheckout}
            />
          }
        />
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
