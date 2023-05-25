import { data } from "@/settings/data.settings";
import Container from "./Container";
import { styles } from "@/styles/styles";
import { theme } from "@/settings/theme";
const Titles = () => {
  return (
    <div className="titles">
      <Container className="mt-8">
        <p
          className="text-gradient font-SPACEGR text-TITLE font-bold"
          style={{ backgroundImage: styles[`${theme.color}_GRADIENT`] }}
        >
          <span className="mr-[5vw]"></span>
          {data.title}
        </p>
      </Container>
    </div>
  );
};

export default Titles;
