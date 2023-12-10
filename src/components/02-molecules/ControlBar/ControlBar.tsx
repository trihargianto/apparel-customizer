import { useContext, useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
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

  useEffect(syncInputColorWithSelectedObjectColor, [selectedObject]);

  function syncInputColorWithSelectedObjectColor() {
    if (selectedObject?.type !== FABRIC_TYPE_IMAGE) {
      setPickedColor(selectedObject?.get("fill"));
    }
  }

  return (
    <Card className={clsx("flex items-center justify-end gap-2", className)}>
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
