import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop/Shop";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import PropTypes from "prop-types";

import { vi } from "vitest";

//mock data from fakeStoreAPI
const mockProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
];

//setup props
// eslint-disable-next-line react/prop-types
const TestWrapper = ({
  initialCartState,
  handleCartIncrease,
  handleCartDecrease,
}) => {
  const [shopItems] = useState(mockProducts);
  const [cart] = useState({ initialCartState });

  return (
    <MemoryRouter>
      <Shop
        cart={cart}
        products={shopItems}
        handleCartIncrease={handleCartIncrease}
        handleCartDecrease={handleCartDecrease}
      />
    </MemoryRouter>
  );
};

//setup functions
// ---

describe("Shop Page", () => {
  it("should show information about products", () => {
    render(
      <TestWrapper
        initialCartState={{}}
        handleCartIncrease={vi.fn()}
        handleCartDecrease={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /Mens Casual Premium Slim Fit T-Shirts/i,
      })
    ).toBeInTheDocument();

    //both product descriptions
    expect(screen.getByText("Your perfect pack for", { exact: false }));
    expect(screen.getByText("Slim-fitting style, contrast", { exact: false }));
  });

  //ensure navBar is rendered
  it("should render a navbar", () => {
    render(
      <TestWrapper
        initialCartState={{}}
        handleCartIncrease={vi.fn()}
        handleCartDecrease={vi.fn()}
      />
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  //add to cart buttons
  it("should have 'add to cart' buttons that calls onClick handler", async () => {
    const handleCartIncrease = vi.fn();
    const user = userEvent.setup();
    render(
      <TestWrapper
        initialCartState={{}}
        handleCartIncrease={handleCartIncrease}
        handleCartDecrease={vi.fn()}
      />
    );

    const addToCart = screen.getAllByRole("button", { name: /add to cart/i });
    const cartItemCount = screen.getByTestId("cart-count");
    expect(addToCart[0]).toBeInTheDocument();
    expect(cartItemCount).toBeInTheDocument();

    await user.click(addToCart[0]);

    expect(handleCartIncrease).toHaveBeenCalled();
  });

  it("should have increment/decrement buttons that call respective functions", async () => {
    const handleCartIncrease = vi.fn();
    const handleCartDecrease = vi.fn();
    const user = userEvent.setup();

    render(
      <TestWrapper
        initialCartState={{ product1: 1 }}
        handleCartIncrease={handleCartIncrease}
        handleCartDecrease={handleCartDecrease}
      />
    );

    expect(handleCartDecrease).not.toHaveBeenCalled();
    expect(handleCartIncrease).not.toHaveBeenCalled();

    const QuantityUpBtn = screen.getByTestId("0up-btn");
    const QuantityDownBtn = screen.getByTestId("0down-btn");

    await user.click(QuantityUpBtn);

    expect(handleCartIncrease).toHaveBeenCalled();
    expect(handleCartDecrease).not.toHaveBeenCalled();

    await user.click(QuantityDownBtn);

    expect(handleCartDecrease).toHaveBeenCalled();
  });

  //qty input field
  //qty buttons
});
