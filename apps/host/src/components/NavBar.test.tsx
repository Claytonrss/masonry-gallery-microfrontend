import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("should render NavBar component", () => {
  const { getByTestId } = render(<NavBar />);
  const navBarElement = getByTestId("nav-bar");

  expect(navBarElement).toBeInTheDocument();
});
