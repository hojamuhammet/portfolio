import Container from "./Container";
import { data } from "@/settings/data.settings";
import Year from "./Year";
const Header = () => {
  return (
    <header className="header">
      <Container className="flex justify-between gap-8 font-SPACEGR">
        <span className="text-gradient bg-TEXT_GRADIENT text-SMALL ">
          Hi, it's {data.name}
        </span>
        <Year />
      </Container>
    </header>
  );
};

export default Header;
