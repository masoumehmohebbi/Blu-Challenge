import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../Modal";

describe("Modal", () => {
  it("should have a heading with this name", () => {
    render(<Modal onOpen={() => {}} open={true} />); // Set open to true
    expect(
      screen.getByRole("heading", { name: /لیست تسهیلات/ })
    ).toBeInTheDocument();
  });
});
