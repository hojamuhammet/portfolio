import Image from "next/image";

const BackgroundGrid = () => {
  return (
    <div className="fixed overflow-hidden w-[100vw] h-screen pointer-events-none -z-50 bg-BG_BLACK top-0 left-0 bg-GRID bg-repeat bg-cover"></div>
  );
};

export default BackgroundGrid;
