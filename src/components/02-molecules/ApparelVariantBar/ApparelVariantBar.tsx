import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { ApparelColorTypes } from "@/hooks/useApparelAsset";
import ColorCircle from "@/components/01-atoms/ColorCircle";

type ApparelVariantBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const ApparelVariantBar = (props: ApparelVariantBarPropTypes) => {
  const colorOptions: ApparelColorTypes[] = ["black", "white", "gray", "navy"];

  return (
    <div
      className={clsx(
        "flex gap-3 py-3 pl-3 border border-gray-300 bg-white rounded-lg",
        props.className
      )}
    >
      <Popover className="relative">
        <Popover.Button>
          <ColorCircle />
        </Popover.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute z-10 bg-white px-4 py-3 rounded-lg shadow-lg ring-1 ring-black/5 w-52">
            <p className="mb-4 text-sm font-normal text-gray-500">
              Choose Apparel Color
            </p>

            <div className="flex gap-2">
              {colorOptions.map((color, index) => (
                <button key={`${color}-${index}`} type="button">
                  <ColorCircle color={color} />
                </button>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default ApparelVariantBar;
