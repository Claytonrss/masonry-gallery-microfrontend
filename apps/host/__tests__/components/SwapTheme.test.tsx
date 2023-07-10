import { render, fireEvent, act } from "@testing-library/react";
import SwapTheme from "@/components/SwapTheme";
import { ThemeContext } from "@/context/themeContext";

test("should render SwapTheme component", () => {
  const { getByTestId } = render(<SwapTheme />);
  const swapThemeElement = getByTestId("swap-theme");

  expect(swapThemeElement).toBeInTheDocument();
});

test("should swap the data-theme attribute when clicked", () => {
  const mockSwapTheme = jest.fn();
  const { getByTestId } = render(
    <ThemeContext.Provider
      value={{ theme: "light", toggleTheme: mockSwapTheme }}
    >
      <SwapTheme />
    </ThemeContext.Provider>
  );

  const swapThemeElement = getByTestId("swap-theme");

  act(() => {
    fireEvent.click(swapThemeElement);
  });

  expect(mockSwapTheme).toHaveBeenCalled();
});
