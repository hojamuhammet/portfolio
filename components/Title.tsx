import { IData } from "@/typings/data.types";
import StarIcon from "./icons/StarIcon";
import { theme } from "@/settings/theme.settings";
import { styles } from "@/styles/styles";

interface IProps {
  title: IData["titles"][0];
}
const Title = ({ title }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <p
        className={`text-gradient font-SPACEGR text-TITLE inline`}
        style={{ backgroundImage: styles[`${theme}_GRADIENT`] }}
      >
        {title}
      </p>
      <StarIcon
        width="56px"
        height="56px"
        className="star-bit w-14 h-14 inline"
      />
    </div>
  );
};

export default Title;
