import { useContext, useState } from "react";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { useFabric } from "@/hooks/useFabric";
import { ObjectContext } from "@/contexts/ObjectContext";
import { DEFAULT_OBJECT_COLOR } from "@/constants/config";
import { FABRIC_TYPE_IMAGE } from "@/constants/fabricObjectTypes";

import Button from "@/components/01-atoms/Button";
import Card from "@/components/01-atoms/Card";

type ControlBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const ControlBar = ({ className }: ControlBarPropTypes) => {
  const [opacity, setOpacity] = useState(100);
  const { selectedObject } = useContext(ObjectContext);
  const { deleteSelectedObjectFromCanvas, updateObjectColor } = useFabric();

  const isButtonDisabled = !selectedObject;

  const isColorPickerDisabled =
    isButtonDisabled || selectedObject?.type === FABRIC_TYPE_IMAGE;

  const [pickedColor, setPickedColor] = useState(DEFAULT_OBJECT_COLOR);

  function onColorPickerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setPickedColor(value);

    updateObjectColor(selectedObject, value);
  }

  return (
    <Card className={clsx("flex items-center justify-end gap-3", className)}>
      {/* <div className="flex cursor-pointer items-center gap-1 text-sm">
        <span>Opacity</span>

        <div>100%</div>

        <ChevronDownIcon className="h-3 w-3" />
      </div> */}

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex cursor-pointer items-center gap-1 px-2 py-3 text-sm"
        >
          <span>Opacity</span>

          <div>100%</div>

          <ChevronDownIcon className="h-3 w-3" />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content card card-compact text-primary-content z-[1] w-64 bg-white p-2 shadow"
        >
          <div className="card-body">
            <input
              type="range"
              min={0}
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              className="range"
            />
          </div>
        </div>
      </div>

      <input
        type="color"
        value={pickedColor}
        disabled={isColorPickerDisabled}
        className={clsx("h-8 w-8", isColorPickerDisabled ? "opacity-40" : "")}
        onChange={onColorPickerChange}
        title="Change Color"
      />

      <Button
        variant="naked"
        size="sm"
        disabled={isButtonDisabled}
        onClick={deleteSelectedObjectFromCanvas}
      >
        <TrashIcon className="h-6 w-6" />
      </Button>
    </Card>
  );
};

export default ControlBar;
