import IconLayoutDefault from "@/assets/icon_layout_default.svg";
import IconLayoutMasonry from "@/assets/icon_layout_masonry.svg";
import IconLayoutReorder from "@/assets/icon_layout_reorder.svg";
import { PresentationContext } from "@/context/PresentationContext";
import { useContext } from "react";
import { Button, ButtonGroup } from "react-daisyui";
import { categories, reorderPhotos } from "./MenuFilters.utils";

const MenuFilters = () => {
  const {
    setCategory,
    category: selectedCategory,
    layout,
    setLayout,
  } = useContext(PresentationContext);

  return (
    <div className="p-4 b-4" data-testid="menu-filters">
      <div className="w-full flex flex-col mb-4 text-center">
        <h2 className="mb-1 uppercase">Categoria</h2>
        <ButtonGroup className="gap-1 self-center">
          {categories.map((category) => (
            <Button
              data-testid={`BTNCategory-${category}`}
              onClick={() => setCategory(category)}
              key={category}
              className="uppercase"
              active={category === selectedCategory}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="w-full flex flex-col mb-4 text-center">
        <h2 className="mb-1 uppercase">Layout</h2>
        <ButtonGroup className="gap-1 self-center">
          <Button
            data-testid="BTNLayoutDefault"
            onClick={() => setLayout("default")}
            active={layout === "default"}
            className="w-12 h-10 pt-1 pl-2 pb-1 pr-2 border-r-0"
          >
            <img
              src={IconLayoutDefault}
              alt="layout Default"
              title="layout Default"
              className="w-full m-0"
            />
          </Button>
          <Button
            data-testid="BTNLayoutMasonry"
            onClick={() => setLayout("masonry")}
            active={layout === "masonry"}
            className="w-12 h-10 pt-1 pl-2 pb-1 pr-2 border-r-0"
          >
            <img
              src={IconLayoutMasonry}
              alt="layout Masonry"
              title="layout Masonry"
              className="w-full m-0"
            />
          </Button>
        </ButtonGroup>
      </div>
      <div className="w-full flex flex-col mb-0 text-center">
        <h2 className="mb-1 uppercase">Reordenar</h2>
        <Button
          data-testid="BTNReorderPhotos"
          onClick={reorderPhotos}
          active={layout === "default"}
          className="w-12 h-10 pt-1 pl-2 pb-1 pr-2 border-r-0 self-center"
        >
          <img
            src={IconLayoutReorder}
            alt="layout Default"
            title="layout Default"
            className="w-full m-0"
          />
        </Button>
      </div>
    </div>
  );
};

export default MenuFilters;
