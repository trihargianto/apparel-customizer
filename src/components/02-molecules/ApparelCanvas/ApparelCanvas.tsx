import { useRef, useEffect, useContext } from "react";
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

  const { isMediumScreen, isLargeScreen, isXLargeScreen } = useScreenDetect();

  // Mobile-first!
  let canvasWidth = 340;

  if (isXLargeScreen) {
    canvasWidth = 550;
  } else if (isLargeScreen) {
    canvasWidth = 370;
  } else if (isMediumScreen) {
    canvasWidth = 800;
  }

  useEffect(() => {
    // @ts-ignore-next
    const fabricCanvas = new fabric.Canvas(canvasElement.current, {
      width: canvasWidth,
      height: canvasWidth,
    });

    fabric.FabricImage.fromURL(
      `/apparels/${apparel}/${apparel}-${gender}-${color}-${side}.png`,
    ).then((imageObject: FabricImage) => {
      imageObject.scaleToWidth(canvasWidth);
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

    fabricCanvas.on("selection:cleared", (options) => {
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

  // return (
  //   <div
  //     style={{
  //       backgroundImage: `url('/apparels/${apparel}/${apparel}-${gender}-${color}-${side}.png')`,
  //       backgroundSize: "480px 559px",
  //       backgroundRepeat: "no-repeat",
  //       width: 530,
  //       height: 630,
  //     }}
  //     className="relative"
  //   >
  //     <canvas
  //       ref={canvasElement}
  //       style={{
  //         position: "absolute",
  //         left: 0,
  //         right: 0,
  //         top: 0,
  //         bottom: 0,
  //         margin: "auto",
  //         marginTop: "110px",
  //         marginLeft: "148px",
  //       }}
  //       width={180}
  //       height={220}
  //     ></canvas>
  //   </div>
  // );
};

export default ApparelCanvas;
