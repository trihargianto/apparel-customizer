import Image from "next/image";

const Logo = () => {
  return (
    <h1 className="font-bold text-xl">
      <Image
        src="/icons/emoji-socks.png"
        alt="Logo icon"
        width={24}
        height={24}
        className="inline-block mr-1.5"
      />{" "}
      Apparel <span className="text-gray-400">Customizer</span>
    </h1>
  );
};

export default Logo;
