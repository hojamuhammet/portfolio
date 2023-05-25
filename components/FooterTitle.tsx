import { data } from "@/settings/data.settings";
import Container from "./Container";

const FooterTitle = () => {
  return (
    <div>
      <Container className="flex items-center">
        <h2 className="text-gradient font-SPACEGR bg-TEXT_GRADIENT font-bold text-TITLE">
          {data.footerTitle}
        </h2>
      </Container>
    </div>
  );
};

export default FooterTitle;
