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

  it("renders Slider component inside a main element with the correct class", () => {
    render(<RootLayout />);
    const slider = screen.getByRole("presentation", { name: /slider/i });
    expect(slider).toBeInTheDocument();
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass("main");
  });
});
