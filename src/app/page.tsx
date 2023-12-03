"use client";

import {
  ArrowDownTrayIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { useApparelAsset } from "@/hooks/useApparelAsset";

import Button from "@/components/01-atoms/Button";
import ControlBar from "@/components/02-molecules/ControlBar/ControlBar";
import ApparelVariantBar from "@/components/03-organisms/ApparelVariantBar";
import Footer from "@/components/02-molecules/Footer";
import ApparelAssetsBar from "@/components/03-organisms/ApparelAssetBar";

export default function Home() {
  const { ImageComponent } = useApparelAsset("tshirt", { color: "black" });

  return (
    <>
      <div className="container mx-auto px-4 lg:px-40 xl:px-64">
        <div className="py-3">
          <ControlBar className="mb-3 lg:mb-10" />

          <div className="flex flex-wrap">
            <div className="w-full pr-10 lg:w-1/2">
              <div className="flex justify-center">
                <ImageComponent />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-600">Assets and Resources</p>

              <ApparelAssetsBar className="mt-3" />

              <p className="mt-5 text-lg text-gray-600 lg:mt-8">
                Change Apparel
              </p>

              <ApparelVariantBar className="mt-3" />

              <div className="mt-6 flex gap-5 lg:mt-8">
                <Button variant="secondary" size="md">
                  <ArrowDownTrayIcon className="h-5 w-5" />

                  <span className="ml-2">Save as image</span>
                </Button>

                <Button variant="primary" size="md" disabled>
                  <ShoppingBagIcon className="h-5 w-5" />

                  <span className="ml-2">Order this apparel</span>
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
