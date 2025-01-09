import { useEffect, useRef } from "react";

const Intro = () => {
  const infoPanelRef = useRef();
  const infoModelRef = useRef();

  useEffect(() => {
    const checkPointerLock = () => {
      if (document.pointerLockElement) {
        infoModelRef.current.style.display = "none";
        infoPanelRef.current.style.height = "7rem";
        infoPanelRef.current.style.width = "6rem";
      }
    };
    document.addEventListener("pointerlockchange", checkPointerLock);
    return () => {
      document.removeEventListener("pointerlockchange", checkPointerLock);
    };
  }, []);

  return (
    <div
      ref={infoPanelRef}
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 z-[200] justify-center flex items-center w-full h-full pb-28">
      <div
        ref={infoModelRef}
        className="p-6 w-full max-w-lg bg-[#809D3C] border-3 border-white rounded-lg"
      >
        <p className="text-base leading-relaxed text-[#3E3232]">
          🌟<span className="font-bold "> Welcome "USERNAME HERE" to your DIGITAL HOME ></span> 🌟
          <br/>
          <br />
          ⚠️ Please remember to press the{" "}
          <span className="p-1 bg-[#ffffff44] border-5 border-white rounded-lg">Esc</span> key
          before starting a TOUR.
          <br />
          🖱️ Feel free to explore and enjoy your Second HOME 
          <br />
        
          
          <span className="text-center block">
            🌟Click <b>"?"</b> on the bottom-left corner to reopen this!🌟
          </span>
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          infoModelRef.current.style.display = "block";
          infoPanelRef.current.style.height = "100%";
          infoPanelRef.current.style.width = "100%";
        }}
        className="p-1 bg-[#ffffff44] absolute bottom-[20px] left-[30px] border-2 border-white rounded-full"
      >
        <img className="w-8 h-8" src="./question.svg" />
      </button>
    </div>
  );
};

export default Intro;
