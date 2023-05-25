import { IData } from "@/typings/data.types";
import Arrow from "./icons/Arrow";

const Link = ({ type, value }: IData["links"][0]) => {
  return (
    <a
      href={type === "email" ? `mailto:${value}` : value}
      className="link border border-solid border-TEXT_GRADIENT rounded-[8px] flex gap-2 items-center px-4 py-2 hover:animate-pulse"
    >
      <span className="text-gradient font-SPACEGR text-MID bg-TEXT_GRADIENT font-bold">
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
    </a>
  );
};

export default Link;
