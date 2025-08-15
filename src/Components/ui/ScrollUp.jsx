import { ArrowUp } from "lucide-react";

const ScrollUp = () => {
  return (
    <a
      href="#"
      className="fixed bottom-8 right-8 rounded-full p-2 bg-white/20 backdrop-blur border border-white/10 z-[999]"
    >
      <ArrowUp size={18} />
    </a>
  );
};

export default ScrollUp;
