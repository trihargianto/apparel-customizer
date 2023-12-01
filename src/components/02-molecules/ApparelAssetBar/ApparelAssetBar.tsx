import {
  FaceSmileIcon,
  Square2StackIcon,
  PhotoIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "../../01-atoms/Button";

type ApparelAssetPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

type ApparelAssetButtonTypes = {
  component?: any;
  isDisabled?: boolean;
}[];

const ApparelAssetsBar = (props: ApparelAssetPropTypes) => {
  const buttonIcons: ApparelAssetButtonTypes = [
    {
      component: FaceSmileIcon,
    },
    {
      component: Square2StackIcon,
    },
    {
      component: PhotoIcon,
    },
    {
      component: DocumentTextIcon,
    },
  ];

  return (
    <div
      className={clsx(
        "flex gap-2 py-3 pl-3 bg-white border border-gray-300 rounded-lg",
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
          <buttonIcon.component className="w-6 h-6" />
        </Button>
      ))}
    </div>
  );
};

export default ApparelAssetsBar;
