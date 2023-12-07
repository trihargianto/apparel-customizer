import type { EmojiClickData } from "emoji-picker-react";

import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { useFabric } from "@/hooks/useFabric";

import Card from "@/components/01-atoms/Card";
import ComingSoon from "@/components/02-molecules/ComingSoon";
import Button from "@/components/01-atoms/Button";
import Input from "@/components/01-atoms/Input";

type ApparelAssetPropTypes = {
  className?: string;
  children?: React.ReactNode;
};

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const ApparelAssetsBar = ({ className }: ApparelAssetPropTypes) => {
  const [inputValue, setInputValue] = useState("");

  const { addTextToCanvas, addImageToCanvas } = useFabric();

  const tabs = ["Text", "Emoji", "Image", "Shape"];

  function onAddTextClick() {
    addTextToCanvas(inputValue);
  }

  function onEmojiClick(selectedEmojiObject: EmojiClickData) {
    // addTextToCanvas(selectedEmojiObject.emoji);
    addImageToCanvas(selectedEmojiObject.imageUrl);
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

          {/* Image Menu Content */}
          <Tab.Panel>
            <Card isBordered={false}>
              <ComingSoon />
            </Card>
          </Tab.Panel>

          {/* Shape Menu Content */}
          <Tab.Panel>
            <Card isBordered={false}>
              <ComingSoon />
            </Card>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ApparelAssetsBar;
