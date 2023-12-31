import React, { useMemo, useState } from "react";

type Layout = "default" | "masonry";

type PresentationContextType = {
  category: string;
  layout: Layout;
  setCategory: (category: string) => void;
  setLayout: (layout: Layout) => void;
};

type PresentationProviderProps = {
  children: React.ReactNode;
};

const initialValue: PresentationContextType = {
  category: "nature",
  layout: "default",
  setCategory: () => {
    return;
  },
  setLayout: () => {
    return;
  },
};

export const PresentationContext =
  React.createContext<PresentationContextType>(initialValue);

export const PresentationProvider = ({
  children,
}: PresentationProviderProps) => {
  const [category, setCategory] = useState(initialValue.category);
  const [layout, setLayout] = useState<Layout>(initialValue.layout);

  const value = useMemo(
    () => ({ category, layout, setCategory, setLayout }),
    [category, layout, setCategory, setLayout]
  );

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
};
