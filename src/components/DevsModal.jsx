import { SocialIcon } from "react-social-icons";

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
      <div className="bg-white rounded-[10px] w-[40vw] h-[80vh] max-w-[60vw] max-h-[60vh] flex backdrop-brightness-50">
        <div className="text-black flex-1 p-[15px] text-[25px] font-bold">
          <main className="text-[25px] font-bold px-[10px]">
            <p className="mb-[20px] border-b-[2px] border-gray-400/50 p-[5px]">
              Creadores
            </p>
            <section className="flex justify-between text-[20px] font-semibold">
              <div className="flex flex-col gap-[5px]">
                <p className="">Joaquin Gudiño</p>
                <p className="">Facundo Cientofante</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="hover:scale-[1.25] transition duration-[.3s]">
                  <SocialIcon
                    url="https://github.com/GudinoJoaquin"
                    aria-label="Joaquin Gudiño's Github"
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <div className="hover:scale-[1.25] transition duration-[.3s]">
                  <SocialIcon
                    url="https://github.com/FacundoCien"
                    aria-label="Facundo Cientofante's Github"
                    style={{ width: 30, height: 30 }}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
