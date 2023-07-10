import { useContext, useEffect } from "react";
import { ThemeContext, ThemeProvider } from "@/context/themeContext";
import { act, render, waitFor } from "@testing-library/react";

describe("ThemeContext", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it("should have the correct initial values", () => {
    const TestComponent = () => {
      const contextValue = useContext(ThemeContext);

      expect(contextValue.theme).toBe("dark");

      return null;
    };

    act(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );
    });
  });

  it("should update theme when setTheme is called", () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      useEffect(() => {
        act(() => {
          toggleTheme();
        });
      }, [toggleTheme]);

      waitFor(() => {
        expect(theme).toBe("light");
      });

      return null;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
  });
});
