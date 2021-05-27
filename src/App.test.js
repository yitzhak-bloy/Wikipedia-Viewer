import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Elemnts", () => {
  test('"The caption that links to a random Wikipedia page exists', () => {
    render(<App />);
    const linkElement = screen.getByRole("link", { name: /יותר מזל משכל/i });
    expect(linkElement).toBeInTheDocument();
  });
});
