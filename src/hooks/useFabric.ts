import { useContext } from "react";
import type { Canvas } from "fabric";
import * as fabric from "fabric";

import { CanvasContext } from "@/contexts/CanvasContext";

type FabricCanvasObjectType = Canvas | null;

export function useFabric() {
  const canvas = useContext(CanvasContext);

  function addTextToCanvas(text: string) {
    const textObject = new fabric.FabricText(text, {
      left: 20,
      top: 20,
    });

    canvas?.add(textObject);

    _rerenderCanvas();
  }

  async function addImageToCanvas(imageUrl: string) {
    const imageObject = await fabric.FabricImage.fromURL(imageUrl);

    canvas?.add(imageObject);
  }

  function _rerenderCanvas() {
    canvas?.renderAll();
  }

  return {
    addTextToCanvas,
    addImageToCanvas,
  };
}