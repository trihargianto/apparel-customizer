import {
  FaceSmileIcon,
  Square2StackIcon,
  PhotoIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

import Button from "@/components/01-atoms/Button";
import Card from "@/components/01-atoms/Card";

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
    <Card className={props.className}>
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
    </Card>
  );
};

export default ApparelAssetsBar;
