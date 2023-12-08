const Circle = ({ ...props }) => (
  <div className="group aspect-square w-full cursor-pointer" {...props}>
    <div
      className="aspect-square w-full rounded-full bg-gray-500 group-hover:bg-gray-400"
      title="circle"
    />
  </div>
);

const Line = ({ ...props }) => (
  <div
    className="group flex aspect-square w-full cursor-pointer items-center justify-center"
    {...props}
  >
    <div
      className="h-1 w-full bg-gray-500 group-hover:bg-gray-400 "
      title="line"
    />
  </div>
);

const Rectangle = ({ ...props }) => (
  <div className="group aspect-square w-full cursor-pointer" {...props}>
    <div
      className="aspect-square w-full bg-gray-500 group-hover:bg-gray-400"
      title="rectangle"
    />
  </div>
);

export type ShapeTypes = "circle" | "line" | "rectangle";

type ShapePickerPropTypes = {
  onClick?: (shape: ShapeTypes) => void;
};

export const ShapePicker = ({
  onClick = (_: any) => _,
}: ShapePickerPropTypes) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Circle onClick={() => onClick("circle")} />
      <Rectangle onClick={() => onClick("rectangle")} />
      <Line onClick={() => onClick("line")} />
    </div>
  );
};

export default ShapePicker;
