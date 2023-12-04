import { useRef, useEffect } from "react";
import * as fabric from "fabric";

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
  const canvasElement = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // @ts-ignore-next
    const canvas = new fabric.Canvas(canvasElement.current);

    const text = new fabric.FabricText("hello world", { left: 100, top: 100 });

    canvas.add(text);

    return () => {
      canvas.dispose();
    };

    // TODO: Make canvas available to the app via context
  }, [apparel, color]);

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
          border: "1px dashed #f0f0f0",
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
