import { useContext } from "react";
import type { FabricObject } from "fabric";
import * as fabric from "fabric";

import { CanvasContext } from "@/contexts/CanvasContext";
import { ObjectContext } from "@/contexts/ObjectContext";
import { DEFAULT_OBJECT_COLOR } from "@/constants/config";
import { FABRIC_TYPE_LINE } from "@/constants/fabricObjectTypes";

export function useFabric() {
  const canvas = useContext(CanvasContext);
  const { selectedObject } = useContext(ObjectContext);

  function downloadCanvasAsPNG() {
    const canvasDataURL = canvas?.toDataURL({ multiplier: 2, format: "png" });

    if (canvasDataURL) {
      const anchorElement = window.document.createElement("a");

      anchorElement.href = canvasDataURL;
      anchorElement.download = "apparel-design.png";

      anchorElement.click();

      // anchorElement.remove();
    }
  }

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
      fill: DEFAULT_OBJECT_COLOR,
      radius: 40,
    });

    _addToCanvas(circleObject);
  }

  function addRectangleToCanvas() {
    const rectangleObject = new fabric.Rect({
      left: 20,
      top: 20,
      fill: DEFAULT_OBJECT_COLOR,
      width: 80,
      height: 80,
    });

    _addToCanvas(rectangleObject);
  }

  function addLineToCanvas() {
    const lineObject = new fabric.Line([50, 100, 200, 200], {
      left: 20,
      top: 20,
      stroke: DEFAULT_OBJECT_COLOR,
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

  function updateObjectColor(object: FabricObject, color: string) {
    if (object.type === FABRIC_TYPE_LINE) {
      object.set("stroke", color);
    } else {
      object.set("fill", color);
    }

    _rerenderCanvas();
  }

  function _addToCanvas(object: FabricObject) {
    canvas?.add(object);
    _rerenderCanvas();
  }

  function _rerenderCanvas() {
    canvas?.renderAll();
  }

  return {
    downloadCanvasAsPNG,
    addRectangleToCanvas,
    addLineToCanvas,
    addCircleToCanvas,
    addTextToCanvas,
    addImageToCanvas,
    deleteSelectedObjectFromCanvas,
    updateObjectColor,
  };
}
