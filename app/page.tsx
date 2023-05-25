import Descriptions from "@/components/Descriptions";
import Header from "@/components/Header";
import Titles from "@/components/Titles";

const Home = () => {
  return (
    <main className="main flex flex-col gap-12">
      <Header />
      <Titles />
      <Descriptions />
    </main>
  );
};

export default Home;
