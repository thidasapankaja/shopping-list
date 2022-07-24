import { render } from "@testing-library/react";
import Card from ".";

it("Card renders", () => {
  const props = {
    item: {
      name: "Sample",
      price: "150",
      store: "NEW",
      image: "",
      id: "001",
      storeUrl: "https://google.com",
    },
    key: "001",
    addItem: () => null,
  };
  render(<Card {...props}></Card>);
});
