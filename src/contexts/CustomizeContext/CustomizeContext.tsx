"use client";
import { createContext, FC, useContext, useState } from "react";
import { Customizer } from "../../components/Customizer";
import { AccessibilityIcon } from "../../components/Icons";

export interface CustomizeContextType {
  state: any;
}

export const CustomizeContext = createContext<CustomizeContextType>(null!);

export const CustomizeProvider: FC<any> = ({ children }) => {
  const [state, setState] = useState<CustomizeContextType | undefined>(
    undefined
  );

  return (
    <CustomizeContext.Provider value={{ state }}>
      <Customizer
        trigger={
          <button>
            <AccessibilityIcon />
          </button>
        }
        position="bottomRight"
      >
        Test
      </Customizer>
      {children}
    </CustomizeContext.Provider>
  );
};

export const useCustomizeContext = () => {
  return useContext(CustomizeContext);
};
