import Descriptions from "@/components/Descriptions";
import FooterTitle from "@/components/FooterTitle";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Titles from "@/components/Titles";

const Home = () => {
  return (
    <main className="main flex flex-col gap-[5vh] py-20 max-h-screen overflow-hidden">
      <Header />
      <div className="flex flex-col gap-[3vh]">
        <Titles />
        <Descriptions />
      </div>
      <FooterTitle />
      <Links />
    </main>
  );
};

export default Home;
