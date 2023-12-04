import { useRef, useEffect } from "react";
import * as fabric from "fabric";

/**
 * TYPES
 */
export type ApparelTypes = "tshirt" | "hoodie";

export type ApparelColorTypes = "black" | "white" | "gray" | "navy";

type ApparelSideTypes = "front" | "back";

type ApparelGenderTypes = "male" | "female";

type ApparelOptionTypes = {
  color?: ApparelColorTypes;
  side?: ApparelSideTypes;
  gender?: ApparelGenderTypes;
};

/**
 * MAIN HOOKS
 */
export const useApparelAsset = (
  apparel: ApparelTypes,
  options?: ApparelOptionTypes,
) => {
  const { color = "black", gender = "male", side = "front" } = options ?? {};
  const canvasElement = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // @ts-ignore-next
    const canvas = new fabric.Canvas(canvasElement.current);

    // TODO: Remove dummyRectangle
    const dummyRectangle = new fabric.Rect({
      backgroundColor: "black",
      fill: "black",
      width: 50,
      height: 50,
    });

    canvas.add(dummyRectangle);

    return () => {
      canvas.dispose();
    };

    // TODO: Make canvas available to the app via context
  }, [apparel, color]);

  const ImageComponent = () => (
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

  return { ImageComponent };
};
