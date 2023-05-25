import { data } from "@/settings/data.settings";
import Link from "./Link";
import Container from "./Container";

const Links = () => {
  return (
    <div>
      <Container className="links flex items-center flex-wrap flex-grow-0 gap-6 justify-center">
        {data.links.map((link) => (
          <Link type={link.type} value={link.value} />
        ))}
      </Container>
    </div>
  );
};

export default Links;
