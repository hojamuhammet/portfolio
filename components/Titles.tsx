import { data } from "@/settings/data.settings";
import Container from "./Container";
import { v4 } from "uuid";
import Title from "./Title";
const Titles = () => {
  return (
    <div className="titles">
      <Container className="pt-20">
        <div className="pl-[5vw] inline">
          {data.titles.map((title) => (
            <Title title={title} key={v4()} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Titles;
