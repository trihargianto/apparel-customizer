import { useMediaQuery } from "react-responsive";

// Info: The value is based on https://tailwindcss.com/docs/responsive-design
export function useScreenDetect() {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  return {
    isMediumScreen,
    isLargeScreen,
    isXLargeScreen,
  };
}
