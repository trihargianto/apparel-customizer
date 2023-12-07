import { useRef, useEffect, useContext } from "react";
import * as fabric from "fabric";

import { CanvasDispatchContext } from "@/contexts/CanvasContext";

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
  const canvasElement = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // @ts-ignore-next
    const fabricCanvas = new fabric.Canvas(canvasElement.current);

    dispatchCanvas({
      type: "canvas-updated",
      payload: fabricCanvas,
    });

    return () => {
      fabricCanvas.dispose();
    };
  }, [dispatchCanvas]);

  return (
    <div
      style={{
        backgroundImage: `url('/apparels/${apparel}/${apparel}-${gender}-${color}-${side}.png')`,
        backgroundSize: "480px 559px",
        backgroundRepeat: "no-repeat",
        width: 530,
        height: 630,
      }}
      className="relative"
    >
      <canvas
        ref={canvasElement}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          marginTop: "110px",
          marginLeft: "148px",
        }}
        width={180}
        height={220}
      ></canvas>
    </div>
  );
};

export default ApparelCanvas;
