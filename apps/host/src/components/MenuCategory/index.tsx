import { useContext } from "react";
import { Button, ButtonGroup } from "react-daisyui";
import { PresentationContext } from "../../context/PresentationContext";

const MenuCategory = () => {
  const { setCategory, category } = useContext(PresentationContext);
  return (
    <div className="w-full flex justify-center">
      <div>
        <h2 className="w-full text-center mb-2 uppercase">Categoria</h2>
        <ButtonGroup className="gap-1">
          <Button
            active={category === "nature"}
            onClick={() => setCategory("nature")}
          >
            Nature
          </Button>
          <Button
            active={category === "technology"}
            onClick={() => setCategory("technology")}
          >
            Technology
          </Button>
          <Button
            active={category === "abstract"}
            onClick={() => setCategory("abstract")}
          >
            Abstract
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MenuCategory;
