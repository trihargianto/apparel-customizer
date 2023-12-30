import { useContext, useEffect, useRef } from "react";
import type { FabricImage } from "fabric";
import * as fabric from "fabric";

import { ObjectDispatchContext } from "@/contexts/ObjectContext";
import { CanvasDispatchContext } from "@/contexts/CanvasContext";
import { useScreenDetect } from "@/hooks/useScreenDetect";

/**
 * TYPES
 */
type ApparelOptionTypes = {
  apparel: ApparelTypes;
  color?: ApparelColorTypes;
  side?: ApparelSideTypes;
  gender?: ApparelGenderTypes;
};

const ApparelCanvas = ({
  apparel,
  color = "black",
  gender = "male",
  side = "front",
}: ApparelOptionTypes) => {
  const dispatchCanvas = useContext(CanvasDispatchContext);
  const dispatchObject = useContext(ObjectDispatchContext);

  const canvasElement = useRef<HTMLCanvasElement>(null);

  const { is2XLargeScreen, isLargeScreen, isXLargeScreen } = useScreenDetect();

  // Mobile-first 3:4 aspect ratio!
  let canvasWidth = 340;
  let canvasHeight = 453;

  if (is2XLargeScreen) {
    canvasWidth = 552;
    canvasHeight = 736;
  } else if (isXLargeScreen) {
    canvasWidth = 472;
    canvasHeight = 629;
  } else if (isLargeScreen) {
    canvasWidth = 488;
    canvasHeight = 651;
  }

  useEffect(() => {
    // @ts-ignore-next
    const fabricCanvas = new fabric.Canvas(canvasElement.current, {
      width: canvasWidth,
      height: canvasHeight,
    });

    fabric.FabricImage.fromURL(
      `/apparels/${apparel}/${apparel}-${gender}-${color}-${side}.png`,
    ).then((imageObject: FabricImage) => {
      imageObject.scaleToWidth(canvasWidth);
      imageObject.scaleToHeight(canvasHeight);

      fabricCanvas.set("backgroundImage", imageObject);
      fabricCanvas.renderAll();
    });

    dispatchCanvas({
      type: "canvas-updated",
      payload: fabricCanvas,
    });

    fabricCanvas.on("mouse:down", (options) => {
      if (options.target) {
        dispatchObject({
          type: "object-selected",
          payload: options.target,
        });
      }
    });

    fabricCanvas.on("selection:updated", (options) => {
      dispatchObject({
        type: "object-selected",
        payload: options.selected?.[0] || null,
      });
    });

    fabricCanvas.on("selection:cleared", () => {
      dispatchObject({
        type: "object-selected",
        payload: null,
      });
    });

    return () => {
      fabricCanvas.dispose();
    };
  }, [apparel, color, dispatchCanvas, dispatchObject, gender, side]);

  return <canvas ref={canvasElement} />;
};

export default ApparelCanvas;
