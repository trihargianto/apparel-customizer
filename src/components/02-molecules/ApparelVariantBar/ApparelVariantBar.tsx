import clsx from "clsx";
import Button from "../../01-atoms/Button";

type ApparelVariantBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const ApparelVariantBar = (props: ApparelVariantBarPropTypes) => {
  return (
    <div
      className={clsx(
        "flex gap-3 py-3 pl-3 border border-gray-300 bg-white rounded-lg",
        props.className
      )}
    >
      <Button variant="naked" size="sm">
        <span className="rounded-full bg-blue-900 w-7 h-7 inline-block" />
      </Button>
    </div>
  );
};

export default ApparelVariantBar;
