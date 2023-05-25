import { theme } from "@/settings/theme";

const BackgroundGrid = () => {
  return (
    <div
      className="fixed overflow-hidden w-[100vw] h-[100vh] pointer-events-none -z-50 bg-BG_BLACK top-0 left-0 bg-GRID bg-repeat bg-fill animate-BG"
      style={!theme.animateBackground ? { animation: "none" } : {}}
    ></div>
  );
};

export default BackgroundGrid;
