import { useCallback } from "react";
import Image from "next/image";

type ApparelTypes = "tshirt" | "hoodie";

export type ApparelColorTypes = "black" | "white" | "gray" | "navy";

type ApparelSideTypes = "front" | "back";

type ApparelGenderTypes = "male" | "female";

type ApparelOptionTypes = {
  color?: ApparelColorTypes;
  side?: ApparelSideTypes;
  gender?: ApparelGenderTypes;
};

export const useApparelAsset = (
  apparel: ApparelTypes,
  options?: ApparelOptionTypes
) => {
  const { color = "black", gender = "male", side = "front" } = options ?? {};

  const ImageComponent = () => (
    <Image
      src={`/apparels/${apparel}/${apparel}-${gender}-${color}-${side}.png`}
      alt="Tshirt Male Front"
      width={530}
      height={630}
    />
  );

  return { ImageComponent };
};
