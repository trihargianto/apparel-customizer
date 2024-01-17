import type { EmojiClickData } from "emoji-picker-react";

import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { useFabric } from "@/hooks/useFabric";

import Card from "@/components/01-atoms/Card";
import Button from "@/components/01-atoms/Button";
import Input from "@/components/01-atoms/Input";
import ShapePicker, { ShapeTypes } from "@/components/02-molecules/ShapePicker";

type ApparelAssetPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const ApparelAssetsBar = ({ className }: ApparelAssetPropTypes) => {
  const [inputValue, setInputValue] = useState("");

  const {
    addTextToCanvas,
    addImageToCanvas,
    addCircleToCanvas,
    addRectangleToCanvas,
    addLineToCanvas,
  } = useFabric();

  const tabs = ["Text", "Emoji", "Shape", "Image"];

  function onAddTextClick() {
    addTextToCanvas(inputValue);
    setInputValue("");
  }

  function onEmojiClick(selectedEmojiObject: EmojiClickData) {
    addImageToCanvas(selectedEmojiObject.imageUrl);
  }

  function onShapeClick(shape: ShapeTypes) {
    switch (shape) {
      case "circle":
        addCircleToCanvas();
        break;
      case "line":
        addLineToCanvas();
        break;
      case "rectangle":
        addRectangleToCanvas();
        break;
      default:
        throw new Error("`shape` is not defined");
    }
  }

  function handleInputFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const result = e?.target?.result;

        if (result) {
          // @ts-ignore-next
          addImageToCanvas(result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((tab, index) => (
            <Tab
              className={({ selected }) =>
                clsx(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                  selected
                    ? "bg-white text-gray-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                )
              }
              key={`${tab}-${index}`}
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="my-3">
          {/* Text Menu Content */}
          <Tab.Panel>
            <Card isBordered={false}>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your text here..."
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                />
                <Button className="min-w-fit" onClick={onAddTextClick}>
                  + Add Text
                </Button>
              </div>
            </Card>
          </Tab.Panel>

          {/* Emoji Menu Content */}
          <Tab.Panel unmount={false}>
            <Card isBordered={false}>
              <EmojiPicker
                width="100%"
                lazyLoadEmojis
                previewConfig={{
                  defaultCaption: "Choose your emoji",
                }}
                onEmojiClick={onEmojiClick}
              />
            </Card>
          </Tab.Panel>

          {/* Shape Menu Content */}
          <Tab.Panel>
            <Card isBordered={false}>
              <div className="w-[200px] p-2">
                <ShapePicker onClick={onShapeClick} />
              </div>
            </Card>
          </Tab.Panel>

          {/* Image Menu Content */}
          <Tab.Panel>
            <Card isBordered={false}>
              <div className="flex w-full items-center justify-center">
                <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500">PNG or JPG</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={handleInputFileChange}
                  />
                </label>
              </div>
            </Card>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ApparelAssetsBar;
