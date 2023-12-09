import { useContext } from "react";
import type { Canvas } from "fabric";
import * as fabric from "fabric";

import { CanvasContext } from "@/contexts/CanvasContext";
import { ObjectContext, ObjectDispatchContext } from "@/contexts/ObjectContext";

type FabricCanvasObjectType = Canvas | null;

export function useFabric() {
  const canvas = useContext(CanvasContext);
  const { selectedObject } = useContext(ObjectContext);
  const dispacthObject = useContext(ObjectDispatchContext);

  function addTextToCanvas(text: string) {
    const textObject = new fabric.IText(text, {
      left: 20,
      top: 20,
    });

    _addToCanvas(textObject);
  }

  function addCircleToCanvas() {
    const circleObject = new fabric.Circle({
      left: 20,
      top: 20,
      fill: "#000",
      radius: 40,
    });

    _addToCanvas(circleObject);
  }

  function addRectangleToCanvas() {
    const rectangleObject = new fabric.Rect({
      left: 20,
      top: 20,
      fill: "#000",
      width: 80,
      height: 80,
    });

    _addToCanvas(rectangleObject);
  }

  function addLineToCanvas() {
    const lineObject = new fabric.Line([50, 100, 200, 200], {
      left: 20,
      top: 20,
      stroke: "#000",
      strokeWidth: 2,
    });

    _addToCanvas(lineObject);
  }

  async function addImageToCanvas(imageUrl: string) {
    const imageObject = await fabric.FabricImage.fromURL(imageUrl);

    _addToCanvas(imageObject);
  }

  function deleteSelectedObjectFromCanvas() {
    canvas?.remove(selectedObject);
  }

  function _addToCanvas(fabricObject: any) {
    canvas?.add(fabricObject);
    _rerenderCanvas();
  }

  function _rerenderCanvas() {
    canvas?.renderAll();
  }

  return {
    addRectangleToCanvas,
    addLineToCanvas,
    addCircleToCanvas,
    addTextToCanvas,
    addImageToCanvas,
    deleteSelectedObjectFromCanvas,
  };
}
