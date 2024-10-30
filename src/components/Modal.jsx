import idi2o from "../assets/img/idi2o.jpeg";

export default function Modal({ img, alt, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-[60vw] h-[35vw] max-w-[60vw] max-h-[60vw] flex backdrop-brightness-50">
        <div className="flex-1">
          <img
            src={img}
            alt={alt}
            className="h-[100%]"
            onClick={() => window.open(img, "_blank")}
          />
        </div>
        <div className="text-black flex-1 p-[15px]">
          <p className="mb-[20px] text-[1vw] border-b-[2px] border-gray-400/50 p-[5px]">
            Fecha: 01/01/01
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            iste ipsum, doloremque consequuntur blanditiis quod aliquam aut
            fugit at aliquid pariatur. Eum exercitationem doloribus, libero
            repudiandae et soluta vitae magnam.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis perferendis, fuga voluptas adipisci, ducimus minima sint ullam
            deleniti molestias repellendus distinctio temporibus voluptatem?
            Dolore nulla saepe commodi molestiae magni?
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            eligendi et exercitationem quis architecto illo necessitatibus quod
            veritatis. Alias quisquam repudiandae perspiciatis qui ducimus
            inventore nam quidem corporis ullam? Voluptates.
          </p>
        </div>
      </div>
    </div>
  );
}
