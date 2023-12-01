import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import Button from "../../01-atoms/Button";

type ControlBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

type ControlBarButtonTypes = {
  component?: any;
  isDisabled?: boolean;
}[];

const ControlBar = (props: ControlBarPropTypes) => {
  const buttonIcons: ControlBarButtonTypes = [
    {
      component: ArrowUturnLeftIcon,
      isDisabled: true,
    },
    {
      component: ArrowUturnRightIcon,
      isDisabled: true,
    },
    {
      component: TrashIcon,
    },
  ];

  return (
    <div
      className={clsx(
        "flex gap-3 p-3 bg-white border border-gray-300 rounded-lg justify-end",
        props.className
      )}
    >
      {buttonIcons.map((buttonIcon, index) => (
        <Button
          key={`button-icon-${index}`}
          variant="naked"
          size="sm"
          disabled={buttonIcon.isDisabled}
        >
          <buttonIcon.component className="w-5 h-5" />
        </Button>
      ))}
    </div>
  );
};

export default ControlBar;
