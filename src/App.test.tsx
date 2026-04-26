import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders shell and default prompt", () => {
  render(<App />);
  expect(screen.getByText(/algorithm visualizer/i)).toBeInTheDocument();
  expect(screen.getByText(/select an algorithm/i)).toBeInTheDocument();
});

test("switches to quick sort visualizer from sidebar", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Quick Sort"));
  expect(screen.getByText(/quick sort visualizer/i)).toBeInTheDocument();
});
