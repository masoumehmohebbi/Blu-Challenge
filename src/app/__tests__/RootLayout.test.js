import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";
import "@testing-library/jest-dom";

describe("RootLayout", () => {
  it("should have children text", () => {
    render(<RootLayout />);
    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("should set lang attribute to 'fa' on html tag", () => {
    render(<RootLayout />);
    const htmlTag = document.documentElement;
    expect(htmlTag).toHaveAttribute("lang", "fa");
  });

  it("should have main className", () => {
    render(<RootLayout />);
    const mainElem = document.getElementsByTagName(main);
    expect(mainElem).toHaveAttribute("className").toBeInTheDocument();
  });
});
