"use client";

import { createContext, useReducer } from "react";
import type { Canvas } from "fabric";

/**
 * TYPES
 */
type CanvasStateType = Canvas | null;

type CanvasActionType = { type: "canvas-updated"; payload?: any };

/**
 * CREATE REACT CONTEXTS
 */
const initialCanvasState: CanvasStateType = null;

export const CanvasContext = createContext<CanvasStateType>(initialCanvasState);

export const CanvasDispatchContext = createContext<
  React.Dispatch<CanvasActionType>
>((e) => e);

/**
 * MAIN REACT CONTEXT PROVIDER
 */
export function CanvasProvider({ children }: { children: React.ReactNode }) {
  const [canvas, dispatch] = useReducer(canvasReducer, initialCanvasState);

  return (
    <CanvasContext.Provider value={canvas}>
      <CanvasDispatchContext.Provider value={dispatch}>
        {children}
      </CanvasDispatchContext.Provider>
    </CanvasContext.Provider>
  );
}

/**
 * REDUCER
 */
function canvasReducer(
  state: CanvasStateType,
  action: CanvasActionType,
): CanvasStateType {
  switch (action.type) {
    case "canvas-updated": {
      return action.payload;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
