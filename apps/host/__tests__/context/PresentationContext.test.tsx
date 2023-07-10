import { act, render, waitFor } from "@testing-library/react";
import { useContext, useEffect } from "react";
import {
  PresentationContext,
  PresentationProvider,
} from "@/context/PresentationContext";

describe("PresentationContext", () => {
  it("should have the correct initial values", () => {
    const TestComponent = () => {
      const contextValue = useContext(PresentationContext);
      expect(contextValue.category).toBe("nature");
      expect(contextValue.layout).toBe("default");
      return null;
    };

    act(() => {
      render(
        <PresentationProvider>
          <TestComponent />
        </PresentationProvider>
      );
    });
  });
  it("should update category when setCategory is called", () => {
    const TestComponent = () => {
      const { category, setCategory } = useContext(PresentationContext);
      useEffect(() => {
        act(() => {
          setCategory("new category");
        });
      }, [setCategory]);

      waitFor(() => {
        expect(category).toBe("new category");
      });

      return null;
    };

    render(
      <PresentationProvider>
        <TestComponent />
      </PresentationProvider>
    );
  });
  it("should update layout when setLayout is called", () => {
    const TestComponent = () => {
      const { layout, setLayout } = useContext(PresentationContext);
      useEffect(() => {
        act(() => {
          setLayout("masonry");
        });
      }, [setLayout]);

      waitFor(() => {
        expect(layout).toBe("masonry");
      });

      return null;
    };
    render(
      <PresentationProvider>
        <TestComponent />
      </PresentationProvider>
    );
  });
});
