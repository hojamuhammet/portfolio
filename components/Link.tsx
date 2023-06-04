import { IData } from "@/typings/data.types";
import Arrow from "./icons/Arrow";

const Link = ({ type, value }: IData["links"][0]) => {
  return (
    <a
      href={type === "email" ? `mailto:${value}` : value}
      className="link relative border border-solid border-TEXT_GRADIENT overflow-hidden rounded-[8px] flex gap-2 items-center px-4 py-2 group hover:animate-pulse transition-all max-sm:w-full max-sm:justify-center"
    >
      <span className="text-gradient font-SPACEGR text-MID bg-TEXT_GRADIENT z-10 font-bold group-hover:text-black transition-all">
        {type === "email"
          ? "Email"
          : type === "instagram"
          ? "Instagram"
          : type === "linkedin"
          ? "LinkedIn"
          : type === "behance"
          ? "Behance"
          : type === "pinterest"
          ? "Pinterest"
          : type === "squarelogic"
          ? "SquareLogic"
          : null}
      </span>
      <Arrow width="18px" height="18px" className="w-[18px] h-[18px]" />
      <div className="w-full h-full bg-[#ffffff44] absolute top-full group-hover:top-0 left-0 transition-all -z-10"></div>
    </a>
  );
};

export default Link;
