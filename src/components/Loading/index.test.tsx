import { render, screen } from "@testing-library/react";
import Loading from ".";

it("Loading renders", () => {
  render(<Loading />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
