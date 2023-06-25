import { Button, Navbar } from "react-daisyui";
import SwapTheme from "../SwapTheme";

const NavBar = () => {
  return (
    <div>
      <Navbar className="flex  w-full component-preview p-4 align-middle justify-between gap-2 font-sans ">
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
