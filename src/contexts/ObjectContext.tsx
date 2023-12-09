"use client";

import { createContext, useReducer } from "react";

/**
 * TYPES
 */
type ObjectStateType = {
  selectedObject: any;
};

type ObjectActionType = {
  type: "object-selected";
  payload?: any;
};

/**
 * CREATE REACT CONTEXTS
 */
const initialCanvasState: ObjectStateType = {
  selectedObject: null,
};

export const ObjectContext = createContext<ObjectStateType>(initialCanvasState);

export const ObjectDispatchContext = createContext<
  React.Dispatch<ObjectActionType>
>((e) => e);

/**
 * MAIN REACT CONTEXT PROVIDER
 */
export function ObjectProvider({ children }: { children: React.ReactNode }) {
  const [canvas, dispatch] = useReducer(canvasReducer, initialCanvasState);

  return (
    <ObjectContext.Provider value={canvas}>
      <ObjectDispatchContext.Provider value={dispatch}>
        {children}
      </ObjectDispatchContext.Provider>
    </ObjectContext.Provider>
  );
}

/**
 * REDUCER
 */
function canvasReducer(
  state: ObjectStateType,
  action: ObjectActionType,
): ObjectStateType {
  switch (action.type) {
    case "object-selected": {
      return {
        ...state,
        selectedObject: action.payload,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
