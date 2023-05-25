// "use client";
import StarIcon from "./icons/StarIcon";

const Year = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex gap-2 items-center">
      <StarIcon className="star-icon" height="16px" width="16px" />
      <span className="text-gradient bg-TEXT_GRADIENT text-SMALL">{date}</span>
    </div>
  );
};

export default Year;
