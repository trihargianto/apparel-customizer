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
    const { x, y } = _getCenterPointTarget();

    const textObject = new fabric.IText(text, {
      left: x,
      top: y,
    });

    _addToCanvas(textObject);
  }

  function addCircleToCanvas() {
    const { x, y } = _getCenterPointTarget();

    const circleObject = new fabric.Circle({
      left: x,
      top: y,
      fill: DEFAULT_OBJECT_COLOR,
      radius: 40,
    });

    _addToCanvas(circleObject);
  }

  function addRectangleToCanvas() {
    const { x, y } = _getCenterPointTarget();

    const rectangleObject = new fabric.Rect({
      left: x,
      top: y,
      fill: DEFAULT_OBJECT_COLOR,
      width: 80,
      height: 80,
    });

    _addToCanvas(rectangleObject);
  }

  function addLineToCanvas() {
    const { x, y } = _getCenterPointTarget();

    const lineObject = new fabric.Line([50, 100, 200, 200], {
      left: x,
      top: y,
      stroke: DEFAULT_OBJECT_COLOR,
      strokeWidth: 2,
    });

    _addToCanvas(lineObject);
  }

  async function addImageToCanvas(imageUrl: string) {
    const imageObject = await fabric.FabricImage.fromURL(imageUrl);

    const { x, y } = _getCenterPointTarget();

    imageObject.setX(x);
    imageObject.setY(y);

    const { canvasWidth } = _getCanvasDimension();

    if (canvasWidth > 0) {
      imageObject.scaleToWidth(_scaleByPercent(canvasWidth, 30));
    }

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

  function _getCenterPointTarget(): { x: number; y: number } {
    const { canvasWidth, canvasHeight } = _getCanvasDimension();

    const x = _scaleByPercent(canvasWidth, 35);
    const y = _scaleByPercent(canvasHeight, 25);

    return {
      x,
      y,
    };
  }

  function _getCanvasDimension() {
    const canvasWidth = canvas?.getWidth() || 0;
    const canvasHeight = canvas?.getHeight() || 0;

    return {
      canvasWidth,
      canvasHeight,
    };
  }

  function _scaleByPercent(value: number, percentage: number) {
    const result = (value * percentage) / 100;

    return result;
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
