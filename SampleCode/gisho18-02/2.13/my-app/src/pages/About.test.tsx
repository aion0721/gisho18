import { render, screen } from "@testing-library/react";
import About from "./About";

describe("Aboutコンポーネント", () => {
  test("aboutタイトルが表示される", () => {
    render(<About />);
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});
