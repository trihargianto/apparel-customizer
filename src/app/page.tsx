"use client";

import { useContext } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

// Hooks, Context, Constants, etc
import { useApparelAsset } from "@/hooks/useApparelAsset";
import { ApparelContext } from "@/contexts/ApparelContext";
import { IS_CONTROL_BAR_VISIBLE } from "@/constants/config";

// Components
import Button from "@/components/01-atoms/Button";
import ControlBar from "@/components/02-molecules/ControlBar/ControlBar";
import ApparelVariantBar from "@/components/03-organisms/ApparelVariantBar";
import Footer from "@/components/02-molecules/Footer";
import ApparelAssetsBar from "@/components/03-organisms/ApparelAssetBar";

export default function Home() {
  const apparel = useContext(ApparelContext);

  const { ImageComponent } = useApparelAsset(apparel.type, {
    color: apparel.color,
  });

  function onSaveAsImageClick() {
    window.alert("Save as image clicked");
  }

  return (
    <>
      <div className="container mx-auto px-4 lg:px-40 xl:px-64">
        <div className="py-10">
          {IS_CONTROL_BAR_VISIBLE && <ControlBar className="mb-3 lg:mb-10" />}

          <div className="flex flex-wrap">
            <div className="flex w-full items-start justify-center lg:w-1/2 lg:pr-10">
              <ImageComponent />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-600">Assets and Resources</p>

              <ApparelAssetsBar className="mt-3" />

              <p className="mt-5 text-lg text-gray-600 lg:mt-8">
                Change Apparel
              </p>

              <ApparelVariantBar className="mt-3" />

              <div className="mt-6 flex gap-5 lg:mt-8">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onSaveAsImageClick}
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />

                  <span className="ml-2">Save as image</span>
                </Button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
