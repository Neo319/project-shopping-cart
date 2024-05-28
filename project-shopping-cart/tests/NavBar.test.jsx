import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar/NavBar";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import { useState } from "react";

// components to render for test routes
const HomeComponent = () => <div>Home Page</div>;
const ShopComponent = () => <div>Shop Page</div>;
const CheckoutComponent = () => <div>Checkout Page</div>;

// Wrapper component for testing NavBar with different cart states
// eslint-disable-next-line react/prop-types
const TestWrapper = ({ initialCartState }) => {
  const [cart] = useState(initialCartState);

  return (
    <MemoryRouter>
      <NavBar cart={cart} />
    </MemoryRouter>
  );
};

describe("NavBar", () => {
  it("Renders working links to Home, Shop, and Checkout", () => {
    //Render Navbar in MemoryRouter and test routes
    render(
      <MemoryRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/checkout" element={<CheckoutComponent />} />
        </Routes>
      </MemoryRouter>
    );

    //make sure nav bar is rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    //checking that all links are rendered
    const headerLink = screen.getByRole("link", { name: "Project Shop" });
    const shopLink = screen.getByRole("link", { name: "Shop" });
    const checkoutLink = screen.getByTestId("checkout-link");

    expect(headerLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(checkoutLink).toBeInTheDocument();

    //checking that the links render the correct path when clicked
    fireEvent.click(headerLink);
    expect(screen.getByText("Home Page")).toBeInTheDocument();

    fireEvent.click(shopLink);
    expect(screen.getByText("Shop Page")).toBeInTheDocument();

    fireEvent.click(checkoutLink);
    expect(screen.getByText("Checkout Page")).toBeInTheDocument();
  });

  it("renders Cart items according to cart state", () => {
    render(<TestWrapper initialCartState={{ product1: 1 }} />);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("renders '2' for two different items", () => {
    render(<TestWrapper initialCartState={{ product1: 1, product2: 1 }} />);
    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it("renders '2' for two of the same item", () => {
    render(<TestWrapper initialCartState={{ product1: 2 }} />);
    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it("renders '3' for two of the same + one different item", () => {
    render(<TestWrapper initialCartState={{ product1: 1, product2: 2 }} />);
    expect(screen.getByText(3)).toBeInTheDocument();
  });
});
