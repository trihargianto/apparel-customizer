import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import Button from "@/components/01-atoms/Button";
import Card from "@/components/01-atoms/Card";
import { useFabric } from "@/hooks/useFabric";
import { MouseEventHandler, useContext } from "react";
import { ObjectContext } from "@/contexts/ObjectContext";

type ControlBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

type ControlBarButtonTypes = {
  component?: any;
  isDisabled?: boolean;
  onClick: MouseEventHandler;
}[];

const ControlBar = ({ className }: ControlBarPropTypes) => {
  const { selectedObject } = useContext(ObjectContext);
  const { deleteSelectedObjectFromCanvas } = useFabric();

  const buttonIcons: ControlBarButtonTypes = [
    // TODO: Add undo/redo feature
    // {
    //   component: ArrowUturnLeftIcon,
    //   isDisabled: true,
    // },
    // {
    //   component: ArrowUturnRightIcon,
    //   isDisabled: true,
    // },
    {
      component: TrashIcon,
      isDisabled: !selectedObject,
      onClick: deleteSelectedObjectFromCanvas,
    },
  ];

  return (
    <Card className={clsx("flex justify-end gap-2", className)}>
      {buttonIcons.map((buttonIcon, index) => (
        <Button
          key={`button-icon-${index}`}
          variant="naked"
          size="sm"
          disabled={buttonIcon.isDisabled}
          onClick={buttonIcon.onClick}
        >
          <buttonIcon.component className="h-6 w-6" />
        </Button>
      ))}
    </Card>
  );
};

export default ControlBar;
