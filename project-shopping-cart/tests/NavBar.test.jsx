import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar/NavBar";

import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  it("has a link to the main page", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText("Cool Store")).toBeInTheDocument;
  });
});
