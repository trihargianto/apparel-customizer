"use client";

import { createContext, useReducer } from "react";

/**
 * TYPES
 */
type ApparelStateTypes = {
  type: ApparelTypes;
  color: ApparelColorTypes;
};

type ApparelAction = { type: "color-changed" | "type-changed"; payload?: any };

/**
 * CREATE REACT CONTEXTS
 */
const initialStateApparel: ApparelStateTypes = {
  color: "black",
  type: "hoodie",
};

export const ApparelContext =
  createContext<ApparelStateTypes>(initialStateApparel);

export const ApparelDispatchContext = createContext<
  React.Dispatch<ApparelAction>
>((e) => e);

/**
 * MAIN REACT CONTEXT PROVIDER
 */
export function ApparelProvider({ children }: { children: React.ReactNode }) {
  const [apparel, dispatch] = useReducer(apparelReducer, initialStateApparel);

  return (
    <ApparelContext.Provider value={apparel}>
      <ApparelDispatchContext.Provider value={dispatch}>
        {children}
      </ApparelDispatchContext.Provider>
    </ApparelContext.Provider>
  );
}

/**
 * REDUCER
 */
function apparelReducer(
  state: ApparelStateTypes,
  action: ApparelAction,
): ApparelStateTypes {
  switch (action.type) {
    case "color-changed": {
      return {
        ...state,
        color: action.payload,
      };
    }

    case "type-changed": {
      return {
        ...state,
        type: action.payload,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
