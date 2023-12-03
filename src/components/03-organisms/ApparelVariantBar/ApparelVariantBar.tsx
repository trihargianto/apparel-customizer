import { Popover, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

import { ApparelColorTypes } from "@/hooks/useApparelAsset";

import Card from "@/components/01-atoms/Card";
import ColorCircle from "@/components/01-atoms/ColorCircle";
import Button from "@/components/01-atoms/Button";

type ApparelVariantBarPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const ApparelVariantBar = (props: ApparelVariantBarPropTypes) => {
  const colorOptions: ApparelColorTypes[] = ["black", "white", "gray", "navy"];

  function onApparelClick() {
    window.alert("onApparelClick executed");
  }

  function onColorCircleClick() {
    window.alert("onColorCircleClick executed");
  }

  return (
    <Card className={props.className}>
      <div className="flex gap-3">
        <Popover className="relative">
          <Popover.Button>
            <Button variant="secondary" as="a">
              <ColorCircle size="sm" className="mr-2" /> Color
            </Button>
          </Popover.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 w-52 rounded-lg bg-white px-4 py-3 shadow-lg ring-1 ring-black/5">
              <p className="mb-4 text-sm font-normal text-gray-500">
                Choose one
              </p>

              <div className="flex gap-2">
                {colorOptions.map((color, index) => (
                  <button
                    key={`${color}-${index}`}
                    type="button"
                    onClick={onColorCircleClick}
                  >
                    <ColorCircle color={color} />
                  </button>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Popover className="relative">
          <Popover.Button>
            <Button variant="secondary" as="a">
              Apparel Type
            </Button>
          </Popover.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 w-52 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/5">
              <p className="px-4 py-3 text-sm font-normal text-gray-500">
                Choose one
              </p>

              <div>
                {["Tshirt", "Hoodie"].map((item, index) => {
                  const isActive = item === "Tshirt";

                  return (
                    <button
                      key={`${item}-${index}`}
                      type="button"
                      className={clsx(
                        "flex w-full justify-between bg-white px-4 py-2 text-left hover:bg-slate-100",
                        isActive ? "bg-slate-100" : "bg-white",
                      )}
                      onClick={onApparelClick}
                    >
                      <span>{item}</span>
                      {isActive && <CheckCircleIcon width={24} height={24} />}
                    </button>
                  );
                })}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </Card>
  );
};

export default ApparelVariantBar;
