import { SocialIcon } from "react-social-icons";
import { Tooltip } from "react-tooltip";

export default function DevsModal({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //onCLick{() => window.open(url, "_blank")}

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] xl:w-[40vw] w-[80vw] h-[60vh] max-h-[60vh] flex backdrop-brightness-50">
        <div className="text-black flex-1 p-[15px] text-[25px] font-bold">
          <main className="text-[25px] font-bold px-[10px]">
            <p className="mb-[20px] border-b-[2px] border-gray-400/50 p-[5px] flex items-center gap-[10px]">
              Creadores
            </p>
            <section className="flex flex-col text-[20px] gap-[5px] font-semibold">
              <Tooltip id="tooltip" />
              <CreadoresSection
                creator="Joaquin Gudiño"
                github="https://github.com/GudinoJoaquin"
                ariaLabel="Joaquin Gudiño's Github"
                tooltipContent="Gudiño's Github"
              />
              <CreadoresSection
                creator="Facundo Cientofante"
                github="https://github.com/FacundoCien"
                ariaLabel="Facundo Cientofante's Github"
                tooltipContent="Cientofante's Github"
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
