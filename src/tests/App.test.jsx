import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

  describe("App component", () => {
    it("renders magnificent monkeys", () => {
      // since screen does not have the container property, we'll destructure render to obtain a container for this test
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
      render(<App />);
      const user = userEvent.setup();

      const button = screen.getByRole("button", { name: "Click Me" });

      await user.click(button);

      expect(screen.getByRole("heading").textContent).toMatch(
        /radical rhinos/i
      );
    });
  });

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
