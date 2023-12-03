import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import Button from "@/components/01-atoms/Button";
import Card from "@/components/01-atoms/Card";

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
    <Card className={clsx("justify-end", props.className)}>
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
    </Card>
  );
};

export default ControlBar;
