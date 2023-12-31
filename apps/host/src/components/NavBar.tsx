import { Button, Navbar } from "react-daisyui";
import SwapTheme from "@/components/SwapTheme";

const NavBar = () => {
  return (
    <div>
      <Navbar
        data-testid="nav-bar"
        className="flex  w-full component-preview py-4 align-middle justify-between gap-2 font-sans "
      >
        <Navbar.Start>
          <Button className="text-xl normal-case" color="ghost">
            PhotoGallery (Microfrontends)
          </Button>
        </Navbar.Start>
        <Navbar.End>
          <SwapTheme />
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default NavBar;
